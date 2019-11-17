<template>
  <div>
    <header class="userlist-head">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">用户管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <main class="userlist-main">
      <div class="userlist-button">
        <el-button style="color:#00bebf" @click="goto">
          <i class="el-icon-circle-plus-outline" style="font-size:20px"></i>
        </el-button>
        <el-button>
          <i class="el-icon-delete-solid" style="color:#ff5e5f; font-size:20px"></i>
        </el-button>
      </div>
      <template v-if="tableData.length!=0">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="用户名" prop="username" width="400"></el-table-column>
          <el-table-column label="密码" prop="password" width="400"></el-table-column>
          <el-table-column label="操作" show-overflow-tooltip>
            <el-button style="background:#00bebf; margin-right:20px">
              <i class="el-icon-edit" style="color:#fff;" @click="goto"></i>
            </el-button>
            <el-button style="background:#ff5e5f;">
              <i class="el-icon-delete-solid" style="color:#fff;"></i>
            </el-button>
          </el-table-column>
        </el-table>
      </template>
    </main>

    <div class="box" :class="[sty?'bb':'nn',tran?'time':'']">
      <el-form>
        <el-form-item label="用户名" style="width:100%; padding-left:25px; margin-top:30px" >
          <el-input v-model="username" style="width:70%;"></el-input>
        </el-form-item>
        <el-form-item label="密码" style="width:100%; padding-left:25px;" >
          <el-input type="password" v-model="password" style="width:70%; margin-left:12px;"></el-input>
        </el-form-item>

        <el-form-item label="备注  :  " style="margin-left:27px">
          <el-input type="textarea" style="width:400px;" v-model="input"></el-input>
        </el-form-item>

        <el-form-item style="padding: 10px 0 0 40px;">
          <el-button style="background:#00bebf; color:#fff;" @click="onSubmit">立即添加</el-button>
          <el-button @click="absent">取消</el-button>
        </el-form-item>
      </el-form>
    </div>

    <footer class="userlist-footer">
      <div class="userlist-page">
        <i class="el-icon-arrow-left" ref="refprev" @click="prev"></i>
        <span
          v-for="item in pagenum"
          :key="item"
          class="pagenum"
          @click="changitem(item)"
          ref="refpage"
        >{{item}}</span>
        <i class="el-icon-arrow-right" ref="refnext" @click="next"></i>
      </div>
    </footer>
    <!-- 阴影 -->
    <el-main class="main" :class="[sty?'bb':'nn',tran?'time':'']"></el-main>
     <el-col class="chengxu" :class="[chuxian?'bb':'nn']">
      <div class="xiao">确定要取消添加吗？</div>
      <div class="ok" @click="ok">是</div>
      <div class="ok" @click="on">否</div>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sty: false,
      tableData: [],
      pagesize: 6,
      pagenum: "",
      currentPage: 1,
      username: "",
      password: "",
      input:"",
      tran:false,
      chuxian:false,

    };

  },
  created() {
    this.changitem(this.currentPage);
    this.getpagenum();
  },
  mounted() {
    this.changitem(this.currentPage);
    if (this.$refs.refprev != undefined && this.$refs.refnext != undefined) {
      if (this.currentPage == 1 && this.pagenum == 1) {
        this.$refs.refnext.classList.add("disableskip");
        this.$refs.refprev.classList.add("disableskip");
      }
    }
  },
  updated() {
    if (
      this.$refs.refprev != undefined &&
      this.$refs.refnext != undefined &&
      this.pagenum != 1
    ) {
      if (this.currentPage == 1) {
        this.$refs.refnext.classList.remove("disableskip");
        this.$refs.refprev.classList.add("disableskip");
      } else if (this.currentPage == this.pagenum) {
        this.$refs.refprev.classList.remove("disableskip");
        this.$refs.refnext.classList.add("disableskip");
      } else {
        this.$refs.refnext.classList.remove("disableskip");
        this.$refs.refprev.classList.remove("disableskip");
      }
    }
  },
  methods: {
    absent(){
       this.chuxian = true;
       
    },
     ok(){
      this.chuxian = false;
       this.input='',
      this. username=''
      this.password='' 
       this.sty=false
       this.tran=true
      
    },
       on(){
         this.chuxian=false
        
       
    },
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

    goto() {
      this.sty = true;
    },
    onSubmit() {
      this.sty = false;
    },
    async changitem(val) {
      this.currentPage = val;
      var skip = (this.currentPage - 1) * this.pagesize;
      var limit = this.pagesize;
      var { data } = await this.axios.get(
        `http://localhost:1910/userlist/show?skip=${skip}&limit=${limit}`
      );
      this.tableData = data;
      if (this.$refs.refpage != undefined) {
        this.$refs.refpage.map(ele => {
          ele.classList.remove("activepage");
        });
        this.$refs.refpage[val - 1].classList.add("activepage");
      }
    },
    async getpagenum() {
      var { data } = await this.axios.get(
        "http://localhost:1910/userlist/show"
      );
      this.pagenum = parseInt((data.length - 1) / this.pagesize) + 1;
    },
    prev() {
      if (
        this.$refs.refprev != undefined &&
        this.$refs.refnext != undefined &&
        this.pagenum != 1
      ) {
        if (this.currentPage != 1) {
          this.$refs.refprev.classList.remove("disableskip");
          this.currentPage = this.currentPage - 1;
          if (this.$refs.refpage != undefined) {
            this.$refs.refpage.map(ele => {
              ele.classList.remove("activepage");
            });
            this.changitem(this.currentPage);
          }
        }
      }
    },
    next() {
      if (
        this.$refs.refprev != undefined &&
        this.$refs.refnext != undefined &&
        this.pagenum != 1
      ) {
        if (this.currentPage != this.pagenum) {
          this.$refs.refnext.classList.remove("disableskip");
          this.currentPage = this.currentPage + 1;
          if (this.$refs.refpage != undefined) {
            this.$refs.refpage.map(ele => {
              ele.classList.remove("activepage");
            });
            this.changitem(this.currentPage);
          }
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.userlist-head {
  width: 100%;
  height: 40px;
  .el-breadcrumb {
    padding: 5px 20px;
    font-size: 18px;
    line-height: 40px;
    // background: #963;
  }
}
.userlist-main {
  width: 100%;
  height: calc(100% - 40px);
  .userlist-button {
    padding: 25px 0 10px 15px;
    text-align: left;
  }
  .el-table th .cell {
    text-align: center;
  }
}
.userlist-footer {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 20px;
  left: 0;
  .userlist-page {
    text-align: center;
    i {
      padding: 0 5px;
    }
    .pagenum {
      padding: 0 5px;
      cursor: pointer;
    }
  }
  .activepage {
    color: #00bebf;
  }
  .disableskip {
    cursor: not-allowed;
  }
}
.box {
  width: 500px;
  height: 400px;
  background: #ccc;
  border: #00bebf, 1px solid;
  position: absolute;
  top: 100px;
  z-index: 2000;
  left: 280px;
  display: none;
}
.main {
  width: 2000px;
  height: 20000px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #000;
  opacity: 0.5;
  z-index: 1400;
  display: none;
}
.bb {
  display: block;
}
.nn {
  display: none;
}
.right{
  transition: transform 1s;

}

.chengxu {
    width: 368px;
    height: 127px;
    background: #fff;
    position: fixed;
    top: 300px;
    border: #eee 1px solid;
    left: 600px;
    z-index:9990;
      background: hsl(188, 67%, 83%);

    .xiao {
      width: 308px;
      height: 21px;
      border-bottom: #eee 1px solid;
      padding: 1.8rem;
      font-size: 13px;
      text-align: center;
      line-height: 21px;
      float: left;
    }
    .ok {
      width: 183px;
      height: 50px;
      color: #0c4e4e;
      font-size: 17px;
      text-align: center;
      line-height: 50px;
      float: left;
    }
  }
</style>