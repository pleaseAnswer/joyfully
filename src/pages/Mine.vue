<template>
  <div>
    <div class="header-title">我的喜地</div>
    <div class="space">
      <div class="xiang" @click="goto('/login')">
        <div class="avator"></div>
        <p>登录</p>
      </div>
    </div>
    <div class="java" @click="goto('/login')">
      <div class="left">
        <van-icon name="orders-o" size="20" style="margin-top:5px;" />
        <h3>我的订单</h3>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#999" />
      </div>
    </div>
    <div class="java" @click="goto('/login')">
      <div class="left">
        <van-icon name="coupon-o" size="20" style="margin-top:5px;" />
        <h3>我的优惠</h3>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#999" />
      </div>
    </div>
    <div class="java" @click="goto('/login')">
      <div class="left">
        <van-icon name="like-o" size="20" style="margin-top:5px;" />
        <h3>我的喜欢</h3>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#999" />
      </div>
    </div>
    <div class="java" @click="goto('/login')">
      <div class="left">
        <van-icon name="location-o" size="20" style="margin-top:5px;" />
        <h3>收货地址</h3>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#999" />
      </div>
    </div>
    <div class="java" @click="goto('/login')">
      <div class="left">
        <van-icon name="balance-o" size="20" style="margin-top:5px;" />
        <h3>退货退款</h3>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#999" />
      </div>
    </div>
    <div class="xian"></div>
    <div class="java" @click="goto('/login')">
      <div class="left">
        <van-icon name="bulb-o" size="20" style="margin-top:5px;" />
        <h3>常见问题</h3>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#999" />
      </div>
    </div>
    <div class="java" @click="goto('/login')">
      <div class="left">
        <van-icon name="friends-o" size="20" style="margin-top:5px;" />
        <h3>联系客服</h3>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#999" />
      </div>
    </div>
    <div class="java" style=" margin-bottom:10px" @click="goto('/login')">
      <div class="left">
        <van-icon name="edit" size="20" style="margin-top:5px;" />
        <h3>意见反馈</h3>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#999" />
      </div>
    </div>
    <div class="tuichu" @click="logout" v-if="isLogin">退出账号</div>
    <template v-else>
      <div></div>
    </template>
  </div>
</template>
<script>
// import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    isLogin() {
      return Boolean(this.$store.state.common.user);
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  },
  // async created(){
  //      let {data:{data:{country16}}} = await this.$axios.post('https://api.m.xidibuy.com/v2/country/index')
  //     //  console.log(country16)
  //     let datas = country16.map(item=>{
  //          return item[6]
  //      })
  //     //  console.log(datas)
  //    let a = datas.map(item=>{
  //      return item.B
  //    })
  //   //  console.log(a)
      
  // }
};
</script>
<style lang="scss" scoped>
.header-title {
  width: 100%;
  height: 48px;
  text-align: center;
  line-height: 48px;
  font-size: 18px;
}
.space {
  width: 100%;
  height: 140px;
  background-image: url(../img/bj.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;

  .xiang {
    width: 80px;
    height: 120px;
    margin: 20px auto;
    .avator {
      width: 75px;
      height: 75px;
      background-image: url(../img/touxiang.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      border-radius: 50%;
    }
    p {
      text-align: center;
      color: #ffffff;
    }
  }
}
.java {
  width: 100%;
  height: 25px;
  // background: goldenrod;
  margin: 20px 0 10px 0;
  padding: 0 8px 0 8px;
  position: relative;
  .left {
    float: left;
    width: 100px;
    margin-left: 5px;
    h3 {
      position: absolute;
      left: 50px;
      top: 3px;
    }
  }
  .right {
    float: right;
    width: 25px;
    height: 25px;
    margin: 5px 10px 0 0;
  }
}
.xian {
  border: 1px solid #ddd;
}
.tuichu {
  width: 330px;
  height: 50px;
  background: #ff7765;
  text-align: center;
  line-height: 50px;
  color: #ffffff;
  margin: auto;
}
</style>