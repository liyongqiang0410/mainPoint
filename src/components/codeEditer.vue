<template>
  <div class="pages">
    <div class="codemirror_div">
      <codemirror ref="myCm" :value="editorValue" :options="cmOptions" @changes="onCmCodeChanges" @blur="onCmBlur" @paste.native="OnPaste" @mousedown.native="onMouseDown" @keydown.native="onKeyDown"></codemirror>
    </div>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import './setting.js'
export default {
  components: {
    codemirror,
  },
  props: {
    cmTheme: {
      type: String,
      default: 'default'
    } ,
    cmMode: {
      type: String,
      default: 'default'
    },
    autoFormatJson: {
      type: Boolean,
      default: true,
    },
    jsonIndentation: {
      type: Number,
      default: 2
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    cmTheme: function (newValue, oldValue) {
      try {
        let theme =
          this.cmTheme == "default" ? "blackboard" : this.cmTheme;
        require("codemirror/theme/" + theme + ".css");
        this.cmOptions.theme = theme;
        this.resetLint();
      } catch (e) {
        this.$message.error("切换编辑器主题出错：" + e.toString());
      }
    },
    cmMode: function (newValue, oldValue) {
      this.$set(this.cmOptions, "mode", this.cmMode);
      this.resetLint();
      this.resetFoldGutter();
    },
    fullScreen: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        console.log(newValue, oldValue)
        this.$set(this.cmOptions, 'fullScreen', newValue)
      }
    }
  },
  data() {
    return {
      editorValue: ``,
      cmOptions: {
        // 缩进宽度
        tabSize: 2,
        // 自动缩进
        smartIndent: true,
        // 缩进单位
        indentUnit: 2,
        // 语言
        mode: !this.cmMode || this.cmMode == "default"
          ? "application/json"
          : this.cmMode,
        // 主题
        theme: !this.cmTheme || this.cmTheme == "default"
          ? "blackboard"
          : this.cmTheme,
        // 行号
        lineNumbers: true,
        // 在长行文字时是换行还是滚动. 默认滚动:'scroll'; 换行: 'wrap'
        lineWrapping: 'scroll',
        // 光标选中行高亮
        styleActiveLine: true,
        // 处理输入和焦点的方式。核心库定义了textarea和contenteditable输入模式。在移动浏览器上，默认是contenteditable，在桌面浏览器上，默认是textarea。在contenteditable模式下对IME和屏幕阅读器支持更好
        inputStyle: 'textarea', // 桌面时设置contenteditable tab宽度失效
        // 是否显示光标
        showCursorWhenSelecting: true,
        // 复制时,如果没有选择文本,则默认复制光标所在行
        lineWiseCopyCut: true,
        //自动聚焦 
        autofocus: false,
        // 是否允许拖拽
        dragDrop: true,
        //全屏模式
        fullScreen: false,
        //括号匹配
        matchBrackets: true,
        matchTags: { bothTags: true },
        autoCloseBrackets: true,
        autoCloseTags: true,
        // 
        keyMap: 'sublime',
        // 智能提示
        extraKeys: {
          Ctrl: "autocomplete",
          "Ctrl-/": "toggleCommentIndented",
          "Ctrl-Alt-L": () => {
            try {
              if (
                this.cmOptions.mode == "application/json" &&
                this.editorValue
              ) {
                this.editorValue = this.formatStrInJson(
                  this.editorValue
                );
              }
            } catch (e) {
              this.$message.error(
                "格式化代码出错：" + e.toString()
              );
            }
          }
        },
        autocorrect: true,
        spellcheck: true,
        highlightSelectionMatches: {
          minChars: 2,
          style: "matchhighlight",
          showToken: true
        },
        enableAutoFormatJson:
          this.autoFormatJson == null ? true : this.autoFormatJson,
        defaultJsonIndentation:
          !this.jsonIndentation ||
            typeof this.jsonIndentation != typeof 1
            ? 2
            : this.jsonIndentation,

        // 光标高度
        cursorHeight: 1,
        line: true,
        styleSelectedText: true,
        //编辑器效果 未实现
        // 及时自动更新 未实现
        autoRefresh: true,
        // scrollbarStyle: null,

        // 验证提示类
        lint: true,
        // 折叠需要的配置
        foldGutter: true,
        // 是否自动换行
        lineWrapping: false,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
      },
      enableAutoFormatJson:
        this.autoFormatJson == null ? true : this.autoFormatJson,
      defaultJsonIndentation:
        !this.jsonIndentation || typeof this.jsonIndentation != typeof 1
          ? 2
          : this.jsonIndentation
    };
  },
  mounted() {
  },
  methods: {
    resetLint() {
      // 无输入
      if (!this.$refs.myCm.codemirror.getValue()) {
        this.$nextTick(() => {
          this.$refs.myCm.codemirror.setOption("lint", false);
        });
        return;
      }
      this.$refs.myCm.codemirror.setOption("lint", false);
      this.$nextTick(() => {
        this.$refs.myCm.codemirror.setOption("lint", true);
      });
    },
    resetFoldGutter() {
      this.$refs.myCm.codemirror.setOption("foldGutter", false);
      this.$nextTick(() => {
        this.$refs.myCm.codemirror.setOption("foldGutter", true);
      });
    },
    // 获取值
    getValue() {
      try {
        return this.$refs.myCm.codemirror.getValue();
      } catch (e) {
        let errorInfo = e.toString();
        this.$message.error("获取编辑框内容失败：" + errorInfo);
        return errorInfo;
      }
    },
    // 黏贴事件处理函数
    OnPaste(event) {
      if (this.cmOptions.mode == "application/json") {
        try {
          this.editorValue = this.formatStrInJson(this.editorValue);
        } catch (e) {
          // 啥都不做
        }
      }
    },
    // 失去焦点时处理函数
    onCmBlur(cm, event) {
      try {
        let editorValue = cm.getValue();
        // json格式数据
        if (this.cmOptions.mode == "application/json" && editorValue) {
          // 无值
          if (!this.enableAutoFormatJson) {
            return;
          }
          // 有值格式化json数据
          this.editorValue = this.formatStrInJson(editorValue);
        }
      } catch (e) {
        // 啥也不做
      }
    },
    // 按下键盘事件处理函数
    onKeyDown(event) {
      const keyCodeArr = [48, 57, 144, 188]
      const keyCode = event.keyCode || event.which || event.charCode;
      const keyCombination =
        event.ctrlKey || event.altKey || event.metaKey;
      // 智能提示补全 true: 提示并补全; false: 提示不补全
      if (!keyCombination && keyCode > 64 && keyCode < 123) {
        this.$refs.myCm.codemirror.showHint({ completeSingle: false });
      }
    },
    // 按下鼠标时事件处理函数
    onMouseDown(event) {
      this.$refs.myCm.codemirror.closeHint();
    },
    // 输入值改变处理函数
    onCmCodeChanges(cm, changes) {
      this.editorValue = cm.getValue();
      this.resetLint();
    },
    // 格式化字符串为json格式字符串
    formatStrInJson(strValue) {
      return JSON.stringify(
        JSON.parse(strValue),
        null,
        this.defaultJsonIndentation
      );
    }
  },
  created() {
    try {
      if (!this.editorValue) {
        this.cmOptions.lint = false;
        return;
      }
      // json数据处理
      if (this.cmOptions.mode == "application/json") {
        if (!this.enableAutoFormatJson) {
          return;
        }
        this.editorValue = this.formatStrInJson(this.editorValue);
      }
    } catch (e) {
      console.log("初始化codemirror出错：" + e);
    }
  }
}
</script>
<style>
.codemirror_div {
  text-align: left;
}
</style>