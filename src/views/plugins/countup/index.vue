<template>
  <div>
    <countup :endVal='999.99' :options="options"></countup>
    <div>
      <pre class="line-numbers"><code class="language-javascript">function transpose() {this.arr2 = Array.from({length: this.arr1[0].length}, (_v, i) => this.arr1.map(v => v[i]))}</code></pre>
    </div>
    <div>{{arr1}}</div>
    <el-button @click="transpose" size="mini">转置</el-button>
    <el-button @click="reset" size="mini">重置</el-button>
    <div>{{arr2}}</div>
  </div>
</template>
<script>
export default {
  name: 'my-countUp',
  components: {
  },
  props: {
  },
  watch: {
  },
  data() {
    return {
      options: {
        startVal: 0,
        decimals: 2,
        autoplay: false,
        useEasing: true, // 是否使用缓动函数
        separator: ',',// 分隔符
        prefix: '', // 前缀
        suffix: ''  // 后缀
      },
      arr1: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      arr2: []
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    transpose() {
      this.arr2 = Array.from({
        length: this.arr1[0].length
      }, (_v, i) => this.arr1.map(v => v[i]))
    },
    reset() {
      this.arr2 = []
    },
  }
}
</script>
<style lang="scss" scoped>
</style>