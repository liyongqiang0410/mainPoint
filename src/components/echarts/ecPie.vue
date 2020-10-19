<template>
  <div id="pie"></div>
</template>
<script>
export default {
  name: 'my-echarts-pie',
  components: {
  },
  props: {
  },
  watch: {
  },
  data() {
    return {
      dataItem: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ]
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.drawPie('pie')
  },
  methods: {
    drawPie(id) {
      const myEcharts = this.$echarts.init(document.getElementById(id))
      myEcharts.setOption({
        title: {
          text: 'pie',
          left: 10,
          top: 10,
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          bottom: 10,
          left: 10,
          data: this.dataItem
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            left: '40%',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.data
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#pie {
  width: 100%;
  height: 100%;
}
</style>