<template>
  <div class="app">
    <el-container>


      


      <el-header style="height:48px" >
        <el-row>
          <el-col>
            <div class="grid-content bg-purple-dark">
              <i class="icon icon_back" @click="goto('/nation')"></i>
              <h2>芬兰天然滑石</h2>
              <i class="icon icon_search"></i>
              <i class="icon icon_cart_full"></i>
            </div>
          </el-col>
        </el-row>
      </el-header>

      <!-- nime -->
      <el-main style="overflow: hidden;padding: 0;position: relative;background: #fff;" :class="[sty?'tt':' ']">
        <el-row>
          <el-col class="pic">
            <a href>
              <img src="../images/wan.jpg" alt />
            </a>
          </el-col>
        </el-row>

        <div class="text" style=" width: 100%;height: 44px;float: left;">
          <ul style="float: left;margin-left: 10px; width:278px">
            <li
              style=" float: left;width:28px;margin-right: 5%;height:44px;text-aline:center;color:#333; line-height:44px"
            >综合</li>
            <li
              style=" float: left;width:28px;margin-right: 5%;height:44px;text-aline:center;color:#333; line-height:44px"
            >销量</li>
            <li
              style=" float: left;width:28px;margin-right: 5%;height:44px;text-aline:center;color:#333; line-height:44px"
            >新品</li>
            <li
              style=" float: left;width:48px;margin-right: 5%;height:44px;text-aline:center;color:#333; line-height:44px"
            >价格</li>
            <li style="position: relative;">
              <i class="el-icon-arrow-up"></i>
              <i class="el-icon-arrow-down"></i>
            </li>
          </ul>
        </div>

        <el-row>
          <el-col
            v-for="item in  goods[13] "
            :key="item.id"
            :xs="12"
            :sm="8"
            :md="6"
            :lg="4"
            :xl="3"
          >
            <!-- 下次点击事件没有触发时就试试native -->
            <div style=" padding: 10px; height:239px; border: 0.2px #ccc solid " @click="goto('/detail')">
              <div style="width:167px;height:167px;margin-bottom: 10px;">
                <img :src="item.coverImg" style="width:100%;height:100%" />

              </div>
              <h2 style="margin-bottom: 10px;">{{item.name}}</h2>
              <p class="price">
                <span class="pp">￥{{item.salePrice}}</span>
                <del>￥{{item.price}}</del>
                <span class="ccc">{{item.countryName}}</span>
              </p>
            </div>
          </el-col>
        </el-row>

        <!-- footer -->
       <el-main class="main"  :class="[sty?'':'nn']">
      </el-main>


        <el-col class="none">没有更多商品</el-col>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/Load' }">APP</el-breadcrumb-item>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <span @click="app">小程序</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/Service' }">联系客服</el-breadcrumb-item>
        </el-breadcrumb>
        <el-col class="none">
          <p class="p" style="color: #c5c5c5;">© 2019 喜地电子商务有限公司 版权所有</p>
        </el-col>
        <el-col class="none"></el-col>
        <el-col class="none"></el-col>
      </el-main>
      <el-col class="chengxu" :class="[sty?'bb':'nn ']">
        <div class="xiao">微信搜索“喜地优品”小程序，实现快捷购物</div>
        <div class="ok" @click="ok">确定</div>
      </el-col>
     
    </el-container>
  </div>
</template>
<script>
import { my } from "../Api";

export default {
  data() {
    return {
      sty: false,
      goods: []
    };
  },
  async created() {
    let { id } = this.$route.params;

    let {
      data: { data }
    } = await my.get("/guojiaguan");

    let datas = data[0].data.country16;
    // console.log(datas);
    this.goodslist = datas;
    let da = datas.map(item => {
      return item[6].B;
    });
    this.goods = da;
    // console.log(da);
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    app() {
      this.sty = true;
      // console.log("+++");
    },
    ok() {
      this.sty = false;
      // console.log(this.sty);
    }
  }
};
</script>
<style lang="scss" scoped>
.app {
  .bg-purple-dark {
    width: 240px;
    height: 48px;
    position: relative;
    top: 0;
    z-index: 995;
    .icon_back {
      width: 10px;
      position: absolute;
      left: 10px;
      line-height: 48px;
      color: #999;
      background: #fff;
    }
    h2 {
      font-size: 18px;
      color: #333;
      text-align: center;
      display: block;
      width: 10rem;
      box-sizing: border-box;
      overflow: hidden;
      height: 48px;
      line-height: 48px;
      position: absolute;
      top: 0px;
      left: 120px;
    }
    .icon_search {
      position: absolute;
      top: 10px;
      right: -100px;
    }
    .icon_cart_full {
      position: absolute;
      top: 10px;
      right: -150px;
    }
  }

  .none {
    width: 414px;
    height: 30px;
    font-size: 12px;
    color: #555;
    line-height: 30px;
    text-align: center;
  }
  .el-breadcrumb {
    margin-top: 47px;
    height: 30px;
    line-height: 30px;
    margin-left: 110px;

    .el-breadcrumb__item {
      font-size: 12px;
      text-align: center;
    }
  }

  .p {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    text-align: center;

    font-size: 12px;
  }
  .pic {
    width: 414px;
    height: 157px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .el-icon-arrow-up {
    position: absolute;
    top: 10px;
    right: 110px;
  }
  .el-icon-arrow-down {
    position: absolute;
    top: 20px;
    right: 110px;
  }
  .chengxu {
    width: 384px;
    height: 127px;
    background: #fff;
    position: fixed;
    top: 300px;
    border: #eee 1px solid;
    left: 15px;
    display: none;

    .xiao {
      width: 335px;
      height: 21px;
      border-bottom: #eee 1px solid;
      padding: 2rem;
      font-size: 13px;
      text-align: center;
      line-height: 21px;
    }
    .ok {
      width: 384px;
      height: 50px;
      color: #00bebf;
      font-size: 17px;
      text-align: center;
      line-height: 50px;
    }
  }
  .nn {
    display: none;
  }
  .bb {
    display: block;
  }
  .price {
      .pp {
        color: #00bebf;
      }
      .ccc {
        float: right;
      }
      del {
        margin-left: 5px;
        color: #c5c5c5;
       
      }
    }
    .main{
        width:414px;height:20000px; position: fixed;top:0px;left:0px;right:0px;bottom:0px; background:#000;
    opacity: 0.5;
    }
  
}
</style>