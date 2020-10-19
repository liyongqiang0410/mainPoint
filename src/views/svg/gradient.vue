<template>
  <div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
        <defs>
          <!-- gradientUnits="userSpaceOnUse" 在没有高度或者宽的元素,渐变失效时使用 -->
          <!-- x1 === x2 && y1 !== y2 垂直渐变 x1 !== x2 && y1 === y2 水平渐变 -->
          <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFFF00" />
            <stop offset="50%" stop-color="pink" />
            <stop offset="100%" stop-color="#FF0000" />
          </linearGradient>
        </defs>
        <line x1="25" x2="275" y1="50" y2="50" stroke="url(#grad1)" stroke-width="10" />
        <text x="25" y="70" text-anchor="start" stroke="url(#grad1)">线性渐变,线性渐变,线性渐变,线性渐</text>
        <ellipse cx="150" cy="200" rx="85" ry="55" fill="url(#grad1)" />
      </svg>
    </div>
<pre class="line-numbers">
  <code class="lang-XML">&lt;svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"&gt;
    &lt;defs&gt;
      &lt;!-- gradientUnits="userSpaceOnUse" 在没有高度或者宽的元素,渐变失效时使用 --&gt;
      &lt;!-- x1 === x2 && y1 !== y2 垂直渐变 x1 !== x2 && y1 === y2 水平渐变 --&gt;
      &lt;linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%" gradientUnits="userSpaceOnUse"&gt;
        &lt;stop offset="0%" stop-color="#FFFF00" /&gt;
        &lt;stop offset="50%" stop-color="pink" /&gt;
        &lt;stop offset="100%" stop-color="#FF0000" /&gt;
      &lt;/linearGradient&gt;
    &lt;/defs&gt;
    &lt;line x1="25" x2="275" y1="50" y2="50" stroke="url(#grad1)" stroke-width="10" /&gt;
    &lt;text x="25" y="70" text-anchor="start" stroke="url(#grad1)"&gt;线性渐变,线性渐变,线性渐变,线性渐&lt;/text&gt;
    &lt;ellipse cx="150" cy="200" rx="85" ry="55" fill="url(#grad1)" /&gt;
  &lt;/svg&gt;</code>
</pre>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" version='1.1' width='300' height="300">
        <defs>
          <!-- spreadMethod属性:pad 渐变之外的区域使用100%时的颜色进行填充
          reflect: 渐变之外的区域使用渐变颜色往返填充
          repeat: 渐变之外的区域使用渐变颜色反复填充
          -->
          <radialGradient id="radial1" cx="0.5" cy="0.5" r="0.4" fx='0.7' fy="0.7" spreadMethod="pad">
            <stop offset="0%" stop-color="#FFFF00" />
            <stop offset="50%" stop-color="pink" />
            <stop offset="100%" stop-color="#FF0000" stop-opacity="0.8" />
          </radialGradient>
          <radialGradient id="radial2" cx="0.25" cy="0.25" r="0.5" fx='0.2' fy="0.7" spreadMethod="reflect">
            <stop offset="0%" stop-color="#FFFF00" />
            <stop offset="50%" stop-color="pink" />
            <stop offset="100%" stop-color="#FF0000" stop-opacity="0.8" />
          </radialGradient>
          <radialGradient id="radial3" cx="0.75" cy="0.75" r="0.5" fx='0.3' fy="0.7" spreadMethod="repeat">
            <stop offset="0%" stop-color="#FFFF00" />
            <stop offset="50%" stop-color="pink" />
            <stop offset="100%" stop-color="#FF0000" stop-opacity="0.8" />
          </radialGradient>
        </defs>
        <circle cx='50' cy="50" r="40" fill="url(#radial1)" />
        <circle cx='150' cy="50" r="40" fill="url(#radial2)" />
        <circle cx='250' cy="50" r="40" fill="url(#radial3)" />
        <rect x='10' y="110" width="80" height='80' fill="url(#radial1)" />
        <rect x='110' y="110" width="80" height='80' fill="url(#radial2)" />
        <rect x='210' y="110" width="80" height='80' fill="url(#radial3)" />
      </svg>
    </div>
<pre class="line-numbers">
  <code class="lang-XML">&lt;svg xmlns="http://www.w3.org/2000/svg" version='1.1' width='300' height="300"&gt;
    &lt;defs&gt;
      &lt;!-- spreadMethod属性:pad 渐变之外的区域使用100%时的颜色进行填充
      reflect: 渐变之外的区域使用渐变颜色往返填充
      repeat: 渐变之外的区域使用渐变颜色反复填充
      --&gt;
      &lt;radialGradient id="radial1" cx="0.5" cy="0.5" r="0.4" fx='0.7' fy="0.7" spreadMethod="pad"&gt;
        &lt;stop offset="0%" stop-color="#FFFF00" /&gt;
        &lt;stop offset="50%" stop-color="pink" /&gt;
        &lt;stop offset="100%" stop-color="#FF0000" stop-opacity="0.8" /&gt;
      &lt;/radialGradient&gt;
      &lt;radialGradient id="radial2" cx="0.25" cy="0.25" r="0.5" fx='0.2' fy="0.7" spreadMethod="reflect"&gt;
        &lt;stop offset="0%" stop-color="#FFFF00" /&gt;
        &lt;stop offset="50%" stop-color="pink" /&gt;
        &lt;stop offset="100%" stop-color="#FF0000" stop-opacity="0.8" /&gt;
      &lt;/radialGradient&gt;
      &lt;radialGradient id="radial3" cx="0.75" cy="0.75" r="0.5" fx='0.3' fy="0.7" spreadMethod="repeat"&gt;
        &lt;stop offset="0%" stop-color="#FFFF00" /&gt;
        &lt;stop offset="50%" stop-color="pink" /&gt;
        &lt;stop offset="100%" stop-color="#FF0000" stop-opacity="0.8" /&gt;
      &lt;/radialGradient&gt;
    &lt;/defs&gt;
    &lt;circle cx='50' cy="50" r="40" fill="url(#radial1)" /&gt;
    &lt;circle cx='150' cy="50" r="40" fill="url(#radial2)" /&gt;
    &lt;circle cx='250' cy="50" r="40" fill="url(#radial3)" /&gt;
    &lt;rect x='10' y="110" width="80" height='80' fill="url(#radial1)" /&gt;
    &lt;rect x='110' y="110" width="80" height='80' fill="url(#radial2)" /&gt;
    &lt;rect x='210' y="110" width="80" height='80' fill="url(#radial3)" /&gt;
  &lt;/svg&gt;</code>
</pre>
    <div>
      <svg class="icon" width="16px" height="16.00px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="icon" gradientUnits="userSpaceOnUse" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop stop-color="red" offset='0%' />
            <stop stop-color="white" offset='100%' />
          </linearGradient>
          <linearGradient id="icon1" gradientUnits="userSpaceOnUse" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop stop-color="white" offset='0%' />
            <stop stop-color="red" offset='100%' />
          </linearGradient>
        </defs>
        <line x1="0" x2="16" y1="8" y2="8" stroke="url(#icon)" stroke-width="1" fill="transparent" />
        <polyline points="12 2, 16 8, 12 14" stroke="url(#icon1)" stroke-width="1" fill="transparent" stroke-linecap='round' stroke-linejoin="round"  />
      </svg>
    </div>
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