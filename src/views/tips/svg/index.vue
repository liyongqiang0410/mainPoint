<template>
  <div>
    <h4 class="title">安装依赖</h4>
    <pre class="line-numbers">
      <code class="lang-javascript">
        npm i -D svg-sprite-loader
      </code>
    </pre>
    <h4 class="title">在 src 下新建 icons 文件夹</h4>
    <pre class="line-numbers">
      <code class="lang-JSON">
        文件结构
        src
        ｜
        --icons
        ｜
        ----svg
        ｜｜
        ------[name].svg
        ----index.js
      </code>
    </pre>
    <h4 class="title">自动载入文件 在icons 文件夹下 index.js 写入</h4>
    <pre class="line-numbers">
      <code class="lang-javascript">
        import Vue from 'vue'
        import SvgIcon from '@/components/SvgIcon'// svg组件

        Vue.component('svg-icon', SvgIcon) // 注册全局组件

        const requireAll = requireContext => requireContext.keys().map(requireContext)
        const req = require.context('./svg', false, /\.svg$/)
        requireAll(req)
      </code>
    </pre>
    <h4 class="title">引入到 plugins.js </h4>
    <pre class="line-numbers">
      <code class="lang-TXT">
        plugins.js 文件为 main.js 分离出的模块
        一般情况引入到 main.js 文件即可
      </code>
    </pre>
    <h4 class="title">webpack配置 vue-cli2.x</h4>
    <pre class="line-numbers">
      <code class="lang-javascript">
        { // webpack.base.conf.js
          module: {
            rules: [
              {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [resolve('src/icons')], // 排除校验文件夹
                options: {
                  limit: 10000,
                  name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
              },
              {
                test: /\.svg$/,
                include: [resolve('src/icons')], // 只校验icon文件夹注意自己建立的文件夹位置
                loader: 'svg-sprite-loader',
                options: {
                  symboId: 'icon-[name]'
                }
              }
            ]
          }
        }
      </code>
    </pre>
    <h4 class="title">svgicon 复用组件</h4>
    <pre class="line-numbers">
      <code class="lang-XML">
        &lt;svg :class="svgClass" aria-hidden="true" v-on="$listeners"&gt;
          &lt;use :xlink:href="iconName"&gt;&lt;/use&gt;
        &lt;/svg&gt;
      </code>
    </pre>
    <pre class="line-numbers">
      <code class="lang-javascript">
        export default {
          name: 'svg-icon',
          props: {
            iconClass: {
              type: String,
              required: true
            },
            className: {
              type: String
            }
          },
          computed: {
            iconName() {
              return `#${this.iconClass}`
            },
            svgClass() {
              if (this.className) {
                return 'svg-icon ' + this.className
              } else {
                return 'svg-icon'
              }
            }
          }
        }
      </code>
    </pre>
    <h4 class="title">使用</h4>
    <pre class="line-numbers">
      <code class="lang-XML">
        &lt;svg-icon icon-class="js" style="font-size: 30px;"&gt;&lt;/svg-icon&gt;
        &lt;svg-icon icon-class="css" style="font-size: 30px;"&gt;&lt;/svg-icon&gt;
        &lt;svg-icon icon-class="svg" style="font-size: 30px;"&gt;&lt;/svg-icon&gt;
      </code>
    </pre>
    <svg-icon icon-class="js"  class-name="red-js"></svg-icon>
    <svg-icon icon-class="css" class-name="orange-css"></svg-icon>
    <svg-icon icon-class="svg" class-name="green-svg"></svg-icon>
  </div>
</template>
<script>
export default {
  name: 'my-Svg',
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
  }
}
</script>
<style lang="scss" scoped>
.title {
  text-align: left;
}
.red-js,.orange-css,.green-svg {
  font-size: 30px;
}
.red-js {
  color: red;
}
.orange-css {
  color: orange;
}
.green-svg {
  color: green;
}
</style>