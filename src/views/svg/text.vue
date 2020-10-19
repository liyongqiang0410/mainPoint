<template>
  <div>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="300">
      <!-- 优弧顺圆 -->
      <path id="textPath1" d="M90 150 a60 60 0 1 1 120 0" fill='transparent' stroke='transparent' />
      <!-- 优弧逆圆 -->
      <path id="textPath2" d="M90 150 a60 60 0 1 0 120 0" fill='transparent' stroke='transparent' />
      <circle cx="150" cy="150" r="80" fill="transparent" stroke="black" stroke-opacity="0.3" />
      <!-- <circle cx="90" cy="75" r="2" fill="red" /> -->
      <text dx='3' dy="-5">
        <textPath href="#textPath1" textLength="62%" fill='red'>zongheng group</textPath>
      </text>
      <text dx='50' dy="13">
        <textPath href="#textPath2" textLength="30%" fill='red'>纵横集团</textPath>
      </text>
    </svg>
<pre class="line-numbers">
<code class="lang-XML">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="300"&gt;
  &lt;!-- 优弧顺圆 --&gt;
  &lt;path id="textPath1" d="M90 150 a60 60 0 1 1 120 0" fill='transparent' stroke='transparent' /&gt;
  &lt;!-- 优弧逆圆 --&gt;
  &lt;path id="textPath2" d="M90 150 a60 60 0 1 0 120 0" fill='transparent' stroke='transparent' /&gt;
  &lt;circle cx="150" cy="150" r="80" fill="transparent" stroke="black" stroke-opacity="0.3" /&gt;
  &lt;!-- &lt;circle cx="90" cy="75" r="2" fill="red" /&gt; --&gt;
  &lt;text dx='3' dy="-5"&gt;
    &lt;textPath href="#textPath1" textLength="62%" fill='red'&gt;zongheng group&lt;/textPath&gt;
  &lt;/text&gt;
  &lt;text dx='50' dy="13"&gt;
    &lt;textPath href="#textPath2" textLength="30%" fill='red'&gt;纵横集团&lt;/textPath&gt;
  &lt;/text&gt;
&lt;/svg&gt;</code>
</pre>
  </div>
</template>
<script>
export default {
  name: 'svg-text',
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