<template>
  <el-table :data="tableData" border stripe fit ref="multipleTable" highlight-current-row @row-dblclick="rowDblclick" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.3)" @select='select' @select-all="selectAll" :cell-style="cellStyle" :header-cell-style="headerCellStyle">
    <el-table-column v-if="allSelect" type="selection" align="center" width="55"></el-table-column>
    <el-table-column v-if="showIndex" type="index" label="序号" width="65"></el-table-column>
    <el-table-column v-for="(column, key) in tableHeader" :key="key" :prop="column.prop" :label="column.label" :fixed="column.fixed" :width="column.width" :min-width="column.minWidth" align="left">
      <template slot-scope="scope">
        <!-- 操作按钮 -->
        <div v-if="column.oper">
          <el-button v-for="(o, key) in column.oper" :key="key" @click="o.clickFun(scope.row)" :type="o.style" :icon="o.icon" size="mini">{{o.name}}
          </el-button>
        </div>
        <!-- 表格信息 -->
        <div v-else>
          <span v-if="!column.formatData" :class="column.cellName" :style="column.style" @click="column.onClick ? column.onClick(scope.row) : 'return' ">{{ scope.row[column.prop] }}{{scope.row[column.style]}}</span>
          <span v-else>
            <el-tag v-if="column.isok == 1 && scope.row[column.prop]==true">{{ scope.row[column.prop] | formatters(column, scope.row) }}</el-tag>
            <el-tag v-else-if="column.isok == 1 && scope.row[column.prop]==false" type="success">{{ scope.row[column.prop] | formatters(column, scope.row) }}</el-tag>
            <!-- ** end**-->
            <span v-else>{{ scope.row[column.prop] | formatters(column, scope.row) }}</span>
          </span>
        </div>
      </template>
    </el-table-column>
    <slot name="btn"></slot>
  </el-table>
</template>

<script>
export default {
  name: "index",
  // 传入的数据
  props: {
    tableData: { // 表格数据
      type: Array,
      default: function () {
        return []
      }
    },
    rowDblclick: { // 单行点击事件
      type: Function,
      default: (row, event, column) => {
        // console.log('default: ' + row + '---' + event + '---' + column)
      }
    },
    tableHeader: { // 表格头部
      type: Array,
      default: function () {
        return []
      }
    },
    tabheight: {
      type: String,
      default: '100%'
    },
    loading: { // 加载等待
      type: Boolean,
      default: false
    },
    allSelect: {
      type: Boolean,
      default: false
    },
    showIndex: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 获取选择行数信息
    getmydata() {
      let data = this.$refs.multipleTable.selection
      let IDS = []
      for (let i = 0; i < data.length; i++) {
        IDS.push(data[i].ID)
      }
      this.$emit('func', IDS)
    },
    select(selection, row) {
      this.$emit('select', selection, row)
    },
    selectAll(selection) {
      this.$emit('select-all', selection)
    },
    cellStyle() {
      return 'text-align: center; padding: 3px 5px;'
    },
    headerCellStyle() {
      return 'text-align: center; padding: 5px 0px;'
    },
  },
  filters: {
    /** 
     * column 过滤参数
     * t 过滤器函数参数
    */
    formatters(column, t, row) {
      // console.log(row)
      return t.formatData(column)
    },
  }
}
</script>

<style scoped>
</style>
