<template>
  <div class="code-mirror-div">
    <div class="tool-bar">
      <el-select v-model="cmTheme" placeholder="请选择" size="mini" style="width:150px" popper-class="languageSelect">
        <el-option v-for="item in cmThemeOptions" :key="item" :label="item" :value="item"></el-option>
      </el-select>
      <el-select v-model="cmEditorMode" placeholder="请选择" popper-class="languageSelect" size="mini" style="width:150px" @change="onEditorModeChange">
        <el-option v-for="item in cmEditorModeOptions" :key="item" :label="item" :value="item"></el-option>
      </el-select>
      <!-- <el-tooltip class="item" effect="dark" content="全屏" placement="top-start">
        <el-button size="mini" @click="fullScreenClick"><i class="el-icon-full-screen"></i></el-button>
      </el-tooltip> -->
    </div>
    <code-mirror-editor ref="cmEditor" :cmTheme="cmTheme" :cmMode="cmMode" :autoFormatJson="autoFormatJson" :jsonIndentation="jsonIndentation" :fullScreen='fullScreen'></code-mirror-editor>
  </div>
</template>
<script>
// 使用时需要根据CodeMirrorEditor.vue的实际存放路径，调整from后面的组件路径，以便正确引用
import CodeMirrorEditor from "@/components/codeEditer.vue";
export default {
  name: 'my-CodeEditer',
  components: {
    CodeMirrorEditor
  },
  data() {
    return {
      cmTheme: "default", // codeMirror主题
      // codeMirror主题选项
      cmThemeOptions: [
        "default",
        "3024-day",
        "3024-night",
        "abcdef",
        "ambiance",
        "ayu-dark",
        "ayu-mirage",
        "base16-dark",
        "base16-light",
        "bespin",
        "blackboard",
        "cobalt",
        "colorforth",
        "darcula",
        "dracula",
        "duotone-dark",
        "duotone-light",
        "eclipse",
        "elegant",
        "erlang-dark",
        "gruvbox-dark",
        "hopscotch",
        "icecoder",
        "idea",
        "isotope",
        "lesser-dark",
        "liquibyte",
        "lucario",
        "material",
        "material-darker",
        "material-palenight",
        "material-ocean",
        "mbo",
        "mdn-like",
        "midnight",
        "monokai",
        "moxer",
        "neat",
        "neo",
        "night",
        "nord",
        "oceanic-next",
        "panda-syntax",
        "paraiso-dark",
        "paraiso-light",
        "pastel-on-dark",
        "railscasts",
        "rubyblue",
        "seti",
        "shadowfox",
        "solarized dark",
        "solarized light",
        "the-matrix",
        "tomorrow-night-bright",
        "tomorrow-night-eighties",
        "ttcn",
        "twilight",
        "vibrant-ink",
        "xq-dark",
        "xq-light",
        "yeti",
        "yonce",
        "zenburn"
      ],
      cmEditorMode: "default", // 编辑模式
      // 编辑模式选项
      cmEditorModeOptions: [
        "default",
        "json",
        "sql",
        "javascript",
        "css",
        "xml",
        "html",
        "yaml",
        "markdown",
        "python"
      ],
      cmMode: "application/json", //codeMirror模式
      jsonIndentation: 2, // json编辑模式下，json格式化缩进 支持字符或数字，最大不超过10，默认缩进2个空格
      autoFormatJson: true, // json编辑模式下，输入框失去焦点时是否自动格式化，true 开启， false 关闭
      fullScreen: false,
    };
  },
  methods: {
    // 切换编辑模式事件处理函数
    onEditorModeChange(value) {
      switch (value) {
        case "json":
          this.cmMode = "application/json";
          break;
        case "sql":
          this.cmMode = "sql";
          break;
        case "javascript":
          this.cmMode = "javascript";
          break;
        case "xml":
          this.cmMode = "xml";
          break;
        case "css":
          this.cmMode = "css";
          break;
        case "html":
          this.cmMode = "htmlmixed";
          break;
        case "yaml":
          this.cmMode = "yaml";
          break;
        case "markdown":
          this.cmMode = "markdown";
          break;
        case "python":
          this.cmMode = "python";
          break;
        default:
          this.cmMode = "application/json";
      }
    },
    fullScreenClick() {
      this.fullScreen = true
    },
  }
}
</script>

<style>
.CodeMirror {
  padding: 2px;
  height: 500px;
  overflow-y: auto;
}
/* .el-select-dropdown.el-popper.languageSelect {
  background-color: transparent;
}
.el-select-dropdown.el-popper.languageSelect .el-select-dropdown__item {
  color: #409eff;
}
.el-select-dropdown.el-popper.languageSelect .el-select-dropdown__item.hover {
  color: #ffffff;
  background-color: transparent;
}
.el-select-dropdown.el-popper.languageSelect
  .el-scrollbar__bar.is-vertical
  .el-scrollbar__thumb {
  background-color: #409eff;
} */
</style>
<style lang="scss" scoped>
.code-mirror-div {
  margin: auto;
  width: 70%;
  text-align: left;
  .tool-bar {
    top: 20px;
    margin: 30px 0px 20px 0px;
  }
}
// /deep/.el-select {
//   top: 70px;
//   margin-bottom: 15px;
//   left: calc(100% - 330px);
//   z-index: 9999;
//   width: 150px;
//   position: relative;
//   .el-input--mini .el-input__inner,
//   .el-input__suffix .el-input__suffix-inner .el-input__icon {
//     background-color: transparent;
//     color: #ffffff;
//   }
// }
</style>