<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">订单管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="商品名称" width="120"></el-table-column>
      <el-table-column label="添加时间" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="address" label="分类" show-overflow-tooltip></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "王小虎",
          date: "2016-05-03",
          address: "日本"
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
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>