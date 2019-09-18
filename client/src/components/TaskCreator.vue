<template>
  <div class="task-creator">
    <form @submit.prevent="addTask()" class="form-group">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Create a Task"
          aria-label="Create a Task"
          name="task-name"
          v-model="title"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "task-creator",
  data() {
    return {
      title: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }

    //FIXME find a way to target a singular list.
    // list _id is located in the list object AND the Task object

    // list() {
    //   return this.$store.state. ;
    // }
  },
  methods: {
    addTask() {
      let task = {
        title: this.title,
        authorId: this.user._id
        //listId:
      };
      this.$store.dispatch("addTask", task);
      this.task = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>