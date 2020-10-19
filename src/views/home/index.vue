<template>
  <div>
    <div class="grid">
      <div class="grid-item">
        <ecLine></ecLine>
      </div>
      <div class="grid-item" id="map"></div>
      <div class="grid-item">
        <ecBar></ecBar>
      </div>
      <div class="grid-item">
        <ecPie></ecPie>
      </div>
      <div class="grid-item">
        <ecScatter></ecScatter>
      </div>
      <div class="grid-item">
        <ecCandlestick />
      </div>
      <div class="grid-item">
        <ecRadar />
      </div>
      <div class="grid-item">
        <ecGraph />
      </div>
      <div class="grid-item">
        <bar3D />
      </div>
    </div>
  </div>
</template>
<script>
import china from '@/../static/js/mapChina.js';
import ecLine from '@/components/echarts/ecLine.vue';
import ecBar from '@/components/echarts/ecBar.vue';
import ecPie from '@/components/echarts/ecPie.vue';
import ecScatter from '@/components/echarts/ecScatter.vue'
import ecCandlestick from '@/components/echarts/ecCandlestick.vue'
import ecRadar from '@/components/echarts/ecRadar.vue'
import ecGraph from '@/components/echarts/ecGraph.vue'
import bar3D from '@/components/echarts3D/bar3D.vue'
var _this;
export default {
  name: 'my-Home',
  components: {
    ecLine,
    ecBar,
    ecPie,
    ecScatter,
    ecCandlestick,
    ecRadar,
    ecGraph,
    bar3D
  },
  props: {
  },
  watch: {
  },
  data() {
    return {
      dataList: [{
        name: "南海诸岛",
        value: 0
      },
      {
        name: '北京',
        value: 54
      },
      {
        name: '天津',
        value: 13
      },
      {
        name: '上海',
        value: 40
      },
      {
        name: '重庆',
        value: 75
      },
      {
        name: '河北',
        value: 13
      },
      {
        name: '河南',
        value: 83
      },
      {
        name: '云南',
        value: 11
      },
      {
        name: '辽宁',
        value: 19
      },
      {
        name: '黑龙江',
        value: 15
      },
      {
        name: '湖南',
        value: 69
      },
      {
        name: '安徽',
        value: 60
      },
      {
        name: '山东',
        value: 39
      },
      {
        name: '新疆',
        value: 4
      },
      {
        name: '江苏',
        value: 31
      },
      {
        name: '浙江',
        value: 104
      },
      {
        name: '江西',
        value: 36
      },
      {
        name: '湖北',
        value: 1052
      },
      {
        name: '广西',
        value: 33
      },
      {
        name: '甘肃',
        value: 7
      },
      {
        name: '山西',
        value: 9
      },
      {
        name: '内蒙古',
        value: 7
      },
      {
        name: '陕西',
        value: 22
      },
      {
        name: '吉林',
        value: 4
      },
      {
        name: '福建',
        value: 18
      },
      {
        name: '贵州',
        value: 5
      },
      {
        name: '广东',
        value: 98
      },
      {
        name: '青海',
        value: 1
      },
      {
        name: '西藏',
        value: 0
      },
      {
        name: '四川',
        value: 44
      },
      {
        name: '宁夏',
        value: 4
      },
      {
        name: '海南',
        value: 22
      },
      {
        name: '台湾',
        value: 3
      },
      {
        name: '香港',
        value: 5
      },
      {
        name: '澳门',
        value: 5
      }]
    }
  },
  computed: {
  },
  beforeCreate() {
    _this = this
  },
  created() {
  },
  mounted() {
    this.drawMap("map")
  },
  methods: {
    drawMap(id) {
      const myEchartsMap = this.$echarts.init(document.getElementById(id))
      this.$echarts.registerMap('china', china)
      myEchartsMap.setOption({
        title: {
          text: '中国地图',
          left: 'center'
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: `{a} <br> {b}: {c0}`
        },
        visualMap: {
          min: 0,
          max: 1000,
          left: 26,
          bottom: 40,
          showLabel: !0,
          text: ["高", "低"],
          pieces: [{
            gt: 100,
            label: "> 100 人",
            color: "#7f1100"
          }, {
            gte: 10,
            lte: 100,
            label: "10 - 100 人",
            color: "#ff5428"
          }, {
            gte: 1,
            lt: 10,
            label: "1 - 9 人",
            color: "#ff8c71"
          }, {
            gt: 0,
            lt: 1,
            label: "疑似",
            color: "#ffd768"
          }, {
            value: 0,
            color: "#67C23A"
          }],
          show: !0
        },
        geo: {
          map: 'china',
          roam: true,
          zoom: 1.23,
          scaleLimit: {
            min: 1,
            max: 10
          },
          top: 30,
          label: {
            normal: {
              show: true,
              fontsize: '14',
              color: 'rgba(0, 0, 0, 0.7)'
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'transparent',
              borderColor: '#0477ff',
              borderWidth: 1,
              shadowColor: '#0275e480',
            },
            emphasis: {
              areaColor: 'rgba(2, 117, 228,0.8)'
            }
          }
        },
        serise: [{
          name: 'title',
          show: true,
          type: 'map',
          map: 'china',
          data: _this.dataList,
          showLegendSymbol: true,
        }]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  height: 100%;
  // [xx]  网格线
  // xx 单元格
  grid-template-columns: [c1] 3fr [c2] 4fr [c3] 3fr [c4];
  grid-template-rows: [r1] 320px [r2] 200px [r3] 200px [r4];
  // grid-row-gap: 20px;
  // grid-column-gap: 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  #map {
    width: 100%;
    height: 100%;
  }
  .grid-item {
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, #0477ff, #0477ff) left top no-repeat,
    linear-gradient(to left, #0477ff, #0477ff) left bottom no-repeat,
    linear-gradient(to left, #0477ff, #0477ff) right top no-repeat,
    linear-gradient(to right, #0477ff, #0477ff) right top no-repeat,
    linear-gradient(to right, #0477ff, #0477ff) right bottom no-repeat,
    linear-gradient(to right, #0477ff, #0477ff) right bottom no-repeat,
    linear-gradient(to bottom, #0477ff, #0477ff) left bottom no-repeat,
    linear-gradient(to bottom, #0477ff, #0477ff) left top no-repeat,
    linear-gradient(to bottom, #0477ff, #0477ff) right top no-repeat;
    background-size: 0.12rem 1rem, 1rem 0.12rem;
    border: 1px solid #dddddd;
  }
}
</style>
