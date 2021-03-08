<template>
  <div class="other">
    <el-button @click="showDialog">show dialog</el-button>
    <el-dialog
      title="注册"
      :visible.sync="dialogVisible"
      width="40%"
      :close-on-click-modal='false'
    >
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户"
          prop="id"
        >
          <el-input
            clearable
            v-model="ruleForm.id"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pwd"
        >
          <el-input
            type="password"
            v-model="ruleForm.pwd"
            clearable=""
          ></el-input>
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="checkPwd"
        >
          <el-input
            type="password"
            v-model="ruleForm.checkPwd"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item
          label="email"
          prop="email"
        >
          <el-input
            v-model="ruleForm.email"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item
          label="昵称"
          prop="nickName"
        >
          <el-input
            v-model="ruleForm.nickName"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>

        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
        style="text-align: center;"
      >
        <el-button
          type="primary"
          @click="sub"
        >提交</el-button>
        <el-button @click="reset">重置</el-button>
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
    var validateId = (rule, value, callback) => {
      var reg = /^[a-zA-Z0-9]{4,14}$/gi;
      if (value === "") {
        callback(new Error("用户不能为空"));
        return;
      }
      let res = reg.test(value);
      console.log(res);
      if (res) {
        callback();
      } else {
        callback(new Error("4-16位数字或字母"));
      }
    };
    return {
      dialogVisible: false, // 是否对话框
      ruleForm: {
        // 注册form
        id: "",
        pwd: "",
        checkPwd: "",
        email: "",
        nickName: "",
      },
      rules: {
        // 注册 form 验证规则
        id: [
          {
            required: true,
            validator: validateId,
            trigger: "blur",
          },
        ],
        pwd: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        checkPwd: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
        email: [{ required: true, message: "邮箱不能为空", trigger: "blur" }],
        nickName: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 显示对话框
    showDialog() {
      this.dialogVisible = true;
    },
    // 重置
    reset() {
      this.$refs.ruleForm.resetFields();
    },
    // 提交
    sub() {
      this.$refs.ruleForm.validate((bool, obj) => {
        if (bool) {
          // todo
        } else {
          this.$message({
            message: "数据不全",
            type: "error",
          });
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.other {
  padding: 20px;
}
</style>