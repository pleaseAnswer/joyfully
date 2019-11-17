<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button
      type="primary"
      class="el-icon-circle-plus-outline"
      style="  background: #00bebf;
       padding:10px 9px; border: 1px solid #00bebf;"
    >添加</el-button>
    <el-button
      type="info"
      class="el-icon-delete"
      style="  background: #00bebf;
       padding:10px 9px; border: 1px solid #00bebf;"
    >删除</el-button>
    <div style="float: right; width:100%:height:100%" >
      <el-input v-model="input" placeholder="请输入内容" style="width:200px; float: left; ">
      </el-input>
      <el-button type="primary" icon="el-icon-search" style=" float: left; margin-left: 5px;
  ">搜索</el-button>

    </div>
    
    <el-table 
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100% 
    margin-top: 30px;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column prop="name" label="姓名" width="120"></el-table-column>

      <el-table-column label="添加时间" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>

      <el-table-column prop="classify" label="分类" width="120"></el-table-column>
      <el-table-column prop="price" label="价格（原价）" width="120"></el-table-column>
      <el-table-column prop="price" label="价格（现价）" width="120"></el-table-column>
      <el-table-column prop="price" label="库存" width="120"></el-table-column>
      <el-table-column prop="price" label="状态" width="120"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button 
           style=" margin-left: 0px;"
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button 
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            icon="el-icon-delete"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage4: 4,
      tableData: [
        {
          name: "王小虎",
          date: "2016-05-03",
          classify: "锅具",
          price: "日本"
        },
        {
          name: "王小虎",
          date: "2016-05-02",
          address: "日本"
        },
        {
          name: "王小虎",
          date: "2016-05-04",
          address: "日本"
        },
        {
          name: "王小虎",
          date: "2016-05-01",
          address: "日本"
        },
        {
          name: "王小虎",
          date: "2016-05-08",
          address: "日本"
        },
        {
          name: "王小虎",
          date: "2016-05-06",
          address: "日本"
        },
        {
          name: "王小虎",
          date: "2016-05-07",
          address: "日本"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-breadcrumb {
  width: 1208px;
  height: 52px;
  border-bottom: 3px, solid #ccc;
  margin-left: 40px;
  line-height: 52px;
 
}
.el-table_1_column_4 {
  width: 120px;
 
}
.el-button {
  margin-left: 40px;
  .el-icon-circle-plus-outlin {
    background: #00bebf;
  }
 
}
.el-table th .cell{
  margin-left: 20px;
}
</style>