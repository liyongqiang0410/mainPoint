<template>
  <div>
    <childOne title="functional components"></childOne>
  </div>
</template>

<script>
import childOne from "./components/childOne";
export default {
  name: "",
  components: { childOne },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
</style>