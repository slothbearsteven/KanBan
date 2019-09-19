<template>
  <div class="task">
    <li>
      {{taskProp.title}}
      <span class="badge badge-danger" @click="deleteTask(taskProp)">X</span>
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
    }
    // We need to pass this list's listId into the state delete method
    // deleteList(list) {
    //   this.$store.dispatch("deleteList", list);
    // }
  },
  components: {}
};
</script>


<style scoped>
/* .task {
  padding-left: 15px;
} */
</style>