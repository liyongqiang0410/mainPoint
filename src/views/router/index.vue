<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'my-Router',
  components: {
  },
  props: {

  },
  watch: {

  },
  data() {
    return {
      pages: {},
      generator: [],
    }
  },
  computed: {
  },
  created() {

  },
  mounted() {
    this.getAllFiles()
  },
  methods: {
    getAllFiles() {
      const files = require.context('@/views', true, /\.vue$/)
      files.keys().forEach(key => {
        this.pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
      })
      this.generatorRouter(this.pages)
      console.log(this.pages)
    },
    generatorRouter(pages) {
      this.generator = [];
      Object.keys(pages).forEach(item => {
        this.generator.push({
          path: `/${pages[item].name.replace(/-/g, '')}`,
          name: `/${pages[item].name.replace(/-/g, '')}`,
          component: "@/views/" + item
        })
      })
      console.log(this.generator)
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
