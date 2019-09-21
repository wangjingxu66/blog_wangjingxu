<template>
  <div id="ListHeader">
    <el-container>
      <el-header>
        <img src="@/assets/blog_logo_2.png">
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "ListHeader",
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .el-header {
    height: 66px !important;
    background-color: #3e89da;
    color: #333;
    line-height: 66px;
  }
  img{
    width: 120px;
    margin-top: 30px;
    margin-left:70px;
  }
</style>
