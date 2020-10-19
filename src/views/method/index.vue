<template>
  <div class="method">
    <div class="container">
      <div class="item">
        <h4 class="title">§ reduce + prismjs</h4>
        <div class="content">
          <pre class="line-numbers">
<code class="language-javascript">  
  function counts(inspectionStandard) {
    let item = inspectionStandard.reduce((pre, cur) => {
      if (cur.item in pre) pre[cur.item]++
      else pre[cur.item] = 1
      return pre
    }, {})
    var checkNameArr = []
    for (const iterator in item) {
      for (var i = 0; i &lt; item[iterator]; i++) { 
        if (i===0) checkNameArr.push(item[iterator]) else checkNameArr.push(0) 
      } 
    } 
    this.checkNameArr=checkNameArr 
  }
</code>
          </pre>
        </div>
      </div>
      <div class="item">
        <h4 class="title">§ vue-codemirror</h4>
        <div class="content">
          <el-input v-model="inputValue" size="mini" @change="inputChange" clearable></el-input>
          <el-select v-model="cmOptions.mode" size="mini" placeholder="请选择" popper-class='languageSelect'>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <codemirror ref="jsonEditor" :value="code" :options="cmOptions" @ready="onCmReady" @focus="onCmFocus" @input="onCmCodeChange">
          </codemirror>
        </div>
      </div>
      <div class="item">
        <h4 class="title">§ markEditor html 回显</h4>
        <div class="content">
          <div v-html="content.html" class="markdown-body"></div>
        </div>
      </div>
      <div class="item">
        <h4 class="title">§ markEditor</h4>
        <div class="content">
          <mavon-editor v-model="value" :toolbars="toolbars" @imgAdd="handleEditorImgAdd" @imgDel="handleEditorImgDel" @change="change" @save="save" ref=md style="height:600px">
          </mavon-editor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
require('./setting.js')
export default {
  name: 'my-Method',
  components: {
    codemirror
  },
  data() {
    return {
      inputValue: '',
      code: '',
      cmOptions: {
        // 缩进宽度
        tabSize: 2,
        // 自动缩进
        smartIndent: true,
        // 缩进单位
        indentUnit: 2,
        // 语言
        mode: 'javascript',
        // 主题
        theme: 'blackboard',
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
        dragDrop: false,
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
        extraKeys: { "Ctrl-Space": "autocomplete" },
        // 光标高度
        cursorHeight: 1,
        line: true,
        styleSelectedText: true,
        //编辑器效果 未实现
        // 验证提示类 未实现
        lint: true,
        // 及时自动更新 未实现
        autorefresh: true,
        // scrollbarStyle: null,

        // 折叠需要的配置
        foldGutter: true,
        lineWrapping: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
      },
      // 语言选择
      options: [
        {
          label: 'javascript',
          value: 'javascript'
        }, {
          label: 'clike',
          value: 'clike'
        }, {
          label: 'htmlmixed',
          value: 'htmlmixed'
        }, {
          label: 'go',
          value: 'go'
        }, {
          label: 'http',
          value: 'http'
        }, {
          label: 'python',
          value: 'python'
        }, {
          label: 'php',
          value: 'php'
        }, {
          label: 'sql',
          value: 'sql'
        }, {
          label: 'vue',
          value: 'vue'
        }, {
          label: 'xml',
          value: 'xml'
        }
      ],
      // mavon-editor value
      value: ``,
      // mavon-editor toolbars
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: false, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      content: {
        html: ''
      },
      imgFile: []
    }
  },
  computed: {
    codemirror() {
      return this.$refs.jsonEditor.codemirror
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    inputChange(val) {
      if (val) {
        this.code = this.inputValue
        this.codemirror.setValue((JSON.stringify(JSON.parse(this.code), null, 2)))
        this.codemirror.refresh()
      } else {
      }
    },
    formatJson() {
      this.$nextTick(() => {
        this.codemirror.setValue((JSON.stringify(JSON.parse(this.code), null, 2)))
      })
    },
    onCmReady(cm) {
    },
    onCmFocus(cm) {
    },
    onCmCodeChange(newCode) {
      this.code = newCode
    },
    handleEditorImgAdd(pos, $files) {
      let formData = new FormData()
      formData.append('file', $files)
      this.imgFile[pos] = $files
    },
    handleEditorImgDel(pos) {
      delete this.imgFile[pos]
    },
    change(value, render) {
      // render 为 markdown 解析结果
      clearTimeout(timeOut)
      let timeOut = setTimeout(() => {
        this.content.html = render
      }, 1000);
    },
    save() {
    },
  },
  watch: {
    code: {
      handler(val) {
        if (val) {
          console.log(val)
          this.onCmCodeChange(val)
        }
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
.method {
  width: 100%;
  // background-color: #dddddd50;
  .container {
    width: 70%;
    height: 100vh;
    box-sizing: content-box;
    border: 1px solid #ffffff;
    background-color: #ffffff;
    margin: auto;
    .item {
      .title {
        text-align: left;
        text-indent: 12px;
      }
      .content {
        text-align: left;
      }
    }
  }
}
/deep/.el-select {
  top: 40px;
  left: calc(100% - 200px);
  z-index: 9999;
  width: 150px;
  position: relative;
  .el-input--mini .el-input__inner,
  .el-input__suffix .el-input__suffix-inner .el-input__icon {
    background-color: transparent;
    color: #ffffff;
  }
}
</style>
<style>
.el-select-dropdown.el-popper.languageSelect {
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
}
</style>