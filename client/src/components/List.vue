<template>
  <div class="list col border rounded-0">
    <div class="row d-flex justify-content-between">
      <div class="col-auto">
        <h5>{{listProp.title}}</h5>
      </div>
      <h5 class="col text-right">
        <span class="badge badge-danger" @click="deleteList(listProp)">X</span>
      </h5>
    </div>
    <div class="row">
      <div class="col-">
        <ul>
          <task v-for="task in tasks" :taskProp="task" :key="task._id" />
        </ul>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-12">
        <taskCreator />
      </div>
    </div>-->
  </div>
</template>


<script>
import Task from "./Task";
import TaskCreator from "./TaskCreator";
// We need to make a button that deletes that list.
export default {
  name: "list",
  data() {
    return {};
  },
  props: ["listProp"],
  computed: {
    tasks() {
      return this.$store.state.tasks[this.listProp._id];
    }
  },
  methods: {
    // We need to pass this list's listId into the state delete method
    deleteList(list) {
      this.$store.dispatch("deleteList", list);
    }
  },
  components: {
    Task,
    TaskCreator
  },
  mounted() {
    // TODO Where do we get listId from?
    let listId = this.listProp._id;
    this.$store.dispatch("getTasksByList", listId);
  }
};
</script>


<style scoped>
.list {
  max-width: 300px;
  margin-right: 7.5px;
  margin-left: 7.5px;
}
.list h5 {
  padding-top: 10px;
}
</style>