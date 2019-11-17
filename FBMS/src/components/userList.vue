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
            <template v-if="tableData.length!=0">
              <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="用户名" prop="username" width="400"></el-table-column>
                <el-table-column label="密码" prop="password" width="400"> </el-table-column>
                <el-table-column label="操作" show-overflow-tooltip>
                  <el-button style="background:#00bebf; margin-right:20px"><i class="el-icon-edit" style="color:#fff;" @click="goto('/editUser')"></i></el-button>
                  <el-button style="background:#ff5e5f;"><i class="el-icon-delete-solid" style="color:#fff;"></i></el-button>
                </el-table-column>
              </el-table>
            </template>
            
        </main>
        <footer class="userlist-footer">
           <div class="userlist-page">
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
  export default {
    data() {
      return {
        tableData: [],
        pagesize:6,
        pagenum:'',
        currentPage:1
      }
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
      goto(path){
        this.$router.push(path);
      },
      async changitem(val){
        
        this.currentPage = val;
        var skip = (this.currentPage - 1) * this.pagesize;
        var limit = this.pagesize;
        var {data} = await this.axios.get(`http://localhost:1910/userlist/show?skip=${skip}&limit=${limit}`);
        this.tableData=data;
        if(this.$refs.refpage!=undefined){
          this.$refs.refpage.map(ele=>{
            ele.classList.remove("activepage");
          })
          this.$refs.refpage[val-1].classList.add("activepage")
        }
      },
      async getpagenum(){
        var {data} = await this.axios.get("http://localhost:1910/userlist/show");
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
      .userlist-page{
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