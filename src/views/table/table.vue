<template>
  <div class="table">
    <el-button @click="exportExcel" size="mini" style="margin: 20px 0;">导出 Excel</el-button>
    <my-table ref="mt" @func="getMsgFormSon" @select="select" @select-all='selectAll' id="printTable" :tableData="tableData" :tabheight="tabheight" :tableHeader="tableHeader" :loading="loading" :allSelect="allSelect" :showIndex='index'>
    </my-table>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import FileSaver from 'file-saver'
export default {
  name: 'my-Table',
  components: {
  },
  data() {
    return {
      loading: false, // 加载效果
      allSelect: true, // 是否显示复选框
      index: true, // 序号
      tabheight: '', // 表格高度
      tableHeader: [      // 表头
        {
          prop: 'Name',
          label: '卡号',
          style: 'color: lightseagreen;cursor:pointer;',
          cellName: 'decLine',
          onClick: val => {
            this.cardNumber(val)
          }
        },
        {
          prop: 'LabelType',
          label: '标签类型',
          style: 'color: red'
        },
        {
          prop: 'ObjectType',
          label: '对象类型',
          style: 'color: orange'
        },
        {
          prop: 'ObjectValue',
          label: '对象值',
          style: 'color: green'
        },
        {
          prop: 'Enable',
          label: '是否启用',
          isok: '1',
          formatData: function (val) {
            return val == true ? '启用' : '禁用'
          }
        },
        {
          prop: 'Protect',
          label: '是否设防',
          isok: '1',
          formatData: function (val) {
            return val == true ? '设防' : '未设防'
          }
        },
        {
          prop: 'oper',
          label: '操作',
          fixed: 'right',
          minWidth: '220px',
          width: '220px',
          oper: [
            { name: '修改', style: 'primary', clickFun: this.handleClick },
            { name: '删除', style: 'danger', clickFun: this.delClick },
          ]
        }
      ],
      tableData: [{
        Name: '123456789',
        LabelType: 'A',
        ObjectType: 'vip',
        ObjectValue: '888',
        Enable: true,
        Protect: true
      }],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    // 导出表格
    exportExcel() {
      // 深克隆一份数据,在含有fixed静态布局的列导出的数据会有重复
      let table = document.querySelector("#printTable").cloneNode(true);
      // 因为element-ui的表格的fixed属性导致多出一个table，会下载重复内容，这里删除掉
      table.removeChild(table.querySelector(".el-table__fixed-right"))
      // 导出的内容只做解析，不进行格式转换
      let wb = null
      let tableName = ''
      let randomString = this.currentDate()
      wb = XLSX.utils.table_to_book(table, { raw: true })
      // 这里的randomString非必须，只是生成一串随机码
      // 便于下载多个文件而不重名
      tableName = `用户表-${randomString}.xlsx`

      /* get binary string as output */
      let wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })
      try {
        FileSaver.saveAs(new Blob([wbout], {
          type: 'application/octet-stream'
        }), tableName)
      } catch (e) {
        if (typeof console !== 'undefined') {
          console.log(e, wbout)
        }
      }
      this.$message.success('导出成功')
      return wbout
    },
    currentDate() {
      let date = new Date();
      let YYYY = date.getFullYear()
      let MM = ("0" + (date.getMonth() + 1)).slice(-2)
      let dd = ("0" + date.getDate()).slice(-2)
      let HH = ("0" + date.getHours()).slice(-2)
      let mm = ("0" + date.getMinutes()).slice(-2)
      let ss = ("0" + date.getSeconds()).slice(-2)
      return (YYYY + "-" + MM + "-" + dd + "-" + HH + "-" + mm + "-" + ss)
    },
    getData() {
      this.loading = true
      for (var i = 0; this.tableData.length < 10; i++) {
        this.tableData.push({
          Name: '123456789',
          LabelType: 'A',
          ObjectType: 'vip',
          ObjectValue: '888',
          Enable: i % 2,
          Protect: i % 2
        })
      }
      this.loading = false
    },
    getMsgFormSon() { },
    select(selection, row) {
      console.log(selection, row)
    },
    selectAll(selection) {
      console.log(selection)
    },
    cardNumber(val) {
      console.log(val)
    },
    handleClick(row) {
      console.log(row)
    },
    delClick(row) {
      console.log(row)
    },
  },
}
</script>
<style lang="scss" scoped>
.table {
  .decLine {
    text-decoration: underline;
  }
}
</style>