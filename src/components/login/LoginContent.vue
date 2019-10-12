<template>
  <div id="LoginContent" class="_center">
    <img src="@/assets/bolg_logo.png" class="_inline_block _w120 _mb30" />
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item prop="username">
        <el-input type="username" v-model="ruleForm.username" placeholder="账号" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="密码" v-model="ruleForm.password" show-password autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import postLoginMsg from '@/apis/postLoginMsg'

export default {
  name: "LoginContent",

  data() {
    var validateUsername = (rule, value, callback) => {
      let reg = /[0-9a-zA-Z]{5,12}/;
      if (!reg.test(value)) {
        callback(new Error("账号必须是由5-12位数字和字母组成"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      let reg = /[0-9a-zA-Z]{5,12}/;
      if (!reg.test(value)) {
        callback(new Error("密码必须是由5-12位数字和字母组成"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { validator: validateUsername, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePassword, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      var type =this.ruleForm
      console.log(this.ruleForm)
      this.$refs[formName].validate( async valid => {
        if (valid) {
          try{
            const res = await postLoginMsg(
              { type }
            )
          }catch(err){
            console.log(err)
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#LoginContent {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 255px;
  height: 240px;

  .el-button--primary {
    width: 255px;
  }

  .loginbtn {
    margin-bottom: 0;
  }
}
</style>
