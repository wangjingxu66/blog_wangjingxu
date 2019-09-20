<template>
  <div id="ListAside">
    <el-container>
      <el-aside>
        <h3 class="el-icon-document">文章列表</h3>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "ListAside"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-aside {
  position:absolute;
  height: 100%;
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
}
</style>