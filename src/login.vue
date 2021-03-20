<!--
 * @Author: your name
 * @Date: 2020-12-25 09:26:30
 * @LastEditTime: 2020-12-25 10:37:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mainPoint\src\login.vue
-->
<template>
  <div style="padding: 15px">
    <el-input
      v-model="id"
      clearable
      style="width: 200px"
      v-intnumber
      @keyup.enter.native="login"
      placeholder="随便填写"
    ></el-input>
    <el-button @click="login">登陆</el-button>
  </div>
</template>

<script>
import { login } from "@/api/user.js";
export default {
  name: "my-Login",
  components: {},
  props: {},
  watch: {},
  data() {
    return {
      id: "15083863811",
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    login() {
      this.$store.commit("setuserInfo", this.id);
      this.$router.push({ path: "/index" });
      return;
      login({ Uname: this.id })
        .then((res) => {
          // console.log(res.data);
          if (res.data.code === 100) {
            this.$message.success("登陆成功");
            this.$store.commit("user/setuserInfo", this.id);
            this.$router.push({ path: "/index" });
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
