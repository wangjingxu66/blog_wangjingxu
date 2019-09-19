<template>
  <div class="login-footer">
      <el-footer>
        <p>{{desc}}</p>
        <p>王璟旭的个人网页,如涉及侵权,请联系本人下架</p>
      </el-footer>
  </div>
</template>

<script>
export default {
  name: "LoginFooter",
  props: {
      desc:{
          require:true,
          type:String,
      }
  },
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
.login-footer{
  position: fixed;
  left: 3%;
  bottom: 10%;
  width:94%;
}

.el-footer {
  background-color: #f5f5f5;
  color: #333;
  text-align: center;
  line-height: 30px;
}
.el-footer p:first-child{
  font-size: 12px;
  color: #868686;
  font-weight: bold;
}
.el-footer p:last-child{
    font-size: 8px;
    color: #ababab;
}
</style>
