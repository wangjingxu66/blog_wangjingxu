<template>
  <div class="login-content">
      <img src="@/assets/bolg_logo.png" width="120">
      <el-input v-model="input" placeholder="账号"></el-input>
      <el-input placeholder="密码" v-model="input1" show-password></el-input>
      <el-row>
        <el-button type="primary">登录</el-button>
      </el-row>
  </div>
</template>

<script>
export default {
  name: "LoginContent",
  data() {
    return {
      input: "",
      input1: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    margin: 0;
  }
.login-content {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0%;
  margin: auto;
  width: 255px;
  height: 240px;
}
.login img {
  display: block;
  margin: 0 auto 32px;
}
.el-input--suffix{
  padding:12px 0 25px;
}
.el-button--primary {
  width: 255px;
}

</style>
