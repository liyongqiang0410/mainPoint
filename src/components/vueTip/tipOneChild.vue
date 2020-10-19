<template>
  <div>
    <h4 class="title">{{$attrs.son}}{{$attrs.grandSon}}</h4>
    <pre class="line-numbers">
      <code class="lang-XML"> &lt;!--孙组件--&gt;
        &lt;h5 class="title"&gt; &quot;$attrs.son&quot; &nbsp; &quot;$attrs.grandSon&quot; &lt;/h5&gt;
      </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
  },
  watch: {
  },
  data() {
    return {
    }
  },
  mounted() {
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