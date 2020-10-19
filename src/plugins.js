import Vue from 'vue'
import '@/config/permission.js'

import swal from 'sweetalert'

// 组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// viewer 样式
import 'viewerjs/dist/viewer.css'

// 代码高亮 (纯文本展示代码)
import Prism from 'prismjs'
// import prismCss from 'prismjs/themes/prism.css'
// 主题
import prismCss from 'prismjs/themes/prism-okaidia.css'

// 代码编辑器
import VuecodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

// js自动补全提示
import jshint from "jshint";
window.JSHINT = jshint.JSHINT;

// 引入代码编辑器
import { codemirror } from 'vue-codemirror'

// 富文本编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// 指令懒加载图片
import imgLazy from '@/directive/imgLazy'
import '@/directive/enterIntNumber.js'

// 公共组件
import myTable from '@/components/table'
import twoTree from '@/components/tree'

// loading样式
import '@/style/loading.scss'

// 全局属性
import GP from './globalProperties'

// echarts 全局注册使用
import echarts from 'echarts'
import 'echarts-gl'
Vue.prototype.$echarts = echarts

// 数字滚动
import ICountUp from 'vue-countup-v2';

// import 'css-doodle';
import '../static/cssDoodle.min.js'

// svg
import '@/icons'

Vue.use(GP)
Vue.use(ElementUI)
Vue.use(Prism)
Vue.use(prismCss)
Vue.use(mavonEditor)
Vue.use(VuecodeMirror)
Vue.use(codemirror)

Vue.directive('imgLazy', imgLazy)

Vue.component('myTable', myTable)
Vue.component('twoTree', twoTree)
Vue.component("countup", ICountUp)