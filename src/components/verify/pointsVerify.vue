<template>
  <div class="verify">
    <div class="pointsVerify"></div>
  </div>
</template>

<script>
import '@/../static/css/verify.css'
export default {
  props: {
    /* 
    mode: 模式 pop: 弹出式; fixed: 固定式;
    defaultNum: 默认显示字数 4
    checkNum: 需校验的字数
    imgWidth: 图片宽
    imgHeight: 图片高
    barHeight: 滑动条高 (滑动条默认与图片等宽)
    */
    mode: {
      type: String,
      default: 'fixed'
    },
    defaultNum: {
      type: Number,
      default: 4
    },
    checkNum: {
      type: Number,
      default: 3
    },
    imgWidth: {
      type: String,
      default: '340px'
    },
    imgHeight: {
      type: String,
      default: '170px'
    },
    barHeight: {
      type: String,
      default: '40px'
    },
    imgUrl: {
      type: String,
      default: 'static/images/'
    }
  },
  data() {
    return {
      imgName: []
    }
  },
  mounted() {
    this.imgName = require.context('@/../' + 'static/images/', false, /.jpg$/).keys();
    $('.pointsVerify').pointsVerify({
      mode: this.mode,
      defaultNum: this.defaultNum,
      checkNum: this.checkNum,
      vSpace: 5,
      imgUrl: this.imgUrl,
      imgName: this.imgName,
      imgSize: {
        width: this.imgWidth,
        height: this.imgHeight
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

<style lang='scss' scoped>
.verify {
  display: inline-block;
  margin: auto;
}
</style>