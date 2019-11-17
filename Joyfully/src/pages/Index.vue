<template>
  <div>
    <header class="header" id="header">
      <a href="#" class="logo_img_wrapper">
        <img class="mylogo" src="../img/Joyfully_logo.jpg" alt />
        <i>喜地</i>
      </a>
      <div class="search_start">
        <i class="el-icon-search"></i>
        <a href>逛世界</a>
      </div>
    </header>
    <!-- <template v-if="!bottom_list.data" v-loading="true"></template> -->
    <!-- <template v-else> -->
    <div class="lunbo_wrap">
      <div class="lunbo">
        <van-swipe
          :autoplay="3000"
          indicator-color="white"
          style="height:188px;width:100%;background:rgba(200,155,40)"
        >
          <template v-if="lunbo_img.data">
            <van-swipe-item v-for="item in lunbo_img.data.data" :key="item._id">
              <img :src="item.img" alt style="height:188px;width:375px;" />
            </van-swipe-item>
          </template>
          <div v-else v-loading="true"></div>
        </van-swipe>
        <div class="home_info clearfix">
          <ul>
            <li v-for="item in lunbo_sub" :key="item">
              {{item}}
              <span>/</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <main>
      <div class="nav_wrap">
        <ul class="nav">
          <li>
            <span class="i_wrap">特</span>
            <span>16国特品</span>
          </li>
          <li>
            <span class="i_wrap">
              <i class="el-icon-collection"></i>
            </span>
            <span>专题</span>
          </li>
          <li>
            <span class="i_wrap">
              <i class="el-icon-notebook-2"></i>
            </span>
            <span>文章</span>
          </li>
          <li>
            <span class="i_wrap">
              <i class="el-icon-shopping-bag-2"></i>
            </span>
            <span>关于喜地</span>
          </li>
        </ul>
      </div>
      <template v-if="santu_img.length!=0">
        <div class="santu" @click="goto('/classify')">
          <div class="santu_left">
            <img :src="santu_img[0].img" alt ref="lazy" />
          </div>
          <div class="santu_right">
            <div class="santu_top">
              <img :src="santu_img[1].img" alt ref="lazy" />
            </div>
            <div class="santu_bottom">
              <img :src="santu_img[2].img" alt ref="lazy" />
            </div>
          </div>
        </div>
      </template>
      <div v-else v-loading="true"></div>
      <template v-if="single_list.data">
        <div
          class="img_wrap"
          v-for="item in single_list.data.data"
          :key="item._id"
          @click="goto('/classify')"
        >
          <div class="single_img">
            <img src="../img/loadingx.gif" :data-src="item.single_img" alt ref="lazy" />
          </div>
          <div class="list_wrapper">
            <ul class="list">
              <li v-for="goods in item.data" :key="goods.img">
                <figure>
                  <img src="../img/loadingx.gif" :data-src="goods.img" alt ref="lazy" />
                  <figcaption>
                    <p class="text">{{goods.text}}</p>
                    <p class="price">{{goods.price}}</p>
                  </figcaption>
                </figure>
              </li>
              <li class="see_more">
                <img src="../img/see_more.jpg" alt />
              </li>
            </ul>
          </div>
        </div>
      </template>
      <div v-else v-loading="true"></div>
      <template v-if="sub_list.data">
        <div class="sublist" v-for="item in sub_list.data.data" :key="item._id">
          <h3>{{item.title}}</h3>
          <ul class="list_wrapper">
            <li v-for="goods in item.data" :key="goods.img" class="list_chi">
              <figure>
                <img src="../img/loadingx.gif" :data-src="goods.img" alt ref="lazy" />
                <figcaption>
                  <h4>{{goods.title}}</h4>
                  <p class="text">{{goods.subtitle}}</p>
                  <p class="price">{{goods.price}}</p>
                  <figure class="eval">
                    <img src="../img/loadingx.gif" :data-src="goods.evaimg" alt ref="lazy" />
                    <figcaption class="eval_text">
                      <p>{{goods.evatext}}</p>
                    </figcaption>
                  </figure>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </template>
      <div v-else v-loading="true"></div>
      <template v-if="bottom_list.data">
        <div class="bottomlist clearfix" v-for="item in bottom_list.data.data" :key="item._id">
          <h3>{{item.title}}</h3>
          <ul class="bottom_wrapper clearfix">
            <li v-for="goods in item.data" :key="goods.img" class="bottom_chi">
              <figure>
                <img src="../img/loadingx.gif" :data-src="goods.img" alt ref="lazy" />
                <figcaption>
                  <p class="text">{{goods.text}}</p>
                  <p class="price">
                    <span class="price1">{{goods.price1}}</span>
                    <span class="price2">{{goods.price2}}</span>
                  </p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </template>
      <div v-else v-loading="true"></div>
    </main>
    <!-- </template> -->

    <footer>
      <h4 class="check_more">
        查看更多
        <span>&gt;</span>
      </h4>
      <div class="el-breadcrumb">
        <span>
          首页
          <i>/</i>
        </span>
        <span>
          APP
          <i>/</i>
        </span>
        <span>
          小程序
          <i>/</i>
        </span>
        <span>联系客服</span>
      </div>
      <p class="copy">@2019喜地电子商务有限公司&nbsp;&nbsp;授权所有</p>
    </footer>
    <div ref="gototop" class="goto_top hidden">
      <a href="#top">
        <i class="el-icon-arrow-up"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunbo_img: [],
      lunbo_sub: ["海外进口", "工厂直价", "原产纯品", "国内直邮"],
      santu_img: [],
      single_list: [],
      sub_list: [],
      bottom_list: []
    };
  },
  //在beforeMount()阶段发送网络请求拿到数据
  async created() {
    this.lunbo_img = await this.$axios.get(
      "http://localhost:1910/home/sy_lunbo"
    );
    // this.lunbo_img.data.data;
    // console.log(this.lunbo_img);

    let {
      data: { data }
    } = await this.$axios.get("http://localhost:1910/home/sy_santu");
    this.santu_img = data;
    // console.log(this.santu_img);

    this.single_list = await this.$axios.get(
      "http://localhost:1910/home/sy_single_list"
    );
    // single_list.data.data;

    this.sub_list = await this.$axios.get(
      "http://localhost:1910/home/sy_sublist"
    );
    //sub_list.data.data;

    this.bottom_list = await this.$axios.get(
      "http://localhost:1910/home/sy_bottomlist"
    );
    //bottom_list.data.data;
  },
  mounted() {
    window.addEventListener("scroll", this.changeclass);
    window.addEventListener("scroll", this.imgonload);
    window.addEventListener("scroll", this.scrollImg(this.imgonload));
  },
  methods: {
    changeclass() {
      var goto_top = this.$refs.gototop;
      if (goto_top != undefined) {
        setInterval(() => {
          if (window.scrollY >= 800) {
            goto_top.classList.remove("hidden");
          } else {
            goto_top.classList.add("hidden");
          }
        }, 500);
      }
    },
    imgonload() {
      var imgs = this.$refs.lazy;
      if (imgs != undefined) {
        for (var i = 0; i < imgs.length; i++) {
          if (imgs[i].offsetTop < window.scrollY + 800) {
            imgs[i].src = imgs[i].dataset.src;
          }
        }
      }
    },
    scrollImg(fn) {
      return function() {
        let timer = null;
        let self = this;
        clearTimeout(timer);
        setTimeout(() => {
          fn.apply(self);
        }, 200);
      };
    },
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
@charset "utf-8";
@function vw($px) {
  @return ($px / 375) * 100vw;
}
body {
  color: #333;
}
.hidden {
  display: none;
}
.header {
  width: 100%;
  height: vw(50);
  background-color: #fff;
  padding: 0 vw(15);
  box-sizing: border-box;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1000;
  .logo_img_wrapper {
    width: 100%;
    overflow: hidden;
    i {
      position: absolute;
      left: -1000px;
    }
  }
  .search_start {
    position: absolute;
    right: vw(15);
    top: vw(10);
    width: vw(80);
    height: vw(28);
    padding: 0 vw(5);
    background: #f3f3f3;
    border-radius: vw(8);
    .el-icon-search {
      width: vw(16);
      height: vw(16);
      padding: vw(6) vw(4);
      color: #777;
      position: absolute;
      left: vw(5);
      top: vw(5);
    }
    a {
      color: #c5c5c5;
      position: absolute;
      left: vw(35);
      top: vw(-8);
    }
  }
}
.lunbo_wrap {
  height: vw(288);
  .lunbo {
    width: 100%;
    position: absolute;
    top: vw(50);
    .home_info {
      width: 100%;
      border-bottom: vw(9) solid #f0f0f0;
      ul {
        border-bottom: 1px solid #ddd;
        li {
          float: left;
          width: 25%;
          height: vw(40);
          text-align: center;
          line-height: vw(40);
          font-size: vw(13);
          color: #00bebf;
          // position: relative;
          span {
            color: #ddd;
            padding-right: vw(1);
            float: right;
          }
          &:nth-last-child(1) span {
            display: none;
          }
        }
      }
    }
  }
}

main {
  .nav_wrap {
    height: vw(108);
    .nav {
      width: 100%;
      display: flex;
      justify-content: space-around;
      li {
        padding-top: vw(20);
        padding-bottom: vw(10);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .i_wrap {
          width: vw(44);
          height: vw(44);
          text-align: center;
          font-size: vw(22);
          line-height: vw(44);
          border-radius: 50%;
          color: #fff;
          padding: 0;
        }
        &:nth-of-type(1) .i_wrap {
          background-color: #ff8764;
        }
        &:nth-of-type(2) .i_wrap {
          background-color: #fbbd14;
        }
        &:nth-of-type(3) .i_wrap {
          background-color: #fe7e03;
        }
        &:nth-of-type(4) .i_wrap {
          background-color: #04c8b0;
        }
        span {
          font-size: vw(13);
          padding: vw(8) 0;
        }
      }
    }
  }
  .santu {
    height: vw(248);
    padding: 0 vw(10) vw(10);
    .santu_left {
      width: 46%;
      height: vw(245);
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .santu_right {
      float: right;
      width: 52%;
      padding-left: 2%;
      .santu_top {
        width: 100%;
        height: vw(120);
        padding-bottom: vw(5);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .santu_bottom {
        width: 100%;
        height: vw(120);
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .img_wrap {
    width: 100%;
    .single_img {
      width: 100%;
      margin-bottom: vw(15);
      img {
        width: 100%;
        height: vw(188);
      }
    }
    .list_wrapper {
      width: 100%;
      height: vw(196);
      margin-bottom: vw(10);
      overflow-x: scroll;
      overflow-y: hidden;
      .list {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        box-sizing: content-box;
        li {
          width: vw(115);
          height: vw(196);
          position: relative;
          flex-shrink: 0;
          padding-left: vw(10);
          display: inline-block;
          // box-sizing: border-box;
        }
        figure {
          position: absolute;
          top: 0;
          left: 0;
          margin: 0 0 0 vw(10);
          width: vw(115);
          height: vw(196);
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: vw(115);
            height: vw(115);
          }
          figcaption {
            position: absolute;
            top: 115px;
            left: 0;
            color: #333;
            .text {
              width: vw(105);
              height: vw(38);
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              text-overflow: hidden;
              font-size: vw(12);
              line-height: vw(18);
              padding: vw(10) vw(5) 0;
            }
            .price {
              width: vw(105);
              color: #00bebf;
              font-size: vw(13);
              line-height: vw(13);
              padding: vw(8) vw(5) vw(10);
            }
          }
        }
        .see_more {
          width: vw(115);
          height: vw(115);
          padding-right: vw(10);
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .sublist {
    width: 100%;
    h3 {
      font-size: vw(18);
      line-height: vw(22);
      padding: vw(10) 0 vw(20);
      text-align: center;
      display: block;
    }
    .list_wrapper {
      width: vw(355);
      padding: 0 vw(10) vw(10);
      .list_chi {
        width: 100%;
        height: vw(130);
        padding-bottom: vw(20);
        figure {
          width: 100%;
          height: vw(130);
          margin: 0;
          img {
            width: vw(120);
            height: vw(120);
            float: left;
          }
          figcaption {
            width: vw(225);
            height: vw(127);
            padding-left: vw(10);
            float: left;
            h4 {
              width: 100%;
              height: vw(18);
              font-size: vw(14);
              font-weight: bold;
              line-height: vw(18);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: hidden;
              color: #333;
            }
            .text {
              width: 100%;
              // height: vw(32);
              font-size: 12px;
              line-height: vw(16);
              padding-top: vw(8);
              color: #333;
            }
            .price {
              width: 100%;
              font-size: 12px;
              line-height: vw(16);
              padding-top: vw(8);
              color: #00bebf;
            }
            .eval {
              width: 100%;
              height: vw(32);
              padding-top: vw(13);
              position: relative;
              img {
                width: vw(25);
                height: vw(25);
                border-radius: 50%;
                position: absolute;
                top: vw(13);
                left: 0;
              }
              .eval_text {
                width: vw(190);
                height: vw(32);
                padding-left: vw(35);
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                color: #777;
                font-size: 12px;
                line-height: vw(16);
              }
            }
          }
        }
      }
    }
  }
  .bottomlist {
    width: 100%;
    h3 {
      font-size: vw(18);
      line-height: vw(22);
      padding: vw(10) 0 vw(20);
      text-align: center;
      display: block;
    }
    .bottom_wrapper {
      width: 100%;
      box-sizing: border-box;
      .bottom_chi {
        width: vw(166);
        border-bottom: 1px solid #f3f3f3;
        border-right: 1px solid #f3f3f3;
        float: left;
        padding: vw(10);
        // box-sizing: border-box;
        figure {
          width: 100%;
          margin: 0;
          img {
            width: vw(167);
            height: vw(167);
          }
          figcaption {
            width: vw(167);
            height: vw(120);
            .text {
              width: 100%;
              height: vw(36);
              font-size: 12px;
              line-height: vw(18);
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              text-overflow: hidden;
              padding-top: vw(8);
            }
            .price {
              width: 100%;
              height: vw(16);
              font-size: vw(14);
              line-height: vw(16);
              padding-top: vw(8);
              .price1 {
                width: vw(50);
                color: #00bebf;
              }
              .price2 {
                width: vw(44);
                padding: vw(2) 0 0 vw(3);
                color: #c5c5c5;
                font-size: 12px;
                text-decoration: line-through;
              }
            }
          }
        }
      }
    }
  }
}
footer {
  margin-bottom: vw(50);
  .check_more {
    width: 100%;
    height: vw(45);
    text-align: center;
    font-size: vw(16);
    line-height: vw(45);
    margin-bottom: vw(10);
    background: #f0f0f0;
  }
  .el-breadcrumb {
    width: 100%;
    height: vw(16);
    padding-top: vw(15);
    text-align: center;
  }
  span {
    font-size: 12px;
    line-height: vw(16);
    color: #777;
    i {
      padding: 0 vw(20);
      color: #ddd;
    }
  }
  .copy {
    width: 100%;
    height: vw(16);
    font-size: 12px;
    line-height: vw(16);
    margin-top: vw(15);
    margin-bottom: vw(15);
    color: #c5c5c5;
    text-align: center;
  }
}
.goto_top {
  width: vw(40);
  height: vw(40);
  border-radius: 50%;
  position: fixed;
  right: vw(20);
  bottom: vw(80);
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  .el-icon-arrow-up {
    font-size: vw(28);
    line-height: vw(38);
    opacity: 0.8;
    color: #fff;
  }
}
</style>