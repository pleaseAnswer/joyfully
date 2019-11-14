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
            <van-checkbox v-model="checked"></van-checkbox>
          </div>
          <div class="shoptitle">意大利zecchin旗舰店</div>
          <div class="icon">></div>
        </div>
        <div class="cart-box">
          <div class="limitReduce">限时降</div>
          <div class="cart-module">
            <div class="cart-check">
              <van-checkbox v-model="checked"></van-checkbox>
            </div>
            <div class="cart_img">
              <img
                src="https://2-image.xidibuy.com/shop/shop.cd55055aa050f1c0b20815f3b2858be25623165aa4e093fa3500842dd515aa3d.jpeg/1500x1500/240/webp"
              />
            </div>
            <div class="intro-left">
              <div class="cart-goods-name">
                <h3>意大利原产ZECCHIN穆拉诺冰川系列手工玻璃威士忌酒瓶壶900ml</h3>
                <div class="price">
                  ¥2508.09
                  <br />
                  <del>￥3198.09</del>
                </div>
              </div>
              <div class="cart-counter">
                <el-input-number v-model="num" :min="1" :max="10" size="mini"></el-input-number>
                <div class="remove">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      num: 1,
      menu: [
        {
          img:
            "//static.xidibuy.com/biz/app_label/0b10e69c5df2b48ec85738f02944c5ca.png",
          price: "¥159.00",
          text: "清洁大礼包6件套"
        },
        {
          img:
            "//static.xidibuy.com/biz/app_label/0b10e69c5df2b48ec85738f02944c5ca.png",
          price: "¥399.01",
          text: "德国原产DHT重型铸铝合金Lotan涂层不粘奶锅小汤锅18cm"
        },
        {
          img:
            "//static.xidibuy.com/biz/app_label/0b10e69c5df2b48ec85738f02944c5ca.png",
          price: "¥369.00",
          text: "英国丹侬DUNOON骨瓷水杯杯子Cairngorm杯型"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
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
</style>