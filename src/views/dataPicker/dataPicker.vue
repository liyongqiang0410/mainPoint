<template>
  <div>
    <div class="item">
      <div>
        <span>时间格式相同:</span>
        <el-select v-model="selectedvalue" size="mini" clearable placeholder="请选择" @change="selectChange">
          <el-option v-for="item in selectedArr" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <span>日期选择</span>
        <el-date-picker v-model="dateValue1" type="date" size="mini" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" @change="dataPickerChange" :picker-options="startPickOptions">
        </el-date-picker>
        <el-date-picker v-model="dateValue2" type="date" size="mini" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" :picker-options="endPickOptions">
        </el-date-picker>
      </div>
    </div>
    <div class="item">
      <!-- 
        天: 选择时分
        周: 选择周几
        月: 多少日
        每三月: 选择第几个月、第几日
        年: 选择几月, 几日
      -->
      <div class="dateRange">
        <span>时间格式多样:</span>
        <el-form label-width="120px" :model="timePickForm">
          <el-form-item label="频次">
            <div style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
              <el-select v-model="timePickForm.selectedvalue2" size="mini" clearable placeholder="请选择" @change="selectChange2" style="width:100%;margin-right: 20px;">
                <el-option v-for="item in selectedArr" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-input-number size="mini" v-model="timePickForm.count" :min='1' :max='9' @change="inputNumberChange"></el-input-number>
            </div>
          </el-form-item>
          <el-form-item label="每天" v-if="timePickForm.selectedvalue2 === 0">
            <el-table :data="timePickForm.eveDay" style="width: 100%" :cell-style="cellStyle">
              <el-table-column type="index" label="序号" width="55">
              </el-table-column>
              <el-table-column prop="startTime" label="开始时间">
                <template slot-scope="scope">
                  <el-time-select v-model="scope.row.startTime" size="mini" :picker-options="timePickOptions" placeholder="开始时间">
                  </el-time-select>
                </template>
              </el-table-column>
              <el-table-column prop="endTime" label="结束时间">
                <template slot-scope="scope">
                  <el-time-select v-model="scope.row.endTime" size="mini" :picker-options="timePickOptions" placeholder="开始时间">
                  </el-time-select>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
          <el-form-item label="每周" v-if="timePickForm.selectedvalue2 === 1">
            <div style="text-align: left;">
              <el-checkbox-group v-model="timePickForm.eveWeek" size="mini" @change="checkboxGroupChange">
                <el-checkbox-button v-for="item in week" :label="item.value" :key="item.value">{{item.day}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-form-item label="每月" v-if="timePickForm.selectedvalue2 === 2">
            <el-input v-model="timePickForm.eveMonth" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="每三月" v-if="timePickForm.selectedvalue2 === 3">
            <el-input v-model="timePickForm.eveThreeMonth" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="半年" v-if="timePickForm.selectedvalue2 === 4">
            <el-input v-model="timePickForm.eveHalfYear" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="年" v-if="timePickForm.selectedvalue2 === 5">
            <el-input v-model="timePickForm.year" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="指定日期" v-if="timePickForm.selectedvalue2 === 6">
            <el-input v-model="timePickForm.specialTheDay" size="mini"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
var _this
export default {
  name: 'my-dataPicker',
  data() {
    return {
      selectedvalue: null,
      selectedvalue2: null,
      dateValue1: '',
      dateValue2: '',
      endLimitDate: '',
      selectedArr: [
        {
          value: 0,
          label: '天',
        },
        {
          value: 1,
          label: '周',
        },
        {
          value: 2,
          label: '月',
        },
        {
          value: 3,
          label: '每三月',
        },
        {
          value: 4,
          label: '半年',
        },
        {
          value: 5,
          label: '年',
        },
        {
          value: 6,
          label: '指定日期'
        }
      ],
      startPickOptions: {
        disabledDate(time) {
          return time.getTime() < new Date().getTime() - 8.64e7
        }
      },
      endPickOptions: {
        disabledDate(time) {
          return time.getTime() < (new Date(_this.endLimitDate).getTime() - 8.64e7)
        }
      },
      timePickOptions: {
        start: '00:00',
        step: '00:15',
        end: '23:45'
      },
      timePickForm: {
        selectedvalue2: null,
        count: 1,
        eveDay: [],
        eveWeek: [],
        eveMonth: null,
        eveThreeMonth: null,
        eveHalfYear: null,
        year: null,
        specialTheDay: null,
      },
      week: [
        {
          day: '周一',
          value: 1,
        },
        {
          day: '周二',
          value: 2,
        },
        {
          day: '周三',
          value: 3,
        },
        {
          day: '周四',
          value: 4,
        },
        {
          day: '周五',
          value: 5,
        },
        {
          day: '周六',
          value: 6,
        }, {
          day: '周日',
          value: 0,
        }
      ],
    }
  },
  beforeCreate() {
    _this = this
  },
  methods: {
    selectChange() {
      this.dateValue1 = ''
      this.dateValue2 = ''
      this.endLimitDate = ''
    },
    dataPickerChange(val) {
      if (val) {
        switch (this.selectedvalue) {
          case 0:
            // 一天
            this.getNDayAfter(val, 0)
            break;
          case 1:
            // 7天
            this.getNDayAfter(val, 6)
            break;
          case 2:
            this.getNMonthAfter(val, 1)
            break;
          case 3:
            // 三个月
            this.getNMonthAfter(val, 3)
            break;
          case 4:
            // 半年(6个月)
            this.getNMonthAfter(val, 6)
            break;
          case 5:
            // 一年(12个月)
            this.getNMonthAfter(val, 12)
            break;
          default:
            break;
        }
      } else {
        this.dateValue2 = ''
        this.endLimitDate = ''
      }
    },
    getNDayAfter(val, long) {
      var yyyy = new Date(val).getFullYear() // 年
      var MM = new Date(val).getMonth() // 月
      var dd = new Date(val).getDate() // 日

      // N天之后的年份
      var nextNDay_year = 0
      // N天之后的月份
      var nextNDay_month = 0
      // N天之后的日期
      var nextNDay_day = 0

      nextNDay_year = new Date(yyyy, MM, dd + long).getFullYear()
      nextNDay_month = ("0" + (new Date(yyyy, MM, dd + long).getMonth() + 1)).slice(-2)
      nextNDay_day = ('0' + (new Date(yyyy, MM, dd + long).getDate())).slice(-2)

      this.dateValue2 = nextNDay_year + '-' + nextNDay_month + '-' + nextNDay_day
      this.endLimitDate = this.dateValue2
    },

    getNMonthAfter(val, long) {
      var yyyy = new Date(val).getFullYear() // 年
      var MM = new Date(val).getMonth() + 1 // 月
      var dd = new Date(val).getDate() // 日
      var currentMonthDay = new Date(yyyy, MM, 0).getDate() // 当前月有多少天
      var day = 0 // 获取指定月份天数

      // N个月之后的年份
      var nextNMonth_year = 0
      // N个月之后的月份
      var nextNMonth_month = 0
      // N个月之后的日期
      var nextNMonth_day = 0

      nextNMonth_year = new Date(yyyy, MM + long, 0).getFullYear()
      nextNMonth_month = ("0" + (new Date(yyyy, MM + long, 0).getMonth() + 1)).slice(-2)
      day = new Date(yyyy, MM + long, 0).getDate()
      // 三个月后的最大日期小于当前选择的日期(多少号) 选用三个月之后的最大日期
      if (dd > day) dd = day
      // 如果是二月并选择了最后一天,三个月之后的日期应为当月的最后一天
      if (dd === currentMonthDay) dd = day
      nextNMonth_day = ("0" + dd).slice(-2)
      this.dateValue2 = nextNMonth_year + '-' + nextNMonth_month + '-' + nextNMonth_day
      this.endLimitDate = this.dateValue2
    },
    // 多格式时间
    selectChange2(val) {
      switch (val) {
        case 0:
          this.timePickForm.eveDay = []
          for (var i = 0; i < this.timePickForm.count; i++) {
            this.timePickForm.eveDay.push({
              startTime: '',
              endTime: '',
            })
          }
          break;

        default:
          break;
      }
    },
    // 计数器改变
    inputNumberChange(val) {
      switch (this.timePickForm.selectedvalue2) {
        case 0:
          if (val > this.timePickForm.eveDay.length) {
            for (var i = this.timePickForm.eveDay.length; i < val; i++) {
              this.timePickForm.eveDay.push({
                startTime: '',
                endTime: '',
              })
            }
          } else {
            for (var i = this.timePickForm.eveDay.length; i > val; i--) {
              this.timePickForm.eveDay.pop()
            }
          }
          break;
        default:
          break;
      }
    },
    // 复选框组改变
    checkboxGroupChange() {
      console.log(this.timePickForm.eveWeek)
    },
    cellStyle() {
      return 'text-align: center;padding: 5px 3px;'
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  padding: 20px 15px;
  .dateRange {
    width: 61%;
    margin: auto;
  }
}
/deep/.el-table {
  /deep/.el-table__header-wrapper {
    display: none;
  }
}
</style>