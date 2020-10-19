<template>
  <div>
    <h4 class="title">background-blend-mode 背景混合模式</h4>
    <div class="backgroundBlendMode">
      <div class="item">
        <pre class="line-numbers">
          <code class="lang-CSS">
            width: 100%;
            height: 400px;
            margin: auto;
            background: url('7.jpg') no-repeat center, 
            url('5.jpg') no-repeat center, 
            url('16.jpg') no-repeat center;
            background-size: cover;
            background-blend-mode: screen;
            //background-blend-mode 可选值 normal-正常 multiply-正片叠底 screen-滤色 overlay-叠加 darken-变暗
            lighten-变亮 color-dodge-颜色减淡 color-burn-颜色加深 hard-light-强光 soft-light-柔光
            difference-差值 exclusion-排除 hue-色相 saturation-饱和度 color-颜色 luminosity-亮度 initial-初始
            inherit-继承 unset-复原 
          </code>
        </pre>
      </div>
    </div>
    <h4 class="title">mix-blend-mode: screen; img 滤色
      <el-select v-model="mixValue" placeholder="请选择" size="mini">
        <el-option v-for="item in imgOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </h4>
    <div class="mix">
      <div class="mix-item">
        <img src="static/mixImg/landscape.jpg" alt="">
      </div>
      <div class="mix-item">
        <img :src="mixValue" alt="">
      </div>
      <div class="mixBlendMode mix-item">
        <img class="mixBlendModeImg" :src="mixValue" alt="">
      </div>
    </div>
    <h4 class="title">mix-blend-mode: screen; video
      <el-select v-model="mixVValue" placeholder="请选择" size="mini">
        <el-option v-for="item in videoOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </h4>
    <div class="mixVideo">
      <div class="mix-itemBg">
        <img class="mixImg" src="static/mixImg/landscape.jpg" alt="">
      </div>
      <div class="mix-itemVideo">
        <video :src="mixVValue" autoplay loop class="video"></video>
      </div>
      <div class="mixBgVideo">
        <video :src="mixVValue" autoplay loop class="video"></video>
      </div>
    </div>
    <div class="softLight">
      <img src="static/images/1.jpg" alt="" style="mix-blend-mode: soft-light;">
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-BlendMode',
  components: {
  },
  props: {
  },
  watch: {
  },
  data() {
    return {
      mixValue: 'static/mixImg/bright.jpg', // 图片滤色地址
      mixVValue: 'static/video/fire.mp4', // video 滤色地址
      imgOptions: [
        {
          label: '明亮的',
          value: 'static/mixImg/bright.jpg',
        },
        {
          label: '弥漫的',
          value: 'static/mixImg/diffuse.jpg',
        },
        {
          label: '雨',
          value: 'static/mixImg/rains.jpg',
        },
        {
          label: '雪',
          value: 'static/mixImg/snow.jpg',
        }
      ],
      videoOptions: [
        {
          label: '烟花',
          value: 'static/video/fire.mp4',
        },
        {
          label: '暴雨',
          value: 'static/video/rains.mp4',
        }
      ]
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.title {
  line-height: 28px;
}
.backgroundBlendMode {
  .item {
    width: 100%;
    height: 400px;
    margin: auto;
    background: url("../../../static/images/7.jpg") no-repeat center,
      url("../../../static/images/5.jpg") no-repeat center,
      url("../../../static/images/16.jpg") no-repeat center;
    background-blend-mode: screen;
    background-size: cover;
    .line-numbers {
      background: rgba(255, 255, 255, 0.3);
    }
    .line-numbers::after {
      content: "";
      filter: blur(2px);
    }
  }
}
.mix {
  display: flex;
  justify-content: space-between;
  .mix-item {
    display: block;
    width: 300px;
    height: 400px;
    .video {
      width: 300px;
      mix-blend-mode: screen;
    }
  }
  .mixBlendMode {
    background: url("../../../static/mixImg/landscape.jpg") center no-repeat;
    .mixBlendModeImg {
      mix-blend-mode: screen;
    }
  }
}
.mixVideo {
  display: flex;
  justify-content: space-between;
  .mix-itemBg {
    .mixImg {
      width: 300px;
      height: 534px;
      object-fit: cover;
    }
  }
  .mix-itemVideo {
    width: 300px;
    height: 534px;
    .video {
      width: 300px;
      height: 534px;
    }
  }
  .mixBgVideo {
    width: 300px;
    height: 534px;
    background: url("../../../static/mixImg/landscape.jpg") center no-repeat;
    background-size: cover;
    .video {
      width: 300px;
      height: 534px;
      display: block;
      mix-blend-mode: screen;
    }
  }
}
</style>