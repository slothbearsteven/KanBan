<template>
  <div class="task">
    <li>{{taskProp.title}}</li>
  </div>
</template>


<script>
export default {
  name: "task",
  data() {
    return {};
  },
  props: ["taskProp"],
  computed: {},
  methods: {
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