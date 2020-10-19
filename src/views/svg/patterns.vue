<template>
  <div>
    <div>
      <svg version='1.1' xmlns="http://www.w3.org/2000/svg" height="300">
        <defs>
          <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="white" />
            <stop offset="100%" stop-color="blue" />
          </linearGradient>
          <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="100%">
            <stop offset="40%" stop-color="red" />
            <stop offset="100%" stop-color="orange" />
          </linearGradient>
          <pattern id="Pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <!-- <rect x="0" y="0" width="50" height="50" fill="skyblue" />
            <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" /> -->
            <!-- <circle cx="15" cy="7.68" r="1" fill='red' />
            <circle cx="35" cy="7.68" r="1" fill='red' />
            <circle cx="5" cy="25" r="1" fill='red' />
            <circle cx="45" cy="25" r="1" fill='red' />
            <circle cx="15" cy="42.32" r="1" fill='red' />
            <circle cx="35" cy="42.32" r="1" fill='red' /> -->
            <!-- <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" /> -->
            <circle cx="25" cy="25" r="1" fill='red' />
            <polyline points="5 25, 35 42.32, 35 7.68, 5 25" stroke="url(#Gradient1)" stroke-linecap="round" storke-linejoin="round" fill='transparent' />
            <polyline points="45 25, 15 7.68, 15 42.32, 45 25" stroke="url(#Gradient2)" stroke-opacity="0.4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6, 3" fill='transparent' />
          </pattern>
        </defs>
        <text x="45%" y="20" font-size="16" text-anchor="middle" stroke="url(#Gradient2)">图一</text>
        <rect fill="url(#Pattern)" stroke="black" x="0" y="0" width="230" height="300"/>
      </svg>
      <svg version='1.1' xmlns="http://www.w3.org/2000/svg" height="300">
        <defs>
          <linearGradient id="Gradient21" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="white" />
            <stop offset="100%" stop-color="blue" />
          </linearGradient>
          <linearGradient id="Gradient22" x1="0" x2="0" y1="0" y2="100%">
            <stop offset="40%" stop-color="red" />
            <stop offset="100%" stop-color="orange" />
          </linearGradient>
          <pattern id="Pattern2" x="0" y="0" width="0.25" height="0.25">
            <circle cx="25" cy="25" r="1" fill='red' />
            <polyline points="5 25, 35 42.32, 35 7.68, 5 25" stroke="url(#Gradient21)" stroke-linecap="round" storke-linejoin="round" fill='transparent' />
            <polyline points="45 25, 15 7.68, 15 42.32, 45 25" stroke="url(#Gradient22)" stroke-opacity="0.4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6, 3" fill='transparent' />
          </pattern>
        </defs>
        <text x="40%" y="20" font-size="16" text-anchor="middle" stroke="url(#Gradient22)">图二</text>
        <rect fill="url(#Pattern2)" stroke="black" x="0" y="0" width="230" height="300"/>
      </svg>
    </div>
<pre class="line-numbers">
  <code class="lang-XML">&lt;svg version='1.1' xmlns="http://www.w3.org/2000/svg" height="200"&gt;
    &lt;defs&gt;
      &lt;linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse"&gt;
        &lt;stop offset="0%" stop-color="white" /&gt;
        &lt;stop offset="100%" stop-color="blue" /&gt;
      &lt;/linearGradient&gt;
      &lt;linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="100%"&gt;
        &lt;stop offset="40%" stop-color="red" /&gt;
        &lt;stop offset="100%" stop-color="orange" /&gt;
      &lt;/linearGradient&gt;
      &lt;!-- pattern 中的 width,height 使用固定宽高时配合patternUnits="userSpaceOnUse"时,随着容器的宽高改变,内容图案会自动填充,而不是使用空白填充;
      在width,height 使用小数时,不能与patternUnits="userSpaceOnUse"配合使用,小数是将容器元素分割成等量的若干分,在宽高变化时, 图案之间的间隔会变大,图案数量不会增加;
      图一,图二使用两种方式的效果
      --&gt;
      &lt;!-- 图一使用的为: 
        &lt;pattern id="Pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse"&gt;
        其他相同
      --&gt;
      &lt;!-- 图二使用的为: --&gt;
      &lt;pattern id="Pattern" x="0" y="0" width=".25" height=".25"&gt;
        &lt;!-- &lt;rect x="0" y="0" width="50" height="50" fill="skyblue" /&gt;
        &lt;rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" /&gt; --&gt;
        &lt;!-- &lt;circle cx="15" cy="7.68" r="1" fill='red' /&gt;
        &lt;circle cx="35" cy="7.68" r="1" fill='red' /&gt;
        &lt;circle cx="5" cy="25" r="1" fill='red' /&gt;
        &lt;circle cx="45" cy="25" r="1" fill='red' /&gt;
        &lt;circle cx="15" cy="42.32" r="1" fill='red' /&gt;
        &lt;circle cx="35" cy="42.32" r="1" fill='red' /&gt; --&gt;
        &lt;!-- &lt;circle cx="25" cy="25" r="20" fill="url(#Gradient1)" /&gt; --&gt;

        &lt;circle cx="25" cy="25" r="1" fill='red' /&gt;
        &lt;polyline points="5 25, 35 42.32, 35 7.68, 5 25" stroke="url(#Gradient1)" stroke-linecap="round" storke-linejoin="round" fill='transparent' /&gt;
        &lt;polyline points="45 25, 15 7.68, 15 42.32, 45 25" stroke="url(#Gradient2)" stroke-opacity="0.4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6, 3" fill='transparent' /&gt;
      &lt;/pattern&gt;
    &lt;/defs&gt;
    &lt;rect fill="url(#Pattern)" stroke="black" x="0" y="0" width="200" height="200"/&gt;
  &lt;/svg&gt;</code>
</pre>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
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
</style>