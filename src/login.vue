<template>
  <div style="padding: 15px;">
    <el-input v-model="id" clearable style="width: 200px;" v-intnumber @keyup.enter.native="login" placeholder="随便填写"></el-input>
    <el-button @click="login">登陆</el-button>
  </div>
</template>

<script>
import { login } from '@/api/user.js';
export default {
  name: 'my-Login',
  components: {

  },
  props: {

  },
  watch: {

  },
  data() {
    return {
      id: '15083863811',
    }
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    login() {
      login({ Uname: this.id }).then(res => {
        if (res.data.code === 100) {
          this.$message.success('登陆成功')
          this.$store.commit('setuserInfo', this.id)
          this.$router.push({ path: '/index' })
        } else {
          this.$message.error(res.data.message)
        }
      }).catch(err => {
        console.log(err);
      })
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
