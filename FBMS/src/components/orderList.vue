<template>
  <div>
    <header class="orderlist-head">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">订单管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>订单列表</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%; padding-left:20px;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column prop="id" label="ID" width="120"></el-table-column>
      <!-- <el-table-column prop="img" label="图片" width="120"></el-table-column> -->
      <el-table-column prop="price" label="价格" width="120"></el-table-column>
      <el-table-column prop="text" label="标题" show-overflow-tooltip></el-table-column>
      <el-table-column prop="qty" label="数量" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <footer class="orderlist-footer">
      <div class="orderlist-page">
        <i class="el-icon-arrow-left" ref="refprev" @click="prev"></i>
        <span v-for="item in pagenum" :key="item" class="pagenum" @click="changitem(item)" ref="refpage">
          {{item}}
        </span>
        <i class="el-icon-arrow-right" ref="refnext" @click="next"></i>
      </div> 
    </footer>
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex';
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      pagesize:6,
      pagenum:'',
      currentPage:1,
    };
  },
  created(){
    this.changitem(this.currentPage);
    this.getpagenum();
  },
  mounted(){
    this.changitem(this.currentPage);
    if(this.$refs.refprev!=undefined && this.$refs.refnext!=undefined){
      if(this.currentPage == 1 && this.pagenum == 1){
        this.$refs.refnext.classList.add("disableskip");
        this.$refs.refprev.classList.add("disableskip");
      }
    }
  },
  updated(){
    if(this.$refs.refprev!=undefined && this.$refs.refnext!=undefined && this.pagenum != 1){
      if(this.currentPage == 1){
        this.$refs.refnext.classList.remove("disableskip");
        this.$refs.refprev.classList.add("disableskip");
      }else if(this.currentPage == this.pagenum){
        this.$refs.refprev.classList.remove("disableskip");
        this.$refs.refnext.classList.add("disableskip");
      }else{
        this.$refs.refnext.classList.remove("disableskip");
        this.$refs.refprev.classList.remove("disableskip");
      }
    }
  },
  methods: {
     handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async handleDelete(index) {
      if(this.tableData.length!=0){
        let id = this.tableData[index].id;
        console.log(id);
        
        let status = await this.axios.delete(`http://localhost:1910/orderlist/${id}`);
        console.log(index, status);
      }
      this.tableData.splice(index,1);
    },
    async changitem(val){ 
      this.currentPage = val;
      var skip = (this.currentPage - 1) * this.pagesize;
      var limit = this.pagesize;
      var {data} = await this.axios.get(`http://localhost:1910/orderlist/show?skip=${skip}&limit=${limit}`);
      this.tableData=data;
      if(this.$refs.refpage!=undefined){
        this.$refs.refpage.map(ele=>{
          ele.classList.remove("activepage");
        })
        this.$refs.refpage[val-1].classList.add("activepage")
      }
      this.$forceUpdate();
    },
    async getpagenum(){
      var {data} = await this.axios.get("http://localhost:1910/orderlist/show");
      this.pagenum = parseInt((data.length-1) / this.pagesize) + 1;
    },
    prev(){
      if(this.$refs.refprev!=undefined && this.$refs.refnext!=undefined && this.pagenum != 1){
        if(this.currentPage != 1){
          this.$refs.refprev.classList.remove("disableskip");
          this.currentPage = this.currentPage - 1;
          if(this.$refs.refpage!=undefined){
            this.$refs.refpage.map(ele=>{
              ele.classList.remove("activepage");
            })
            this.changitem(this.currentPage);
          }
        }
      }
    },
    next(){
      if(this.$refs.refprev!=undefined && this.$refs.refnext!=undefined && this.pagenum != 1){
        if(this.currentPage != this.pagenum){
          this.$refs.refnext.classList.remove("disableskip");
          this.currentPage = this.currentPage + 1;
          if(this.$refs.refpage!=undefined){
            this.$refs.refpage.map(ele=>{
              ele.classList.remove("activepage");
            })
            this.changitem(this.currentPage);
          }
        }
      }
    },
    ...mapMutations({
      removeItem:'removeFromCart'
    }),
  }
};
</script>
<style lang="scss" scoped>
.orderlist-head{
  width: 100%;
  height: 40px;
  .el-breadcrumb{
    padding: 5px 20px;
    font-size: 18px;
    line-height: 40px;
    // background: #963;
  }
}
.orderlist-footer{
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 20px;
    left: 0;
  .orderlist-page{
    text-align: center;
    i {
      padding: 0 5px;
    }
    .pagenum{
      padding: 0 5px;
      cursor: pointer;
    }
  }
  .activepage{
    color: #00bebf;
  }
  .disableskip{
    cursor: not-allowed;
  }
}
</style>