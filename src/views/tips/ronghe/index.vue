<template>
  <div class="pages">
    <div>
      <svg style="position:absolute;height:0;width: 0;clip:rect(0 0 350 237);">
        <defs>
          <filter id="filter-ripple">
            <feImage xlink:href="static/mixImg/ripple-gray.png" :x="xl" :y="yt" :width="widthValue" :height="widthValue" result="ripple"></feImage>
            <feDisplacementMap xChannelSelector="G" yChannelSelector="R" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" :scale="scaleValue"></feDisplacementMap>
            <feComposite operator="in" in2="ripple"></feComposite>
          </filter>
        </defs>
      </svg>
    </div>
    <div class="element">
      <img src="static/images/1.jpg" alt="" class="ripple" @click="ripple">
    </div>
    <div class="range">
      <span class="rangeName">scale:</span><input class="rangeInput" type="range" min="0" max="200" v-model="scaleValue">
      <span class="rangeName">width:</span><input class="rangeInput" type="range" min="0" max="512" v-model="widthValue">
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data() {
    return {
      scaleValue: 120,
      widthValue: 350,
      domWidth: 0,
      domHeight: 0,
    }
  },
  computed: {
    xl() {
      return (this.domWidth/2 - this.widthValue/2)
    },
    yt() {
      return (this.domHeight/2 - this.widthValue/2)
    }
  },
  mounted() {
    this.domWidth = document.getElementsByClassName('ripple')[0].clientWidth
    this.domHeight = document.getElementsByClassName('ripple')[0].clientHeight
  },
  methods: {
    ripple() {
      
    },
  }
}
</script>
<style>
</style>
<style lang="scss" scoped>
.pages {
  .element {
    width: 350px;
    height: 237px;
    .ripple {
      filter: url(#filter-ripple);
    }
  }
  .range {
    height: 22px;
    line-height: 22px;
    .rangeName {
      display: inline-block;
      height: 22px;
      line-height: 22px;
    }
    .rangeInput {
      display: inline-block;
      height: 22px;
      line-height: 22px;
      margin: 0px;
    }
  }
}
</style>