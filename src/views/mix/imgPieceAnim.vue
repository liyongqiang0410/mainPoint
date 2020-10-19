<template>
  <div>
    <div>
      <img class="image" width="220" alt="" @click="getImg(0)" src="static/images/11.jpg">
      <img class="image" width="220" alt="" @click="getImg(1)" src="static/images/6.jpg">
      <img class="image" width="220" alt="" @click="getImg(2)" src="static/images/7.jpg">
      <img class="image" width="220" alt="" @click="getImg(3)" src="static/images/10.jpg">
    </div>
    <div>
      <canvas id="cvs" width="960" height="540"></canvas>
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
      j: 0, // 第几列
      cvs: null, // 画布对象
      ctx: null, // 绘制上下文
      RFM: null, // 渲染帧
      img: null, // 图片对象
      index: -1, // 图片索引
      rowNum: 0, // 原图被分为多少行 
      colNum: 0, // 原图被分为多少列
      width: 40, // 原图单元宽
      height: 40, // 原图单元高
      cWidth: 20, // canvas单元宽
      cHeight: 20, // canvas单元高
      rowColArr: [],
    }
  },
  mounted() {
    this.getCvs()
  },
  methods: {
    // 获取画布绘制上下文
    getCvs() {
      this.rowNum = 1080 / this.height;
      this.colNum = 1920 / this.width;
      this.cvs = document.getElementById('cvs');
      this.ctx = this.cvs.getContext('2d');
    },
    // 获取点击的图片对象
    getImg(index) {
      this.index = index
      this.img = document.getElementsByClassName('image')[index];
      this.randomArray()
    },
    // 帧绘制,每一帧做什么
    animate_it(index) {
      this.showPieceImg(this.img, this.j);
      this.j++;
      if (this.j >= this.rowNum * this.colNum) {
        this.j = 0
        return
      }
      this.RFM = window.requestAnimationFrame(this.animate_it.bind(this));
    },
    // 每一帧实际动作
    showPieceImg(img, j) {
      this.ctx.beginPath();
      this.ctx.drawImage(img, this.width * this.rowColArr[j][1], this.height * this.rowColArr[j][0], this.width, this.height, this.cWidth * this.rowColArr[j][1], this.cHeight * this.rowColArr[j][0], this.cWidth, this.cHeight);
      this.ctx.closePath();
      this.ctx.stroke();
    },
    // 在绘制时,绘制最小单元的坐标
    randomArray() {
      this.rowColArr = []
      for (let i = 0; i < this.rowNum; i++ ) {
        for (let j = 0; j < this.colNum; j++) {
          this.rowColArr.push([i, j])
        }
      }
      this.shuffle()
    },
    // 打乱数组
    shuffle () {
      for (let i = 1; i < this.rowColArr.length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [this.rowColArr[i], this.rowColArr[random]] = [this.rowColArr[random], this.rowColArr[i]];
      }
    }
  },
  watch: {
    index(val) {
      window.cancelAnimationFrame(this.RFM);
      this.ctx.clearRect(0, 0, 1920, 1080);
      this.j = 0;
      this.animate_it(val);
    }
  }
}
</script>
<style lang="scss" scoped>
</style>