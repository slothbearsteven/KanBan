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
          v-model="newList.title"
          required
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
      newList: {}
    };
  },
  computed: {},
  methods: {
    addList() {
      this.$store.dispatch("addList", this.newList);
      this.newList = {};
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