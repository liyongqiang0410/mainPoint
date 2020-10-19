<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'page401',
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
    swal({
      title: "401!抱歉",
      text: "当前帐号没有操作权限,请联系管理员。",
      icon: "warning",
      closeOnClickOutside: false,
      button: {
        text: '返回',
      },
      value: 5,
    }).then( (value) => {
      this.backPrePage(value)
    })
  },
  beforeDestroy() {
    swal.close()
  },
  methods: {
    backPrePage(value) {
      this.$router.push({path: '/calendar'})
    },
  }
}
</script>

<style>
.swal-overlay {
  background-color: rgba(0, 0, 0, 0.6);
}
.swal-modal {
  background-color: #E6A23C;
  border: 3px solid white;
}
</style>
