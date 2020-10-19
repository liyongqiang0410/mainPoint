<template>
  <div>
    <h4 class="title">{{son}}{{grandSon}}</h4>
    <pre class="line-numbers">
      <code class="lang-XML"> &lt;!--子组件--&gt;
        &lt;tip-one-child v-bind="$props"&gt;&lt;/tip-one-child&gt;
      </code>
    </pre>
    <tip-one-child v-bind="$props"></tip-one-child>
  </div>
</template>
<script>
import tipOneChild from '@/components/vueTip/tipOneChild.vue'
export default {
  name: '',
  components: {
    tipOneChild
  },
  props: {
    son: {
      type: String,
      default: '子组件'
    },
    grandSon: {
      type: String,
      default: '孙组件'
    },
  },
  watch: {
  },
  data() {
    return {
    }
  },
  mounted(){
    Prism.highlightAll()
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.title {
  text-align: left;
}
</style>