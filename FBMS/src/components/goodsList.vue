<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">商品管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button
      type="primary"
      class="el-icon-circle-plus-outline"
      style="  background: #00bebf;
       padding:10px 9px; border: 1px solid #00bebf;"
      @click="add"
    >添加</el-button>

    <el-button
      type="info"
      class="el-icon-delete"
      @click="removeitem"
      style="
       padding:10px 9px; 
       background: #ff5e5f; 
       border: 1px solid #ff5e5f;"
    >删除</el-button>
    <div style="float: right; width:100%:height:100%">
      <el-input placeholder="请输入内容" style="width:200px; float: left; "></el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        style=" float: left; margin-left: 5px; background: #00bebf;
       border: 1px solid #00bebf;"
      >搜索</el-button>
    </div>
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100% 
    margin-top: 30px;"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="图片" width="50">
          <template slot-scope="props">
            <img :src="props.row.img" alt="" style="width:40px;height:40px">
          </template>
        </el-table-column>
        <el-table-column prop="text" label="商品名称" width="500" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"></el-table-column>
        <el-table-column prop="price" label="价格（现价）" width="200"></el-table-column>
        <el-table-column prop="kucun" label="库存" width="120"></el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              style=" margin-left: 0px;background: #00bebf;
       border: 1px solid #00bebf;padding:6px 10px"
              type="primary"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            ></el-button>
            <el-button
              type="danger"
              @click="handleDelete(scope.$index)"
              icon="el-icon-delete" style="padding:6px 10px"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <footer class="goodslist-footer">
      <div class="goodslist-page">
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

    <!-- 弹框 -->
    <div class="box" :class="[sty?'':'nn',tran?'time':'']">
      <el-form label-width="90px" style="margin-top:30px">
        <el-form-item label="商品名称">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="商品副标题">
          <el-input v-model="namett"></el-input>
        </el-form-item>
        <div style="height:70px;width:1000px">
          <el-form-item label="商品价格" style=" float: left; ">
            <el-input placeholder style="width:200px; float: left; " v-model="price"></el-input>
          </el-form-item>
          <el-form-item label="销售价格" style=" float: left; ">
            <el-input placeholder style="width:200px; float: left; " v-model="pricett"></el-input>
          </el-form-item>
          <el-select v-model="value" placeholder="请选择国家名称" style="margin-left:70px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>

        <div>
          <el-form-item label="商品图片">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </div>

        <el-form-item label="商品描述 :">
          <el-input type="textarea" v-model="input"></el-input>
        </el-form-item>
      </el-form>

      <el-button
        @click="tan"
        type="primary"
        style="  background: #00bebf;
       padding:12px 12px; border: 1px solid #00bebf;"
      >确定</el-button>
      <!-- true -->
      <el-button @click="absent" style="  padding:12px 12px;">取消</el-button>
    </div>
    <!-- 遮罩 -->
    <el-main class="main" :class="[sty?'':'nn',tran?'time':'']"></el-main>



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
    
      imageUrl: "",
      name: "",
      namett: "",
      price: "",
      pricett: "",
      input: "",
      sty: false,
      tablelist: [],
      pagesize: 5,
      pagenum: "",
      currentPage: 1,
      chuxian:false,
      tran:false,

      tableData: [
        {
          name: "王小虎",
          date: "2016-05-03",
          address: "日本"
        }
      ],
      value: "",
      options: [
        {
          value: "选项1",
          label: "16国特品"
        },
        {
          value: "选项2",
          label: "德国"
        },
        {
          value: "选项3",
          label: "日本"
        },
        {
          value: "选项4",
          label: "韩国"
        },
        {
          value: "选项6",
          label: "英国"
        },
        {
          value: "选项7",
          label: "意大利"
        },
        {
          value: "选项8",
          label: "法国"
        },
        {
          value: "选项9",
          label: "西班牙"
        },
        {
          value: "选项10",
          label: "希腊"
        },
        {
          value: "选项11",
          label: "新西兰"
        },
        {
          value: "选项12",
          label: "瑞典"
        },
        {
          value: "选项13",
          label: "丹麦"
        },
        {
          value: "选项14",
          label: "芬兰"
        },
        {
          value: "选项15",
          label: "比利时"
        },
        {
          value: "选项16",
          label: "美国"
        },
        {
          value: "选项17",
          label: "奥地利"
        },
        {
          value: "选项18",
          label: "巴西"
        },
        {
          value: "选项19",
          label: "瑞士"
        },
        {
          value: "选项20",
          label: "澳大利亚"
        }
      ]
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
    absent() {
      this.chuxian = true;
    },
    ok(){
      this.chuxian = false;
       this.input='',
      this.name='',
      this.price='',
      this.pricett='',
      this.namett=''
      this.tran=true;
       this.sty=false
    },
    on(){
        this.chuxian=false
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },

    tan() {
        this.input='',
      this.name='',
      this.price='',
      this.pricett='',
      this.namett=''
      this.sty = false;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    add() {
      this.sty = true;
    },
    removeitem() {
      alert("确定要删除所有商品吗？");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    async handleDelete(index) {
      if(this.tableData.length!=0){
        let id = this.tableData[index]._id;
        let status = await this.axios.delete(`http://localhost:1910/goodslist/${id}`);
      }
      this.tableData.splice(index,1);
    },
    async changitem(val) {
      this.currentPage = val;
      var skip = (this.currentPage - 1) * this.pagesize;
      var limit = this.pagesize;
      var { data } = await this.axios.get(
        `http://localhost:1910/goodslist/show?skip=${skip}&limit=${limit}`
      );
      this.tableData = data;
      this.total = data.length;
      if (this.$refs.refpage != undefined) {
        this.$refs.refpage.map(ele => {
          ele.classList.remove("activepage");
        });
        this.$refs.refpage[val - 1].classList.add("activepage");
      }
    },
    async getpagenum() {
      var { data } = await this.axios.get(
        "http://localhost:1910/goodslist/show"
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
.el-table th .cell {
  margin-left: 20px;
}
.el-table .cell{
  color: #369;
}
.box {
  width: 900px;
  height: 800px;
  background: #ccc;
  border: #00bebf, 1px solid;
  position: absolute;
  top: 100px;
  z-index: 2000;
  left: 300px;
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
}
.nn {
  display: none;
}
.bb {
  display: block;
}
time{
  transition: transform 0.2s;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background: #fff;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.goodslist-footer {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 20px;
  left: 0;
  .goodslist-page {
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