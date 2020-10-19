<template>
  <div class="waterMark">
    <el-button class="file">
      <input class="inputFile" type="file" accept="image/*" @change="chooseImg">选择文件
    </el-button>
    <img v-if="comfireImgSrc" :src="comfireImgSrc" alt="" width="300px">
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    /** 
     * textPosition: String 文本位置; 
     *  可选值: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right']; 
     *  默认: 'top-left'
     * textSize: Number 文本大小; 
     *  默认: 60;
     * padding: Number 内边距 
     *  默认: 20; 文本距图片边沿的距离 在 textPosition='center' 时无效
     * color: String 文本颜色 
     *  默认: '#FFFFFF'; 支持: 颜色值 hex rgba;
     * userDefText: String 文本内容; 
     *  默认: 时间(yyyy-MM-dd HH:mm:ss)
    */
    textPosition: {
      type: String,
      default: ''
    },
    textSize: {
      type: Number,
      default: 60
    },
    padding: {
      type: Number,
      default: 20
    },
    color: {
      type: String,
      default: '#FFFFFF'
    },
    userDefText: {
      type: String,
      default: ''
    }
  },
  watch: {
  },
  data() {
    return {
      chooseImgSrc: null, // 选择的图片的base64编码
      chooseImgSize: { // 选择的图片的 size
        width: '',
        height: ''
      },
      waterMakrTextSrc: '', // 水印文字的base64编码
      waterMarkText: '',
      comfireImgSrc: '', // 合成图片
      img1Load: false,
      img2load: false
    }
  },
  methods: {
    // 单张图片添加水印
    chooseImg(event) {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.chooseImgSrc = reader.result
          this.getChooseImgSize()
        }
      } else return
    },
    // 获取选择图片的 size
    getChooseImgSize() {
      let img = new Image()
      img.onload = () => {
        this.chooseImgSize.width = img.width
        this.chooseImgSize.height = img.height
        this.getWaterText()
      }
      img.src = this.chooseImgSrc
    },
    // 水印文字(当前时间年-月-日 时:分:秒)
    getWaterText() {
      let date = new Date()
      var YY = date.getFullYear()
      var MM = ("0" + (date.getMonth() + 1)).slice(-2)
      var dd = ("0" + date.getDate()).slice(-2)
      var HH = ("0" + date.getHours()).slice(-2)
      var mm = ("0" + date.getMinutes()).slice(-2)
      var ss = ("0" + date.getSeconds()).slice(-2)
      this.waterMarkText = YY + '-' + MM + '-' + dd + ' ' + HH + '-' + mm + ':' + ss
      this.getWaterMakrTextSrc()
      this.comfireImg()
    },
    // 获取水印图片 将水印图片的大小设置为选择图片的大小
    getWaterMakrTextSrc() {
      const cvs = document.createElement('canvas')
      const ctx = cvs.getContext('2d')
      cvs.setAttribute('width', this.chooseImgSize.width)
      cvs.setAttribute('height', this.chooseImgSize.height)
      ctx.font = this.textSize + 'px ' + '微软雅黑'
      ctx.fillStyle = this.color
      this.userDefText ? this.waterMarkText = this.userDefText : this.waterMarkText
      switch (this.textPosition) {
        case 'bottom-right':
          ctx.textAlign = 'end'
          ctx.fillText(this.waterMarkText, this.chooseImgSize.width - this.padding, this.chooseImgSize.height - this.padding)
          break;
        case "top-right":
          ctx.textAlign = 'end'
          ctx.fillText(this.waterMarkText, this.chooseImgSize.width - this.padding, this.textSize + this.padding)
          break;
        case 'bottom-left':
          ctx.textAlign = 'start'
          ctx.fillText(this.waterMarkText, this.padding, this.chooseImgSize.height - this.padding)
          break;
        case 'center':
          ctx.textAlign = 'center'
          ctx.fillText(this.waterMarkText, this.chooseImgSize.width / 2, this.chooseImgSize.height / 2)
          break;
        default:
          ctx.textAlign = 'start'
          ctx.fillText(this.waterMarkText, this.padding, this.textSize + this.padding)
          break;
      }
      this.waterMakrTextSrc = cvs.toDataURL('image/png')
    },
    // 复合两张图片
    comfireImg() {
      const cvs = document.createElement('canvas')
      const ctx = cvs.getContext('2d')
      cvs.setAttribute('width', this.chooseImgSize.width)
      cvs.setAttribute('height', this.chooseImgSize.height)
      const img1 = new Image()
      img1.src = this.chooseImgSrc
      const img2 = new Image()
      img2.src = this.waterMakrTextSrc
      const p1 = new Promise((resolve, reject) => {
        img1.onload = () => {
          this.img1Load = true
          resolve(this.img1Load)
        }
      })
      const p2 = new Promise((resolve, reject) => {
        img2.onload = () => {
          this.img2load = true
          resolve(this.img2load)
        }
      })
      Promise.all([p1, p2]).then(res => {
        ctx.drawImage(img1, 0, 0, this.chooseImgSize.width, this.chooseImgSize.height)
        ctx.drawImage(img2, 0, 0, this.chooseImgSize.width, this.chooseImgSize.height)
        this.comfireImgSrc = cvs.toDataURL('image/jpeg')
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.waterMark {
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
    vertical-align: middle;
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
    vertical-align: middle;
  }
}
</style>