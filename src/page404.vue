<template>
  <div>

  </div>
</template>

<script>
export default {
  name: '404',
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
      title: "404!资源未找到",
      text: "5s后自动返回上一页",
      icon: "error",
      closeOnClickOutside: false,
      button: {
        text: '返回',
      },
      value: 5,
      timer: 5000
    }).then( (value) => {
      this.backPrePage(value)
    })
  },
  beforeDestroy() {
    swal.close()
  },
  methods: {
    backPrePage(value) {
      const time = setInterval(() => {
        value--
        if(!value) clearInterval(time)
      }, 1000)
      this.$router.go(-1)
    },
  }
}
</script>

<style>
.swal-overlay {
  background-color: rgba(0, 0, 0, 0.6);
}
.swal-modal {
  background-color: rgba(63,255,106,0.69);
  border: 3px solid white;
}
</style>
