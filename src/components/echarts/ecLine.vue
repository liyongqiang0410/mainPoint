<template>
  <div id="line"></div>
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
      lineData: [
        [
          "2000-06-05",
          116
        ],
        [
          "2000-06-06",
          129
        ],
        [
          "2000-06-07",
          135
        ],
        [
          "2000-06-08",
          86
        ],
        [
          "2000-06-09",
          73
        ],
        [
          "2000-06-10",
          85
        ],
        [
          "2000-06-11",
          73
        ],
        [
          "2000-06-12",
          68
        ],
        [
          "2000-06-13",
          92
        ],
        [
          "2000-06-14",
          130
        ],
        [
          "2000-06-15",
          245
        ],
        [
          "2000-06-16",
          139
        ],
        [
          "2000-06-17",
          115
        ],
        [
          "2000-06-18",
          111
        ],
        [
          "2000-06-19",
          309
        ],
        [
          "2000-06-20",
          206
        ],
        [
          "2000-06-21",
          137
        ],
        [
          "2000-06-22",
          128
        ],
        [
          "2000-06-23",
          85
        ],
        [
          "2000-06-24",
          94
        ],
        [
          "2000-06-25",
          71
        ],
        [
          "2000-06-26",
          106
        ],
        [
          "2000-06-27",
          84
        ],
        [
          "2000-06-28",
          93
        ],
        [
          "2000-06-29",
          85
        ],
        [
          "2000-06-30",
          73
        ],
        [
          "2000-07-01",
          83
        ],
        [
          "2000-07-02",
          125
        ],
        [
          "2000-07-03",
          107
        ],
        [
          "2000-07-04",
          82
        ],
        [
          "2000-07-05",
          44
        ],
        [
          "2000-07-06",
          72
        ],
        [
          "2000-07-07",
          106
        ],
        [
          "2000-07-08",
          107
        ],
        [
          "2000-07-09",
          66
        ],
        [
          "2000-07-10",
          91
        ],
        [
          "2000-07-11",
          92
        ],
        [
          "2000-07-12",
          113
        ],
        [
          "2000-07-13",
          107
        ],
        [
          "2000-07-14",
          131
        ],
        [
          "2000-07-15",
          111
        ],
        [
          "2000-07-16",
          64
        ],
        [
          "2000-07-17",
          69
        ],
        [
          "2000-07-18",
          88
        ],
        [
          "2000-07-19",
          77
        ],
        [
          "2000-07-20",
          83
        ],
        [
          "2000-07-21",
          111
        ],
        [
          "2000-07-22",
          57
        ],
        [
          "2000-07-23",
          55
        ],
        [
          "2000-07-24",
          60
        ],
        [
          "2000-07-25",
          44
        ],
        [
          "2000-07-26",
          127
        ],
        [
          "2000-07-27",
          114
        ],
        [
          "2000-07-28",
          86
        ],
        [
          "2000-07-29",
          73
        ],
        [
          "2000-07-30",
          52
        ],
        [
          "2000-07-31",
          69
        ],
        [
          "2000-08-01",
          86
        ],
        [
          "2000-08-02",
          118
        ],
        [
          "2000-08-03",
          56
        ],
        [
          "2000-08-04",
          91
        ],
        [
          "2000-08-05",
          121
        ],
        [
          "2000-08-06",
          127
        ],
        [
          "2000-08-07",
          78
        ],
        [
          "2000-08-08",
          79
        ],
        [
          "2000-08-09",
          46
        ],
        [
          "2000-08-10",
          108
        ],
        [
          "2000-08-11",
          80
        ],
        [
          "2000-08-12",
          79
        ],
        [
          "2000-08-13",
          69
        ],
        [
          "2000-08-14",
          80
        ],
        [
          "2000-08-15",
          105
        ],
        [
          "2000-08-16",
          119
        ],
        [
          "2000-08-17",
          105
        ],
        [
          "2000-08-18",
          55
        ],
        [
          "2000-08-19",
          74
        ],
        [
          "2000-08-20",
          41
        ],
        [
          "2000-08-21",
          62
        ],
        [
          "2000-08-22",
          104
        ],
        [
          "2000-08-23",
          118
        ],
        [
          "2000-08-24",
          121
        ],
        [
          "2000-08-25",
          126
        ],
        [
          "2000-08-26",
          99
        ],
        [
          "2000-08-27",
          92
        ],
        [
          "2000-08-28",
          75
        ],
        [
          "2000-08-29",
          91
        ],
        [
          "2000-08-30",
          94
        ],
        [
          "2000-08-31",
          69
        ],
        [
          "2000-09-01",
          93
        ],
        [
          "2000-09-02",
          124
        ],
        [
          "2000-09-03",
          120
        ],
        [
          "2000-09-04",
          93
        ],
        [
          "2000-09-05",
          26
        ],
        [
          "2000-09-06",
          32
        ],
        [
          "2000-09-07",
          70
        ],
        [
          "2000-09-08",
          89
        ],
        [
          "2000-09-10",
          117
        ],
        [
          "2000-09-11",
          144
        ],
        [
          "2000-09-12",
          111
        ],
        [
          "2000-09-13",
          120
        ],
        [
          "2000-09-14",
          97
        ],
        [
          "2000-09-15",
          108
        ],
        [
          "2000-09-17",
          74
        ],
        [
          "2000-09-18",
          105
        ],
        [
          "2000-09-19",
          127
        ],
        [
          "2000-09-20",
          143
        ],
        [
          "2000-09-21",
          62
        ],
        [
          "2000-09-22",
          80
        ],
        [
          "2000-09-23",
          136
        ],
        [
          "2000-09-24",
          29
        ],
        [
          "2000-09-25",
          91
        ],
        [
          "2000-09-26",
          93
        ],
        [
          "2000-09-27",
          114
        ],
        [
          "2000-09-28",
          45
        ],
        [
          "2000-09-29",
          102
        ],
        [
          "2000-09-30",
          111
        ],
        [
          "2000-10-01",
          93
        ],
        [
          "2000-10-02",
          117
        ],
        [
          "2000-10-03",
          78
        ],
        [
          "2000-10-04",
          76
        ],
        [
          "2000-10-05",
          100
        ],
        [
          "2000-10-06",
          75
        ],
        [
          "2000-10-07",
          169
        ],
        [
          "2000-10-08",
          59
        ],
        [
          "2000-10-09",
          89
        ],
        [
          "2000-10-10",
          91
        ],
        [
          "2000-10-11",
          75
        ],
        [
          "2000-10-12",
          28
        ],
        [
          "2000-10-13",
          47
        ],
        [
          "2000-10-14",
          92
        ],
        [
          "2000-10-16",
          72
        ],
        [
          "2000-10-17",
          149
        ],
        [
          "2000-10-18",
          86
        ],
        [
          "2000-10-19",
          88
        ],
        [
          "2000-10-20",
          104
        ],
        [
          "2000-10-21",
          91
        ],
        [
          "2000-10-22",
          88
        ],
        [
          "2000-10-23",
          55
        ],
        [
          "2000-10-24",
          63
        ],
        [
          "2000-10-25",
          41
        ],
        [
          "2000-10-26",
          85
        ],
        [
          "2000-10-27",
          99
        ],
        [
          "2000-10-28",
          121
        ],
        [
          "2000-10-29",
          96
        ],
        [
          "2000-10-30",
          90
        ],
        [
          "2000-11-01",
          80
        ],
        [
          "2000-11-02",
          116
        ],
        [
          "2000-11-03",
          207
        ],
        [
          "2000-11-04",
          306
        ],
        [
          "2000-11-05",
          283
        ],
        [
          "2000-11-06",
          200
        ],
      ]
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.drawLine('line')
  },
  methods: {
    drawLine(id) {
      const myEcharts = this.$echarts.init(document.getElementById(id))
      myEcharts.setOption({
        title: {
          text: 'Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: this.lineData.map(function (item) {
            return item[0];
          })
        },
        yAxis: {
          splitLine: {
            show: true
          }
        },
        // 工具盒
        toolbox: {
          left: 'center',
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [{
          startValue: '2014-06-01'
        }, {
          type: 'inside'
        }],
        // visualMap: {
        //   top: 10,
        //   right: 10,
        //   pieces: [{
        //     gt: 0,
        //     lte: 50,
        //     color: '#096'
        //   }, {
        //     gt: 50,
        //     lte: 100,
        //     color: '#ffde33'
        //   }, {
        //     gt: 100,
        //     lte: 150,
        //     color: '#ff9933'
        //   }, {
        //     gt: 150,
        //     lte: 200,
        //     color: '#cc0033'
        //   }, {
        //     gt: 200,
        //     lte: 300,
        //     color: '#660099'
        //   }, {
        //     gt: 300,
        //     color: '#7e0023'
        //   }],
        //   outOfRange: {
        //     color: '#999'
        //   }
        // },
        series: {
          name: 'Line',
          type: 'line',
          data: this.lineData.map(function (item) {
            return item[1];
          }),
          markLine: {
            silent: true,
            data: [{
              yAxis: 50
            }, {
              yAxis: 100
            }, {
              yAxis: 150
            }, {
              yAxis: 200
            }, {
              yAxis: 300
            }]
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#line {
  width: 100%;
  height: 100%;
}
</style>