<template>
  <div>
    {{this.$store.state.menu}}
    <header>
      <div class="header_left">
        <i class="el-icon-arrow-left" @click="goto('/Classifylist')"></i>
      </div>
      <div class="header_middle">
        <p class="p_now">商品</p>
        <p>品牌</p>
        <p>评价</p>
      </div>
      <div class="header_right" @click="goto('/index')">
        <i class="el-icon-more"></i>
      </div>
    </header>
    <main>
      <div class="goods_main">
        <figure>
          <div class="goods_img">
            <img class="goods_detail" :src="list.attrImg" alt />
            <img
              class="certified"
              src="https://static.xidibuy.com/m/static/global/images/1.0.0/new_icon_hchud.png"
              alt
            />
          </div>
          <figcaption>
            <h4>{{list.name}}</h4>
            <p class="price">
              <i>￥{{(list.price*0.8).toFixed(2)}}</i>
              <del>￥{{list.price}}</del>
              <span class="contry">{{list.countryName}}</span>
            </p>
          </figcaption>
        </figure>
      </div>
      <div class="slide"></div>
      <div class="goods_choice">
        <p>
          已选：
          <span class="goods_num">1件</span>
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div class="goods_tel">
        <p
          class="goods_text"
        >1、意大利原产；2、做工精细，时尚美观；3、材质好，尽显尊贵；4、简单精巧，使用方便；5、五十余年老品牌。1、意大利原产；2、做工精细，时尚美观；3、材质好，尽显尊贵；4、简单精巧，使用方便；5、五十余年老品牌。</p>
        <div class="goods_send">
          <span class="goods_from">
            <i class="el-icon-truck"></i>
            每天
            <i class="goods_when">15:00</i>从
            <i class="goods_where">上海自贸区</i>发货
          </span>
          <span class="goods_change clearfix">
            <i class="seven">7</i>七天无理由退货
          </span>
        </div>
      </div>
      <div class="slide"></div>
      <div class="goods_pinpai">
        <img
          class="pinpai_img"
          src="https://9-image.xidibuy.com/common/common.e29e81bff967004a0d58ec889de5aca9b8b17bff1a7cdaabbf5aa4c4361a27fb.png/240/webp"
          alt
        />
        <div class="goods_zaixian">
          在售品牌商品(
          <span class="zaixian_num">34</span>
          )
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="slide"></div>
      <div class="goods_shop">
        <div class="shop_name">
          <img
            class="shop_img"
            src="https://6-image.xidibuy.com/shop/shop.8c0602c6ef7be9d7305ce1d6988b30930ac9d19fd6c51cf83500842dd515aa3d.jpeg/550x550/240/webp"
            alt
          />
          <p class="shop_name_text">法意高端餐厨精品点</p>
        </div>
        <div class="coming_shop">
          <i class="el-icon-box"></i>进入厂店
        </div>
      </div>
      <div class="slide"></div>
      <div class="yonghu">
        <div class="yonghu_pingjia">
          用户评价(
          <span class="pingjia_num">42</span>
          )
        </div>
        <div class="yonghu_pingfen">
          商品评分
          <span class="pingfen_num">4.9</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </main>
    <van-goods-action style="z-index:3000">
      <van-goods-action-icon icon="chat-o" text="客服" @click="goto('/Service')" />
      <van-goods-action-icon icon="cart-o" text="购物车" :info="cartlength" @click="goto('/cart')" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="buy" />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    async addCart() {
      //结构相应数据
      let { id, attrImg: img, price, name: text } = this.list;
      //获取数据库
      let { menu } = this.$store.state.cart;
      //判断当前商品是否已经存在购物车
      //已存在：数据+1
      //否则：添加到购物车
      let current = menu.filter(item => item.id === id)[0];
      if (current) {
        this.$store.commit("changQty", { id, qty: current.qty + 1 });
      } else {
        let goods = {
          id,
          img,
          price,
          text,
          qty: 1
        };
        let { data } = await this.$axios.post(
          "http://localhost:1910/cart",
          goods
        );
        // console.log(data);
        if (data.status === 1) {
          this.$store.commit("addCart", goods);
          this.$store.commit("getgoods");
        } else {
          alert("加入购物车失败");
        }
      }
    },
    buy() {
      this.addCart();
      this.$store.commit("getgoods");
      this.$router.push("/cart");
    }
  },
  computed: {
    cartlength() {
      return this.$store.getters.cartlength;
    }
  },
  async created() {
    let { id } = this.$route.params;
    let {
      data: {
        data: { lists }
      }
    } = await this.$axios.get("https://api.m.xidibuy.com/v2/aggregation/home", {
      params: {
        cid: 890,
        title: "%E9%94%85%E5%85%B7",
        from: "1",
        order: "0",
        filterId: "0",
        page: "1",
        token: ""
      }
    });

    let goods = lists.filter(item => {
      if (id == item.id) {
        return item;
      }
    });
    this.list = goods[0];

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
  background: #ccc;
}
.hidden {
  display: none;
}
header {
  width: 100%;
  height: vw(48);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  background: #fff;
  .p_now {
    border-bottom: 3px solid #00bebf;
  }
  .header_left {
    padding-left: vw(12);
    .el-icon-arrow-left {
      font-size: vw(24);
      line-height: vw(24);
    }
  }
  .header_middle {
    // width: vw(144);
    height: vw(48);
    font-size: vw(18);
    line-height: vw(48);
    display: flex;
    p {
      padding: 0 vw(15);
    }
  }
  .header_right {
    padding-right: vw(12);
    .el-icon-more {
      font-size: vw(24);
      line-height: vw(24);
    }
  }
}
main {
  margin-bottom: vw(60);
  .goods_main {
    width: 100%;
    height: vw(475);
    padding-top: vw(48);
    figure {
      width: 100%;
      height: vw(475);
      position: relative;
      margin: 0;
      .goods_img {
        width: vw(375);
        height: vw(375);
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 1px solid #ccc;
        .goods_detail {
          width: 100%;
          height: 100%;
        }
        .certified {
          width: vw(90);
          height: vw(90);
          position: absolute;
          bottom: vw(15);
          left: vw(10);
        }
      }
      figcaption {
        width: 100%;
        height: vw(100);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        h4 {
          width: vw(345);
          height: vw(40);
          font-size: vw(16);
          line-height: vw(20);
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          text-overflow: hidden;
          padding: vw(10) vw(15) 0;
        }
        .price {
          width: vw(345);
          height: vw(32);
          font-size: 12px;
          line-height: vw(32);
          color: #888;
          padding-left: vw(15);
          padding-right: vw(15);
          i {
            font-size: vw(18);
            line-height: vw(32);
            color: #00bebf;
          }
          del {
            padding-left: vw(5);
            color: #c5c5c5;
            font-size: vw(14);
          }
          .contry {
            float: right;
          }
        }
      }
    }
  }
  .slide {
    width: 100%;
    height: vw(10);
    background: #eee;
  }
  .goods_choice {
    width: vw(335);
    height: vw(48);
    margin-bottom: vw(20);
    padding: 0 vw(15) vw(10);
    p {
      font-size: vw(14);
      line-height: vw(48);
      position: relative;
      border-bottom: 1px solid #ccc;
      .el-icon-arrow-right {
        font-size: vw(25);
        color: #c5c5c5;
        position: absolute;
        top: vw(12);
        right: 0;
      }
    }
  }
  .goods_tel {
    width: vw(345);
    margin: 0 vw(15);
    color: #888;
    font-size: 12px;
    line-height: vw(28);
    position: relative;
    .goods_text {
      width: 100%;
      // position: absolute;
      // top: 0;
      // left: 0;
      font-size: vw(14);
      line-height: vw(20);
      padding: vw(10) 0 vw(20);
    }
    .goods_send {
      height: vw(28);
      padding: vw(10) 0 vw(20);
      .goods_from {
        width: vw(188);
        height: vw(28);
        float: left;
        .el-icon-truck {
          font-size: vw(26);
        }
      }
      .goods_change {
        width: vw(84);
        height: vw(28);
        float: right;
        position: relative;
        padding-left: vw(26);
        .seven {
          width: vw(20);
          height: vw(20);
          display: inline-block;
          position: absolute;
          top: vw(4);
          left: 0;
          text-align: center;
          font-size: 12px;
          line-height: vw(22);
          border-radius: 50%;
          border: 1px solid #888;
        }
      }
    }
  }
  .goods_pinpai {
    width: vw(345);
    height: vw(60);
    padding: vw(15);
    .pinpai_img {
      width: vw(88);
      height: vw(40);
      padding-top: vw(10);
      float: left;
    }
    .goods_zaixian {
      width: vw(200);
      height: vw(40);
      padding-top: vw(10);
      float: right;
      color: #777;
      font-size: vw(15);
      line-height: vw(40);
      padding-right: vw(15);
      text-align: right;
      position: relative;
      .el-icon-arrow-right {
        display: inline-block;
        width: vw(25);
        height: vw(25);
        position: absolute;
        right: 0;
        top: vw(24);
      }
    }
  }
  .goods_shop {
    width: vw(345);
    height: vw(112);
    padding: vw(10) vw(15);
    font-size: vw(14);
    .shop_name {
      width: vw(280);
      height: vw(45);
      line-height: vw(45);
      padding: vw(5) 0 0 vw(65);
      margin-bottom: vw(10);
      position: relative;
      .shop_img {
        width: vw(50);
        height: vw(50);
        position: absolute;
        top: vw(5);
        left: 0;
      }
    }
    .coming_shop {
      width: vw(345);
      height: vw(42);
      font-size: vw(14);
      line-height: vw(42);
      text-align: center;
      border: 1px solid #d5d5d5;
    }
  }
  .yonghu {
    width: vw(345);
    height: vw(60);
    font-size: vw(15);
    line-height: vw(60);
    padding-right: vw(15);
    padding-left: vw(15);
    border-bottom: 1px solid #f1f1f1;
    .yonghu_pingjia {
      float: left;
    }
    .yonghu_pingfen {
      width: vw(200);
      float: right;
      color: #777;
      padding-right: vw(15);
      text-align: right;
      position: relative;
      color: #00bebf;
      .el-icon-arrow-right {
        display: inline-block;
        width: vw(25);
        height: vw(25);
        position: absolute;
        right: 0;
        top: vw(22);
        color: #666;
      }
    }
  }
}
</style>