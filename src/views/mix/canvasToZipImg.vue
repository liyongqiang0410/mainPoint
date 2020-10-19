<template>
  <div>
    <el-button class="file">
      <input ref="inputFile" class="inputFile" type="file" accept="image/*" multiple @change="chooseImg">选择文件
    </el-button>
    <div v-if="fileList!== undefined && fileList.length > 0">
      <img v-for="(item, index) in fileList" :key="index" :src="fileList[index]" alt="" width="400px">
    </div>
    <pre class="line-numbers">
      <code class="lang-XML">
        &lt;el-button class="file"&gt;
          &lt;input ref="inputFile" class="inputFile" type="file" accept="image/*" multiple @change="chooseImg"&gt;选择文件
        &lt;/el-button&gt;
        &lt;div v-if="fileList!== undefined && fileList.length &gt; 0"&gt;
          &lt;img v-for="(item, index) in fileList" :key="index" :src="fileList[index]" alt="" width="400px"&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <pre class="line-numbers">
      <code class="lang-javascript">
        data() {
          return {
            files: [],        // input file 选择的图片
            fileSrc: [],      // FileReader.readAsDataURL() 读取之后的数据
            fileList: [],     // canvas.toDataUrl() 转后的数据
            cvs: null,        // canvas 对象
            ctx: null,        // canvas 绘画上下文
            img: null,        // Image 对象
            targetWidth: 0,   // 图像压缩后的宽
            targetHeight: 0,  // 图像压缩后的高
            sourceWidth: 0,   // 图像源宽
            sourceHeight: 0,  // 图像源高
            maxWidth: 400,    // 图像压缩后的宽最大不能超出400像素
            maxHeight: 400,   // 图像压缩后的高最大不能超出400像素
          }
        },
        mounted() {
          this.init();          // 初始化
          Prism.highlightAll()  // 代码高亮
        },
        methods: {
          init() {
            this.cvs = document.createElement('canvas');
            this.ctx = this.cvs.getContext('2d');
            this.img = new Image()
          },
          // 图像选择改变
          chooseImg(event) {
            this.fileSrc = [];
            this.fileList = [];
            this.files = event.target.files;
            this.fileReader();
          },
          fileReader() {
            let fileLength = 0;
            let reader = new FileReader();
            // 读文件
            reader.readAsDataURL(this.files[fileLength]);
            // 读取完的回调函数
            reader.onload = (e) => {
              // 读取的数据
              this.fileSrc.push(e.target.result);
              fileLength++;
              // 读取多文件
              if (fileLength < this.files.length) {
                // 重复执行 readAsDataUrl() 会再次执行 onload 事件
                reader.readAsDataURL(this.files[fileLength]);
              } else {
                // 使用 canvas 压缩图像
                this.toCanvas();
              }
            }
          },
          // 压缩图像的具体操作
          toCanvas() {
            let srcLength = 0;
            this.img.onload = () => {
              // 图像源宽高
              this.sourceWidth = this.img.width;
              this.sourceHeight = this.img.height;
              // 图像压缩后的大小
              this.targetWidth = this.maxWidth;
              this.targetHeight = this.maxHeight;
              if ((this.sourceWidth > this.maxWidth) || (this.sourceHeight > this, this.maxHeight)) {
                if ((this.sourceWidth / this.sourceHeight) > (this.maxWidth / this, this.maxHeight)) {
                  this.targetHeight = this.maxHeight;
                  this.targetWidth = Math.round(this.sourceWidth * (this.maxHeight / this.sourceHeight));
                } else {
                  this.targetWidth = this.maxWidth;
                  this.targetHeight = Math.round(this.sourceHeight * (this.maxWidth / this.sourceWidth))
                }
              }
              // canvas 对象宽高
              this.cvs.width = this.targetWidth;
              this.cvs.height = this.targetHeight;
              this.ctx.clearRect(0, 0, this.targetWidth, this.targetHeight);
              this.ctx.drawImage(this.img, 0, 0, this.targetWidth, this.targetHeight);
              this.fileList.push(this.cvs.toDataURL());
              // 压缩多文件
              if (srcLength < this.fileSrc.length) {
                srcLength++;
                this.img.src = this.fileSrc[srcLength];
              }
            }
            this.img.src = this.fileSrc[srcLength];
          },
        },
      </code>
    </pre>
    <pre class="line-numbers">
      <code class="lang-css">
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
            width: 80px;
            position: absolute;
            font-size: 17px;
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
      </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data() {
    return {
      files: [],
      fileSrc: [],
      fileList: [],
      cvs: null,
      ctx: null,
      img: null,
      targetWidth: 0,
      targetHeight: 0,
      sourceWidth: 0,
      sourceHeight: 0,
      maxWidth: 400,
      maxHeight: 400,
    }
  },
  mounted() {
    this.init();
    Prism.highlightAll()
  },
  methods: {
    init() {
      this.cvs = document.createElement('canvas');
      this.ctx = this.cvs.getContext('2d');
      this.img = new Image()
    },
    chooseImg(event) {
      this.fileSrc = [];
      this.fileList = [];
      this.files = event.target.files;
      console.log(this.files);
      this.fileReader();
      console.log(this.fileSrc);
      console.log(this.fileList);
    },
    fileReader() {
      let fileLength = 0;
      let reader = new FileReader();
      reader.readAsDataURL(this.files[fileLength]);
      reader.onload = (e) => {
        this.fileSrc.push(e.target.result);
        fileLength++;
        if (fileLength < this.files.length) {
          reader.readAsDataURL(this.files[fileLength]);
        } else {
          this.toCanvas();
        }
      }
    },
    toCanvas() {
      let srcLength = 0;
      this.img.onload = () => {
        this.sourceWidth = this.img.width;
        this.sourceHeight = this.img.height;
        this.targetWidth = this.maxWidth;
        this.targetHeight = this.maxHeight;
        if ((this.sourceWidth > this.maxWidth) || (this.sourceHeight > this, this.maxHeight)) {
          if ((this.sourceWidth / this.sourceHeight) > (this.maxWidth / this, this.maxHeight)) {
            this.targetHeight = this.maxHeight;
            this.targetWidth = Math.round(this.sourceWidth * (this.maxHeight / this.sourceHeight));
          } else {
            this.targetWidth = this.maxWidth;
            this.targetHeight = Math.round(this.sourceHeight * (this.maxWidth / this.sourceWidth))
          }
        }
        this.cvs.width = this.targetWidth;
        this.cvs.height = this.targetHeight;
        this.ctx.clearRect(0, 0, this.targetWidth, this.targetHeight);
        this.ctx.drawImage(this.img, 0, 0, this.targetWidth, this.targetHeight);
        this.fileList.push(this.cvs.toDataURL());
        if (srcLength < this.fileSrc.length) {
          srcLength++;
          this.img.src = this.fileSrc[srcLength];
        }
      }
      this.img.src = this.fileSrc[srcLength];
    },
  },
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
  vertical-align: middle;
  input {
    width: 80px;
    position: absolute;
    font-size: 17px;
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
</style>