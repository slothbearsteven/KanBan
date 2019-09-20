import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: {},
    comments: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, board) {
      state.activeBoard = board
    },
    setLists(state, payload) {
      state.lists = payload
    },
    setTasks(state, data) {
      Vue.set(state.tasks, data.listId, data.tasks)
    },
    setComments(state, data) {
      Vue.set(state.comments, data.taskId, data.comments)
    }

  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "boards" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "boards" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion


    //#region -- BOARDS --
    async getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    async getBoardById({ commit, dispatch }, boardId) {
      try {
        let res = await api.get(`boards/${boardId}`)
        commit('setActiveBoard', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    //#endregion


    //#region -- LISTS --
    // NOTE Make sure that the payload is the boardId of that list.
    async getLists({ commit, dispatch }, payload) {
      // console.log(`/boards/${payload}/lists`);
      try {
        let res = await api.get('/boards/' + payload + '/lists')
        commit("setLists", res.data)
      } catch (error) { console.error(error) }
    },

    async addList({ commit, dispatch }, payload) {
      try {
        let res = await api.post('lists', payload)
        dispatch('getLists', payload.boardId)
      } catch (error) { console.error(error) }
    },
    //NOTE Make sure you have the list's _id and the boardId in the payload.
    async deleteList({ commit, dispatch }, payload) {
      try {
        let res = await api.delete('lists/' + payload._id)
        dispatch("getLists", payload.boardId._id) //NOTE: For future reference, call it what it is.
      } catch (error) {

      }
    },

    //#endregion

    //#region -- TASKS --
    async getTasksByList({ commit, dispatch }, listId) {
      try {
        let res = await api.get("lists/" + listId + "/tasks")
        let data = {
          listId,
          tasks: res.data
        }
        commit('setTasks', data)
      } catch (error) { console.error(error) }
    },
    async addTask({ commit, dispatch }, task) {
      try {
        let res = await api.post('tasks', task)
        dispatch('getTasksByList', task.listId)
      } catch (error) { console.error(error) }
    },

    async moveTask({ commit, dispatch }, payload) {
      let task = payload.task
      let newListId = payload.newListId

      try {
        await api.put('tasks/' + task._id, { listId: newListId })
        debugger
        dispatch("getTasksByList", newListId)
        dispatch("getTasksByList", payload.oldList._id)
        // dispatch("getLists", boardId)
      } catch (error) {
        console.error(error)

      }
    },

    async deleteTask({ commit, dispatch }, task) {
      try {
        let res = await api.delete('tasks/' + task.taskId)
        dispatch("getTasksByList", task.listId)
      } catch (error) { console.error(error) }
    },
    //#endregion

    //#region -- COMMENTS --

    async getComments({ commit, dispatch }, taskId) {

      try {
        let res = await api.get("tasks/" + taskId + "/comments")
        let data = {
          taskId,
          comments: res.data
        }
        commit('setComments', data)
      } catch (error) { console.error(error) }
    },
    async addComment({ commit, dispatch }, comment) {
      try {
        let res = await api.post('comments', comment)
        dispatch('getComments', comment.taskId)
      } catch (error) { console.error(error) }
    }

    // async getTasksByList({ commit, dispatch }, listId) {
    //   try {
    //     let res = await api.get("lists/" + listId + "/tasks")
    //     let data = {
    //       listId,
    //       tasks: res.data
    //     }
    //     commit('setTasks', data)
    //   } catch (error) { console.error(error) }
    // },
    //#endregion
  }
})
