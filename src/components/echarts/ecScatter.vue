<template>
  <div id="scatter"></div>
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
      data1: this.genData(5e4),
      data2: this.genData(5e4, 30)
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.drawScatter('scatter')
  },
  methods: {
    genData(len, offset) {
      var lngRange = [-10.781327, 131.48];
      var latRange = [18.252847, 52.33];

      var arr = new Float32Array(len * 2);
      var off = 0;

      for (var i = 0; i < len; i++) {
        var x = +Math.random() * 10;
        var y = +Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random() + (offset || 0) / 10;
        arr[off++] = x;
        arr[off++] = y;
      }
      return arr;
    },
    drawScatter(id) {
      const myEcharts = this.$echarts.init(document.getElementById(id))
      myEcharts.setOption({
        title: {
          text: 'scatter'
        },
        tooltip: {},
        toolbox: {
          left: 'center',
          feature: {
            dataZoom: {}
          }
        },
        legend: {
          orient: 'horizontal',
          right: 10
        },
        xAxis: [{
        }],
        yAxis: [{
        }],
        dataZoom: [{
          type: 'inside'
        }, {
          type: 'slider'
        }],
        animation: false,
        series: [{
          name: 'A',
          type: 'scatter',
          data: this.data1,
          dimensions: ['x', 'y'],
          symbolSize: 3,
          itemStyle: {
            opacity: 0.4
          },
          large: true
        }, {
          name: 'B',
          type: 'scatter',
          data: this.data2,
          dimensions: ['x', 'y'],
          symbolSize: 3,
          itemStyle: {
            opacity: 0.4
          },
          large: true
        }]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#scatter {
  width: 100%;
  height: 100%;
}
</style>