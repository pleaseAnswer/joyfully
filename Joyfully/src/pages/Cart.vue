<template>
  <div id="box">
    <header class="header">
      <h2 class="header-title">购物车</h2>
      <span class="header-right right-coupon">优惠券</span>
    </header>

    <div class="freeDelivery">已满足免运费条件</div>
    <div class="cart-list">
      <div class="shopbox">
        <div class="shoptitlebox">
          <div class="cart-check">
            <van-checkbox v-model="checked" checked-color="#5fd9da"></van-checkbox>
          </div>
          <div class="shoptitle">意大利zecchin旗舰店</div>
          <div class="icon">></div>
        </div>
        <div class="cart-box" v-for="item in menu" :key="item.txet">
          <div class="limitReduce">限时降</div>
          <div class="cart-module">
            <div class="cart-check">
              <van-checkbox v-model="checked" checked-color="#5fd9da"></van-checkbox>
            </div>
            <div class="cart_img">
              <img :src="item.img" />
            </div>
            <div class="intro-left">
              <div class="cart-goods-name">
                <h3>{{item.text}}</h3>
                <div class="price">
                  ￥ {{item.price1}}
                  <br />
                  <del>￥ {{item.price2}}</del>
                </div>
              </div>
              <div class="cart-counter">
                <el-input-number
                  v-model="item.qty"
                  :min="1"
                  :max="50"
                  size="mini"
                  @click="changQty(item.id,$event)"
                ></el-input-number>
                <div class="remove" @click="removeCart(item.id)">
                  <i class="el-icon-delete"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="product-title">— 为您推荐 —</h1>
    <ul class="data-vaildnum">
      <li class="product_item">
        <img
          src="https://5-image.xidibuy.com/shop/shop.7afca799c93e8376fe289a359c75e800e30949942bc7ada2358afc5948f29150.jpeg/800x800/360/webp"
          alt
        />
        <p class="product_name">韩国原产SYSMAX MYROOM可折叠读书架阅读架支撑架</p>
        <h3 class="product_price">
          <span class="data-v-5acc1dac">¥179.01</span>
          <span class="product-country">韩国</span>
        </h3>
      </li>
      <li class="product_item">
        <img
          src="https://5-image.xidibuy.com/shop/shop.7afca799c93e8376fe289a359c75e800e30949942bc7ada2358afc5948f29150.jpeg/800x800/360/webp"
          alt
        />
        <p class="product_name">韩国原产SYSMAX MYROOM可折叠读书架阅读架支撑架</p>
        <h3 class="product_price">
          <span class="data-v-5acc1dac">¥179.01</span>
          <span class="product-country">韩国</span>
        </h3>
      </li>
    </ul>
    <div class="submit">
      <div class="box1">
        <van-checkbox v-model="checked" checked-color="#5fd9da">全选</van-checkbox>
      </div>
      <div class="box2">
        <p class="carttotal">
          总计：
          <span>¥{{totalPrice.toFixed(2)}}</span>
        </p>
        <p class="fee">
          运费&nbsp;
          <span>¥0.00</span>&nbsp;&nbsp;减免&nbsp;
          <span>¥0.00</span>
        </p>
      </div>
      <div class="box3">结算()</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      checked: true,
      num: 1
    };
  },
  computed: {
    ...mapState({
      menu(state) {
        return state.cart.menu;
      }
    }),
    ...mapGetters(["totalPrice"])
  },
  methods: {
    ...mapMutations({
      removeCart: "removeCart",
      changQty: "changQty"
    })
  }
};
</script>
<style lang="scss" scoped>
@charset "utf-8";
@function vw($px){
    @return ($px / 375) * 100vw;
}
html,
body {
  margin: 0;
  padding: 0;
  width: vw(375);
  height: vw(375);
  #box {
    width: 100%;
    height: 100%;
  }
}
.header {
  width: 100%;
  max-width: 53.33333rem;
  height: 3rem;
  line-height: 3rem;
  background-color: #fff;
  margin: 0;
  padding: 0 1.25rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  z-index: 1;
  .header-title {
    display: inline-block;
    font-size: 1.2rem;
    color: #333;
    width: 10.66667rem;
    height: 3rem;
    margin-left: 3.8rem;
    text-align: center;
    vertical-align: top;
  }
  .header-right {
    width: 4.16667rem;
    line-height: 1.66667rem;
    background-color: #ff7f79;
    color: white;
    font-size: 0.8rem;
    height: 1.66667rem;
    margin-right: 1.5rem;
    margin-top: 0.8rem;
    border-radius: 1.33333rem;
    display: inline-block;
  }
}
.freeDelivery {
  padding: 0 1.5rem 0 1.25rem;
  background-color: #faf6eb;
  color: #ff7765;
  font-size: 14px;
  line-height: 3.33333rem;
  height: 3.33333rem;
  width: 100%;
  box-sizing: border-box;
}
.cart-list {
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  outline: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  .shopbox {
    width: 100%;
    border-bottom: 10px solid #dddddd79;
    .shoptitlebox {
      width: 100%;
      height: 1.2rem;
      padding: 0.83333rem 0.8rem;
      // box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      .cart-check {
        float: left;
        width: 20px;
        height: 20px;
        line-height: 22px;
        text-align: center;
        border: 1px solid #c5c5c5;
        border-radius: 50%;
        // margin-left: 0.5rem;
      }
      .shoptitle {
        float: left;
        margin-left: 0.3rem;
        color: #333;
        font-size: 14px;
      }
      .icon {
        float: right;
        margin-right: 1.5rem;
        color: #c5c5c5;
      }
    }
    .cart-box {
      padding: 0.83333rem 0.8rem;
      width: 100%;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      border-bottom: 1px dotted #ddd;
      height: 134px;
      // background: #ff7765;
      .limitReduce {
        margin-left: 2.3rem;
        margin-bottom: 1rem;
        width: 5.16667rem;
        height: 1.66667rem;
        line-height: 1.66667rem;
        background-color: #ff7f79;
        color: white;
        font-size: 1rem;
        text-align: center;
      }
      .cart-module {
        height: 105px;
        // background: #ddd;
        .cart-check {
          float: left;
          margin: 20px 15px 0 0;
          border: 1px solid #c5c5c5;
          border-radius: 50%;
        }
        .cart_img {
          width: 66px;
          height: 66px;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .intro-left {
          width: 250px;
          height: 100%;
          // background: #ff7765;
          float: left;
          margin-left: 10px;
          .cart-goods-name {
            width: 100%;
            height: 60px;
            margin-bottom: 5px;
            // background: #faf6eb;
            h3 {
              width: 161px;
              float: left;
              color: #333;
              font-size: 13px;
            }
            .price {
              float: left;
              margin-left: 15px;
              font-size: 13px;
              color: #00bebf;
              del {
                color: #c5c5c5;
              }
            }
          }
          .cart-counter {
            width: 100%;
            height: 42px;
            // background: #ddd;
            .remove {
              margin: 5px 5px 0 0;
              width: 22px;
              height: 22px;
              // background: #ff7765;
              float: right;
              i {
                display: block;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
.product-title {
  width: 100%;
  height: 51px;
  text-align: center;
  line-height: 51px;
  border-bottom: 1px solid #f3f3f3;
  box-sizing: border-box;
}
.data-vaildnum {
  width: 100%;
  padding: 0 0px 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 150px;

  .product_item {
    width: 45%;
    height: 240px;
    // background: #00bebf;
    float: left;
    margin: 0 15px 10px 0;
    img {
      width: 100%;
      height: 166px;
    }
    .product_name {
      font-size: 12px;
      color: #222222;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .data-v-5acc1dac {
      color: #00bebf;
      margin-right: 95px;
      font-size: 12px;
    }
    .product-country {
      font-size: 12px;
    }
  }
}
.submit {
  width: 100%;
  height: 60px;
  background: #ffffffde;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 60px;
  z-index: 1210;
  .box1 {
    height: 100%;
    width: 120px;
    float: left;
    padding: 30px 0 0 15px;
  }
  .box2 {
    height: 100%;
    width: 145px;
    float: left;
    // background: floralwhite;
    .carttotal {
      font-size: 16px;
      margin-top: 15px;
      span {
        color: #00bebf;
      }
    }
    .fee {
      color: #888;
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .box3 {
    height: 100%;
    width: 120px;
    float: left;
    background: #4ed6d1;
    text-align: center;
    line-height: 60px;
    color: #ffffff;
  }
}
</style>