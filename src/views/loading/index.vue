<template>
  <div class="pages">
    <div>
      <h4>不那么花里胡哨的单调的加载效果</h4>
      <el-button @click="showLoadingB( )" size="mini">loading0</el-button>
      <el-button @click="showLoadingB(1)" size="mini">loading1</el-button>
      <el-button @click="showLoadingB(2)" size="mini">loading2</el-button>
      <el-button @click="showLoadingB(3)" size="mini">loading3</el-button>
      <el-button @click="showLoadingB(4)" size="mini">loading4</el-button>
      <el-button @click="showLoadingB(5)" size="mini">loading5</el-button>
      <el-button @click="showLoadingB(6)" size="mini">loading6</el-button>
      <el-button @click="showLoadingB(7)" size="mini">loading7</el-button>
      <el-button @click="showLoadingB(8)" size="mini">loading8</el-button>
      <el-button @click="showLoadingB(9)" size="mini">loading9</el-button>
    </div>
    <!-- <div>
      <h4>花里胡哨的不单调的加载效果</h4>
      <el-button @click="showLoadingA( )" size="mini">loading0</el-button>
    </div> -->
    <div>
      <h4>有点花里胡哨的多色加载效果</h4>
      <el-button @click="showLoading(1)" size="mini">dots loading</el-button>
      <el-button @click="showLoading(2)" size="mini">gauge loading</el-button>
      <el-button @click="showLoading(3)" size="mini">inner-circles loading</el-button>
      <el-button @click="showLoading(4)" size="mini">plus loading</el-button>
      <el-button @click="showLoading(5)" size="mini">panel loading</el-button>
    </div>
  </div>
</template>

<script>
import { Loading } from 'element-ui'
export default {
  name: 'my-Loading',
  data() {
    return {
    }
  },
  methods: {
    showLoading(type) {
      let loading = this.$baseColorfullLoading(type)
      setTimeout(() => {
        loading.close()
      }, 3000);
    },
    showLoadingA(index) {
      let loading = this.$baseSimpleLoading(index, '', true)
      setTimeout(() => {
        loading.close()
      }, 3000);
    },
    showLoadingB(index, text) {
      let loading = this.$baseLoading(index, text, true)
      setTimeout(() => {
        loading.close()
      }, 3000);
    }
  }
}
</script>