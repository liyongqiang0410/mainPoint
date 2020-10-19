<template>
  <div class="calendar agentHome">
    <div class="agentHome_date">
      <el-calendar v-model="value" :first-day-of-week="7" ref="calendar">
        <template slot="dateCell" slot-scope="{date, data}">
          <span>
            {{data.day.split('-').slice(2).join('-')}}
          </span>
          <div v-for="(item, index) in calendarData" :key="index">
            <!-- 年份相同 -->
            <div v-if="item.years === data.day.split('-')[0]">
              <!-- 月份相同 -->
              <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
                <!-- 日期相同 -->
                <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
                  <el-popover placement="top" width="560px" trigger="click" :ref="`popover-${item.id}`">
                    <!-- 这里的ref绑定的值要注意 使用日期中 日 的 id  使用其他有可能会有相同 id -->
                    <el-table :data="gridData" :cell-style="cellStyle" :header-cell-style='headRowStyle'>
                      <el-table-column width="150" property="date" label="日期"></el-table-column>
                      <el-table-column width="100" property="name" label="姓名"></el-table-column>
                      <el-table-column width="300" property="address" label="地址"></el-table-column>
                    </el-table>
                    <span class="isActive" slot="reference" @click.stop="showDateDetials(item, data.day)">
                      <!-- {{data.day.split('-')[0]}} 年份 -->
                      <!-- {{data.day.split('-').slice(1)[0]}}  月份补 0 -->
                      <!-- {{data.day.split('-').slice(2)[0]}}  日期补 0-->
                      {{data.day.split('-').slice(2)[0]}}
                    </span>
                  </el-popover>
                </div>
                <div v-else></div>
              </div>
            </div>
            <div v-else></div>
          </div>
        </template>
      </el-calendar>
    </div>
    <router-view />
  </div>
</template>
<script>
import { init, load, deleteHasWatermark } from '../../../static/waterMark'
export default {
  name: 'my-Calendar',
  data() {
    return {
      // 查询当前日历展示月案件数据
      searchCurrentCaseForm: {
        year: null, // 年份
        month: null, // 月份
        litigantId: '', // 当事人id （代理律师的id， 法官id）
      },
      currentDom: null, // 日历主体dom
      currentOuterDom: null,
      value: new Date(), // 日历组件绑定值
      calendarData: [
        { years: '2020', months: ['01', '06', '11'], days: ['05'], id: 1 },
        { years: '2020', months: ['02', '07', '12'], days: ['10'], id: 2 },
        { years: '2020', months: ['03', '08', '11'], days: ['15'], id: 3 },
        { years: '2020', months: ['04', '09', '01'], days: ['20'], id: 4 },
        { years: '2020', months: ['05', '10', '02'], days: ['25'], id: 5 }
      ],
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  mounted() {
    // 日历主体节点
    this.currentDom = document.querySelector(".calendar .agentHome_date .el-calendar .el-calendar__body")
    // 日历整体节点
    this.currentOuterDom = document.getElementsByClassName('calendar')[0]
    // 整个节点宽
    var currentDomWidth = this.currentDom.offsetWidth
    // 整个节点高
    var currentDomHeight = this.currentDom.offsetHeight
    // 日历显示的当前月份补0
    var date = new Date(this.value)
    var month = ("0" + (date.getMonth() + 1)).slice(-2)
    // 删除上次已渲染的水印
    deleteHasWatermark()
    // 初始化水印
    init({ watermark_txt: month, watermark_x: this.currentOuterDom.offsetLeft, watermark_padding: 20 }, this.currentDom, this.currentOuterDom)
    // 加载水印
    load({ watermark_txt: month, watermark_x: this.currentOuterDom.offsetLeft, watermark_padding: 20 }, this.currentDom, this.currentOuterDom)
    this.calendarHeadSet()
    this.initTurMmonthEvent()
    window.onresize = () => {
      this.calendarResize()
    }
  },
  beforeDestroy() {
    // 销毁水印
    deleteHasWatermark()
  },
  methods: {
    calendarResize() {
      var date = new Date(this.value)
      var month = ("0" + (date.getMonth() + 1)).slice(-2)
      deleteHasWatermark()
      load({ watermark_txt: month, watermark_x: this.currentOuterDom.offsetLeft, watermark_padding: 20 }, this.currentDom, this.currentOuterDom)
    },
    // 初始化月份按钮事件 在这里获取后端数据(上一月、当月、下一月按钮)
    initTurMmonthEvent() {
      this.$nextTick(() => {
        // 点击前一个月
        let prevBtn = document.querySelector('.el-calendar__button-group .el-button-group>button:nth-child(1)');
        prevBtn.addEventListener('click', () => {
          var date = new Date(this.value)
          this.searchCurrentCaseForm.year = date.getFullYear()
          this.searchCurrentCaseForm.month = date.getMonth() + 1
          var month = ("0" + (date.getMonth() + 1)).slice(-2)
          deleteHasWatermark()
          load({ watermark_txt: month, watermark_x: this.currentOuterDom.offsetLeft, watermark_padding: 20 }, this.currentDom, this.currentOuterDom)
        })
      })
      this.$nextTick(() => {
        // 当前月
        let prevBtn = document.querySelector('.el-calendar__button-group .el-button-group>button:nth-child(2)');
        prevBtn.addEventListener('click', () => {
          var date = new Date(this.value)
          this.searchCurrentCaseForm.year = date.getFullYear()
          this.searchCurrentCaseForm.month = date.getMonth() + 1
          var month = ("0" + (date.getMonth() + 1)).slice(-2)
          deleteHasWatermark()
          load({ watermark_txt: month, watermark_x: this.currentOuterDom.offsetLeft,watermark_padding: 20 }, this.currentDom, this.currentOuterDom)
        })
      })
      this.$nextTick(() => {
        // 点击后一个月
        let prevBtn = document.querySelector('.el-calendar__button-group .el-button-group>button:last-child');
        prevBtn.addEventListener('click', () => {
          var date = new Date(this.value)
          this.searchCurrentCaseForm.year = date.getFullYear()
          this.searchCurrentCaseForm.month = date.getMonth() + 1
          var month = ("0" + (date.getMonth() + 1)).slice(-2)
          deleteHasWatermark()
          load({ watermark_txt: month, watermark_x: this.currentOuterDom.offsetLeft, watermark_padding: 20 }, this.currentDom, this.currentOuterDom)
        })
      })
    },
    // 展示 popOver
    showDateDetials(row, date) {
      for (var i = 0; i < this.gridData.length; i++) {
        this.gridData[i].date = date
      }
      this.closePopover()
    },
    // 关闭 popover
    closePopover(row, date) {
      // 每次只显示一个 Popover 弹窗 使用 doClose()
      // 遍历所有的refs，判断索引名中是否有 'popover-' ;如果有，都使用doClose关掉
      for (const key in this.$refs) {
        if (key.indexOf('popover') !== -1) {
          if (this.$refs[key].length > 0) {
            this.$refs[key][0].doClose();
          }
        }
      }
    },
    // 日期表头设置 月份切换
    calendarHeadSet() {
      // 月份切换
      var elButtonGroup = this.$refs.calendar.$children[0].$el
      elButtonGroup.children[0].children[0].innerHTML = "&lt;&lt;"
      elButtonGroup.children[0].setAttribute("title", "上一月")
      elButtonGroup.children[1].children[0].innerHTML = "&#9635"
      elButtonGroup.children[1].setAttribute("title", "当前月")
      elButtonGroup.children[2].children[0].innerHTML = "&gt;&gt;"
      elButtonGroup.children[2].setAttribute("title", "下一月")
      var calendarTable = document.getElementsByClassName('el-calendar-table')[0]
      var calendarHead = calendarTable.children[0]
      for (let index = 0; index < calendarHead.children.length; index++) {
        switch (calendarHead.children[index].innerHTML) {
          case "一":
            calendarHead.children[index].innerHTML = "星期一"
            break;
          case "二":
            calendarHead.children[index].innerHTML = "星期二"
            break;
          case "三":
            calendarHead.children[index].innerHTML = "星期三"
            break;
          case "四":
            calendarHead.children[index].innerHTML = "星期四"
            break;
          case "五":
            calendarHead.children[index].innerHTML = "星期五"
            break;
          case "六":
            calendarHead.children[index].innerHTML = "星期六"
            break;
          case "日":
            calendarHead.children[index].innerHTML = "星期日"
            break;
          default:
            break;
        }
      }
    },
    // 日历单元格样式
    cellStyle() {
      return "text-align: center;"
    },
    // 日历表头单元格样式
    headRowStyle() {
      return 'text-align: center;'
    }
  }
}
</script>
<style>
/* calendar title-header 时间样式 */
.agentHome
  .agentHome_date
  .el-calendar
  .el-calendar__header
  .el-calendar__title {
  font-weight: 700;
}
/* 日历表体阴影 */
.agentHome .agentHome_date .el-calendar .el-calendar__body {
  box-shadow: 0 0 0 #f0f0f0f0, 3px 0px 3px #f0f0f0f0, 0px 3px 3px #f0f0f0f0,
    -3px 0px 5px #f0f0f0f0;
  padding: 12px 20px;
}
/* 日历主体表头 */
.agentHome
  .agentHome_date
  .el-calendar
  .el-calendar__body
  .el-calendar-table
  thead
  th {
  color: red;
  font-weight: 700;
}
/* 上一个月的日期 */
.agentHome
  .agentHome_date
  .el-calendar
  .el-calendar__body
  .el-calendar-table
  .el-calendar-table__row
  .prev {
  border: none;
}
/* 当前月日期容器 内包含span */
.agentHome
  .agentHome_date
  .el-calendar
  .el-calendar__body
  .el-calendar-table
  .el-calendar-table__row
  .el-calendar-day {
  height: 40px;
  line-height: 38px;
  text-align: center;
  padding: 0;
}
/* 当前月日期最外层容器 */
.agentHome
  .agentHome_date
  .el-calendar
  .el-calendar__body
  .el-calendar-table
  .el-calendar-table__row
  .current {
  border: none;
}
/* 展示的当前月显示出的下一个月的日期样式 */
.agentHome
  .agentHome_date
  .el-calendar
  .el-calendar__body
  .el-calendar-table
  .el-calendar-table__row
  .next {
  border: none;
  /* display: none; */
}
/* 点击选中的日期 */
.agentHome
  .agentHome_date
  .el-calendar
  .el-calendar__body
  .el-calendar-table
  .el-calendar-table__row
  .current.is-selected.is-today {
  background-color: transparent;
}
/* 展示的当前月显示出的下一个月的日期样式 有案件 */
.agentHome
  .agentHome_date
  .el-calendar
  .el-calendar__body
  .el-calendar-table
  .el-calendar-table__row
  .current
  .el-calendar-day
  span,
.agentHome
  .agentHome_date
  .el-calendar
  .el-calendar__body
  .el-calendar-table
  .el-calendar-table__row
  .next
  .el-calendar-day
  span.isActive {
  width: 38px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  display: inline-block;
  border-radius: 100%;
}
/*  */
.agentHome
  .agentHome_date
  .el-calendar
  .el-calendar__body
  .el-calendar-table
  .el-calendar-table__row
  .current
  .el-calendar-day
  span.isActive {
  border: 1px solid #5585c9;
  border-radius: 100%;
  z-index: 99;
  position: relative;
  top: -39px;
  color: #ffffff;
  background-color: #5585c9;
}
.agentHome
  .agentHome_date
  .el-calendar
  .el-calendar__body
  .el-calendar-table
  .el-calendar-table__row
  .next
  .el-calendar-day
  span.isActive {
  border: 1px solid #5585c9;
  border-radius: 100%;
  z-index: 99;
  position: relative;
  top: -39px;
  color: #ffffff;
  background-color: #5585c9;
}
</style>
<style lang="scss" scoped>
.calendar {
  border: 1px solid #f0f0f0;
}
</style>