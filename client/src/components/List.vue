<template>
  <div class="list col our-border">{{listProp.title}}</div>
</template>


<script>
export default {
  name: "list",
  data() {
    return {};
  },
  props: ["listProp"],
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.list {
  border: 1px solid black;
}
</style>