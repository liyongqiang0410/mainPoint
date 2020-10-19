import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)

// const file = require.context('@/views', true, /\.vue$/);
// const filePath = file.keys().map(item => { 
//   console.log(item);
//   return item.replace(/\.\//, '@/views/')
// })