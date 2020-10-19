<template>
  <div id="bar3D"></div>
</template>
<script>
export default {
  name: 'my-bar3D',
  components: {
  },
  props: {
  },
  watch: {
  },
  data() {
    return {
      dataX: ['一季度', '二季度', '三季度', '四季度'],
      dataY: ["UC", "QQ", "360", "搜狗", "百度", "猎豹", "Opera", "其他"],
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.draw3dBar('bar3D')
  },
  methods: {
    bar3dData() {
      var res = []
      for (let i = 0; i < this.dataX.length; i++) {
        for (let j = 0; j < this.dataY.length; j++) {
          var value = [i, j, Number((Math.random() * 255).toFixed(0))]
          res.push({
            value: value,
            itemStyle: {
              color: "rgba(" + [Number((Math.random() * 255).toFixed(0)), Number((Math.random() * 255).toFixed(0)), Number((Math.random() * 255).toFixed(0)), 255] + ")"
            },
            label: {
              show: (value[2] > 225) ? true : false,
              textStyle: {
                color: "#ff0000",
                padding: 5,
                backgroundColor: "#00000030"
              }
            }
          })
        }
      }
      return res
    },
    draw3dBar(id) {
      const myEcharts = this.$echarts.init(document.getElementById(id))
      myEcharts.setOption({
        title: {
          text: "bar 3D",
          x: 10,
          top: 10,
        },
        tooltip: {
          backgroundColor: 'purple',
          formatter: (params, d, callBack) => {
            var xName = ''
            var yNmae = ''
            switch (params.value[0]) {
              case 0:
                xName = '一季度'
                break;
              case 1:
                xName = '二季度'
                break;
              case 2:
                xName = '三季度'
                break;
              case 3:
                xName = '四季度'
                break;
              default:
                break;
            }
            switch (params.value[1]) {
              case 0:
                yNmae = 'UC'
                break;
              case 1:
                yNmae = 'QQ'
                break;
              case 2:
                yNmae = '360'
                break;
              case 3:
                yNmae = '搜狗'
                break;
              case 4:
                yNmae = '百度'
                break;
              case 5:
                yNmae = '猎豹'
                break;
              case 6:
                yNmae = 'Opera'
                break;
              case 7:
                yNmae = '其他'
                break;
              default:
                break;
            }
            return `${xName}<br /> ${yNmae}: ${params.value[2]}`
          },
          textStyle: {
            align: 'left'
          }
        },
        xAxis3D: {
          show: false,
          name: "",
          type: 'category', // 类目轴
          nameTextStyle: {
            color: "red"
          },
          axisLine: {
            lineStyle: {
              color: "#ff0000",
            }
          },
          // 非坐标轴线
          splitLine: {
            lineStyle: {
              color: "#ff0000"
            }
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "#ff0000"
            }
          },
          axisTick: {
            show: false
          },
          data: this.dataX
        },
        yAxis3D: {
          show: false,
          type: 'category',
          name: '',
          nameTextStyle: {
            color: "purple"
          },
          axisLine: {
            lineStyle: {
              color: "purple",
            }
          },
          splitLine: {
            lineStyle: {
              color: "purple"
            }
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "purple"
            }
          },
          axisTick: {
            show: false
          },
          data: this.dataY
        },
        zAxis3D: {
          show: false,
          name: "",
          nameTextStyle: {
            color: "#0000ff"
          },
          axisLine: {
            lineStyle: {
              color: "#0000ff",
            }
          },
          splitLine: {
            lineStyle: {
              color: "#0000ff"
            }
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "#0000ff"
            }
          },
          axisTick: {
            show: false
          },
          type: 'value' // 数值轴
        },
        grid3D: {
          show: true,
          boxWidth: 200,
          boxDepth: 300,
          viewControl: {
            // projection: 'orthographic'
          },
          light: {
            main: {
              intensity: 1.2,
              shadow: false
            },
            ambient: {
              intensity: 0.3
            }
          },
          postEffect: {
            deptOfField: {
              enable: true,
              focalDistance: 200,
              focalRange: 100
            }
          }
        },
        series: [{
          type: 'bar3D',
          name: '各季度浏览器使用频率',
          data: this.bar3dData(),
          shading: 'lambert',
          label: {
            textStyle: {
              fontSize: 16,
              borderWidth: 1
            }
          },
          emphasis: {
            label: {
              textStyle: {
                fontSize: 20,
                color: '#900'
              }
            },
            itemStyle: {
              color: '#900'
            }
          }
        }]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#bar3D {
  width: 100%;
  height: 100%;
}
</style>