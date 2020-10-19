<template>
  <div id="graph"></div>
</template>
<script>
export default {
  name: 'my-Graph',
  components: {
  },
  props: {
  },
  watch: {
  },
  data() {
    return {
      parentDataArr: [{
        name: '父1',
        x: 300,
        y: 100,
        value: '0',
      }, {
        name: '母1',
        x: 800,
        y: 100,
        value: '0',
      }],
      sunDataArr: [{
        name: '子1',
        x: -150,
        y: 300,
        value: '0-1'
      }, {
        name: '子1配',
        x: 50,
        y: 300,
        value: '0-1'
      }, {
        name: '子2',
        x: 250,
        y: 300,
        value: '0-2'
      }, {
        name: '子2配',
        x: 450,
        y: 300,
        value: '0-2'
      }, {
        name: '子3',
        x: 650,
        y: 300,
        value: '0-3'
      }, {
        name: '子3配',
        x: 850,
        y: 300,
        value: '0-3'
      }, {
        name: '女1',
        x: 1050,
        y: 300,
        value: '0-4'
      }, {
        name: '女1配',
        x: 1250,
        y: 300,
        value: '0-4'
      }],
      grandSunDataArr: [{
        name: '孙1',
        x: -350,
        y: 500,
        value: '0-1-1'
      }, {
        name: '孙1配',
        x: -150,
        y: 500,
        value: '0-1-1'
      }, {
        name: '孙2',
        x: 50,
        y: 500,
        value: '0-1-2'
      }, {
        name: '孙3',
        x: 250,
        y: 500,
        value: '0-2-1'
      }, {
        name: '孙女1',
        x: 450,
        y: 500,
        value: '0-2-2'
      }, {
        name: '孙女1配',
        x: 650,
        y: 500,
        value: '0-2-2'
      }, {
        name: '孙女2',
        x: 850,
        y: 500,
        value: '0-1-3'
      }, {
        name: '孙4',
        x: 1050,
        y: 500,
        value: '0-3-1'
      }, {
        name: '孙女3',
        x: 1250,
        y: 500,
        value: '0-3-2'
      }, {
        name: '孙5',
        x: 1450,
        y: 500,
        value: '0-3-3'
      }],
      greatGrandSonDataArr: [{
        name: '曾1',
        x: -550,
        y: 700,
        value: '0-1-1-1'
      }, {
        name: '曾女1',
        x: -350,
        y: 700,
        value: '0-1-1-2'
      }],
      data: [],
      linksData: [],
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.getData()
    this.getLinksData()
    this.drawGraph('graph')
  },
  methods: {
    getData() {
      this.data = [...this.parentDataArr, ...this.sunDataArr, ...this.grandSunDataArr, ...this.greatGrandSonDataArr]
    },
    getLinksData() {
      // p_s
      const p_s_linksArr = this.getP_S(this.parentDataArr, this.sunDataArr, 1)
      // s_s
      const s_s_linksArr = this.getS_s()
      // s_gs
      const s_gsLinksArr = this.getP_S(this.sunDataArr, this.grandSunDataArr, 2)
      // gs_gs
      const gs_gsLinksArr = this.getGs_gs(this.grandSunDataArr, 3)
      // P_S 父子
      const gs_ggsLinksArr = this.getP_S(this.grandSunDataArr, this.greatGrandSonDataArr, 3)
      // S_S 兄弟
      const s_sArr = this.getBrothersASisters(this.greatGrandSonDataArr, 4)

      this.linksData = [...p_s_linksArr, ...s_s_linksArr, ...s_gsLinksArr, ...gs_gsLinksArr, ...gs_ggsLinksArr, ...s_sArr]
    },
    getS_s() {
      var arr = []
      for (let i = 0; i < this.sunDataArr.length; i++) {
        for (let j = i + 1; j < this.sunDataArr.length; j++) {
          let item = {
            source: '',
            target: '',
            lineStyle: {
              color: 'green',
              type: 'dashed',
              curveness: 0.4
            },
          }
          if (this.sunDataArr[i].name.indexOf('配') >= 0) {
            continue
          } else if (this.sunDataArr[j].name.indexOf('配') >= 0) {
            if (this.sunDataArr[i].name + '配' === this.sunDataArr[j].name) {
              arr.push({
                source: this.sunDataArr[i].name,
                target: this.sunDataArr[j].name
              })
            }
          } else {
            item.source = this.sunDataArr[i].name
            item.target = this.sunDataArr[j].name
            arr.push(item)
          }
        }
      }
      return arr
    },
    getGs_gs(Array, deep) {
      var arr = []
      for (let i = 0; i < Array.length; i++) {
        for (let j = i + 1; j < Array.length; j++) {
          if (Array[i].value === Array[j].value) {
            arr.push({
              source: Array[i].name,
              target: Array[j].name,
            })
          } else if (Array[i].value.slice(0, deep) === Array[j].value.slice(0, deep)) {
            arr.push({
              source: Array[i].name,
              target: Array[j].name,
              lineStyle: {
                color: 'green',
                type: 'dashed',
                curveness: 0.4
              },
            })
          } else {
            // arr.push({
            //   source: Array[i].name,
            //   target: Array[j].name,
            //   lineStyle: {
            //     type: 'dashed',
            //     curveness: 0.4
            //   },
            // })
          }
        }
      }
      return arr
    },
    // 父子关系(只要构成父子关系)
    getP_S(parentArr, sunArr, nth) {
      var arr = []
      nth = 2 * nth - 1
      for (let i = 0; i < parentArr.length; i++) {
        for (let j = 0; j < sunArr.length; j++) {
          if (parentArr[i].value === sunArr[j].value.slice(0, nth)) {
            let item = {
              source: '',
              target: '',
              lineStyle: {
                color: 'purple'
              }
            }
            item.source = parentArr[i].name
            item.target = sunArr[j].name
            arr.push(item)
          }
        }
      }
      return arr
    },
    getBrothersASisters(Array, nth) {
      var arr = []
      nth = 2 * (nth -1) - 1
      for (let i = 0; i < Array.length; i ++) {
        for (let j = i + 1; j < Array.length; j ++) {
          if (Array[i].value.slice(0, nth) === Array[j].value.slice(0, nth)) {
            let item = {
              source: '',
              target: '',
              lineStyle: {
                color: 'green',
                type: 'dashed',
                curveness: 0.4
              },
            }
            item.source = Array[i].name
            item.target = Array[j].name
            arr.push(item)
          }
        }
      }
      return arr
    },
    drawGraph(id) {
      const myEcharts = this.$echarts.init(document.getElementById(id))
      myEcharts.setOption({
        title: {
          text: 'Graph',
          left: 10,
          top: 10,
        },
        tooltip: {
          formatter: `{a}<br /> {b}: {c}`
        },
        toolbox: {
          feature: {
            restore: {}
          }
        },
        series: [
          {
            name: '关系图',
            type: 'graph',
            layout: 'none',
            zoom: 1.5,
            hoverAnimation: false,
            roam: true,
            focusNodeAdjacency: true,
            draggable: true,
            edgeSymbol: 'arrow',
            edgeSymbolSize: 4,
            emphasis: {
              lineStyle: {
                width: 3
              }
            },
            label: {
              show: true,
              position: 'bottom'
            },
            lineStyle: {
              color: 'rgba(255, 0, 0, 1)',
              width: 2
            },
            data: this.data,
            links: this.linksData
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#graph {
  width: 100%;
  height: 100%;
}
</style>