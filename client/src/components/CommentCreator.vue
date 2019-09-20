<template>
  <div class="comment-creator">
    <form @submit.prevent="addComment()" class="form-group">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Create a Comment"
          aria-label="Create a Comment"
          name="comment-name"
          v-model="body"
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
  name: "comment-creator",
  data() {
    return {
      body: ""
    };
  },
  props: ["taskProp"],

  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    addComment() {
      let comment = {
        body: this.body,
        authorId: this.user._id,
        taskId: this.taskProp._id
        //taskId:
      };
      this.$store.dispatch("addComment", comment);
      this.comment = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>