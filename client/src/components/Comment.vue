<template>
  <div class="comment">
    {{commentProp.body}}
    <span class="badge badge-danger" @click="deleteComment()">X</span>
  </div>
</template>


<script>
export default {
  name: "Comment",
  data() {
    return {};
  },
  props: ["commentProp"],
  computed: {},
  methods: {
    deleteComment() {
      let comment = this.commentProp;
      this.$store.dispatch("deleteComment", comment);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>