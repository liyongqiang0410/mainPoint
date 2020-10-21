<template>
  <div>
    <!-- 单文件上传 -->
    <el-upload class="upload-demo" name="file" drag ref="upload" show-file-list accept="image/bmp,image/jpg,image/jpeg,image/png" :data="uploadData" :on-success="uplSuccess" :before-upload="handleUpload" action="/api/file/uploadFile">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将单个文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <div class="upload-file">
      <el-upload accept="image/*" ref="upload" multiple :limit="10" action="/api/file/uploadFiles" :on-preview="handlePreview" :on-change="handleChange" :on-remove="handleRemove" :on-exceed="handleExceed" :file-list="fileList" :http-request="uploadFile" :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 133px;" size="small" type="success" @click="submitUpload">上传到服务器
        </el-button>
        <div slot="tip" class="el-upload__tip">只能上传图片类型文件，且不超过30m</div>
      </el-upload>
    </div>
    <div v-if="showImg">
      <p>已上传图片</p>
      <el-image style="width: 100px; height: 100px" v-for="src in imagePath" :src="'/api/' + src" :key="src" :fit="'contain'"></el-image>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: '',
  components: {
  },
  data() {
    return {
      files: null,
      uploadData: {
        id: '15083863811',
        name: 'file'
      },
      fileData: '',
      fileList: [], // 上传的文件
      uploadMulData: {
        id: '15083863811',
        name: 'files',
        fileData: ''
      },
      imagePath: [],
      showImg: false
    }
  },
  mounted() {
  },
  methods: {
    handleUpload(file) {
      if (typeof this.files !== 'object') {
        return false
      }
    },
    uplSuccess(res, file) {
      if (res.code === 100) {
        this.$message.success(res.message);
      } else {
      }
    },
    // 上传文件
    uploadFile(file) {
      this.fileData.append('files', file.file);  // append增加数据
    },
    // 上传到服务器
    submitUpload: function () {
      this.fileData = new FormData();
      this.fileData.append("Uid", '15083863811');
      this.$refs.upload.submit();
      var that = this;
      $.ajax({
        type: "post",
        url: "/api/file/uploadFiles",
        data: that.fileData,
        contentType: false,
        processData: false,
        success: function (data) {
          if (data.code === 100) {
            that.$message.success(data.message);
            that.imagePath = data.path;
            that.showImg = true;
          }
        },
        error: function (error) {
        }
      });
    },
    handlePreview(file, fileList) { },
    //移除
    handleRemove(file, fileList) {
      this.fileList = fileList;
      // return this.$confirm(`确定移除 ${ file.name }？`);
    },

    // 选取文件超过数量提示
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 10 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },

    //监控上传文件列表
    handleChange(file, fileList) {
      let existFile = fileList.slice(0, fileList.length - 1).find(f => f.name === file.name);
      if (existFile) {
        this.$message.error('当前文件已经存在!');
        fileList.pop();
      }
      this.fileList = fileList;
    },
  }
}
</script>
<style lang="scss" scoped>
</style>