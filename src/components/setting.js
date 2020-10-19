import "codemirror/theme/ssms.css"  // 这里引入的是主题样式，根据设置的theme的主题引入，一定要引入！！
//导入使用的语言语法定义文件
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/go/go'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/http/http'
import 'codemirror/mode/php/php'
import 'codemirror/mode/python/python'
import 'codemirror/mode/sql/sql'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/xml/xml'

// 解决代码无法高亮等问题
import "codemirror/mode/xml/xml.js"
import "codemirror/mode/css/css.js"

//导入选中的theme文件
import "codemirror/theme/blackboard.css"

//导入自动提示核心文件及样式
// require("codemirror/addon/hint/show-hint.css")
// require("codemirror/addon/hint/show-hint.js")

require("script-loader!jsonlint")

//导入指定语言的提示文件
// require("codemirror/addon/hint/javascript-hint.js")

// 光标选中行高亮
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/addon/selection/mark-selection.js'
import 'codemirror/addon/selection/selection-pointer.js'

// sublime 编辑器效果 keymap
import "codemirror/keymap/sublime.js"
import "codemirror/keymap/emacs.js"
import "codemirror/keymap/vim.js"

//下面这几个引入的主要是验证提示类的,配置里的lint需要设置true,gutters: ['CodeMirror-lint-markers']
import 'codemirror/addon/lint/coffeescript-lint.js'
import 'codemirror/addon/lint/css-lint.js'
import 'codemirror/addon/lint/html-lint.js'
import 'codemirror/addon/lint/javascript-lint.js'
import 'codemirror/addon/lint/json-lint.js'
import 'codemirror/addon/lint/lint.js'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/lint/yaml-lint.js'

//及时自动更新，配置里面也需要设置autoRefresh为true
import 'codemirror/addon/display/autorefresh.js'
import 'codemirror/addon/display/panel.js'
import 'codemirror/addon/display/placeholder.js'
import 'codemirror/addon/display/rulers.js'

// extraKeys
import 'codemirror/addon/hint/anyword-hint.js'
import 'codemirror/addon/hint/css-hint.js'
import 'codemirror/addon/hint/html-hint.js'
import 'codemirror/addon/hint/javascript-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/sql-hint.js'
import 'codemirror/addon/hint/xml-hint.js'

// 搜索
import 'codemirror/addon/search/jump-to-line.js'
import 'codemirror/addon/search/match-highlighter.js'
import 'codemirror/addon/search/matchesonscrollbar.css'
import 'codemirror/addon/search/matchesonscrollbar.js'
import 'codemirror/addon/search/search.js'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'

// 折叠
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/addon/fold/xml-fold.js'

// 滚动条样式
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/scroll/scrollpastend.js'
import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'

// 全屏
import "codemirror/addon/display/fullscreen.css"
import "codemirror/addon/display/fullscreen.js"

// 匹配括号引号
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/closetag.js'
import 'codemirror/addon/edit/continuelist.js'
import 'codemirror/addon/edit/matchbrackets.js'
import "codemirror/addon/edit/matchtags.js"
import 'codemirror/addon/edit/trailingspace.js'