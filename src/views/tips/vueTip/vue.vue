<template>
  <div>
    <h4 class="title">属性透传</h4>
    <pre class="line-numbers">
      <code class="lang-XML"> &lt;!--页面--&gt;&lt;tip-one 
          :son="'子组件: tipOne'" 
          :grandSon="'孙组件: tipOneChild'" 
          name="tipOne"&gt;
        &lt;/tip-one&gt;</code>
    </pre>
    <tip-one ref="tipOne" :son="'子组件: tipOne'" :grandSon="'孙组件: tipOneChild'" name="tipOne" @hook:mounted="tipOneMounted"></tip-one>
  </div>
</template>
<script>
import tipOne from '@/components/vueTip/tipOne.vue'
export default {
  name: 'my-vueTip',
  components: {
    tipOne,
  },
  data() {
    return {
    }
  },
  mounted() {
    Prism.highlightAll()
    this.$refs.tipOne.$on('hook:beforeCreated', this.tipOneBeforeCreated())
  },
  methods: {
    tipOneBeforeCreated() {
      console.log('beforeCreated');
    },
    tipOneMounted() {
      console.log('mounted');
    },
  }
}
</script>
<style lang="scss" scoped>
.title {
  text-align: left;
}
</style>