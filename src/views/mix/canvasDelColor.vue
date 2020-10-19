<template>
  <div>
    <canvas ref='cvs' width="400"></canvas>
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
      pickerColor: '',
      imgSrc: null,
      rgbaPicker: null,
    }
  },
  mounted() {
    this.getBasic()
  },
  methods: {
    // 上传图片的方法 这里暂时不用
    fileChange(event) {
      if (event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.imgSrc = reader.result
        }
      } else return
    },
    init() {
      let img = new Image();
      img.onload = () => {
        this.cvs.height = this.cvs.width / img.width * img.height;
        this.ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.cvs.width, this.cvs.height);
        this.imgData = this.ctx.getImageData(0, 0, this.cvs.width, this.cvs.height);
        this.imgDataResult = this.ctx.getImageData(0, 0, this.cvs.width, this.cvs.height);
      }
      // 可以使用 input file 上传图片
      img.src = '@/../static/images/16.jpg'
    },
    getBasic() {
      this.cvs = this.$refs.cvs;
      this.ctx = this.cvs.getContext('2d');
      this.cvs.addEventListener('click', () => {
        this.pickerColor = this.getPicker();
        this.delColorData()
      })
      this.init()
    },
    getPicker() {
      var rect = this.cvs.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      this.rgbaPicker = this.ctx.getImageData(x, y, 1, 1).data;
      // 转16
      var hexStr = "#";
      for (let i = 0; i < this.rgbaPicker.length; i++) {
        var hex = ('0' + Number.parseInt(this.rgbaPicker[i]).toString(16).toLocaleUpperCase()).slice(-2);
        hexStr += hex;
      }
      return (hexStr);
    },
    delColorData() {
      // 像素点色值
      var rgba = this.rgbaPicker;
      // 像素空间距离,距离越大,差距越大
      var tolerance = 20;
      // 基于原始图片数据处理
      for (var index = 0; index < this.imgData.data.length; index += 4) {
        var r = this.imgData.data[index];
        var g = this.imgData.data[index + 1];
        var b = this.imgData.data[index + 2];

        if (Math.sqrt(
          (r - rgba[0]) * (r - rgba[0]) +
          (g - rgba[1]) * (g - rgba[1]) +
          (b - rgba[2]) * (b - rgba[2])) <= tolerance
        ) {
          this.imgDataResult.data[index] = 0;
          this.imgDataResult.data[index + 1] = 0;
          this.imgDataResult.data[index + 2] = 0;
          this.imgDataResult.data[index + 3] = 0;
        } else {
          this.imgDataResult.data[index] = r;
          this.imgDataResult.data[index + 1] = g;
          this.imgDataResult.data[index + 2] = b;
          this.imgDataResult.data[index + 3] = this.imgData.data[index + 3];
        }
      }
      // put数据
      this.ctx.putImageData(this.imgDataResult, 0, 0);
      this.imgData = this.ctx.getImageData(0, 0, this.cvs.width, this.cvs.height);
      this.imgDataResult = this.ctx.getImageData(0, 0, this.cvs.width, this.cvs.height);
    }
  }
}
</script>
<style lang="scss" scoped>
</style>  