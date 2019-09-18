<template>
  <div class="login">
    <div class="login-content">
      <img src="../assets/bolg_logo.png" width="60%" />
      <el-input v-model="input" placeholder="账号"></el-input>
      <el-input placeholder="密码" v-model="input1" show-password></el-input>
      <el-row>
        <el-button type="primary">登录</el-button>
      </el-row>
    </div>
    <div class="footer">
      <el-container>
      <el-footer>
        <p>所有方:王璟旭</p>
        <p>王璟旭的个人网页,如涉及侵权,请联系本人下架</p>
      </el-footer>
    </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
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
  body,p{
    margin: 0;
  }
  p{
    padding: 0;
  }
.login-content {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0%;
  margin: auto;
  width: 260px;
  height: 240px;
}
.login img {
  display: block;
  margin: auto;
}
.el-input {
  padding: 10px 0;
}
.el-button--primary {
  margin: 10px 0;
  width: 260px;
}
.el-footer {
  background-color: #f5f5f5;
  color: #333;
  text-align: center;
  line-height: 30px;
}
.el-container{
  font-size: 12px;
}
.footer{
  position: absolute;
  left: 10%;
  bottom: 10%;
  width:80%;
}
</style>
