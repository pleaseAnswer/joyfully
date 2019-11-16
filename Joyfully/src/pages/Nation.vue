<template>
  <div class="Box">
    <el-container>
      <!-- 头部 -->
      <el-header :style="style">
        <div
          class="BoxTop"
          style="position:fixed;top:0px;z-index:9999;"
          @click="close"
          :style="style"
        >
          <div class="BoxTopClose">
            <div class="BoxTopCloseIcon">
              <i class="icon icon_close"></i>
            </div>
          </div>
          <div class="BoxTopIcon">
            <i class="BoxTopIconleaf">
              <i class="icon icon_logo_leaf" style="margin-top: 10px;margin-left:10px"></i>
            </i>
          </div>
          <div class="BoxTopText">
            <h5>喜地客户端</h5>
            <p class="BoxTopTextp">原装进口 其实不贵</p>
          </div>
          <el-button
            type="primary"
            size="mini"
            style=" background: #5fd9da;float:right;margin:13px 15px 0 0; font-size: 14px;"
          >立即下载</el-button>
        </div>
      </el-header>
      <el-header>
        <div class="BoxSearch" style="position:fixed;left:0px; z-index:9999;">
          <div class="BoxSearchMine">
            <!-- 点击a标签的时候回到首页 -->
            <a href="javascript"></a>
            <div class="BoxSearchMineSear">
              <i class="el-icon-search"></i>
              <span>逛世界</span>
            </div>
          </div>
        </div>
      </el-header>
      <!-- mine -->
      <el-main style="padding: 0px; margin-top: -21px;overflow: hidden;">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark" style="height:110px;background: pink;">
              <img src="../img/country_banner.jpg" alt style="height:110px; width:100%" />
            </div>
          </el-col>
        </el-row>

        <div class="mineNavAll">
          <el-row>
            <el-col :span="8" v-for="item in countrys" :key="item.countryName">
              <div
                class="grid-content bg-purple"
                style="width: 131px; height: 97px;position: relative; border: 3px solid #F0F0F0;"
              >
                <p class="p">{{item.countryName}}馆</p>
                <img :src="item.picUrl" alt style="width: 100%; height: 100%;" />
              </div>
            </el-col>
          </el-row>
        </div>

        <div>
          <el-row>
            <el-col :span="24" class="text" style=" position: relative;">
              <!-- one -->

              <template>
                <el-tabs
                  style=" padding: 0 20px;margin-right:22px;background: #fff;"
                  :class="[rotate?'nn':'bb ',{'is_fixed' : isFixed}]"
                >
                  <el-tab-pane
                    :label="item.countryName+'精选'"
                    v-for="item in countrys"
                    :key="item.countryName"
                    style="fint-size:14px;"
                  ></el-tab-pane>
                  <!-- <span class="left"><i class="el-icon-arrow-left"></i></span>
                  <span class="right"><i class="el-icon-arrow-right"></i></span>-->
                </el-tabs>
              </template>

              <!-- footer -->

              <!-- tow -->

              <div
                class="box_fixed"
                id="boxFixed"
                style=" width: 100%;height:45px;background:#f3f3f3;z-index:9999 "
                :class="[rotate?'bb':'nn ',{'is_fixed' : isFixed}]"
              >
                <div class="all">全部</div>
              </div>

              <!-- 箭头 -->
              <div
                style="height:44px;width:40px; position: absolute; right:0px;top:0px;z-index:9999"
                @click="getLi"
              >
                <i
                  class="box_fixed icon icon_triangle_down"
                  id="boxFixed"
                  style="float: right;width:25px;height:24px;margin-top:15px;margin-right:10px;"
                  :class="[rotate?'go':' cc nn',{'is_fixed' : isFixed}]"
                ></i>
              </div>
              <div
                style="height:44px;width:40px; position: absolute; right:0px;top:0px;z-index:9999"
                @click="getLi"
              >
                <i
                  class="box_fixed icon icon_triangle_down"
                  id="boxFixed"
                  style="float: right;width:25px;height:24px;margin-top:15px;margin-right:10px;"
                  :class="[rotate?'go nn':' cc bb']"
                ></i>
              </div>
              <!-- 小卡片 -->
              <div
                class="box_fixed allAll"
                id="boxFixed"
                style="z-index:9999 ;border-bottom: 1px solid #ccc"
                :class="[rotate?'bb':' nn',{'is_fixedt' : isFixed}]"
              >
                <ul>
                  <li v-for="item in countrys" :key="item.countryName">{{item.countryName}}精选</li>
                </ul>
              </div>
            </el-col>

            <!-- 有18个list -->
            <div class="List" v-for="item in  goodslist " :key="item.id">
              <h1
                style=" height: 53px; width: 100%; line-height: 53px;margin-left:110px;"
              >— {{item.countryName}}精选 —</h1>
              <div>
                <div
                  class="List-img"
                  style=" height: 142px;  margin-bottom: 10px;"
                  v-for="item in list"
                  :key="item.id"
                  @click="gotoList(item.id)"
                >
                  <img :src="item.imgurl" />
                </div>
              </div>

              <el-row>
                <el-col
                  :xs="12"
                  :sm="8"
                  :md="6"
                  :lg="4"
                  :xl="3"
                  v-for="goods in item[6].B"
                  :key="goods.id"
                >
                  <div style=" padding: 10px; height:239px; border: 0.2px #ccc solid ">
                    <div style="width:167px;height:167px;margin-bottom: 10px;">
                      <img :src="goods.coverImg" style="width:100%;height:100%" />
                    </div>
                    <h2 style="margin-bottom: 10px;">{{goods.name}}</h2>
                    <p class="price">
                      <span class="pp">￥{{goods.salePrice}}</span>
                      <del>￥{{goods.price}}</del>
                      <span class="ccc">{{goods.countryName}}</span>
                    </p>
                  </div>
                </el-col>
              </el-row>

              <!-- foor -->
              <div
                class="grid-content bg-purple-dark"
                style=" width: 100%;height:45px;background:#f0f0f0;"
              >
                <p style="color:#222;font-size:15px;" class="foor">查看{{item.countryName}}全部商品</p>
                <i class="icon icon_triangle_right"></i>
              </div>
            </div>
          </el-row>
        </div>
      </el-main>
      <el-main class="main" :class="[rotate?'':'nn']"></el-main>
    </el-container>
  </div>
</template>
<script>
import { my } from "../Api";
import { guan } from "../Api";

export default {
  data() {
    return {
      scroll: "",
      style: "display:block;height:55px",
      rotate: false,
      countrys: [],
      goodNav: [],
      goodslist: [],
      isFixed: false,
      offsetTop: 0,

      list: [
        {
          name: "芬兰天然滑石",
          id: "1",
          imgurl:
            "https://image.xidibuy.com/tepin/tepin.8e383668cc0d04cfeca4597ea409efda0d70a9d49920626e0908ef4c15fe7ce1.jpeg/910x315/750/webp"
        },
        {
          name: "日本漆器",
          id: "2",
          imgurl:
            "https://image.xidibuy.com/tepin/tepin.8e383668cc0d04cf606d4414e79b2629e3376fdfe649b1d8a237ea632cfc876d.jpeg/910x315/750/webp"
        },
        {
          name: "清洁器",
          id: "3",
          imgurl:
            "https://image.xidibuy.com/tepin/tepin.8e383668cc0d04cf3b5ee4e28866a52e70af428d704fefb7bf5aa4c4361a27fb.jpeg/910x315/750/webp"
        }
      ]
    };
  },
  mounted() {
    // 监听页面滚动
    window.addEventListener("scroll", this.initHeight, true);
    // this.$nextTick(() => {
    //   // 获取id为testNavBar的元素距离顶部的距离
    //   // this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    //   this.offsetTop = 800;
    // });
  },
  beforeRouteLeave(to, from, next) {
    window.removeEventListener("scroll", this.initHeight, true);
    next();
  },

  methods: {
    close() {
      this.style = "display:none;height:0px";
    },
    getLi() {
      // console.log("+++");

      this.rotate = !this.rotate;
    },
    gotoList(id) {
      this.$router.push({ name: "list", params: { id } });
    },
    initHeight() {
      // 获得页面滚动的距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 获取id为testNavBar的元素距离顶部的距离
      // 比较他们的大小来确定是否添加fixedNavbar样式
      this.offsetTop = 790;
      if (scrollTop > this.offsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  async created() {
    let {
      data: {
        data: { countryNav }
      }
    } = await guan.get();

    this.countrys = countryNav;

    let {
      data: { data }
    } = await my.get("/guojiaguan");

    let datas = data[0].data.country16;
    // console.log(datas);

    this.goodslist = datas;
    let da = datas.map(item => {
      return item[6].B;
    });
    // console.log(da);
  }
};
</script>
<style lang="scss" scoped>
.Box {
  width: 100%;
  height: 100%;
  .BoxTop {
    width: 100%;

    background: #333333;
    overflow: hidden;
    color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    .BoxTopClose {
      float: left;
      font-size: 14px;
      height: 54px;
      position: relative;
      width: 48px;
      .BoxTopCloseIcon {
        width: 25px;
        height: 25px;
        overflow: hidden;
        margin-left: 14px;
        margin-top: 16px;
      }
    }
    .BoxTopIcon {
      width: 42px;
      height: 51.5px;
      float: left;
      .BoxTopIconleaf {
        display: inline-block;
        width: 42px;
        height: 42px;
        margin-right: 0;
        margin-top: 7px;
        background: #5fd9da;
        border-radius: 0.5rem;
      }
    }
    .BoxTopText {
      float: left;
      padding: 10px 0 6px 8px;
      h5 {
        text-align: left;
        font-weight: bold;

        font-size: 14px;
      }
      .BoxTopTextp {
        text-align: left;
        font-size: 12px;
        color: #dddddd;
      }
    }
  }
  .BoxSearch {
    // margin-top: -5px;
    // z-index:995;
    width: 100%;
    height: 50px;

    .BoxSearchMine {
      width: 100%;
      height: 50px;
      background: #fff;
      margin: 0 auto;

      a {
        display: inline-block;
        text-decoration: none;
        color: #4a82b1;
        width: 120px;
        height: 45px;
        margin-left: 96px;
        background: url(../img/logo.png) no-repeat;
        margin-top: 6px;
      }
      .BoxSearchMineSear {
        float: right;
        width: 65px;
        height: 28px;
        border-radius: 0.23333rem;
        background-color: #f3f3f3;
        line-height: 2.5rem;
        padding: 0 0.83333rem;
        margin-top: 10px;
        margin-right: 5px;
        line-height: 28px;

        text-align: right;
        position: relative;
        .el-icon-search {
          position: absolute;
          left: 9px;
          top: 8px;
        }
        span {
          display: block;
          width: 60px;
          height: 28px;
          margin-left: 5px;
          font-size: 14px;
          color: #c5c5c5;
        }
      }
    }
  }
  .mineNavAll {
    min-height: 20px;
    width: 100%;
    border-bottom: 9px solid #f0f0f0;
    position: relative;
    .bg-purple {
      float: left;
      box-sizing: border-box;
      .p {
        width: 131px;
        height: 97px;
        line-height: 97px;
        text-align: center;
        position: absolute;
        color: #fff;
        font-size: 15px;
      }
    }
  }
  .text {
    // one
    .bg-purple-text {
      display: fixed;
      box-sizing: border-box;
      width: 2000px;
      text-align: center;
      line-height: 45px;
      ul {
        li {
          padding: 0 15px;
          color: #222;
          font-size: 15px;
        }
      }
    }
  }
  // tow
  .all {
    color: #a9a9a9;
    font-size: 15px;
    position: absolute;
    left: 1.25rem;
    float: left;
    line-height: 44px;
  }
  .allAll {
    width: 100%;
    height: 359px;
    background: #fff;

    ul {
      li {
        margin: 0 -3px 0 0;
        font-size: 15px;
        color: #222;
        float: left;
        width: 124px;
        height: 44px;
        text-align: center;
        line-height: 44px;
      }
    }
  }
  .List {
    width: 100%;
    height: 100%;
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

    .List-img {
      width: 411px;

      img {
        width: 411px;
      }
    }
  }

  .foor {
    float: left;
    margin-left: 100px;
    margin-top: 10px;
  }
  .icon_triangle_right {
    margin-top: 10px;
  }
  .cc {
    transform: rotate(180deg);
    transition: transform 0.3s;
  }
  .go {
    transform: rotate(0deg);
    transition: transform 0.3s;
  }
  .nn {
    display: none;
  }
  .bb {
    display: block;
  }
  .main {
    width: 414px;
    height: 20000px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #000;
    opacity: 0.5;
  }

  .is_fixed {
    position: fixed;
    top: 105px;
    z-index: 999;
  }
  .is_fixedt {
    position: fixed;
    top: 150px;
    z-index: 999;
  }
}
</style>