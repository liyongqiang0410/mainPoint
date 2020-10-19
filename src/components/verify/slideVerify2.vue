<template>
  <div class="virify2">
    <div id="slideVerify2"></div>
  </div>
</template>
<script>
import '@/../static/css/verify.css'
export default {
  /* 
    vOffset: 允许存在的偏移量(误差范围)
    vSpace: 间隙
    explain: 滑道文字
    mode: 模式 fixed: 固定式; pop: 弹出式;
    imgWidth: 校验容器宽
    imgHeight: 校验容器高
    blockSize: 校验块尺寸
    barHeight: 滑道高
  */
  props: {
    vOffset: {
      type: Number,
      default: 5
    },
    vSpace: {
      type: Number,
      default: 5
    },
    explain: {
      type: String,
      default: '向右滑动完成验证'
    },
    mode: {
      type: String,
      default: 'fixed'
    },
    imgWidth: {
      type: String,
      default: '340px'
    },
    imgHeight: {
      type: String,
      default: '170px'
    },
    blockSize: {
      type: String,
      default: '50px'
    },
    barHeight: {
      type: String,
      default: '40px'
    }
  },
  data() {
    return {
      imgName: []
    }
  },
  mounted() {
    this.imgName = require.context( '@/../' + 'static/images/', false, /.jpg$/).keys();
    $('#slideVerify2').slideVerify({
      type: 2,
      vOffset: this.vOffset,
      vSpace: this.vSpace,
      explain: this.explain,
      mode: this.mode,
      imgUrl: "static/images/",
      imgName: this.imgName,
      imgSize: {
        width: this.imgWidth,
        height: this.imgHeight
      },
      blockSize: {
        width: this.blockSize,
        height: this.blockSize
      },
      barSize: {
        width: this.imgWidth,
        height: this.barHeight
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
.virify2 {
  width: 340px;
  margin: auto;
}
</style>
