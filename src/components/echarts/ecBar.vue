<template>
  <div id="bar"></div>
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
      xAxisData: [],
      data1: [],
      data2: []
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    for (var i = 0; i < 15; i++) {
      this.xAxisData.push('类目' + i);
      this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);

    }
    this.drawBar('bar')
  },
  methods: {
    drawBar(id) {
      const myEcharts = this.$echarts.init(document.getElementById(id))
      myEcharts.setOption({
        title: {
          text: '柱状图动画延迟'
        },
        legend: {
          data: ['bar', 'bar2'],
          left: 140,
        },
        toolbox: {
          // y: 'bottom',
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: this.xAxisData,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: this.data1,
          animationDelay: function (idx) {
            return idx * 10;
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: this.data2,
          animationDelay: function (idx) {
            return idx * 10 + 100;
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5;
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#bar {
  width: 100%;
  height: 100%;
}
</style>