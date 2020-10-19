<template>
  <div>
    <div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <g>
          <!-- 直线结束线段 -->
          <line x1="50" y1="50" x2="150" y2="50" stroke="pink" stroke-width="10" stroke-linecap="butt" />
          <!-- 直线结束线段 离线段有空余 -->
          <line x1="50" y1="90" x2="120" y2="90" stroke="pink" stroke-width="10" stroke-linecap="square" />
          <!-- 圆角结束线段 -->
          <line x1="50" y1="130" x2="150" y2="130" stroke="pink" stroke-width="10" stroke-linecap="round" />
        </g>
        <g>
          <!-- 圆角连接线段 -->
          <polyline points="175 75, 225 25, 275 75" stroke="pink" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="transparent" />
          <!-- 直角连接线段 -->
          <polyline points="175 115, 225 65, 275 115" stroke="pink" stroke-width="10" stroke-linecap="butt" stroke-linejoin="miter" fill="transparent" />
          <!-- 水平连接线段 -->
          <polyline points="175 155, 225 105, 275 155" stroke="pink" stroke-width="10" stroke-linecap="square" stroke-linejoin="bevel" fill="transparent" />
        </g>
        <g>
          <!-- 虚线曲线 stoke-dasharray[线宽, 空宽] -->
          <path d="M50 250 Q 75 200 100 250 T 150 250" fill='transparent' stroke="pink" stroke-width="1" stroke-dasharray="10, 5" />
          <path d="M50 250 Q 75 300 100 250 T 150 250" fill='transparent' stroke="pink" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
    </div>
<pre class="line-numbers">
<code class="lang-XML">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="300"&gt;
  &lt;g&gt;
    &lt;!-- 直线结束线段 --&gt;
    &lt;line x1="50" y1="50" x2="150" y2="50"  stroke="pink" stroke-width="10" stroke-linecap="butt" /&gt;
    &lt;!-- 直线结束线段 离线段有空余 --&gt;
    &lt;line x1="50" y1="90" x2="120" y2="90"  stroke="pink" stroke-width="10" stroke-linecap="square" /&gt;
    &lt;!-- 圆角结束线段 --&gt;
    &lt;line x1="50" y1="130" x2="150" y2="130"  stroke="pink" stroke-width="10" stroke-linecap="round" /&gt;
  &lt;/g&gt;
  &lt;g&gt;
    &lt;!-- 圆角连接线段 --&gt;
    &lt;polyline points="175 75, 225 25, 275 75" stroke="pink" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="transparent" /&gt;
    &lt;!-- 直角连接线段 --&gt;
    &lt;polyline points="175 115, 225 65, 275 115" stroke="pink" stroke-width="10" stroke-linecap="butt" stroke-linejoin="miter" fill="transparent" /&gt;
    &lt;!-- 水平连接线段 --&gt;
    &lt;polyline points="175 155, 225 105, 275 155" stroke="pink" stroke-width="10" stroke-linecap="square" stroke-linejoin="bevel" fill="transparent" /&gt;
  &lt;/g&gt;
  &lt;g&gt;
    &lt;!-- 虚线曲线 stoke-dasharray[线宽, 空宽] --&gt;
    &lt;path d="M50 250 Q 75 200 100 250 T 150 250" fill='transparent' stroke="pink" stroke-width="1" stroke-dasharray="10, 5" /&gt;
    &lt;path d="M50 250 Q 75 300 100 250 T 150 250" fill='transparent' stroke="pink" stroke-width="2" stroke-linecap="round" /&gt;
  &lt;/g&gt;
&lt;/svg&gt;</code>
</pre>
  </div>
</template>
<script>
export default {
  name: 'fill-border',
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