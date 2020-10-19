<template>
  <div id="candlestick"></div>
</template>
<script>
export default {
  name: 'my-Candlestick',
  components: {
  },
  props: {
  },
  watch: {
  },
  data() {
    return {
      data: this.getData(30),
      dataItem: [],
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.getDataItem()
    this.drawCandlestick('candlestick')
  },
  methods: {
    getData(num) {
      var Arr = []
      for (let index = 1; index <= num; index++) {
        var itemArr = []
        itemArr.push(('0' + index).slice(-2))
        itemArr.push(Number.parseInt(Math.random() * 100))
        Arr.push(itemArr)
      }
      return Arr
    },
    getDataItem() {
      for (let i = 1; i <= 31; i++) {
        this.dataItem.push(('0' + i).slice(-2))
      }
    },
    drawCandlestick(id) {
      const myEcharts = this.$echarts.init(document.getElementById(id))
      myEcharts.setOption({
        title: {
          text: 'candlestick',
          left: 10,
          top: 10
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        toolbox: {
          right: 10,
          top: 7,
          // 工具配置项
          feature: {
            // 保存为图片
            saveAsImage: {
              type: 'png'
            },
            // 配置项还原
            restore: {},
            // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
            dataView: {},
            // 数据区域缩放
            dataZoom: {},
            // 动态类型切换 
            magicType: {
              type: ['line', 'bar', 'stack', 'tiled']
            },
            brush: {
              type: 'polygon'
            }
          },
        },
        legend: {
          orient: 'vertical',
          left: '80%',
          top: 'center',
          data: ['七月', '八月', '九月']
        },
        grid: {
          width: '70%',
        },
        xAxis: {
          type: 'category',
          data: this.dataItem
        },
        yAxis: {
          splitArea: {
            show: true
          }
        },
        dataZoom: [
          {
            type: 'inside',
            start: 50,
            end: 100,
          },
          {
            show: true,
            type: 'slider',
            top: '90%',
            start: 50,
            end: 100
          }
        ],
        series: [
          {
            name: 'K',
            type: 'candlestick',
            data: this.data
          },
          {
            name: '七月',
            type: 'line',
            data: this.getData(31),
            smooth: true,
            lineStyle: {
              opacity: 0.5
            }
          },
          {
            name: '八月',
            type: 'line',
            data: this.getData(31),
            smooth: true,
            lineStyle: {
              opacity: 0.5
            }
          },
          {
            name: '九月',
            type: 'line',
            data: this.getData(30),
            smooth: true,
            lineStyle: {
              opacity: 0.5
            }
          },
        ]
      })
    },
  }
}
</script>
<style lang="scss" scoped>
#candlestick {
  width: 100%;
  height: 100%;
}
</style>