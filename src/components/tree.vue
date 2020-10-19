<template>
  <div class="treeRoot">
    <div class="typeTree1">
      <el-tree highlight-current :data="treeData1" :props="defaultProps1" :show-checkbox='showCheckbox1' :node-key="defaultProps1.value" :default-expanded-keys="expandedKeys" :default-checked-keys="defaultCheckedKeys1" @node-click="treeOneClick">
        <template slot-scope="{node, data}">
          <div>
            <span>{{data[defaultProps1.label]}}</span>
            <span>（{{data.count}}）</span>
          </div>
        </template>
      </el-tree>
    </div>
    <div class="typeTree2">
      <el-tree :data="treeData2" :props="defaultProps2" :show-checkbox='showCheckbox2' :node-key="defaultProps2.value" default-expand-all :default-expanded-keys="defaultExpandedKeys2" :default-checked-keys="defaultCheckedKeys2">
        <template slot-scope="{node, data}">
          <div>
            <span>{{data[defaultProps2.label]}}</span>
          </div>
        </template>
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: 'twoTree',
  props: {
    // 第一颗树
    treeData1: {
      type: Array,
      default: () => {
        return []
      }
    },
    defaultProps1: {
      type: Object,
      default: () => {
        return {
          children: 'children',
          label: 'label',
          value: 'id'
        }
      }
    },
    showCheckbox1: {
      type: Boolean,
      default: false
    },
    defaultExpandedKeys1: {
      type: Array,
      default: () => {
        return []
      }
    },
    defaultCheckedKeys1: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 第二颗树
    treeData2: {
      type: Array,
      default: () => {
        return []
      }
    },
    defaultProps2: {
      type: Object,
      default: () => {
        return {
          children: 'children',
          label: 'label',
          value: 'id'
        }
      }
    },
    showCheckbox2: {
      type: Boolean,
      default: false
    },
    defaultExpandedKeys2: {
      type: Array,
      default: () => {
        return []
      }
    },
    defaultCheckedKeys2: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  watch: {
    // 监听第一颗树数据变化
    treeData1: {
      handler(val) {
        if (val && val.length > 0) {
          this.getTreeAllLeaves(val, this.defaultProps1)
        }
        if (JSON.stringify(this.cacheSelTypeAndSta) == '{}') {
          console.log(this.getFirstLeavesNode(val))
          this.expandedKeys = this.getFirstLeavesNode(val)

        }
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      // 第一颗树当前选中的叶子节点
      currentOneTreeNode: '',
      // 展开的节点
      expandedKeys: [],
      //
      cacheSelTypeAndSta: {}
    }
  },
  methods: {
    // 获取树所有叶子节点
    getTreeAllLeaves(arr, defaultProps) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][defaultProps.children] && arr[i][defaultProps.children].length > 0) {
          arr[i].count = 0
          arr[i].disabled = arr[i][defaultProps.disabled] || false
          this.getTreeAllLeaves(arr[i][defaultProps.children], defaultProps)
        } else {
          if (this.cacheSelTypeAndSta[arr[i].id] && this.cacheSelTypeAndSta[arr[i].id].length > 0) {
            arr[i].count = this.cacheSelTypeAndSta[arr[i].id].length
            arr[i].disabled = arr[i][defaultProps.disabled] || false
          } else {
            arr[i].count = 0
            arr[i].disabled = arr[i][defaultProps.disabled] || false
          }
        }
      }
    },
    treeOneClick(data, treeNode, currentNode) {
      if (this.currentOneTreeNode === data[this.defaultProps1.value]) {
        return
      } else {
        this.currentOneTreeNode = data[this.defaultProps1.value]
      }
      this.$emit('changeTwoTree', data[this.defaultProps1.value])
      if (this.cacheSelTypeAndSta[this.defaultProps1.value] && this.cacheSelTypeAndSta[this.defaultProps1.value].length > 0) { }
      else {
        this.cacheSelTypeAndSta[this.defaultProps1.value] = []
      }
    },
    // 获取第一个叶子节点
    getFirstLeavesNode(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][this.defaultProps1.children] && arr[i][this.defaultProps1.children].length > 0) {
          this.getFirstLeavesNode(arr[i][this.defaultProps1.children])
        } else {
          return (arr[0][this.defaultProps1.value])
        }
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.treeRoot {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .typeTree1 {
    width: 30vw;
    max-height: 600px;
    overflow: auto;
  }
  .typeTree2 {
    width: 70vw;
    max-height: 600px;
    overflow: auto;
  }
}
/deep/.el-tree--highlight-current
  .el-tree-node.is-current
  > .el-tree-node__content {
  background-color: #5faff0;
}
</style>