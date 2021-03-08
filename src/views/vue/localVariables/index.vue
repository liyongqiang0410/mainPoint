<template>
  <div>
    <div>{{msg}}</div>
    <childOne></childOne>
  </div>
</template>

<script>
import childOne from "./components/childOne";
export default {
  name: "",
  props: {},
  components: { childOne },
  data() {
    return {};
  },
  computed: {
    sex: () => "男",
    msg() {
      return "burus lee" + ":" + this.sex;
    },
    /* 性能缺点
      原因是你每次访问 this.sex 的时候，
      由于 this.sex 是一个响应式对象，
      所以会触发它的 getter，
      进而会执行依赖收集相关逻辑代码。
      类似的逻辑执行多了，像示例这样，
      几百次循环更新几百个组件，
      每个组件触发 computed 重新计算，
      然后又多次执行依赖收集相关逻辑，
      性能自然就下降了。

      作者：黄轶
      链接：https://juejin.cn/post/6922641008106668045
    */
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
</style>