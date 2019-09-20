<template>
  <div class="board">
    <div class="container">
      <div class="row">
        <div class="col-12 center-text">
          <h3>{{board.title}}</h3>
          <listCreator />
        </div>
      </div>
    </div>
    <div class="grid-container">
      <list
        v-for="(list, index) in lists"
        :listProp="list"
        :key="list.id"
        v-bind:style="{'grid-column-start': index+1}"
      />
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

<style scoped>
.grid-container {
  overflow-x: auto;
  display: grid;
  grid-template-columns: 400px;
  grid-column-gap: 15px;
}
</style>