<!--
 * @Author: your name
 * @Date: 2021-01-14 09:29:35
 * @LastEditTime: 2021-01-14 09:51:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mainPoint\src\views\vue\dialog_tabs\index.vue
-->
<template>
  <div>
    <el-button @click="open">弹出对话框</el-button>
    <el-dialog title="对话框" :visible.sync="dialogVisible" width="45%" :close-on-click-modal='false' :center="false">
      <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
      <div slot="footer" class="dialog-footer" style="text-align: center;">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="small">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      dialogVisible: false,
      activeName: "first",
    };
  },
  created() {},
  mounted() {},
  methods: {
    open() {
      this.dialogVisible = true;
    },
    handleClick(tab, event) {
      this.activeName = tab.name;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
