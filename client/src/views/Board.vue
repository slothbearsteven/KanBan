<template>
  <div class="board container">
    <div class="row">{{board.title}}</div>
    <div class="row">
      <list v-for="list in lists" :listProp="list" :key="list.id" />
    </div>
  </div>
</template>

<script>
import List from "../components/List";

export default {
  name: "board",

  computed: {
    board() {
      return (
        //FIXME This does not work on page reload because the boards array is empty in the store
        this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading..."
        }
      );
    },
    lists() {
      return this.store.boards;
    }
  },
  props: ["boardId"]
};
</script>
