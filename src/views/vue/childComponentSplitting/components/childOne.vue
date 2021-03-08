<template>
  <div>
    {{timeConsumingTask()}}
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
  methods: {
    timeConsumingTask() {
      const n = 100000;
      let result = 0;
      for (let i = 0; i < n; i++) {
        result += Math.sqrt(Math.cos(Math.sin(42)));
      }
      return result;
    },
  },
};
</script>
/** 
优化前: 示例通过一个 timeConsumingTask 函数模拟了一个耗时的任务，
且这个函数在每次渲染的时候都会执行一次，
所以每次组件的渲染都会消耗较长的时间执行 JavaScript。

而优化后: 的方式是把这个耗时任务 timeConsumingTask 函数的执行逻辑用子组件 childOne 封装了，
由于 Vue 的更新是组件粒度的，
虽然每一帧都通过数据修改导致了父组件的重新渲染，
但是 childOne 却不会重新渲染，
因为它的内部也没有任何响应式数据的变化。
所以优化后的组件不会在每次渲染都执行耗时任务，
自然执行的 JavaScript 时间就变少了。
不过针对这个优化的方式我提出了一些不同的看法，详情可以点开这个 issue，
我认为这个场景下的优化用计算属性要比子组件拆分要好。
得益于计算属性自身缓存特性，
耗时的逻辑也只会在第一次渲染的时候执行，而且使用计算属性也没有额外渲染子组件的开销。

作者：黄轶
链接：https://juejin.cn/post/6922641008106668045
*/

/** 
我们都知道 Vue 对于响应式属性的更新，只会精确更新依赖收集的当前组件，而不会递归的去更新子组件，这也是它性能强大的原因之一。
Vue的更新粒度
那么，Vue 这种精确的更新是怎么做的呢？
其实每个组件都有自己的渲染 watcher，它掌管了当前组件的视图更新，但是并不会掌管 ChildComponent 的更新。

如果我们把 msg 这个响应式元素通过props传给 ChildComponent,
其实，msg 在传给子组件的时候，会被保存在子组件实例的 _props 上，并且被定义成了响应式属性，而子组件的模板中对于 msg 的访问其实是被代理到 _props.msg 上去的，
所以自然也能精确的收集到依赖，只要 ChildComponent 在模板里也读取了这个属性。
原文链接：https://blog.csdn.net/WU5229485/article/details/106658465
*/
<style scoped lang="scss">
</style>