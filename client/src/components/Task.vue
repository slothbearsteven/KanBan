<template>
  <div class="task">
    <li>
      <span data-toggle="modal" data-target="#exampleModal">{{taskProp.title}}</span>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Comments</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <comment v-for="comment in comments" :commentProp="comment" :key="comment._id" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <span class="badge badge-danger" @click="deleteTask(taskProp)">X</span>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Change Lists</button>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <span
            v-for="list in lists"
            :key="list._id"
            class="dropdown-item"
            @click="moveTask(list._id)"
          >{{list.title}}</span>
        </div>
      </div>
    </li>
  </div>
</template>


<script>
import Comment from "./Comment";
export default {
  name: "task",
  data() {
    return {};
  },
  props: ["taskProp"],
  computed: {
    user() {
      return this.$store.state.user;
    },
    lists() {
      return this.$store.state.lists;
    },
    board() {
      return this.$store.state.activeBoard;
    },

    comments() {
      return this.$store.state.comments[this.taskProp._id] || [];
    }
  },
  methods: {
    deleteTask() {
      let task = {
        title: this.taskProp.title,
        authorId: this.user._id,
        listId: this.taskProp.listId._id,
        taskId: this.taskProp._id
      };
      this.$store.dispatch("deleteTask", task);
    },

    moveTask(newListId) {
      // console.log(task, newListId);
      let payload = {
        task: this.taskProp,
        newListId: newListId,
        oldList: this.taskProp.listId
      };
      this.$store.dispatch("moveTask", payload);
    }
  },
  components: { Comment },
  mounted() {
    let taskId = this.taskProp._id;
    this.$store.dispatch("getComments", taskId);
  }
};
</script>


<style scoped>
/* .task {
  padding-left: 15px;
} */
</style>