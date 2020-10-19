<template>
  <div>
    <div class="verify_item">
      <h4>字符校验</h4>
      <code-verify width='340px' height="40px" fontSize="16px" :codeLength='8' btnType='primary' @verifyResult='verifyResult'>
      </code-verify>
    </div>
    <div class="verify_item">
      <h4>计算校验</h4>
      <code-verify2 width='340px' height="40px" fontSize="16px" :figure="1000" btnType='info' @verifyResult='verifyResult'></code-verify2>
    </div>
    <div class="verify_item">
      <h4>滑动校验</h4>
      <slide-verify :vOffset='5' width="340px" height="40px" @verifyResult='verifyResult'></slide-verify>
    </div>
    <div class="verify_item">
      <h4>图片校验</h4>
      <slide-verify2 mode='fixed' :vOffset='5' :vSpace='5' explain='向右滑动' imgWidth='340px' imgHeight='170px' blockSize='50px' barHeight='40px' @verifyResult='verifyResult'></slide-verify2>
    </div>
    <div class="verify_item">
      <h4>文字校验</h4>
      <points-verify mode='fixed' :defaultNum='4' :checkNum="3" imgWidth="340px" imgHeight="170px" barHeight='40px' @verifyResult='verifyResult'></points-verify>
    </div>
    <!-- <div class="verify_item">
      <h4>指定路径下的文件名</h4>
      <div>{{dirName}}</div>
    </div> -->
    <!-- <div class="verify_item">
      <vab-verify></vab-verify>
    </div> -->
  </div>
</template>

<script>
import codeVerify from '@/components/verify/codeVerify'
import codeVerify2 from '@/components/verify/codeVerify2'
import slideVerify from '@/components/verify/slideVerify'
import slideVerify2 from '@/components/verify/slideVerify2'
import pointsVerify from '@/components/verify/pointsVerify'
import vabVerify from '@/components/verify'
export default {
  name: 'my-Verify',
  components: {
    codeVerify,
    codeVerify2,
    slideVerify,
    slideVerify2,
    pointsVerify,
    vabVerify
  },
  data() {
    return {
      dirName: null
    }
  },
  mounted() {
    this.dirName = require.context('@/../static/images/', false, /.jpg$/).keys();
  },
  methods: {
    verifyResult(res) {
      if(res) {
        this.$message({
          type: 'success',
          message: '验证通过',
          showClose: true,
          duration: 1500
        })
      } else {
        this.$message({
          type: 'error',
          message: '验证失败',
          showClose: true,
          duration: 1500
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.verify_item{
  margin: 15px;
}
</style>