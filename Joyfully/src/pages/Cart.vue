<template>
  <div id="box" style="overflow: hidden;">
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
          <div class="shoptitle">zecchin旗舰店</div>
          <div class="icon" @click="goto('/classifylist')">></div>
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
                  ￥ {{(item.price*0.8).toFixed(2)}}
                  <br />
                  <del>￥ {{item.price}}</del>
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
      <li class="product_item" v-for="item in data" :key="item.text">
        <img :src="item.img" />
        <p class="product_name">{{item.text}}</p>
        <h3 class="product_price">
          <span class="data-v-5acc1dac">{{item.price1}}</span>
          <span class="product-country">{{item.guo}}</span>
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
      num: 1,
      data: [
        {
          img:
            "https://7-image.xidibuy.com/shop/shop.13008e1edc63727bfe4192c60c0b9fd00382f4c6fd345c153500842dd515aa3d.jpeg/1500x1500/360/webp",
          price1: "¥757.79",
          text: "英国URBANWOOL羊毛被子被芯 300g/㎡",
          guo: "英国"
        },
        {
          img:
            "https://2-image.xidibuy.com/shop/shop.e7c5a4cb815e24ae5ca04ffa23e3b388c3e2c4a7286603883500842dd515aa3d.jpeg/360/webp",
          price1: "¥812.94",
          text: "澳大利亚原产Ecorenew儿童天丝被儿童被子婴幼儿被芯",
          guo: "德国"
        },
        {
          img:
            "https://8-image.xidibuy.com/shop/shop.3f7cbe75f951bcfc89fb7f42e70707757733cd8d9057143f3500842dd515aa3d.jpeg/800x800/360/webp",
          price1: "¥693.60",
          text: "意大利原产DB HOME LINEN棉质床上四件套GRAZIA被罩200x230cm",
          guo: "日本"
        },
        {
          img:
            "https://4-image.xidibuy.com/shop/shop.1db17832d7b7d99b7225eef35d4055451a3eb9e2950afb6a3500842dd515aa3d.jpeg/800x800/360/webp",
          price1: "¥101.43",
          text: "法国原产Tradi linge密织全棉床品四件套",
          guo: "美国"
        },
        {
          img:
            "https://3-image.xidibuy.com/shop/shop.6c9dd560ee613cb83d804fed73da845a1ba8ac84ed43cef33500842dd515aa3d.jpeg/1500x1500/360/webp",
          price1: "¥289.00",
          text: "英国原产DEVON DUVETS羊毛枕枕头枕芯75CMX50CM",
          guo: "英国"
        }
      ]
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
      changQty: "changQty",
      getgoods: "getgoods"
    }),
    goto(path) {
      this.$router.push(path);
    }
  },
  created() {
    //调用刷新页面
    this.getgoods();
  }
};
</script>
<style lang="scss" scoped>
@charset "utf-8";
@function vw($px) {
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
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: hidden;
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
  bottom: 49px;
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
    width: 94px;
    float: left;
    background: #4ed6d1;
    text-align: center;
    line-height: 60px;
    color: #ffffff;
  }
}
</style>