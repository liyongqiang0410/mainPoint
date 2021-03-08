<template>
  <div>
    <div v-if="deffer(9)">defferredFeatures</div>
  </div>
</template>

<script>
import Deffer from "@/mixin/defferredFeatures";
export default {
  name: "",
  props: {},
  components: {},
  mixins: [Deffer()],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
/** 
Defer 的主要思想就是把一个组件的一次渲染拆成多次，它内部维护了 displayPriority 变量，
然后在通过 requestAnimationFrame 在每一帧渲染的时候自增，最多加到 count。
然后使用 Defer mixin 的组件内部就可以通过 v-if="defer(xxx)" 的方式来控制在 displayPriority 增加到 xxx 的时候渲染某些区块了。
当你有渲染耗时的组件，使用 Deferred 做渐进式渲染是不错的注意，它能避免一次 render 由于 JS 执行时间过长导致渲染卡住的现象。

作者：黄轶
链接：https://juejin.cn/post/6922641008106668045
*/

<style scoped lang="scss">
</style>