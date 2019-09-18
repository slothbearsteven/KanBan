<template>
  <div class="list-creator">
    <form @submit.prevent="addList()" class="form-group">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Create a List"
          aria-label="Create a List"
          name="list-name"
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
  name: "list-creator",
  data() {
    return {
      title: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    board() {
      return this.$store.state.activeBoard;
    }
  },
  methods: {
    addList() {
      let list = {
        title: this.title,
        boardId: this.board._id,
        authorId: this.user._id
      };
      this.$store.dispatch("addList", list);
      this.list = {};
    }
  },
  components: {}
};
</script>


<style scoped>
.list-creator {
  border: 1px clear red;
}
</style>