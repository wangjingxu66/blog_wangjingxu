<template>
  <div id="DetailMain">
     <el-container>
      <el-main>
    <div>
      <h3>Webpack与Gulp的区别</h3>
      <el-row>
        <el-button size="mini" type="primary" icon="el-icon-edit" circle></el-button>
        <el-button size="mini" type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </div>
     </el-main>
    </el-container>
  </div>
  
</template>

<style lang="scss" scoped>
body {
  position: relative;
}
.el-main {
  position: absolute;
  left: 300px;
  right: 120px;
  bottom: 0;
  top: 130px;
  background-color: #ffffff;
  color: #333;
}
.el-main h3 {
  float: left;
  margin: 10px 0 20px 20px;
  font-size: 20px;
}
.el-button {
  float:right;
  margin-left: 10px;
}
.el-pagination {
  float: right;
  margin-top: 20px;
}
</style>