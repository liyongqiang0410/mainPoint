<template>
  <div>
    <div class="sticky" style="--n: 0;">
      <span class="emphasis">强调 text-emphasis</span>
    </div>
    <pre class="line-numbers">
      <code class="lang-CSS">
        .emphasis {
          position: sticky;
          top: 0px;
          z-index: 9;
          text-emphasis: red open circle;
          text-emphasis-position: under right;
        }
      </code>
    </pre>
    <div class="sticky" style="--n: 1">
      <div class="conic"></div>
    </div>
    <pre class="line-numbers">
      <code class="lang-CSS">
        .conic {
          width: 60px;
          height: 60px;
          border-radius: 100%;
          background: conic-gradient(deepskyblue 30%, white 75%, transparent);
          --mask: radial-gradient(closest-side, transparent 75%, black 85%);
          mask-image: var(--mask);
          animation: loading 1s linear infinite reverse;
        }
        @keyframes loading {
          from {
            transform: rotate(0deg)
          }
          to {
            transform: rotate(360deg)
          }
        }
      </code>
    </pre>
    <div class="sticky" style="--n: 2">
      <span class="wavy" style="--color: red;">单行文字添加波浪线效果</span>
    </div>
    <pre class="line-numbers">
      <code class="lang-CSS">
        .wavy {
          padding: 5px;
        }
        .wavy:hover {
          background: radial-gradient(circle at 10px -7px, transparent 8px, var(--color) 8px, var(--color) 9px, transparent 9px) repeat-x,radial-gradient(circle at 10px 27px, transparent 8px, var(--color) 8px, var(--color) 9px, transparent 9px) repeat-x;
          background-size: 20px 20px;
          background-position: -10px calc(100% + 16px), 0 calc(100% - 4px);
          animation: wavy 1s linear infinite;
        }
        @keyframes wavy {
          from {
            background-position-x: -10px, 0;
          }
          to {
            background-position-x: -30px, -20px;
          }
        }
      </code>
    </pre>
    <div class="sticky" style="--n: 3">
      <span>粘性定位</span>
    </div>
    <pre class="line-numbers">
      <code class="lang-CSS">
        .sticky {
          position: sticky;
          z-index: 9;
          background-color: #ffffff;
          top: calc(var(--n) * 70px);
          display:flow-root;
          height: 60px;
          line-height: 60px;
          border: 1px solid #cccccc;
        }
      </code>
    </pre>
    <div class="sticky" style="--n: 4">
      <span @click="getArgument">css 传参</span>
    </div>
    <pre class="line-numbers">
      <code class="lang-CSS">
        :root {
          --mode: "unknow";
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --mode: "dark";
            --colorLink: #bfdbff;
            --colorMark: #cc0000;
            --colorText: #ffffff;
            --colorLight: #777777;
          }
        }
        @media (prefers-color-scheme: light) {
          :root {
            --mode: "light";
            --colorLink: #bfdbff;
            --colorMark: #cc0000;
            --colorText: #ffffff;
            --colorLight: #777777;
          }
        }
      </code>
    </pre>
    <div class="sticky" style="--n: 5">
      <span>background-blend-mode 混合模式</span>
    </div>
    <div class="item"></div>
  </div>
</template>
<script>

export default {
  name: 'my-CSSTip',
  components: {
  },
  props: {
  },
  watch: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    getArgument() {
      var mode = getComputedStyle(document.documentElement).getPropertyValue('--mode').trim();
      console.log(mode)
    },
  }
}
</script>
<style>
:root {
  --mode: "unknow";
}
@media (prefers-color-scheme: dark) {
  :root {
    --mode: "dark";
    --colorLink: #bfdbff;
    --colorMark: #cc0000;
    --colorText: #ffffff;
    --colorLight: #777777;
  }
}
@media (prefers-color-scheme: light) {
  :root {
    --mode: "light";
    --colorLink: #bfdbff;
    --colorMark: #cc0000;
    --colorText: #ffffff;
    --colorLight: #777777;
  }
}
</style>
<style lang="scss" scoped>
.sticky {
  position: sticky;
  z-index: 9;
  background-color: #ffffff;
  top: calc(var(--n) * 70px);
  display: flow-root;
  height: 60px;
  line-height: 60px;
  border: 1px solid #cccccc;
}
.emphasis {
  text-emphasis: red open circle;
  text-emphasis-position: under right;
}
.conic {
  margin: auto;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: conic-gradient(deepskyblue 30%, white 75%, transparent);
  --mask: radial-gradient(closest-side, transparent 75%, black 85%);
  mask-image: var(--mask);
  animation: loading 1s linear infinite reverse;
}
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.wavy {
  padding: 5px;
}
.wavy:hover {
  background: radial-gradient(
        circle at 10px -7px,
        transparent 8px,
        var(--color) 8px,
        var(--color) 9px,
        transparent 9px
      )
      repeat-x,
    radial-gradient(
        circle at 10px 27px,
        transparent 8px,
        var(--color) 8px,
        var(--color) 9px,
        transparent 9px
      )
      repeat-x;
  background-size: 20px 20px;
  background-position: -10px calc(100% + 16px), 0 calc(100% - 4px);
  animation: wavy 1s linear infinite;
}
@keyframes wavy {
  from {
    background-position-x: -10px, 0;
  }
  to {
    background-position-x: -30px, -20px;
  }
}
.item {
  margin: auto;
  margin-top: 20px;
  width: 200px;
  height: 200px;
  background: linear-gradient(to right bottom, deeppink 50%, transparent 50%),
    linear-gradient(to top right, deeppink 50%, transparent 50%), darkblue;
  background-blend-mode: multiply, screen;
  position: relative;
}
</style>