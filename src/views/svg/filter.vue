<template>
  <div>
    <svg width="200" class="svg-icon" viewBox="0 0 200 85" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <!-- Filter declaration -->
        <filter id="MyFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="200" height="120">

          <!-- offsetBlur -->
          <!-- 高斯模糊 模糊度 4 像素 缓冲区 blur -->
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          <!-- 投影设置  -->
          <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />

          <!-- litPaint 高光-->
          <!-- surfaceScale 光滤镜表面高度 -->
          <!-- specularConstant 高光反射比例 值越大反射强度越强 -->
          <!-- specularExponent 控制光源的焦点, 值越大, 光越亮 -->
          <!-- lighting-color 控制光的颜色 -->
          <feSpecularLighting in="blur" surfaceScale="8" specularConstant="1.5" specularExponent="30" lighting-color="#0000ff" result="specOut">
            <!-- 光源位置设置 x,y,z 分别表示各轴坐标 -->
            <fePointLight x="-5000" y="-10000" z="20000" />
          </feSpecularLighting>
          <!-- 该滤镜执行两个输入图像的智能像素组合 -->
          <!-- operator 执行变形或合成的操作 默认值:over -->
          <!-- operator 可选值:
                  over: in属性定义的源图形放置在in2属性定义的图形之上
                  in: in属性中定义的源图形中与在in2属性中定义的目标图形重叠的部分替换目标图形
                  out: 此值指示将显示在in属性中定义的源图形中位于in2属性中定义的目标图形之外的部分。
                  atop: 此值指示在in属性中定义的源图形的部分，它们与在in2属性中定义的目标图形重叠。替换目标图形。目标图形中与源图形不重叠的部分保持不变
                  xor: 异或 此值表示在in属性中定义的源图形和在in2属性中定义的目标图形的非重叠区域被合并。
                  lighter: 将显示in属性中定义的源图形与in2属性中定义的目标图形的总和
                  arithmetic: in属性中定义的源图形和在in2属性中定义的目标图形使用以下公式组合
                    公式:result = k1*i1*i2 + k2*i1 + k3*i2 + k4
                      i1和i2表示输入图像对应的像素通道值，分别映射到in和in2, k1、k2、k3和k4表示同名属性的值
          -->
          <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />

          <!-- merge offsetBlur + litPaint -->
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="litPaint" />
          </feMerge>
        </filter>
      </defs>

      <!-- Graphic elements -->
      <g filter="url(#MyFilter)">
        <path fill="none" stroke="#D90000" stroke-width="10" d="M50,66 c-50,0 -50,-60 0,-60 h100 c50,0 50,60 0,60z" />
        <path fill="#D90000" d="M60,56 c-30,0 -30,-40 0,-40 h80 c30,0 30,40 0,40z" />
        <g fill="#FFFFFF" stroke="black" font-size="45" font-family="Verdana">
          <text x="52" y="52">SVG</text>
        </g>
      </g>
    </svg>
<pre class="line-numbers">
<code class="lang-XML">&lt;svg width="250" viewBox="0 0 200 85" xmlns="http://www.w3.org/2000/svg" version="1.1"&gt;
  &lt;defs&gt;
    &lt;!-- Filter declaration --&gt;
    &lt;filter id="MyFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="200" height="120"&gt;

      &lt;!-- offsetBlur --&gt;
      &lt;!-- 高斯模糊 模糊度 4 像素 缓冲区 blur --&gt;
      &lt;feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" /&gt;
      &lt;!-- 投影设置  --&gt;
      &lt;feOffset in="blur" dx="4" dy="4" result="offsetBlur" /&gt;

      &lt;!-- litPaint 高光--&gt;
      &lt;!-- surfaceScale 光滤镜表面高度 --&gt;
      &lt;!-- specularConstant 高光反射比例 值越大反射强度越强 --&gt;
      &lt;!-- specularExponent 控制光源的焦点, 值越大, 光越亮 --&gt;
      &lt;!-- lighting-color 控制光的颜色 --&gt;
      &lt;feSpecularLighting in="blur" surfaceScale="8" specularConstant="1.5" specularExponent="30" lighting-color="#0000ff" result="specOut"&gt;
        &lt;!-- 光源位置设置 x,y,z 分别表示各轴坐标 --&gt;
        &lt;fePointLight x="-5000" y="-10000" z="20000" /&gt;
      &lt;/feSpecularLighting&gt;
      &lt;!-- 该滤镜执行两个输入图像的智能像素组合 --&gt;
      &lt;!-- operator 执行变形或合成的操作 默认值:over --&gt;
      &lt;!-- operator 可选值:
              over: in属性定义的源图形放置在in2属性定义的图形之上
              in: in属性中定义的源图形中与在in2属性中定义的目标图形重叠的部分替换目标图形
              out: 此值指示将显示在in属性中定义的源图形中位于in2属性中定义的目标图形之外的部分。
              atop: 此值指示在in属性中定义的源图形的部分，它们与在in2属性中定义的目标图形重叠。替换目标图形。目标图形中与源图形不重叠的部分保持不变
              xor: 异或 此值表示在in属性中定义的源图形和在in2属性中定义的目标图形的非重叠区域被合并。
              lighter: 将显示in属性中定义的源图形与in2属性中定义的目标图形的总和
              arithmetic: in属性中定义的源图形和在in2属性中定义的目标图形使用以下公式组合
                公式:result = k1*i1*i2 + k2*i1 + k3*i2 + k4
                  i1和i2表示输入图像对应的像素通道值，分别映射到in和in2, k1、k2、k3和k4表示同名属性的值
      --&gt;
      &lt;feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" /&gt;
      &lt;feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" /&gt;

      &lt;!-- merge offsetBlur + litPaint --&gt;
      &lt;feMerge&gt;
        &lt;feMergeNode in="offsetBlur" /&gt;
        &lt;feMergeNode in="litPaint" /&gt;
      &lt;/feMerge&gt;
    &lt;/filter&gt;
  &lt;/defs&gt;

  &lt;!-- Graphic elements --&gt;
  &lt;g filter="url(#MyFilter)"&gt;
    &lt;path fill="none" stroke="#D90000" stroke-width="10" d="M50,66 c-50,0 -50,-60 0,-60 h100 c50,0 50,60 0,60z" /&gt;
    &lt;path fill="#D90000" d="M60,56 c-30,0 -30,-40 0,-40 h80 c30,0 30,40 0,40z" /&gt;
    &lt;g fill="#FFFFFF" stroke="black" font-size="45" font-family="Verdana"&gt;
      &lt;text x="52" y="52"&gt;SVG&lt;/text&gt;
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
.svg-icon {
  font-size: 20px;
}
</style>