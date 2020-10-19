<template>
  <div>
    <pre class="line-numbers">
      <code class="lang-javascript">
        bubbleSort(arr) {
          var len = arr.length;
          for (var i = 0; i &lt; len; i++) {
            for (var j = 0; j &lt; len - 1 - i; j++) {
              if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
                var temp = arr[j + 1];        //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
              }
            }
          }
          return arr;
        }
      </code>
    </pre>
    <pre class="line-numbers">
      <code class="lang-javascript">
        selectionSort(arr) {
          var len = arr.length;
          var minIndex, temp;
          for (var i = 0; i &lt; len - 1; i++) {
            minIndex = i;
            for (var j = i + 1; j &lt; len; j++) {
              if (arr[j] > arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
              }
            }
            // 位置交换
            temp = arr[i]; // 保存当前索引数据
            arr[i] = arr[minIndex]; // 将剩余数中的最小数放在当前位置
            arr[minIndex] = temp; // 将原有索引的数放于最小数索引位置
          }
          return arr;
        }
      </code>
    </pre>
    <pre class="line-numbers">
      <code class="lang-javascript">
        insertionSort(arr) {
          var len = arr.length;
          var current;
          for (var i = 1; i &lt; len; i++) {
            current = arr[i];
            while ((i - 1) >= 0 && arr[i - 1] > current) {
              arr[i] = arr[i - 1];
              i-- - 1;
            }
            arr[i] = current;
          }
          return arr;
        }
      </code>
    </pre>
    <pre class="line-numbers">
      <code class="lang-javascript">
        numberCount() {
          this.numCount = this.randomArr.reduce((pre, cur) => {
            if (cur in pre) pre[cur]++;
            else pre[cur] = 1;
            return pre
          }, {})
        }
        numberCountTwo() {
          this.numCount = this.randomArr.reduce((pre, cur) => (pre[cur] = (pre[cur] || 0) + 1, pre), {});
        }
      </code>
    </pre>
    <pre class="line-numbers">
      <code class="lang-javascript">
        group(arr = [], key) {
          return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
        },
      </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data() {
    return {
      arr: [1, 5, 3, 7, 2],
      randomArr: [],
      numCount: {},
      seniorArr: [
        { grade: 'seniorOne', class: 'one', stuCount: 60 },
        { grade: 'seniorOne', class: 'two', stuCount: 62 },
        { grade: 'seniorOne', class: 'three', stuCount: 58 },
        { grade: 'seniorOne', class: 'fore', stuCount: 67 },
        { grade: 'seniorTwo', class: 'one', stuCount: 59 },
        { grade: 'seniorTwo', class: 'two', stuCount: 66 },
        { grade: 'seniorTwo', class: 'three', stuCount: 62 },
        { grade: 'seniorTwo', class: 'fore', stuCount: 61 },
        { grade: 'seniorThree', class: 'one', stuCount: 64 },
        { grade: 'seniorThree', class: 'two', stuCount: 62 },
        { grade: 'seniorThree', class: 'three', stuCount: 62 },
        { grade: 'seniorThree', class: 'fore', stuCount: 68 },
      ],
    }
  },
  mounted() {
    Prism.highlightAll();
    this.init();
    this.numberCount();
    this.numberCountTwo();
    // console.log(this.group(this.seniorArr, 'grade'));
    // console.log(this.randomArr);
    console.log(this.numCount);
    // console.log(this.bubbleSort(this.arr));
    // console.log(this.selectionSort(this.arr));
    // console.log(this.insertionSort(this.arr));
  },
  methods: {
    init() {
      this.randomArr = []
      for (let i = 0; i < 100; i++) {
        this.randomArr.push(Math.round(Math.random() * 20))
      }
    },
    // 计数一
    numberCount() {
      this.numCount = this.randomArr.reduce((pre, cur) => {
        if (cur in pre) pre[cur]++;
        else pre[cur] = 1;
        return pre
      }, {})
    },
    // 计数二
    numberCountTwo() {
      this.numCount = this.randomArr.reduce((pre, cur) => (pre[cur] = (pre[cur] || 0) + 1, pre), {});
    },
    // 分组
    group(arr = [], key) {
      /** 
       * !pre[cur[key]] && (pre[cur[key]] = []) 当前 key 没有分组,执行后面语句,创建分组
       * pre[cur[key]].push(cur) 分组操作,
       * pre 返回值
      */
      return key ? arr.reduce((pre, cur) => (!pre[cur[key]] && (pre[cur[key]] = []), pre[cur[key]].push(cur), pre), {}) : {};
    },
    bubbleSort(arr) {
      var len = arr.length;
      for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
            var temp = arr[j + 1];        //元素交换
            arr[j + 1] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr;
    },
    selectionSort(arr) {
      var len = arr.length;
      var minIndex, temp;
      for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
          if (arr[j] > arr[minIndex]) {     //寻找最小的数
            minIndex = j;                 //将最小数的索引保存
          }
        }
        // 位置交换
        temp = arr[i]; // 保存当前索引数据
        arr[i] = arr[minIndex]; // 将剩余数中的最小数放在当前位置
        arr[minIndex] = temp; // 将原有索引的数放于最小数索引位置
      }
      return arr;
    },
    insertionSort(arr) {
      var len = arr.length;
      var current;
      for (var i = 1; i < len; i++) {
        current = arr[i];
        while ((i - 1) >= 0 && arr[i - 1] > current) {
          arr[i] = arr[i - 1];
          i-- - 1;
        }
        arr[i] = current;
      }
      return arr;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>