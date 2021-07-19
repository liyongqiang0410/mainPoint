<template>
  <div class="json-editor">
    <label>
      <textarea ref="textarea" />
    </label>
  </div>
</template>

<script>
import CodeMirror from "codemirror";
import "codemirror/addon/lint/lint.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/rubyblue.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/json-lint";
import "codemirror/theme/ssms.css"; // 这里引入的是主题样式，根据设置的theme的主题引入，一定要引入！！
//导入使用的语言语法定义文件
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/clike/clike";
import "codemirror/mode/go/go";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/http/http";
import "codemirror/mode/php/php";
import "codemirror/mode/python/python";
import "codemirror/mode/sql/sql";
import "codemirror/mode/vue/vue";
import "codemirror/mode/xml/xml";

// 解决代码无法高亮等问题
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/css/css.js";

//导入选中的theme文件
import "codemirror/theme/blackboard.css";

//导入自动提示核心文件及样式
// require("codemirror/addon/hint/show-hint.css")
// require("codemirror/addon/hint/show-hint.js")

require("script-loader!jsonlint");

//导入指定语言的提示文件
// require("codemirror/addon/hint/javascript-hint.js")

// 光标选中行高亮
import "codemirror/addon/selection/active-line";

// sublime 编辑器效果 keymap
import "codemirror/keymap/sublime.js";
import "codemirror/keymap/emacs.js";
import "codemirror/keymap/vim.js";

//下面这几个引入的主要是验证提示类的,配置里的lint需要设置true,gutters: ['CodeMirror-lint-markers']
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/lint/json-lint";

//及时自动更新，配置里面也需要设置autoRefresh为true
import "codemirror/addon/display/autorefresh";

// extraKeys
import "codemirror/addon/hint/anyword-hint.js";
import "codemirror/addon/hint/css-hint.js";
import "codemirror/addon/hint/html-hint.js";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/sql-hint.js";
import "codemirror/addon/hint/xml-hint.js";

// 搜索
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/match-highlighter.js";
import "codemirror/addon/search/jump-to-line.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";

// 折叠
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";

// 滚动条样式
import "codemirror/addon/scroll/annotatescrollbar.js";
import "codemirror/addon/scroll/scrollpastend.js";
import "codemirror/addon/scroll/simplescrollbars.js";
import "codemirror/addon/scroll/simplescrollbars.css";

// 全屏
import "codemirror/addon/display/fullscreen.css";
import "codemirror/addon/display/fullscreen.js";

// 匹配括号
import "codemirror/addon/edit/matchbrackets.js";

require("script-loader!jsonlint");

export default {
  name: "JsonEditor",
  props: {
    value: {
      type: [Array, Object],
      default: () => {
        return null;
      },
    },
  },
  data() {
    return {
      jsonEditor: false,
    };
  },
  watch: {
    value(value) {
      const editorValue = this.jsonEditor.getValue();

      if (editorValue) {
        this.$emit("change", editorValue);
      } else {
        this.$baseMessage("JSON不能为空,否则无法生成表格", "error");
      }
      if (value !== editorValue) {
        this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
      }
    },
  },
  mounted() {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: "application/json",
      gutters: ["CodeMirror-lint-markers"],
      theme: "rubyblue",
      lint: true,
      // 缩进宽度
      tabSize: 2,
      // 自动缩进
      smartIndent: true,
      // 缩进单位
      indentUnit: 2,
      // 语言
      mode: "javascript",
      // 主题
      theme: "blackboard",
      // 行号
      lineNumbers: true,
      // 在长行文字时是换行还是滚动. 默认滚动:'scroll'; 换行: 'wrap'
      lineWrapping: "scroll",
      // 光标选中行高亮
      styleActiveLine: true,
      // 处理输入和焦点的方式。核心库定义了textarea和contenteditable输入模式。在移动浏览器上，默认是contenteditable，在桌面浏览器上，默认是textarea。在contenteditable模式下对IME和屏幕阅读器支持更好
      inputStyle: "textarea", // 桌面时设置contenteditable tab宽度失效
      // 是否显示光标
      showCursorWhenSelecting: true,
      // 复制时,如果没有选择文本,则默认复制光标所在行
      lineWiseCopyCut: true,
      //自动聚焦
      autofocus: false,
      // 是否允许拖拽
      dragDrop: false,
      //全屏模式
      fullScreen: false,
      //括号匹配
      matchBrackets: true,
      matchTags: { bothTags: true },
      autoCloseBrackets: true,
      autoCloseTags: true,
      //
      keyMap: "sublime",
    });

    this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
    this.jsonEditor.on("change", (cm) => {
      if (this.isJsonString(cm.getValue())) {
        this.$emit("change", cm.getValue());
      }
    });
  },
  methods: {
    getValue() {
      return this.jsonEditor.getValue();
    },
    isJsonString(str) {
      try {
        if (typeof JSON.parse(str) == "object") {
          return true;
        }
      } catch (e) {}
      return false;
    },
  },
};
</script>

<style scoped>
</style>
