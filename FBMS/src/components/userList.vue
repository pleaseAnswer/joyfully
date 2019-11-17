<template>
    <div>
        <header class="userlist-head">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>用户列表</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <main class="userlist-main">
            <div class="userlist-button">
                <el-button style="color:#00bebf" @click="goto('/addUser')"><i class="el-icon-circle-plus-outline" style="font-size:20px"></i></el-button>
                <el-button><i class="el-icon-delete-solid" style="color:#ff5e5f; font-size:20px"></i></el-button>
            </div>
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="用户名" prop="username" width="400"></el-table-column>
                <el-table-column label="密码" prop="password" width="400"> </el-table-column>
                <el-table-column label="操作" show-overflow-tooltip>
                    <el-button style="background:#00bebf; margin-right:20px"><i class="el-icon-edit" style="color:#fff;" @click="goto('/editUser')"></i></el-button>
                    <el-button style="background:#ff5e5f;"><i class="el-icon-delete-solid" style="color:#fff;"></i></el-button>
                </el-table-column>
            </el-table>
        </main>
        <footer class="userlist-footer">
             <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </footer>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          username: '王小虎',
          password: '上海市普陀区金沙江路 1518 弄'
        },{
          username: '王小虎',
          password: '上海市普陀区金沙江路 1518 弄'
        },{
          username: '王小虎',
          password: '上海市普陀区金沙江路 1518 弄'
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      goto(path){
          this.$router.push(path);
      }
    }
  }
</script>
<style lang="scss" scoped>
    .userlist-head{
        width: 100%;
        height: 40px;
        .el-breadcrumb{
            padding: 5px 20px;
            font-size: 18px;
            line-height: 40px;
            // background: #963;
        }
    }
   .userlist-main{
       width: 100%;
       height: calc(100% - 40px);
       .userlist-button{
           padding: 25px 0 10px 15px;
           text-align: left;
       }
       .el-table th .cell{
           text-align: center;
       }
   }
   .userlist-footer{
       width: 100%;
       height: 40px;
       position: fixed;
       bottom: 20px;
       left: 0;
       .el-pagination{
           text-align: center;
       }
   }
</style>