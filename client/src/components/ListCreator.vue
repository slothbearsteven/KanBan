<template>
  <div class="list-creator">
    <form @submit="addList" class="form-group">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Create a List"
          aria-label="Create a List"
          name="list-name"
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
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.list-creator {
  border: 1px clear red;
}
</style>