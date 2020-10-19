<template>
  <div>
    <h4 class="title">filter 滤镜属性值及含义</h4>
    <div class="table">
      <el-row class="table_row">
        <el-col class="table_col" :span="4">blur(5px)</el-col>
        <el-col class="table_col" :span="2">模糊</el-col>
        <el-col class="table_col" :span="4">brightness(1.4)</el-col>
        <el-col class="table_col" :span="2">亮度</el-col>
        <el-col class="table_col" :span="4">contrast(200%)</el-col>
        <el-col class="table_col" :span="2">对比度</el-col>
        <el-col class="table_col" :span="4">drop-shadow(x y b c)</el-col>
        <el-col class="table_col" :span="2">投影</el-col>
        <el-col class="table_col" :span="4">grayscale(50%)</el-col>
        <el-col class="table_col" :span="2">灰度</el-col>
        <el-col class="table_col" :span="4">hue-rotate(90deg)</el-col>
        <el-col class="table_col" :span="2">色调变化</el-col>
        <el-col class="table_col" :span="4">invert(75%)</el-col>
        <el-col class="table_col" :span="2">反相</el-col>
        <el-col class="table_col" :span="4">opacity(25%)</el-col>
        <el-col class="table_col" :span="2">透明度</el-col>
        <el-col class="table_col" :span="4">saturate(230%)</el-col>
        <el-col class="table_col" :span="2">饱和度</el-col>
        <el-col class="table_col" :span="4">sepia(60%) </el-col>
        <el-col class="table_col" :span="2">褐色</el-col>
      </el-row>
    </div>
    <div>
      <div class="grid">
        <div>
          <img src="static/images/1.jpg" title="原图" alt="原图" class="grid_item">
        </div>
        <div>
          <img src="static/images/1.jpg" title="模糊: blur(2px)" alt="模糊: blur(2px)" class="grid_item" style="--filter: blur(2px);">
          <!-- <div class="progress">
            <div class="slide">
              <span class="min">0</span> 
              <progress class="content" value="2" max="20" ></progress>
              <span class="max">20</span>
            </div>
            <div class="bar"></div>
          </div> -->
        </div>
        <div>
          <img src="static/images/1.jpg" title="亮度: brightness(1.2)" alt="亮度: brightness(1.2)" class="grid_item" style="--filter: brightness(1.2)">
        </div>
        <div>
          <img src="static/images/1.jpg" title="对比度: contrast(1.4)" alt="对比度: contrast(1.4)" class="grid_item" style="--filter: contrast(1.4)">
        </div>
        <div>
          <img src="static/images/1.jpg" title="投影: drop-shadow(2px 2px 8px #000)" alt="投影: drop-shadow(2px 2px 8px #000)" class="grid_item" style="--filter: drop-shadow(2px 2px 8px #000)">
        </div>
        <div>
          <img src="static/images/1.jpg" title="灰度: grayscale(0.3)" alt="灰度: grayscale(0.3)" class="grid_item" style="--filter: grayscale(0.3)">
        </div>
        <div>
          <img src="static/images/1.jpg" title="色调变化: hue-rotate(90deg)" alt="色调变化: hue-rotate(90deg)" class="grid_item" style="--filter: hue-rotate(90deg)">
        </div>
        <div>
          <img src="static/images/1.jpg" title="反相: invert(0.9)" alt="反相: invert(0.9)" class="grid_item" style="--filter: invert(0.9)">
        </div>
        <div>
          <img src="static/images/1.jpg" title="透明度: opacity(0.7)" alt="透明度: opacity(0.7)" class="grid_item" style="--filter: opacity(0.7)">
        </div>
        <div>
          <img src="static/images/1.jpg" title="饱和度: saturate(2.0)" alt="饱和度: saturate(2.0)" class="grid_item" style="--filter: saturate(2.0)">
        </div>
        <div>
          <img src="static/images/1.jpg" title="褐色: sepia(0.5)" alt="褐色: sepia(0.5)" class="grid_item" style="--filter: sepia(0.5)">
        </div>
        <!-- <div>
          <img src="static/images/1.jpg" alt="" class="grid_item" style="--filter: blur(20px); --maskImg: radial-gradient(transparent, transparent 10%, black 60%);">
        </div> -->
      </div>
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
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
$border: 1px solid #000;
:root {
  --a: red;
}
.table {
  margin: 20px 0;
  .table_row {
    border-top: $border;
    border-left: $border;
  }
  .table_col {
    overflow: auto;
    height: 32px;
    line-height: 31px;
    white-space: nowrap;
    border-bottom: $border;
    border-right: $border;
    background-color: var(--a);
  }
  .table_col:nth-child(2n-1) {
    font-weight: 700;
  }
}
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  .grid_item {
    width: 100%;
    object-fit: contain;
  }
  .grid_item:nth-of-type(n + 1) {
    filter: var(--filter);
    mask-image: var(--maskImg);
  }
  .progress {
    position: relative;
    .slide {
      height: 24px;
      line-height: 24px;
      .min {
        color: green;
      }
      .content {
        width: 80%;
      }
      .max {
        color: red;
      }
    }
    .bar {
      position: absolute;
      width: 12px;
      height: 22px;
      border: 1px solid #000;
      background-color: #fff;
      cursor: pointer;
    }
  }
}
</style>