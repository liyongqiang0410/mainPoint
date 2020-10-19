<template>
  <div class="nAngle">
    <canvas ref="cvs"></canvas>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data() {
    return {
      cvs: null,
      ctx: null,
      RAF: null,
      starArr: [],
      arr: [1, [1, 2], 2, 3, [1, 2], 1, 2, 12, 13, 23]
    }
  },
  mounted() {
    // console.log(this.arr[1] === this.arr[4]); // false
    // console.log(this.uniq(this.arr)); //[1, [1, 2], 2, 3, [1, 2], 12, 13, 23]
    this.generetorStar();
    // console.log(this.starArr);
    this.init();

  },
  methods: {
    init() {
      this.cvs = this.$refs.cvs;
      this.ctx = this.cvs.getContext('2d');
      this.cvs.width = 1180;
      this.cvs.height = 587;
      this.render();
    },
    render() {
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
      this.blackBg();
      for (let n = 0; n < this.starArr.length; n++) {
        this.draw(n);
      }
      this.RAF = window.requestAnimationFrame(this.render.bind(this));
    },
    blackBg() {
      this.ctx.rect(0, 0, this.cvs.width, this.cvs.height);
      this.ctx.fillStyle = "#000000";
      this.ctx.fill();
    },
    draw(n) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.starArr[n].point[0][0], this.starArr[n].point[0][1])
      for (let i = 0, j = 0; j < this.starArr[n].point.length; j++) {
        i = (i + 2) % 5
        this.ctx.lineTo(this.starArr[n].point[i][0], this.starArr[n].point[i][1])
      }
      this.starArr[n].opacity -= this.starArr[n].speed;
      if (this.starArr[n].opacity <= 0) {
        this.starArr[n].opacity = 0;
        this.starArr[n].speed = -this.starArr[n].speed;
      }
      // var opacityHex = this.starArr[n].opacity.toString(16);

      this.starArr.speed
      this.ctx.closePath();
      this.ctx.strokeStyle = '#FFFFFF';
      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.lineWidth = 2;
      this.ctx.lineJoin = 'round';
      this.ctx.lineCap = 'round';
      // this.ctx.stroke();
      this.ctx.fill();
    },
    generetorStar(n) {
      this.starArr = []
      if (n) {
        for (let i = 0; i < n; i++) {
          this.starArr.push(new this.STAR());
        }
      } else {
        for (let i = 0; i < 10; i++) {
          this.starArr.push(new this.STAR());
        }
      }
    },
    STAR() {
      this.x = Math.floor(Math.random() * 1120 + 30); // 中心坐标
      this.y = Math.floor(Math.random() * 527 + 30);
      this.r = Math.floor(Math.random() * 25 + 5); // 半径
      this.point = []; // 五角心顶点坐标数组
      this.randomAngle = Math.random() * Math.PI * 2 / 5; // 点随机偏转角度\
      this.opacity = Math.floor(Math.random() * 150 + 105);
      this.speed = Math.floor(Math.random() * 3);
      for (let i = 0; i < 5; i++) {
        var p = [];
        p.push(this.x + Math.floor(this.r * Math.sin(i * Math.PI * 2 / 5 + this.randomAngle)));
        p.push(this.y + Math.floor(this.r * Math.cos(i * Math.PI * 2 / 5 + this.randomAngle)));
        this.point.push(p);
      }
      this.draw = () => {

      }
    },
    uniq(arr = []) {
      return arr.reduce((t, v) => t.includes(v) ? t : [...t, v], []);
    }
  }
}
</script>
<style lang="scss" scoped>
</style>