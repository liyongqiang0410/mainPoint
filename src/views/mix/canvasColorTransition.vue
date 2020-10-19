<template>
  <div>
    <canvas ref="canvas" width="400" height="300"></canvas>
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
      RMF: null,
      curFrame: 0, //当前帧
      animateFrame: 600, // 帧数
      startColor: '#aa076b',
      endColor: '#61045f',
      pickerColor: '',
    }
  },
  mounted() {
    this.getBasic()
  },
  methods: {
    getBasic() {
      this.cvs = this.$refs.canvas;
      this.cvs.addEventListener('click', () => {
        this.pickerColor = this.getPicker();
        window.requestAnimationFrame(this.animate_it.bind(this));
      })
      this.ctx = this.cvs.getContext('2d');
      this.startColor = this.toRGBA(this.startColor);
      this.endColor = this.toRGBA(this.endColor);
      this.animate_it()
    },
    getPicker() {
      var rect = this.cvs.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      var rgbaPicker = this.ctx.getImageData(x, y, 1, 1).data;
      // 转16
      var hexStr = "#";
      for (let i = 0; i < rgbaPicker.length; i++) {
        var hex = ('0' + Number.parseInt(rgbaPicker[i]).toString(16).toLocaleUpperCase()).slice(-2);
        hexStr += hex;
      }
      return (hexStr);
    },
    // 将色值转为rgba值
    toRGBA(color) {
      var div = document.createElement('div');
      div.style.color = color;
      document.body.appendChild(div);
      var cssColor = window.getComputedStyle(div).color;
      document.body.removeChild(div);
      var arrRGBA = cssColor.match(/\d+/g);
      if (arrRGBA.length == 3) {
        arrRGBA.push(1);
      }
      return arrRGBA.map(function (value) {
        return value * 1;
      });
    },
    animate_it() {
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
      let newR = this.cubicEaseOut(this.curFrame, this.startColor[0], this.endColor[0], this.animateFrame);
      let newG = this.cubicEaseOut(this.curFrame, this.startColor[1], this.endColor[1], this.animateFrame);
      let newB = this.cubicEaseOut(this.curFrame, this.startColor[2], this.endColor[2], this.animateFrame);
      let newA = this.cubicEaseOut(this.curFrame, this.startColor[3], this.endColor[3], this.animateFrame);
      this.ctx.fillStyle = 'rgba(' + [newR, newG, newB, newA].join() + ')';
      this.ctx.arc(this.cvs.width / 2, this.cvs.height / 2, this.cvs.height / 2, 0, Math.PI * 2, true);
      this.ctx.fill();
      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.fillText('(' + [newR, newG, newB, newA].join() + ')', this.cvs.width / 2, this.cvs.height / 2,)
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle'
      this.curFrame++;
      if (this.curFrame++ <= this.animateFrame) {
        this.RMF = window.requestAnimationFrame(this.animate_it.bind(this));
      } else {
        this.curFrame = 0;
        window.cancelAnimationFrame(this.RMF)
      }
    },
    /** ease-Out 缓动动画
     * curFrame: Number 动画执行到的阶段 当前帧
     * startNum: Number 开始值
     * endNum: Number 结束值
     * animateFrame: Number 动画执行结束需要的帧数 即时长
    */
    cubicEaseOut(curFrame, startNum, endNum, animateFrame) {
      return Math.floor(endNum * ((curFrame = curFrame / animateFrame - 1) * curFrame * curFrame + 1) + startNum);
    }
  }
}
</script>
<style lang="scss" scoped>
</style>