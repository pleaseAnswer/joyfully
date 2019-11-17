<template>
  <div>
    <header class="managelist-head">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">用户管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      </el-breadcrumb>
    </header>

    <!-- 表格内容 -->

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="200px"></el-table-column>
      <el-table-column prop="name" label="用户名" width="200px"></el-table-column>
      <el-table-column prop="administrator" label="操作者"></el-table-column>
      <el-table-column label="操作" >
        <el-button style="background:#00bebf; margin-right:20px">
          <i class="el-icon-edit" style="color:#fff;" @click="goto('/addUser')"></i>
        </el-button>
        <el-button style="background:#ff5e5f;">
          <i class="el-icon-delete-solid" style="color:#fff;"></i>
        </el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
      goto(path){
          this.$router.push(path);
      }
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          administrator: "平台管理员"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          administrator: "平台管理员"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          administrator: "平台管理员"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          administrator: "平台管理员"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.managelist-head {
  width: 100%;
  height: 40px;
  .el-breadcrumb {
    padding: 5px 20px;
    font-size: 18px;
    line-height: 40px;
    // background: #963;
  }
}
</style>