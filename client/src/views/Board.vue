<template>
  <div class="board container">
    <div class="row">
      <div class="col-12 center-text">
        <h3>{{board.title}}</h3>
        <listCreator />
      </div>
    </div>
    <div class="row d-flex justify-content-around">
      <list v-for="list in lists" :listProp="list" :key="list.id" />
    </div>
  </div>
</template>

<script>
import List from "../components/List";
import ListCreator from "../components/ListCreator";

export default {
  name: "board",
  components: {
    List,
    ListCreator
  },
  mounted() {
    let boardId = this.$route.params.boardId;
    this.$store.dispatch("getBoardById", boardId);
    this.$store.dispatch("getLists", boardId);
  },
  data() {
    return {};
  },
  computed: {
    board() {
      return this.$store.state.activeBoard;
      // This does not work on page reload because the boards array is empty in the store
      // this.$store.state.boards.find(b => b._id == this.boardId) || {
      //   title: "Loading..."
      // }
    },
    lists() {
      return this.$store.state.lists;
    }
  },
  props: ["boardId"]
};
</script>
