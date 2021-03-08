import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
export default new Router({
  routes: [
    {
      path: "/",
      name: "app",
      redirect: "/index",
      component: () => import("@/views/layout"),
      children: [
        {
          path: "index",
          name: "index",
          meta: {
            title: "首页",
            icon: "el-icon-s-home",
            permissions: ["admin", "user"]
          },
          component: () => import("@/views/home")
        },
        {
          path: "imgLazy",
          name: "imgLazy",
          meta: {
            title: "图片懒加载",
            icon: "el-icon-loading",
            permissions: ["admin", "user"]
          },
          component: () => import("@/views/other/imgLazy.vue")
        },
        {
          path: "calendar",
          name: "calendar",
          meta: {
            title: "日历",
            icon: "el-icon-view",
            permissions: ["admin", "user"]
          },
          component: () => import("@/views/test-calendar/calendar.vue")
        },
        {
          path: "dataPicker",
          name: "dataPicker",
          meta: {
            title: "日期选择",
            icon: "el-icon-date",
            permissions: ["admin"]
          },
          component: () => import("@/views/dataPicker/dataPicker.vue")
        },
        {
          path: "rangeTime",
          name: "datarangeTimePicker",
          meta: {
            title: "日期选择时间限制",
            icon: "el-icon-alarm-clock",
            permissions: ["admin", "user"]
          },
          component: () => import("@/views/method/rangeTime.vue")
        },
        {
          path: "table",
          name: "table",
          meta: {
            title: "table",
            icon: "el-icon-s-grid",
            permissions: ["admin"]
          },
          component: () => import("@/views/table/table.vue")
        },
        {
          path: "tree",
          name: "tree",
          meta: {
            title: "树",
            icon: "el-icon-apple",
            permissions: ["admin", "user"]
          },
          component: () => import("@/views/tree/tree.vue")
        },
        {
          path: "method",
          name: "method",
          meta: {
            title: "一些方法",
            icon: "el-icon-more",
            permissions: ["admin"]
          },
          component: () => import("@/views/method/index.vue")
        },
        {
          path: "codeEditer",
          name: "codeEditer",
          meta: {
            title: "代码编辑器",
            icon: "el-icon-edit",
            permissions: ["admin", "user"]
          },
          component: () => import("@/views/method/codeEditer.vue")
        },
        {
          path: "magnifying",
          name: "magnifying",
          meta: {
            title: "放大器",
            icon: "el-icon-zoom-in",
            permissions: ["admin"]
          },
          component: () => import("@/views/magnifying/index.vue")
        },
        {
          path: "loading",
          name: "loading",
          meta: {
            title: "加载效果",
            icon: "el-icon-loading",
            permissions: ["admin", "user"]
          },
          component: () => import("@/views/loading/index.vue")
        },
        {
          path: "myButton",
          name: "myButton",
          meta: {
            title: "按钮",
            icon: "el-icon-switch-button",
            permissions: ["admin"]
          },
          component: () => import("@/views/button/index.vue")
        },
        {
          path: "verify",
          name: "verify",
          meta: {
            title: "验证",
            icon: "el-icon-finished",
            permissions: ["admin", "user"]
          },
          component: () => import("@/views/verify/index.vue")
        },
        {
          path: "router",
          name: "router",
          meta: {
            title: "router",
            icon: "el-icon-s-operation",
            permissions: ["admin"]
          },
          component: () => import("@/views/router/index.vue")
        },
        {
          path: "plugins",
          name: "plugins",
          component: () => import("@/views/plugins/index.vue"),
          meta: {
            title: "插件",
            icon: "el-icon-menu",
            permissions: ["admin", "user"]
          },
          children: [
            {
              path: "countup",
              name: "countup",
              url: "plugins/countup",
              component: () => import("@/views/plugins/countup/index.vue"),
              meta: {
                title: "数字滚动",
                icon: "el-icon-s-data",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "cssdoodle",
              name: "cssdoodle",
              url: "plugins/cssDoodle",
              component: () => import("@/views/plugins/cssDoodle/index.vue"),
              meta: {
                title: "cssDoodle",
                icon: "el-icon-discover",
                permissions: ["admin", "user"]
              }
            }
          ]
        },
        {
          path: "svg",
          name: "svg",
          component: () => import("@/views/svg/index.vue"),
          meta: {
            title: "MDN svg",
            customIcon: true,
            icon: "jiaocheng",
            permissions: ["admin", "user"]
          },
          children: [
            {
              path: "entryLevel",
              name: "entryLevel",
              url: "svg/entryLevel",
              component: () => import("@/views/svg/entryLevel.vue"),
              meta: {
                title: "入门",
                customIcon: true,
                icon: "rumen",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "basicConfiguration",
              name: "basicConfiguration",
              url: "svg/basicConfiguration",
              component: () => import("@/views/svg/basicConfiguration.vue"),
              meta: {
                title: "基本形状",
                customIcon: true,
                icon: "xingzhuang",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "fillAndBorder",
              name: "fillAndBorder",
              url: "svg/fillAndBorder",
              component: () => import("@/views/svg/fillAndBorder.vue"),
              meta: {
                title: "填充与边框",
                customIcon: true,
                icon: "fillBorder",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "gradient",
              name: "gradient",
              url: "svg/gradient",
              component: () => import("@/views/svg/gradient.vue"),
              meta: {
                title: "渐变",
                customIcon: true,
                icon: "gradient",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "patterns",
              name: "patterns",
              url: "svg/patterns",
              component: () => import("@/views/svg/patterns.vue"),
              meta: {
                title: "图案",
                customIcon: true,
                icon: "pattern",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "text",
              name: "text",
              url: "svg/text",
              component: () => import("@/views/svg/text.vue"),
              meta: {
                title: "文本模式",
                customIcon: true,
                icon: "text",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "animation",
              name: "animation",
              url: "svg/animation",
              component: () => import("@/views/svg/animation.vue"),
              meta: {
                title: "animation",
                customIcon: true,
                icon: "donghua",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "filter",
              name: "filter",
              url: "svg/filter",
              component: () => import("@/views/svg/filter.vue"),
              meta: {
                title: "filter",
                customIcon: true,
                icon: "filter",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "filterUse",
              name: "filterUse",
              url: "svg/filterUse",
              component: () => import("@/views/svg/filterUse.vue"),
              meta: {
                title: "filterUse",
                customIcon: true,
                icon: "filter",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "filterFeturbulence",
              name: "filterFeturbulence",
              url: "svg/filterFeturbulence",
              component: () => import("@/views/svg/filterFeturbulence.vue"),
              meta: {
                title: "Feturbulence",
                customIcon: true,
                icon: "filter",
                permissions: ["admin", "user"]
              }
            },
          ]
        },
        {
          path: "tips",
          name: "tips",
          component: () => import("@/views/tips/index.vue"),
          meta: {
            title: "tips",
            icon: "el-icon-bell",
            permissions: ["admin", "user"]
          },
          children: [
            {
              path: "backgroundBlendMode",
              name: "backgroundBlendMode",
              url: "tips/backgroundBlendMode",
              component: () => import("@/views/tips/backgroundBlendMode.vue"),
              meta: {
                title: "背景混合",
                customIcon: true,
                icon: "css",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "cssTips",
              name: "cssTips",
              url: "tips/cssTips",
              component: () => import("@/views/tips/cssTip/index.vue"),
              meta: {
                title: "cssTips",
                customIcon: true,
                icon: "css",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "filters",
              name: "filters",
              url: "tips/filters",
              component: () => import("@/views/tips/filters/index.vue"),
              meta: {
                title: "滤镜",
                customIcon: true,
                icon: "lvjing",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "ronghe",
              name: "ronghe",
              url: "tips/ronghe",
              component: () => import("@/views/tips/ronghe/index.vue"),
              meta: {
                title: "融合",
                customIcon: true,
                icon: "ronghe",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "jsTip",
              name: "jsTip",
              url: "tips/jsTip",
              component: () => import("@/views/tips/jsTip/jsZip.vue"),
              meta: {
                title: "jsZip",
                customIcon: true,
                icon: "js",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "svgs",
              name: "svgs",
              url: "tips/svgs",
              component: () => import("@/views/tips/svg/index.vue"),
              meta: {
                title: "tip svg",
                customIcon: true,
                icon: "svg",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "vue",
              name: "vue",
              url: "tips/vue",
              component: () => import("@/views/tips/vueTip/vue.vue"),
              meta: {
                title: "vue",
                icon: "el-icon-edit",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "jsx",
              name: "jsx",
              url: "tips/jsx",
              component: () => import("@/views/tips/jsx/jsx.vue"),
              meta: {
                title: "jsx",
                icon: "el-icon-edit",
                permissions: ["admin"]
              }
            }
          ]
        },
        {
          path: "mix",
          name: "mix",
          component: () => import('@/views/mix/index.vue'),
          meta: {
            title: "mix",
            icon: "el-icon-connection",
            permissions: ["admin", "user"]
          },
          children: [
            // {
            //   path: "imgWatermark",
            //   name: "imgWatermark",
            //   url: 'mix/imgWatermark',
            //   component: () => import('@/views/mix/imgWatermark.vue'),
            //   meta: {
            //     title: "图片水印",
            //     icon: "el-icon-picture",
            //     permissions: ["admin", "user"]
            //   }
            // },
            {
              path: "waterMarkCom",
              name: "waterMarkCom",
              url: 'mix/waterMarkCom',
              component: () => import('@/views/mix/waterMarkCom.vue'),
              meta: {
                title: "水印组件",
                icon: "el-icon-picture",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "imgPieceAnim",
              name: "imgPieceAnim",
              url: 'mix/imgPieceAnim',
              component: () => import('@/views/mix/imgPieceAnim.vue'),
              meta: {
                title: "图片碎片",
                icon: "el-icon-picture",
                permissions: ["admin", "user"]
              }
            },
            {
              path: "canvasColorTransition",
              name: "canvasColorTransition",
              url: 'mix/canvasColorTransition',
              component: () => import('@/views/mix/canvasColorTransition.vue'),
              meta: {
                title: "颜色过渡",
                icon: "animate",
                customIcon: true,
                permissions: ["admin", "user"]
              }
            },
            {
              path: "canvasDelColor",
              name: "canvasDelColor",
              url: 'mix/canvasDelColor',
              component: () => import('@/views/mix/canvasDelColor.vue'),
              meta: {
                title: "去除色值",
                icon: "shanchu",
                customIcon: true,
                permissions: ["admin", "user"]
              }
            },
            {
              path: "canvasNAngle",
              name: "canvasNAngle",
              url: 'mix/canvasNAngle',
              component: () => import('@/views/mix/canvasNAngle.vue'),
              meta: {
                title: "n 角形",
                icon: "star",
                customIcon: true,
                permissions: ["admin", "user"]
              }
            },
            {
              path: "canvasToZipImg",
              name: "canvasToZipImg",
              url: 'mix/canvasToZipImg',
              component: () => import('@/views/mix/canvasToZipImg.vue'),
              meta: {
                title: "图片压缩",
                icon: "image",
                customIcon: true,
                permissions: ["admin", "user"]
              }
            },
            {
              path: "sort",
              name: "sort",
              url: 'mix/sort',
              component: () => import('@/views/mix/canvasAnim.vue'),
              meta: {
                title: "排序",
                icon: "animate",
                customIcon: true,
                permissions: ["admin", "user"]
              }
            },
            {
              path: "borderAnim",
              name: "borderAnim",
              url: 'mix/borderAnim',
              component: () => import('@/views/mix/borderAnim.vue'),
              meta: {
                title: "css anim",
                icon: "animate",
                customIcon: true,
                permissions: ["admin", "user"]
              }
            },
            {
              path: "audio",
              name: "audio",
              url: 'mix/audio',
              component: () => import('@/views/mix/audio.vue'),
              meta: {
                title: "音视频",
                icon: "audio",
                customIcon: true,
                permissions: ["admin", "user"]
              }
            },
            {
              path: "upload",
              name: "upload",
              url: 'mix/upload',
              component: () => import('@/views/mix/upload.vue'),
              meta: {
                title: "上传",
                icon: "upload",
                customIcon: true,
                permissions: ["admin", "user"]
              }
            },
          ]
        }, {
          path: 'vues',
          name: 'vues',
          component: () => import('@/views/vue/index'),
          meta: {
            title: 'vues',
            icon: 'el-icon-menu',
            permissions: ['admin', 'user']
          },
          children: [
            {
              path: "dialogTabs",
              name: "dialogTabs",
              url: "vues/dialogTabs",
              component: () => import("@/views/vue/dialog_tabs/index"),
              meta: {
                title: "对话卡片",
                icon: "el-icon-s-data",
                permissions: ["admin", "user"]
              }
            }, {
              path: 'vueOther',
              name: 'vueOther',
              url: 'vues/vueOther',
              component: () => import('@/views/vue/other/index'),
              meta: {
                title: 'vue 其他',
                icon: "el-icon-s-data",
                permissions: ["admin", "user"]
              }
            }, {
              path: 'functionComponents',
              name: 'functionComponents',
              url: 'vues/functionComponents',
              component: () => import('@/views/vue/functionComponents/index'),
              meta: {
                title: '优化1',
                icon: "el-icon-s-data",
                permissions: ["admin", "user"]
              }
            }, {
              path: 'localvariables',
              name: 'localvariables',
              url: 'vues/localvariables',
              component: () => import('@/views/vue/localVariables/index'),
              meta: {
                title: '优化2',
                icon: "el-icon-s-data",
                permissions: ["admin", "user"]
              }
            }, {
              path: 'childComponentSplitting',
              name: 'childComponentSplitting',
              url: 'vues/childComponentSplitting',
              component: () => import('@/views/vue/childComponentSplitting/index'),
              meta: {
                title: '优化3',
                icon: "el-icon-s-data",
                permissions: ["admin", "user"]
              }
            }
          ]
        }
      ]
    },
    {
      path: "/page404",
      name: "page404",
      component: () => import("@/page404.vue")
    },
    {
      path: "/page401",
      name: "page401",
      component: () => import("@/page401.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/login.vue")
    },
    {
      path: "/registe",
      name: "registe",
      component: () => import("@/registe.vue")
    },
    {
      path: "/forgetPass/forget",
      name: "forgetPass/forget",
      component: () => import("@/forgetPass.vue")
    }
  ]
});
