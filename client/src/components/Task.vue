<template>
  <div class="task">
    <li>
      {{taskProp.title}}
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
  components: {}
};
</script>


<style scoped>
/* .task {
  padding-left: 15px;
} */
</style>