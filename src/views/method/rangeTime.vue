<template>
  <div>
    <div class="rangeTime">
      <h4>此刻之前日期时间禁用</h4>
      <el-date-picker v-model="dateTime" type="datetime" size="mini" placeholder="选择日期时间" :picker-options="{
          disabledDate(time) { 
            return (time.getTime() < Date.now() - 8.64e7 ) 
          }, 
          selectableRange: this.startTimeRange
        }" popper-class="rangeTime">
      </el-date-picker>
    </div>
<pre class="line-numbers">
<code class="lang-XML">&lt;el-date-picker v-model="dateTime" type="datetime" size="mini" placeholder="选择日期时间" 
  :picker-options="{
    disabledDate(time) { 
      return (time.getTime() &lt; Date.now() - 8.64e7 ) 
    }, 
    selectableRange: this.startTimeRange
  }" popper-class="rangeTime"&gt;
&lt;/el-date-picker&gt;</code>
</pre>
<pre class="line-numbers">
<code class="lang-javascript">
watch: {
  dateTime(newValue, oldValue) {
    if (newValue && typeof this.dateTime !== 'string') {
      let nowDate = this.format(new Date(), "-");
      let dt = nowDate.split(" ");
      let st = "";
      if (this.format(newValue, '-').split(' ')[0] == dt[0]) {
        st = dt[1];
        this.dateTime = nowDate
      } else st = "00:00:00";
      this.startTimeRange = st + " - 23:59:59";
    }
  }
},
data() {
  return {
    dateTime: '',
    startTimeRange: null,
  },
},
methods: {
  supplement(nn) {
    return (nn = nn &lt; 10 ? "0" + nn : nn);
  },
  format(Date, str) {
    var obj = { Y: Date.getFullYear(), M: Date.getMonth() + 1, D: Date.getDate(), H: Date.getHours(), Mi: Date.getMinutes(), S: Date.getSeconds()};
    // 拼接时间 hh:mm:ss
    var time = " " + this.supplement(obj.H) + ":" + this.supplement(obj.Mi) + ":" + this.supplement(obj.S);
    // yyyy-mm-dd
    if (str.indexOf("-") > -1) return (obj.Y + "-" + this.supplement(obj.M) + "-" + this.supplement(obj.D) + time);
    // yyyy/mm/dd
    if (str.indexOf("/") > -1) return ( obj.Y + "/" + this.supplement(obj.M) + "/" + this.supplement(obj.D) + time);
  }
}
</code>
</pre>
  </div>
</template>

<script>
export default {
  name: 'my-RangeTime',
  watch: {
    dateTime(newValue, oldValue) {
      if (newValue && typeof this.dateTime !== 'string') {
        let nowDate = this.format(new Date(), "-");
        let dt = nowDate.split(" ");
        let st = "";
        if (this.format(newValue, '-').split(' ')[0] == dt[0]) {
          st = dt[1];
          this.dateTime = nowDate
        } else {
          st = "00:00:00";
        }
        this.startTimeRange = st + " - 23:59:59";
      }
    }
  },
  data() {
    return {
      dateTime: '',
      startTimeRange: null,
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    supplement(nn) {
      return (nn = nn < 10 ? "0" + nn : nn);
    },
    format(Date, str) {
      var obj = {
        Y: Date.getFullYear(),
        M: Date.getMonth() + 1,
        D: Date.getDate(),
        H: Date.getHours(),
        Mi: Date.getMinutes(),
        S: Date.getSeconds(),
      };
      // 拼接时间 hh:mm:ss
      var time =
        " " +
        this.supplement(obj.H) +
        ":" +
        this.supplement(obj.Mi) +
        ":" +
        this.supplement(obj.S);
      // yyyy-mm-dd
      if (str.indexOf("-") > -1) {
        return (
          obj.Y +
          "-" +
          this.supplement(obj.M) +
          "-" +
          this.supplement(obj.D) +
          time
        );
      }
      // yyyy/mm/dd
      if (str.indexOf("/") > -1) {
        return (
          obj.Y +
          "/" +
          this.supplement(obj.M) +
          "/" +
          this.supplement(obj.D) +
          time
        );
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.rangeTime {
  padding: 15px 0;
}
</style>