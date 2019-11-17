<template>
  <div style="width:100%" class="wrapper">
    <header>
      <div class="my-logo-wrapper">
        <img class="my-logo" src="./img/loadingx.gif" alt="">
        喜地后台管理系统
      </div>
    </header>
    <div class="main">
      <aside class="left">
        <el-collapse accordion style="font-size:16px;">
          <el-collapse-item>
            <template slot="title">
            <i class="el-icon-menu"></i>权限管理
            </template>
            <div @click="goto('/mangeList')">管理员管理</div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
            <i class="el-icon-menu"></i>用户管理
            </template>
            <div @click="goto('/userList')">用户列表</div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
            <i class="el-icon-menu"></i>商品管理
            </template>
            <div @click="goto('/goodsList')">商品列表</div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
            <i class="el-icon-menu"></i>订单管理
            </template>
            <div @click="goto('/orderList')">订单列表</div>
          </el-collapse-item>
        </el-collapse>
      </aside>
      <section class="right">
        <router-view />
      </section>
    </div>
    
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeNames: ['1']
    };
  },
  methods:{
    goto(path){
      this.$router.push(path);
    }
  }
}
</script>

<style lang="scss">
body,html{
  width: 100%;
  height: 100%;
}
.wrapper{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.my-logo-wrapper{
  width: 100%;
  height:58px;
  color: #fff;
  font-size: 44px;
  font-weight: bold;
  line-height: 60px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #015555;
  border-bottom: 1px solid #fff;
  .my-logo{
    display: inline-block;
    width: 80px;
    height: 56px;
    padding-right: 20px; 
  }
}
.main{
  width: 100%;
  height: calc(100% - 100px);
}
.left{
  width: 200px;
  height: 100%;
  float: left;
  // padding-top: 50px;
  position: fixed;
  background: #015555;
  // border: 1px solid #015555;
  #el-collapse-head-488,
  #el-collapse-head-8087,
  #el-collapse-head-4593,
  #el-collapse-head-1304{
    height: 60px;
  }
  .el-collapse-item__header{
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    background: #015555;
  }
  .el-collapse-item__content{
    font-size: 16px;
    padding-left: 48px;
    padding: 10px 0 10px 48px;
    cursor: pointer;
    color: #fff;
    background: #015555;
    border-top: 1px solid #fff;
  }
  .el-icon-menu{
    padding: 0 15px;
    font-size: 18px;
  }
  
}
.right{
  height: 100%;
  width: calc(100% - 200px);
  float: right;
}
</style>
