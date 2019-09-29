<template>
  <div id="LoginFooter">
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
    desc: {
      require: true,
      type: String
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#LoginFooter {
  position: fixed;
  height: 118px;
  bottom: 5px;
  width: 100%;

  .el-footer {
    height: 118px !important;
    background-color: #f5f5f5;
    color: #333;
    text-align: center;
  }

  .el-footer p:first-child {
    padding: 36px 0 10px;
    line-height: 12px;
    font-size: 12px;
    color: #868686;
    font-weight: bold;
  }

  .el-footer p:last-child {
    line-height: 12px;
    font-size: 12px;
    color: #ababab;
  }
}
</style>
