<template>
  <div>
    <h4>注册</h4>
    <el-button size="mini" @click="registe">注册</el-button>
  </div>
</template>

<script>
export default {
  name: 'my-Registe',
  components: {

  },
  props: {

  },
  watch: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    registe() {
      this.$router.push({path: '/login'})
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
