<template>
  <div class="childComponentSplitting">
    <!-- <div>{{ timeConsumingTask() }}</div> -->
    <childOne></childOne>
  </div>
</template>

<script>
import childOne from "./components/childOne";
export default {
  name: "childComponentSplitting",
  props: {},
  components: { childOne },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    timeConsumingTask() {
      const n = 100000;
      let result = 0;
      for (let i = 0; i < n; i++) {
        result += Math.sqrt(Math.cos(Math.sin(42)));
      }
      return result;
    },
  },
};
</script>

<style scoped lang="scss">
</style>