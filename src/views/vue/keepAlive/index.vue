<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
/**
  我们点击按钮在 Simple page 和 Heavy Page 之间切换，会渲染不同的视图，其中 Heavy Page 的渲染非常耗时

  非优化: 我们每次点击按钮切换路由视图，都会重新渲染一次组件，渲染组件就会经过组件初始化，render、patch 等过程，
  如果组件比较复杂，或者嵌套较深，那么整个渲染耗时就会很长。

  优势: 
  而在使用 KeepAlive 后，被 KeepAlive 包裹的组件在经过第一次渲染后，
  vnode 以及 DOM 都会被缓存起来，然后再下一次再次渲染该组件的时候，直接从缓存中拿到对应的 vnode 和 DOM，然后渲染，
  并不需要再走一次组件初始化，render 和 patch 等一系列流程，减少了 script 的执行时间，性能更好。

  缺点:
  但是使用 KeepAlive 组件并非没有成本，因为它会占用更多的内存去做缓存，这是一种典型的空间换时间优化思想的应用。

  作者：黄轶
  链接：https://juejin.cn/post/6922641008106668045
*/

<style scoped lang="scss">
</style>