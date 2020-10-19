<template>
  <div>
    <!-- <animate attributeType="XML" attributeName="r" from="50" to="80" dur="3" direction='rtl' repeatCount="indefinite"  /> -->
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="300">
      <!-- <circle cx="150" cy="150" r="50" stroke="skyblue" stroke-width="3" fill="transparent" id="circle1" /> -->
      <!-- <circle cx="150" cy="150" r="50" stroke="skyblue" stroke-width="3" fill="transparent" id="circle2" /> -->
      <g>
        <!-- 外圆轨迹 天蓝-->
        <circle cx="150" cy="150" r="50" stroke="skyblue" stroke-width="1" fill="transparent" id="circle0" />
        <g>
          <!-- 公转外圆 红-->
          <circle cx="100" cy="150" r="8" fill="red">
            <animateMotion path="M0 0 a50 50 0 1 0 100 0a50 50 0 1 0 -100 0z" attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="36" repeatCount="indefinite"></animateMotion>
          </circle>
          <g>
            <!-- 公转轨迹小圆 蓝 透明度0.3-->
            <circle cx="100" cy="150" r="20" stroke="blue" stroke-opacity="0.3" fill="transparent" />
            <animateMotion path="M0 0 a50 50 0 1 0 100 0a50 50 0 1 0 -100 0z" attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="36" repeatCount="indefinite"></animateMotion>
            <g>
              <!-- 公转小圆 橙 -->
              <circle cx="80" cy="150" r="3" fill="orange">
                <animateMotion path="M0 0 a20 20 0 1 0 40 0a20 20 0 1 0 -40 0z" attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="3" repeatCount="indefinite"></animateMotion>
              </circle>
            </g>
          </g>
        </g>
      </g>
    </svg>
<pre class="line-numbers">
<code class="lang-XML">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="300"&gt;
  &lt;!-- &lt;circle cx="150" cy="150" r="50" stroke="skyblue" stroke-width="3" fill="transparent" id="circle1" /&gt; --&gt;
  &lt;!-- &lt;circle cx="150" cy="150" r="50" stroke="skyblue" stroke-width="3" fill="transparent" id="circle2" /&gt; --&gt;
  &lt;g&gt;
    &lt;!-- 外圆轨迹 天蓝--&gt;
    &lt;circle cx="150" cy="150" r="50" stroke="skyblue" stroke-width="1" fill="transparent" id="circle0" /&gt;
    &lt;g&gt;
      &lt;!-- 公转外圆 红--&gt;
      &lt;circle cx="100" cy="150" r="8" fill="red"&gt;
        &lt;animateMotion path="M0 0 a50 50 0 1 0 100 0a50 50 0 1 0 -100 0z" attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="36" repeatCount="indefinite"&gt;&lt;/animateMotion&gt;
      &lt;/circle&gt;
      &lt;g&gt;
        &lt;!-- 公转轨迹小圆 蓝 透明度0.3--&gt;
        &lt;circle cx="100" cy="150" r="20" stroke="blue" stroke-opacity="0.3" fill="transparent" /&gt;
        &lt;animateMotion path="M0 0 a50 50 0 1 0 100 0a50 50 0 1 0 -100 0z" attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="36" repeatCount="indefinite"&gt;&lt;/animateMotion&gt;
        &lt;g&gt;
          &lt;!-- 公转小圆 橙 --&gt;
          &lt;circle cx="80" cy="150" r="3" fill="orange"&gt;
            &lt;animateMotion path="M0 0 a20 20 0 1 0 40 0a20 20 0 1 0 -40 0z" attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="3" repeatCount="indefinite"&gt;&lt;/animateMotion&gt;
          &lt;/circle&gt;
        &lt;/g&gt;
      &lt;/g&gt;
    &lt;/g&gt;
  &lt;/g&gt;
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
#circle1 {
  animation: spin1 3s linear infinite alternate;
}
@keyframes spin1 {
  from {
    r: 50px;
  }
  to {
    r: 80px;
  }
}
#circle2 {
  animation: spin2 3s linear infinite alternate;
}

@keyframes spin2 {
  from {
    r: 50px;
  }
  to {
    r: 100px;
  }
}
</style>