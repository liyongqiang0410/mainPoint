<template>
  <div class="verify2">
    <div class="codeVerify2"></div>
    <el-button id="check-btn2" size="mini" style="width: 100%;" :type="btnType">确定</el-button>
  </div>
</template>
<script>
import '@/../static/css/verify.css'
export default {
  /* 
    arith: 运算符 0: 加减乘; 1: 乘;
    width: 校验容器宽
    height:校验容器高
    fontSize: 校验数字字体大小
    figure: 范围(数字多大范围内的加减乘)
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
    figure: {
      type: Number,
      default: 100
    },
    btnType: {
      type: String,
      default: ''
    },
  },
  mounted() {
    $('.codeVerify2').codeVerify({
      type: 2,
      arith: 0,
      figure: this.figure,
      width: this.width,
      height: this.height,
      fontSize: this.fontSize,
      codeLength: 6,
      btnId: 'check-btn2',
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
<style lang="scss" scoped>
.verify2 {
  display: inline-block;
  margin: auto;
  #check-btn2 {
    margin-top: 5px;
  }
}
/*
.verify2 .codeVerify2,
.verify2 .codeVerify2 .cerify-code-panel {
  display: flex;
  align-items: baseline;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
.verify2 .codeVerify2 .check-btn2 {
  float: right;
}
.verify2 .codeVerify2 .cerify-code-panel .verify-code-area {
  display: flex;
  align-items: baseline;
  height: 32px;
  line-height: 32px;
  width: 180px !important;
}
.verify2 .codeVerify2 .cerify-code-panel .verify-code-area .verify-input-area {
  height: 32px;
}
.verify2 .codeVerify2 .cerify-code-panel .verify-code-area .verify-input-area .varify-input-code {
  height: 26px;
  border-width: 1px;
  padding: 2px;
  outline: none;
}
.verify2 .codeVerify2 .cerify-code-panel .verify-code-area .verify-change-area {
  display: none;
} */
</style>