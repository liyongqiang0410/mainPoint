<template>
  <div>
    {{items.length}}
  </div>
</template>

<script>
export default {
  name: "nonReactive",
  props: {},
  components: {},
  data() {
    return {
      items: [],
    };
  },
  created() {},
  mounted() {
    this.createData();
  },
  methods: {
    createData() {
      for (let i = 0; i < 100000; i++) {
        var obj = {
          id: i,
          data: {
            time: new Date().getTime(),
          },
        };
        // Object.defineProperty(obj, "data", {
        //   value: {
        //     time: new Date().getTime(),
        //   },
        //   configurable: false,
        // });
        this.items.push(obj);
      }
    },
  },
};
</script>
/** 
内部提交的数据的时候，会默认把新提交的数据也定义成响应式，
如果数据的子属性是 "对象形式" 还会递归让子属性也变成响应式，
因此当提交数据很多的时候，这个过程就变成了一个耗时过程。

而优化后我们把新提交的数据中的对象属性 data 手动变成了 configurable 为 false，
这样内部在 walk 时通过 Object.keys(obj) 获取对象属性数组会忽略 data，
也就不会为 data 这个属性 defineReactive，由于 data 指向的是一个对象，
这样也就会减少递归响应式的逻辑，相当于减少了这部分的性能损耗。
数据量越大，这种优化的效果就会更明显。
其实类似这种优化的方式还有很多，比如我们在组件中定义的一些数据，也不一定都要在 data 中定义。
有些数据我们并不是用在模板中，也不需要监听它的变化，只是想在组件的上下文中共享这个数据，这个时候我们可以仅仅把这个数据挂载到组件实例 this 上，

作者：黄轶
链接：https://juejin.cn/post/6922641008106668045

*/

<style scoped lang="scss">
</style>