<template>
  <div>
    <div class="item">
      <div class="item_result">
        <!-- turbulence (空气和水的)湍流 -->
        <!-- 包含五个基础属性 -->
        <!-- 1.baseFrequence 基础频率 -->
        <!-- 2.numOctaves 倍频数量 -->
        <!-- 3.seed 伪随机数起始值 -->
        <!-- 4.stitchTiles 定义perlin noise 在边框处的行为 可用值: noStitch 不平滑; stitch 平滑;-->
        <!-- 5.type 可用值: turbulence 透明玻璃效果; fractalNoise 磨砂玻璃效果; -->
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <filter id="turbulence" x="0" y="0" width="100%" height="100%">
            <feTurbulence :baseFrequency="baseFrequency" :numOctaves='numOctaves' :seed="seed" :stitchTiles='stitchTiles' :type="type" />
          </filter>
          <rect x="0" y="0" width="300" height="200" style="filter: url(#turbulence)" />
        </svg>
        <input class="range" type='range' min="0.01" max="0.99" step="0.01" v-model="baseFrequency">
        <input class="range" type='range' min="1" max="5" step="1" v-model="numOctaves">
        <input class="range" type='range' min="1" max="256" step="1" v-model="seed">
        <div>
          <el-radio v-model="stitchTiles" label="noStitch">不平滑</el-radio>
          <el-radio v-model="stitchTiles" label="stitch">平滑</el-radio>
        </div>
        <div>
          <el-radio v-model="type" label="turbulence">湍流、混乱</el-radio>
          <el-radio v-model="type" label="fractalNoise">分形</el-radio>
        </div>
      </div>
      <div class="item_code" style="--left: 320;">
        <pre class="line-numbers" style="padding-left: 0;">
          <code class="lang-XML">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"&gt;
            &lt;filter id="turbulence" x="0" y="0" width="100%" height="100%"&gt;
              &lt;feTurbulence :baseFrequency="baseFrequency" :numOctaves='numOctaves' :seed="seed" :stitchTiles='stitchTiles' :type="type" /&gt;
            &lt;/filter&gt;
            &lt;rect x="0" y="0" width="300" height="200" style="filter: url(#turbulence)" /&gt;
          &lt;/svg&gt;
          &lt;input class="range" type='range' min="0.01" max="0.99" step="0.01" v-model="baseFrequency"&gt;
          &lt;input class="range" type='range' min="1" max="5" step="1" v-model="numOctaves"&gt;
          &lt;input class="range" type='range' min="1" max="256" step="1" v-model="seed"&gt;
          &lt;div&gt;
            &lt;el-radio v-model="stitchTiles" label="noStitch"&gt;不平滑&lt;/el-radio&gt;
            &lt;el-radio v-model="stitchTiles" label="stitch"&gt;平滑&lt;/el-radio&gt;
          &lt;/div&gt;
          &lt;div&gt;
            &lt;el-radio v-model="type" label="turbulence"&gt;湍流、混乱&lt;/el-radio&gt;
            &lt;el-radio v-model="type" label="fractalNoise"&gt;分形&lt;/el-radio&gt;
          &lt;/div&gt;</code></pre>
      </div>
    </div>
    <div class="item">
      <div class="item_result" style="position:absolute;top: 0;">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <filter id="turbulence1" x="0" y="0" width="100%" height="100%">
            <feTurbulence ref="feTurbulence" baseFrequency="0.01 0.1" numOctaves='1' seed="53" stitchTiles='stitch' result="turbulence1" />
            <feDisplacementMap in2="turbulence1" in="SourceGraphic" scale="20" xChannelSelector="G" yChannelSelector="R" />
          </filter>
        </svg>
      </div>
      <div class="container" style="width: 300px;">
        <img src="static/images/20.jpg" alt="水波" width="300">
        <img src="static/images/20.jpg" alt="水波" width="300" class="invertedImage" style="filter: url(#turbulence1); transform: scaleY(-1);">
      </div>
      <div class="item_code" style="--left: 320;">
        <pre class="line-numbers" style="padding-left: 0;">
          <code class="lang-xml">&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"&gt;
            &lt;filter id="turbulence1" x="0" y="0" width="100%" height="100%"&gt;
              &lt;feTurbulence ref="feTurbulence" baseFrequency="0.01 0.1" numOctaves='1' seed="53" stitchTiles='stitch' result="turbulence1" /&gt;
              &lt;feDisplacementMap in2="turbulence1" in="SourceGraphic" scale="20" xChannelSelector="G" yChannelSelector="R" /&gt;
            &lt;/filter&gt;
          &lt;/svg&gt;</code></pre>
        <pre class="line-numbers" style="padding-left: 0;">
          <code class="lang-javascript">init() {
            this.img = this.$refs.feTurbulence;
            this.frames = 0;
            this.rad = Math.PI / 180;
            this.rFM();
          },
          rFM() {
            let ftb = "0.01 0.1";
            let ftbx = Number(ftb.split(" ")[0]);
            let ftby = Number(ftb.split(" ")[1]);
            this.frames += 0.5;
            ftbx += 0.001 * Math.cos(this.frames * this.rad);
            ftby += 0.005 * Math.sin(this.frames * this.rad);
            ftb = ftbx.toString() + " " + ftby.toString();
            this.img.setAttributeNS(null, 'baseFrequency', ftb);
            this.RFM = window.requestAnimationFrame(this.rFM.bind(this))
          }</code></pre>
      </div>
    </div>
    <div class="item">
      <div class="item_result" style="background: #388cdd;">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <filter id="cloudRandom" x="0" y="0" width="100%" height="100%">
            <feTurbulence baseFrequency="0.012" numOctaves="4" :seed="seed" stitchTiles="noStitch" type="fractalNoise" />
            <feDisplacementMap in="SourceGraphic" scale="170" />
          </filter>
          <filter id="cloudShadow" x="0" y="0" width="100%" height="100%">
            <feTurbulence baseFrequency="0.012" :seed="seed" numOctaves="4" stitchTiles="stitch" type="fractalNoise" />
            <feDisplacementMap in="SourceGraphic" scale="120" />
          </filter>
        </svg>
        <div class="cloud">
          <i class="cloud_basic"></i>
          <i class="cloud_mid"></i>
          <i class="cloud_shadow"></i>
        </div>
        <div>
          <input class="range" type='range' min="1" max="256" step="1" v-model="seed">
        </div>
      </div>
      <div class="item_code" style="--left: 320;">
        <pre class="line-numbers" style="padding-left: 0;">
          <code class="lang-XML">&lt;div class="item_result" style="background: #388cdd;"&gt;
            &lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"&gt;
              &lt;filter id="cloudRandom" x="0" y="0" width="100%" height="100%"&gt;
                &lt;feTurbulence baseFrequency="0.012" numOctaves="4" :seed="seed" stitchTiles="noStitch" type="fractalNoise" /&gt;
                &lt;feDisplacementMap in="SourceGraphic" scale="170" /&gt;
              &lt;/filter&gt;
              &lt;filter id="cloudShadow" x="0" y="0" width="100%" height="100%"&gt;
                &lt;feTurbulence baseFrequency="0.012" :seed="seed" numOctaves="4" stitchTiles="stitch" type="fractalNoise" /&gt;
                &lt;feDisplacementMap in="SourceGraphic" scale="120" /&gt;
              &lt;/filter&gt;
            &lt;/svg&gt;
            &lt;div class="cloud"&gt;
              &lt;i class="cloud_basic"&gt;&lt;/i&gt;
              &lt;i class="cloud_mid"&gt;&lt;/i&gt;
              &lt;i class="cloud_shadow"&gt;&lt;/i&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;input class="range" type='range' min="1" max="256" step="1" v-model="seed"&gt;
            &lt;/div&gt;
          &lt;/div&gt;</code></pre>
        <pre class="line-numbers" style="padding-left: 0;">
          <code class="lang-css">.cloud {
              position: relative;
              height: 200px;
              i {
                position: absolute;
                display: inline-block;
                left: 0px;
                width: 100%;
                height: inherit;
                border-radius: 50%;
              }
              .cloud_basic {
                background: radial-gradient( closest-side, #fff 20%, #fffa 60%, #fff0 80%, transparent 100%);
                filter: url(#cloudRandom);
              }
              .cloud_mid {
                background: radial-gradient(closest-side at 50% 50%, rgba(100, 90, 80, 0.3), transparent 60%);
                filter: url(#cloudShadow);
              }
              .cloud_shadow {
                background: radial-gradient(closest-side at 50% 50%, rgba(0, 0, 0, 0.1), transparent 40%);
                filter: url(#cloudShadow);
              }
            }
          }</code></pre>
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
      baseFrequency: 0.01,
      numOctaves: 1,
      seed: 1,
      stitchTiles: 'noStitch',
      type: 'turbulence',

      img: null,
      frames: null,
      rad: null,
      RFM: null,
    }
  },
  mounted() {
    this.init();
    Prism.highlightAll()
  },
  methods: {
    init() {
      this.img = this.$refs.feTurbulence;
      this.frames = 0;
      this.rad = Math.PI / 180;
      this.rFM();
    },
    rFM() {
      let ftb = "0.01 0.1";
      let ftbx = Number(ftb.split(" ")[0]);
      let ftby = Number(ftb.split(" ")[1]);
      this.frames += 0.5;
      ftbx += 0.001 * Math.cos(this.frames * this.rad);
      ftby += 0.005 * Math.sin(this.frames * this.rad);
      ftb = ftbx.toString() + " " + ftby.toString();
      this.img.setAttributeNS(null, 'baseFrequency', ftb);
      this.RFM = window.requestAnimationFrame(this.rFM.bind(this))
    },
  }
}
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  gap: 20px;
  align-items: center;
  .item_result {
    width: 300px;
    .range {
      width: 298px;
    }
    .cloud {
      position: relative;
      height: 200px;
      i {
        position: absolute;
        display: inline-block;
        left: 0px;
        width: 100%;
        height: inherit;
        border-radius: 50%;
      }
      .cloud_basic {
        background: radial-gradient( closest-side, #fff 20%, #fffa 60%, #fff0 80%, transparent 100%);
        filter: url(#cloudRandom);
      }
      .cloud_mid {
        background: radial-gradient(closest-side at 50% 50%, rgba(100, 90, 80, 0.3), transparent 60%);
        filter: url(#cloudShadow);
      }
      .cloud_shadow {
        background: radial-gradient(closest-side at 50% 50%, rgba(0, 0, 0, 0.1), transparent 40%);
        filter: url(#cloudShadow);
      }
    }
  }
  .item_code {
    width: calc(100% - var(--left) * 1px);
  }
  .container {
    width: fit-content;
    clip-path: inset(10px); // 重点
    background-color: #0e6caa;
    position: relative;
    .invertedImage {
      position: relative;
      top: -4px;
    }
  }
}
</style>