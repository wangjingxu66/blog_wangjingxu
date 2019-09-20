<template>
  <div id="ListMain">
    <el-container>
      <el-main>
        <h3>前端笔记</h3>
        <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      property="title"
      label="标题"
      width="120">
    </el-table-column>
    <el-table-column
      property="operation"
      label="操作">
    </el-table-column>
  </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ListMain',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
body{
  position: relative;
}
.el-main {
  position: absolute;
  left: 300px;
  right: 120px;
  bottom:0;
  top: 130px;
  background-color: #cccccc;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          title: '王小虎',
          operation: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          title: '王小虎',
          operation: '上海市普陀区金沙江路 1517 弄'
        }],
      
      }
    },

    
  }
</script>