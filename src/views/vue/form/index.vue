<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        v-for="(item, index) in ruleForm.data"
        :key="index"
        :label="item.label"
        :prop="item.props"
        :rules="item.rules"
      >
        <el-input v-model.number="item.value"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        data: [
          {
            label: "标题",
            props: "title",
            value: "",
            rules: [
              { required: true, message: "请输入邮箱地址", trigger: "blur" },
            ],
          },
          {
            label: "年龄",
            props: "age",
            value: "",
            rules: [
              { required: true, message: "请输入邮箱地址", trigger: "blur" },
            ],
          },
          {
            label: "性别",
            props: "gender",
            value: "",
            rules: [
              { required: true, message: "请输入邮箱地址", trigger: "blur" },
            ],
          },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
</style>