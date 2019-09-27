<template>
  <div id="LoginContent" class="_center">
    <img src="@/assets/bolg_logo.png" class="_inline_block _w120 _mb30" />
    <el-input v-model="username" placeholder="账号"></el-input>
    <el-input placeholder="密码" v-model="password" show-password></el-input>
    <el-row>
      <el-button type="primary" @click="$router.push('/blog/list')">登录</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LoginContent',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
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

  .el-input--suffix{
    padding:12px 0 25px;
  }

  .el-button--primary {
    width: 255px;
  }
}
</style>
