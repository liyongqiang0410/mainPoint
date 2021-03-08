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
优化前后的主要区别是用 v-show 指令替代了 v-if 指令来替代组件的显隐，
虽然从表现上看，v-show 和 v-if 类似，都是控制组件的显隐，但内部实现差距还是很大的。

v-if: 指令在编译阶段就会编译成一个三元运算符，条件渲染
当条件 props.value 的值变化的时候，会触发对应的组件更新，对于 v-if 渲染的节点，由于新旧节点 vnode 不一致，在核心 diff 算法比对过程中，
会移除旧的 vnode 节点，创建新的 vnode 节点，那么就会创建新的 Heavy 组件，又会经历 Heavy 组件自身初始化、渲染 vnode、patch 等过程。
因此使用 v-if 每次更新组件都会创建新的 Heavy 子组件，当更新的组件多了，自然就会造成性能压力。

v-show: 当条件 props.value 的值变化的时候，会触发对应的组件更新，对于 v-show 渲染的节点，
由于新旧 vnode 一致，它们只需要一直 patchVnode 即可,在 patchVnode 过程中，内部会对执行 v-show 指令对应的钩子函数 update，
然后它会根据 v-show 指令绑定的值来设置它作用的 DOM 元素的 style.display 的值控制显隐。

v-show 优势
因此相比于 v-if 不断删除和创建函数新的 DOM，v-show 仅仅是在更新现有 DOM 的显隐值，
所以 v-show 的开销要比 v-if 小的多，当其内部 DOM 结构越复杂，性能的差异就会越大。

v-if 优势
但是 v-show 相比于 v-if 的性能优势是在组件的更新阶段，如果仅仅是在初始化阶段，v-if 性能还要高于 v-show，
原因是在于v-if仅仅会渲染一个分支，而 v-show 把所有分支都渲染了，通过 style.display 来控制对应 DOM 的显隐。

作者：黄轶
链接：https://juejin.cn/post/6922641008106668045
 */

<style scoped lang="scss">
</style>