<template>
  <div id="ListMain">
    <el-container>
      <el-main>
        <h3>前端笔记</h3>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column label="日期" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="标题" width="240">
            <template slot-scope="scope">
              <span>{{ scope.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column label="备注" width="240">
            <template slot-scope="scope">
              <span>{{ scope.row.remark }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                type="primary"
                icon="el-icon-edit "
                circle
              ></el-button>
              <el-button
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
                type="danger"
                icon="el-icon-delete"
                circle
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2019-09-01',
          title: 'Webpack与Gulp的区别',
          remark: '重要'
        },
        {
          date: '2019-09-02',
          title: 'git命令',
          remark: '重要'
        }
      ]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index);
      
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index,1)
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  margin: 10px 0 20px 20px;
  font-size: 20px;
}
.el-pagination {
  float: right;
  margin-top: 20px;
}
</style>
