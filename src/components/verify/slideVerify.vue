<template>
  <div class="virify">
    <div id="slideVerify"></div>
  </div>
</template>
<script>
import '@/../static/css/verify.css'
export default {
  /* 
  vOffset: 校验偏移量(允许存在的误差)
  width: 校验容器宽(滑道长)
  height: 校验容器高(滑道高)
  */
  props: {
    vOffset: {
      type: Number,
      default: 5
    },
    width: {
      type: String,
      default: '340px'
    },
    height: {
      type: String,
      default: '40px'
    }
  },
  mounted() {
    $('#slideVerify').slideVerify({
      type: 1,
      vOffset: this.vOffset,
      barSize: {
        width: this.width,
        height: this.height,
      },
      ready: () => {
      },
      success: () => {
        this.successFn()
      },
      error: () => {
        this.errorFn()
      }
    })
  },
  methods: {
    successFn() {
      this.$emit("verifyResult", true)
    },
    errorFn() {
      this.$emit("verifyResult", false)
    },
  }
}
</script>
<style lang="scss" scoped>
.virify {
  width: 340px;
  margin: auto;
}
</style>
