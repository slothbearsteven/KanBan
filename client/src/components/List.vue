<template>
  <div class="list col-3 our-border">{{listProp.title}}</div>
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
.our-border {
  border: 1px solid black;
}
</style>