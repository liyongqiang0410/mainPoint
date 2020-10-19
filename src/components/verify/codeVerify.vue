<template>
  <div class="verify">
    <div class="codeVerify"></div>
    <el-button id="check-btn" size="mini" style="width: 100%" :type="btnType">确定</el-button>
    <slot></slot>
  </div>
</template>
<script>
import '@/../static/css/verify.css'
export default {
  /* 
    width: 校验容器宽
    height: 校验容器高
    fontSize: 校验码字体大小
    codeLength: 校验码字符长度
  */
  props: {
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '32px'
    },
    fontSize: {
      type: String,
      default: '14px'
    },
    codeLength: {
      type: Number,
      default: 6
    },
    btnType: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
    }
  },
  mounted() {
    $('.codeVerify').codeVerify({
      type: 1,
      width: this.width,
      height: this.height,
      fontSize: this.fontSize,
      codeLength: this.codeLength,
      btnId: 'check-btn',
      ready: () => {
      },
      loadDom: () => {

      },
      success: () => {
        this.successFn()
      },
      error: () => {
        this.errorFn()
      }
    });

  },
  methods: {
    successFn() {
      this.$emit("verifyResult", true)
    },
    errorFn() {
      this.$emit("verifyResult", false)
    },
  },
}
</script>
<style lang='scss' scoped>
.verify {
  display: inline-block;
  margin: auto;
  #check-btn{
    margin-top: 5px;
    // width: 100%;
  }
}
</style>