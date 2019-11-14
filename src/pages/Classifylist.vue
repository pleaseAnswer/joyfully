<template>
  <div>
    <header>
      <i class="el-icon-arrow-left"></i>
      <p>锅具</p>
      <i class="el-icon-search"></i>
      <i class="el-icon-shopping-cart-full"></i>
    </header>
    <nav>
      <el-tabs type="card">
        <el-tab-pane label="全部">
          <div class="show">
            <li>综合</li>
            <li>销量</li>
            <li>新品</li>
            <li>价格<i class="el-icon-arrow-up"></i><i class="el-icon-arrow-down"></i></li>
         </div>
            <div v-for="item in 6" :key="item" class="goods" > 
              <img src="https://7-image.xidibuy.com/shop/shop.11e90879427effdb3a75267cde81258df683c9bf7cd8cc7f3500842dd515aa3d.jpeg/800x800/360/webp" alt="">
              <a href="">日本原产sajitoki佐治陶器万古烧陶土锅砂锅炖锅汤锅煮锅9号</a>
              <p class="text01">¥258.69</p>
              <p class="text02">日本</p>
            </div>
        </el-tab-pane>



        <el-tab-pane label="卡包">
         <div class="show">
            <li>综合</li>
            <li>销量</li>
            <li>新品</li>
            <li>价格<i class="el-icon-arrow-up"></i><i class="el-icon-arrow-down"></i></li>
         </div>
          消息中心</el-tab-pane>
        <el-tab-pane label="角色管理">
            <div class="show">
            <li>综合</li>
            <li>销量</li>
            <li>新品</li>
            <li>价格<i class="el-icon-arrow-up"></i><i class="el-icon-arrow-down"></i></li>
         </div>
          角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">
            <div class="show">
            <li>综合</li>
            <li>销量</li>
            <li>新品</li>
            <li>价格<i class="el-icon-arrow-up"></i><i class="el-icon-arrow-down"></i></li>
         </div>
          定时任务补偿</el-tab-pane>
      </el-tabs>
      <!-- <ul class="nav-list">
        <li>全部</li>
        <li>汤锅</li>
        <li>煎锅/平底锅</li>
        <li>锅具配件</li>
        <li>炒锅</li>
        <li>烤锅</li>
        <li>高压锅/压力锅</li>
        <li>奶锅</li>
        <li>蒸锅/深烧锅</li>
        <li>珐琅铸铁锅</li>
        <li>塔吉锅</li>
        <li>水壶</li>
        <li>砂锅</li>
        <li>微波炉配件</li>
        <li>烘焙模具</li>
        <li>炸锅</li>
        <li>锅具套装</li>
      </ul> -->
    </nav>
    
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>

header{
    width: 240px;
    height: 48px;
    position: relative;
    top: 0;
    z-index: 995;
    
    i{
    font-size: 1.6rem;
    line-height: 48px;
    color: #999;
    width: 4rem;
    }
  .el-icon-arrow-left{
    width: 10px;
    position: absolute;
    left: 10px;
    line-height: 48px;
    color: #999;
  }
  p{
    font-size: 1.1rem;
    color: #333;
    text-align: center;
    display: block;
    width:10rem;
    box-sizing: border-box;
    overflow: hidden;
    height: 48px;
    line-height: 48px;
    position: absolute;
    top: 0px;
    left: 120px;
  }
  .el-icon-search{
    position: absolute;
    top: -2px;
    right: -120px;
    
  }
  .el-icon-shopping-cart-full{
  position: absolute;
  top: -2px;
  right: -150px;
  }
}

//导航
.el-tab-pane label{
  width: 100%;
}

.show{
    // color: #00bebf;
    // font-weight: bold;
    width: 100%;
    height: 30px;
    float: left;
    // background: pink;
    li{
      float: left;
      padding: 0 26px 0 20px;
      font-size: 16px
    }
    .el-icon-arrow-up{
      position: relative;
      top: -4px;
      left: 10px;
    }
    .el-icon-arrow-down{
      position: relative;
      top: 7px;
      left: -6px;
    }
}

// 列表
.goods{
    width: 50%;
    border-bottom: 1px solid #f3f3f3;
    border-right: 1px solid #f3f3f3;
    display: block;
    float: left;
    box-sizing: border-box;
    padding: 12px;
    padding-top: 0;
    img{
      width: 100%;
    }
    a{
      color: #000;
      font-size: 11.5px;
    }
    .text01{
      font-size: 12px;
      color: #00bebf;
    }
    .text02{
      font-size: 12px;
      color: #777;
      position: relative;
      right: -130px;
      top: -16px;
    }
}

</style>