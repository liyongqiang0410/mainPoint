<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    age: {
      type: Number,
      default: 18,
    },
  },
  components: {},
  data() {
    return {
      name: "burus lee",
    };
  },
  computed: {
    sex: () => "男",
    msg: ({ name, age, sex }) => {
      return name + ": " + sex + ", " + age;
    },
    /* 
      从需求上来说,
      this.sex 执行一次依赖收集就够了,
      把它的 getter 求值结果返回给局部变量 sex,
      后续再次访问 sex 的时候就不会触发 getter,
      也不会走依赖收集的逻辑了,
      性能自然就得到了提升.
    */
  },
  created() {},
  mounted() {},
  methods: {}, //
};
</script>

<style scoped lang="scss">
</style>