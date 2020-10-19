<template>
  <div class="filterUse">
    <div class="filter">
      <h4 class="title">源</h4>
      <div class="filter_item">
        <div class="svg">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="300">
            <path d="M420 400 a180 180 0 1 0 360 0a180 180 0 1 0 -360 0z" fill="#D90000" />
          </svg>
        </div>
        <div class="pre_code">
          <pre class="line-numbers">
<code class="lang-XML">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="300"&gt;
  &lt;path d="M420 400 a180 180 0 1 0 360 0a180 180 0 1 0 -360 0z" fill="#D90000" /&gt;
&lt;/svg&gt;</code>
</pre>
        </div>
      </div>
    </div>
    <div class="filter">
      <h4 class="title">高斯模糊</h4>
      <div class="filter_item">
        <div class="svg">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="300">
            <defs>
              <filter id="filterUseG" filterUnits="userSpaceOnUse" x="0" y="0" width="1200" height="800">
                <feGaussianBlur in="SourceAlpha" stdDeviation="24" result="blur" />
                <feOffser in="blur" dx="24" dy="24" result="offsetBlur"></feOffser>
              </filter>
            </defs>
            <path d="M420 400 a180 180 0 1 0 360 0a180 180 0 1 0 -360 0z" fill="#D90000" filter="url(#filterUseG)" />
          </svg>
        </div>
        <div class="pre_code">
          <pre class="line-numbers">
<code class="lang-XML">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="300"&gt;
  &lt;defs&gt;
    &lt;filter id="filterUseG" filterUnits="userSpaceOnUse" x="0" y="0" width="1200" height="800"&gt;
      &lt;feGaussianBlur in="SourceAlpha" stdDeviation="24" result="blur" /&gt;
      &lt;feOffser in="blur" dx="24" dy="24" result="offsetBlur"&gt;&lt;/feOffser&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;
  &lt;path d="M420 400 a180 180 0 1 0 360 0a180 180 0 1 0 -360 0z" fill="#D90000" filter="url(#filterUseG)" /&gt;
&lt;/svg&gt;</code>
</pre>
        </div>
      </div>
    </div>
    <div class="filter">
      <h4 class="title">添加光源</h4>
      <div class="filter_item">
        <div class="svg">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="300" style="background-color:#aaaaaa">
          <!-- 添加光源后原图像为白色, 不可见, 添加背景色以看清效果 -->
            <defs>
              <filter id="filterUseS" filterUnits="userSpaceOnUse" x="0" y="0" width="1200" height="800">
                <feGaussianBlur in="SourceAlpha" stdDeviation="24" result="blur" />
                <feOffset in="blur" dx="24" dy="24" result="offsetBlur" />
                <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lighting-color="#dddddd" result="specOut">
                  <fePointLight x="600" y="400" z="20000" />
                </feSpecularLighting>
              </filter>
            </defs>
            <path d="M420 400 a180 180 0 1 0 360 0a180 180 0 1 0 -360 0z" fill="#D90000" filter="url(#filterUseS)" />
          </svg>
        </div>
        <div class="pre_code">
<pre class="line-numbers">
<code class="lang-XML">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="300" style="background-color:#aaaaaa"&gt;
  &lt;!-- 添加光源后原图像为白色, 不可见, 添加背景色以看清效果 --&gt;
  &lt;defs&gt;
    &lt;filter id="filterUseS" filterUnits="userSpaceOnUse" x="0" y="0" width="1200" height="800"&gt;
      &lt;feGaussianBlur in="SourceAlpha" stdDeviation="24" result="blur" /&gt;
      &lt;feOffset in="blur" dx="24" dy="24" result="offsetBlur" /&gt;
      &lt;feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lighting-color="#dddddd" result="specOut"&gt;
        &lt;fePointLight x="600" y="400" z="20000" /&gt;
      &lt;/feSpecularLighting&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;
  &lt;path d="M420 400 a180 180 0 1 0 360 0a180 180 0 1 0 -360 0z" fill="#D90000" filter="url(#filterUseS)" /&gt;
&lt;/svg&gt;</code>
</pre>
        </div>
      </div>
    </div>
    <div class="filter">
      <h4 class="title">图像像素组合</h4>
      <div class="filter_item">
        <div class="svg">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="300" >
            <defs>
              <filter id="filterUseC" filterUnits="userSpaceOnUse" x="0" y="0" width="1200" height="800">
                <feGaussianBlur in="SourceAlpha" stdDeviation="24" result="blur" />
                <feOffset in="blur" dx="24" dy="24" result="offsetBlur" />
                <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lighting-color="#dddddd" result="specOut">
                  <fePointLight x="600" y="400" z="20000" />
                </feSpecularLighting>
                <!-- 组合覆盖 -->
                <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                <!-- 组合添加 -->
                <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
              </filter>
            </defs>
            <path d="M420 400 a180 180 0 1 0 360 0a180 180 0 1 0 -360 0z" fill="#D90000" filter="url(#filterUseC)" />
          </svg>
        </div>
        <div class="pre_code">
<pre class="line-numbers">
<code class="lang-XML">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="300" &gt;
  &lt;defs&gt;
    &lt;filter id="filterUseC" filterUnits="userSpaceOnUse" x="0" y="0" width="1200" height="800"&gt;
      &lt;feGaussianBlur in="SourceAlpha" stdDeviation="24" result="blur" /&gt;
      &lt;feOffset in="blur" dx="24" dy="24" result="offsetBlur" /&gt;
      &lt;feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lighting-color="#dddddd" result="specOut"&gt;
        &lt;fePointLight x="600" y="400" z="20000" /&gt;
      &lt;/feSpecularLighting&gt;
      &lt;!-- 组合覆盖 --&gt;
      &lt;feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" /&gt;
      &lt;!-- 组合添加 --&gt;
      &lt;feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" /&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;
  &lt;path d="M420 400 a180 180 0 1 0 360 0a180 180 0 1 0 -360 0z" fill="#D90000" filter="url(#filterUseC)" /&gt;
&lt;/svg&gt;</code>
</pre>
        </div>
      </div>
    </div>
    <div class="filter">
      <h4 class="title">合并</h4>
      <div class="filter_item">
        <div class="svg">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="300">
            <defs>
              <filter id="filterUseM" filterUnits="userSpaceOnUse" x="0" y="0" width="1200" height="800">
                <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" />
                <feOffset in="blur" dx="20" dy="20" result="offsetBlur" />
                <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lighting-color="#ffffff" result="specOut">
                  <fePointLight x="-5000" y="-10000" z="20000" />
                </feSpecularLighting>
                <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
                <!-- 合并模糊与光照效果 -->
                <feMerge>
                  <feMergeNode in="offsetBlur" />
                  <feMergeNode in="litPaint" />
                </feMerge>
              </filter>
            </defs>
            <path d="M420 400 a180 180 0 1 0 360 0a180 180 0 1 0 -360 0z" fill="#D90000" filter="url(#filterUseM)" />
          </svg>
        </div>
        <div class="pre_code">
<pre class="line-numbers">
<code class="lang-XML">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="300"&gt;
  &lt;defs&gt;
    &lt;filter id="filterUseM" filterUnits="userSpaceOnUse" x="0" y="0" width="1200" height="800"&gt;
      &lt;feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" /&gt;
      &lt;feOffset in="blur" dx="20" dy="20" result="offsetBlur" /&gt;
      &lt;feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lighting-color="#ffffff" result="specOut"&gt;
        &lt;fePointLight x="-5000" y="-10000" z="20000" /&gt;
      &lt;/feSpecularLighting&gt;
      &lt;feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" /&gt;
      &lt;feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" /&gt;
      &lt;!-- 合并模糊与光照效果 --&gt;
      &lt;feMerge&gt;
        &lt;feMergeNode in="offsetBlur" /&gt;
        &lt;feMergeNode in="litPaint" /&gt;
      &lt;/feMerge&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;
  &lt;path d="M420 400 a180 180 0 1 0 360 0a180 180 0 1 0 -360 0z" fill="#D90000" filter="url(#filterUseM)" /&gt;
&lt;/svg&gt;</code>
</pre>
        </div>
      </div>
    </div>
    <div class="filter">
      <h4 class="title">圆</h4>
      <div class="filter_item">
        <div class="svg">
          <svg version="1.1" viewBox="0 0 1200 800" width="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="filterUseB" x="0" y="0" width="1200" height="800" filterUnits="userSpaceOnUse">
                <feGaussianBlur in="SourceAlpha" stdDeviation='20' result="blur"></feGaussianBlur>
                <feOffset in="blur" dx="-24" dy="-16" result="blurOff"></feOffset>
                <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="40" lighting-color="#ffffff" result="specOut">
                  <fePointLight x="5000" y="1000" z="20000"></fePointLight>
                </feSpecularLighting>
                <!-- 复合 -->
                <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"></feComposite>
                <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="lightPaint"></feComposite>
                <feMerge>
                  <feMergeNode in="blurOff" />
                  <feMergeNode in="lightPaint" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#filterUseB)">
              <path d="M576 400 a24 24 0 1 0 48 0a24 24 0 1 0 -48 0z" fill="#D90000" />
              <path d="M200 600 C300 500, 500 700, 600 600" fill="transparent" stroke-width="30" stroke-linecap="round" stroke="#d90000" />
              <line x1="200" x2="1000" y1="200" y2="200" stroke="#d90000" stroke-width="48" stroke-linecap="round" fill="#D90000" />
            </g>
          </svg>
        </div>
        <div class="pre_code">
<pre class="line-numbers">
<code class="lang-XML">&lt;svg version="1.1" viewBox="0 0 1200 800" width="300" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;defs&gt;
    &lt;filter id="filterUseB" x="0" y="0" width="1200" height="800" filterUnits="userSpaceOnUse"&gt;
      &lt;feGaussianBlur in="SourceAlpha" stdDeviation='20' result="blur"&gt;&lt;/feGaussianBlur&gt;
      &lt;feOffset in="blur" dx="-24" dy="-16" result="blurOff"&gt;&lt;/feOffset&gt;
      &lt;feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="40" lighting-color="#ffffff" result="specOut"&gt;
        &lt;fePointLight x="5000" y="1000" z="20000"&gt;&lt;/fePointLight&gt;
      &lt;/feSpecularLighting&gt;
      &lt;!-- 复合 --&gt;
      &lt;feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"&gt;&lt;/feComposite&gt;
      &lt;feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="lightPaint"&gt;&lt;/feComposite&gt;
      &lt;feMerge&gt;
        &lt;feMergeNode in="blurOff" /&gt;
        &lt;feMergeNode in="lightPaint" /&gt;
      &lt;/feMerge&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;
  &lt;g filter="url(#filterUseB)"&gt;
    &lt;path d="M576 400 a24 24 0 1 0 48 0a24 24 0 1 0 -48 0z" fill="#D90000" /&gt;
    &lt;path d="M200 600 C300 500, 500 700, 600 600" fill="transparent" stroke-width="30" stroke-linecap="round" stroke="#d90000" /&gt;
    &lt;line x1="200" x2="1000" y1="200" y2="200" stroke="#d90000" stroke-width="48" stroke-linecap="round" fill="#D90000" /&gt;
  &lt;/g&gt;
&lt;/svg&gt;</code>
</pre>
        </div>
      </div>
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
.filterUse {
  .filter {
    .title {
      text-align: left;
    }
    .filter_item {
      width: 100%;
      display: flex;
      align-items: center;
      .pre_code {
        width: calc(100% - 320px);
        margin: 0 0 0 20px;
      }
    }
  }
}
</style>