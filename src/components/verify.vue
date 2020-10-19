<template>
  <div class="verify">
    <vab-verify ref="slideDiv" :w="w" :h="h" :slider-text="text"  @success="handleSuccess" @fail="handleError"></vab-verify>
  </div>
</template>

<script>
import VabVerify from "zx-verify";
import "zx-verify/dist/zx-verify.css";
export default {
  components: {
    VabVerify
  },
  props: {
    text: {
      type: String,
      default: '向右滑动'
    },
    w: {
      type: Number,
      default: 350
    },
    h: {
      type: Number,
      default: 175
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleSuccess() {
      this.$message.success('验证通过')
    },
    handleError(err) {
      this.$message.error('验证失败,请重试')
    }
  }
}
</script>
<style lang="scss" scoped>
.verify {
  display: inline-block;
  padding: 15px;
}
</style>
