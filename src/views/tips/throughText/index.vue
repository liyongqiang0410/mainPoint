<template>
  <div class="throughText">
    <div class="throughText_item">
      <span class="text">♥</span>
      <span class="rod"></span>
    </div>
    <div class="underLine">
      asdfghjklqwertyuiopzxcvbnm
    </div>
  </div>
</template>

<script>
export default {
  name: "throughText",
  props: {},
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.throughText {
  .throughText_item {
    position: relative;
    width: 200px;
    height: 60px;
    line-height: 60px;
    transform-style: preserve-3d;
    .text {
      color: red;
      font-size: 52px;
      display: inline-block;
      width: 100%;
      height: 100%;
      line-height: 100%;
      transform: rotateY(-1deg);
    }
    .rod {
      height: 20px;
      position: absolute;
      top: 18px;
      left: 10%;
      bottom: 0;
      width: 80%;
      background-color: currentColor;
      clip-path: polygon(
        0 40%,
        calc(100% - 12px) 40%,
        calc(100% - 16px) 0%,
        100% 50%,
        calc(100% - 16px) 100%,
        calc(100% - 12px) 60%,
        0 60%
      );
    }
  }
  .underLine {
    text-decoration: underline wavy;
    text-decoration-color: red;
    text-underline-offset: 20%;
  }
}
</style>