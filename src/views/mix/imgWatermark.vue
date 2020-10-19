<template>
  <div>
    <div>
      <el-row>
        <el-col :span="3">
          <el-button class="file">
            <input class="inputFile" type="file" multiple id="uploadFile" accept="image/*" @change="chooseImg">选择文件
          </el-button>
        </el-col>
        <el-col :span="7">
          <img id="imgsrc" v-if="imgsrc" :src="imgsrc" :width="size.width">
        </el-col>
        <el-col :span="7">
          <img id="imgTextUrl" v-if="imgTextUrl" :src="imgTextUrl" :width="size.width">
        </el-col>
        <el-col :span="7">
          <img id="imgUploadUrl" :src="imgUploadUrl" @click="downLoad()">
        </el-col>
      </el-row>
    </div>
    <div>
      <el-button @click="confirmImg('@/assets/logo.png')">合成图片</el-button>
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
      imgsrc: null, // 输入的图片
      waterDate: '', // 水印文字
      imgTextUrl: '', // 水印图片
      size: {
        width: 300,
        height: 200,
      },
      imgUploadUrl: '',
    }
  },
  mounted() {
  },
  methods: {
    // 上传图片
    chooseImg(event) {
      var file = event.target.files[0]
      console.log(event.target.files);
      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.imgsrc = reader.result
      }
      this.generateDate()
    },
    // 水印时间获取
    generateDate() {
      let date = new Date()
      const yyyy = date.getFullYear()
      const MM = ("0" + (date.getMonth() + 1)).slice(-2)
      const dd = ("0" + date.getDate()).slice(-2)
      const HH = ("0" + date.getHours()).slice(-2)
      const mm = ("0" + date.getMinutes()).slice(-2)
      const ss = ("0" + date.getSeconds()).slice(-2)
      this.waterDate = yyyy + "-" + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss
      this.conformText()
    },
    // 水印文本图片生成
    conformText() {
      var canvas = document.createElement('canvas') //准备空画布
      var ctx = canvas.getContext("2d")

      ctx.font = "12px white 微软雅黑" //canvas字体
      var gradient = ctx.createLinearGradient(0, 0, this.size.width, 0);
      gradient.addColorStop("0", "white");
      gradient.addColorStop("0.5", "#cccccc");
      gradient.addColorStop("1.0", "#aaaaaa");

      // 用渐变填色
      ctx.fillStyle = gradient;

      ctx.fillText(this.waterDate, 0, 12)

      this.imgTextUrl = canvas.toDataURL("image/png")
    },
    // 合成图片
    confirmImg(url) {
      var canvasAll = document.createElement('canvas')
      const size = 180
      
      var context = canvasAll.getContext('2d')
      // 这是上传图像
      var imgUpload = new Image();
      var img1 = document.getElementById('imgsrc')
      var img2 = document.getElementById('imgTextUrl')
      canvasAll.width = img1.width
      canvasAll.height = img1.height

      context.drawImage(img1, 0, 0, img1.width, img1.height);
      context.drawImage(img2, 0, 0, img2.width, img2.height);
      this.imgUploadUrl = canvasAll.toDataURL('image/png')
    },
    downLoad() {
      var a = document.createElement('a');
      a.href = this.imgUploadUrl  //将画布内的信息导出为png图片数据
      a.download = '水印图片';  //设定下载名称 如果不设置a.download 浏览器会尝试打开这张图片 而图片会下载失败
      a.click(); //点击触发下载
    }
  }
}
</script>
<style lang="scss" scoped>
.file {
  position: relative;
  display: inline-block;
  background: #d0eeff;
  border: 1px solid #99d3f5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #1e88c7;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
  input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }
}
.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
img {
  object-fit: contain;
}
</style>