<template>
  <div id="radar"></div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  props: {
  },
  watch: {
  },
  data() {
    return {
      data: [
        {
          value: [59.1, 46.1, 20.4, 17.2, 12.4, 7, 1.7, 2.1],
          name: '浏览器',
          mainColor: '#0477ff',
        }
      ]
    }
  },
  computed: {

  },
  created() {
  },
  mounted() {
    this.drawRadar('radar')
  },
  methods: {
    drawRadar(id) {
      const myEcharts = this.$echarts.init(document.getElementById(id))
      myEcharts.setOption({
        title: {
          text: 'radar',
          top: 10,
          left: 10,
        },
        tooltip: {
          backgroundColor: 'purple',
          textStyle: {
            align: 'left'
          }
        },
        toolbox: {
          right: 10,
          orient: 'vertical',
          feature: {
            // 保存为图片
            saveAsImage: {
              type: 'png'
            },
            // 配置项还原
            // restore: {},
            // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
            dataView: {},
            // 数据区域缩放 只支持直角坐标系缩放
            // dataZoom: {},
            // 动态类型切换 
            // magicType: {
            //   type: ['line', 'bar', 'stack', 'tiled']
            // },
            brush: {
              type: 'polygon'
            }
          },
        },
        radar: {
          indicator: [
            { name: 'Uc', max: 60 },
            { name: 'QQ', max: 50 },
            { name: '360', max: 25 },
            { name: '搜狗', max: 20 },
            { name: '百度', max: 15 },
            { name: '猎豹', max: 10 },
            { name: 'opera', max: 3 },
            { name: '其他', max: 3 },
          ],
          center: ['50%', '50%'],
          radius: '70%',
          name: {
            textStyle: {
              color: '#0477ff',
              fontWeight: 'bold'
            }
          },
          // 轴线线设置
          axisLine: {
            symbol: ['none', 'none'],
            lineStyle: {
              color: '#4077ff',
              opacity: 0.2,
            },
          },
          // 轴线刻度设置
          // axisTick: {
          //   show: false,
          //   length: 5,
          //   lineStyle: {}
          // },
          // 分割线设置
          splitLine: {
            lineStyle: {
              color: ['#1077ff50']
            }
          },
          splitArea: {
            areaStyle:{
              color:['rgba(64, 112, 255, 0.1)', 'rgba(64, 112, 255, 0.2)', 'rgba(64, 112, 255, 0.1)', 'rgba(64, 112, 255, 0.2)', 'rgba(64, 112, 255, 0.1)']
            }
          }
        },
        series: [{
          name: '浏览器使用情况',
          type: 'radar',
          data: this.data,
          itemStyle: {
            color: '#F9713C'
          },
          lineStyle: {
            color: '#4077ff',
            opacity: 0.5
          },
          areaStyle: {
            color: '#4077ff',
            opacity: 0.1
          },
          label: {
            show: true
          },
          emphasis: {
            itemStyle: {
              color: '#4077ff'
            }
          }
        }]
      })
    },
  }
}
</script>
<style lang="scss" scoped>
#radar {
  width: 100%;
  height: 100%;
}
</style>