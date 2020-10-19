<template>
  <div>
    <div class="img">
      <div ref="img">
        <el-image style="width: 100px; height: 100px" fit="fit" v-for="item in imgData" :key="item" :src="item"></el-image>
      </div>
      <p></p>
      <el-button @click="download">zip打包下载</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-JsZip',
  components: {
  },
  props: {
  },
  watch: {
  },
  data() {
    return {
      fileData: null,
      imgData: [],
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.fileData = require.context('@/../static/images/', false, /.jpg$/).keys();
    this.fileData.forEach(item => {
      this.imgData.push('@/../static/images' + item.slice(1))
    })
  },
  methods: {
    download(loading) {
      var loading = this.$baseColorfullLoading(1)
      var zip = new JSZip();
      // zip.file("Hello.txt", "Hello World\n");
      var img = zip.folder("images");
      for (let i = 0; i < this.imgData.length; i++) {
        img.file(i + ".jpg", this.getBase64Image(this.imgData[i]).split(',')[1], { base64: true })
      }
      zip.generateAsync({ type: "blob" })
        .then(function (content) {
          loading.close()
          saveAs(content, "example.zip");
        });
    },
    getBase64Image(images) {
      var img = new Image();
      img.src = images;
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
      var dataURL = canvas.toDataURL();
      console.log(dataURL.split(',')[0])
      return dataURL;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>