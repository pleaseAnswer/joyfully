<template>
  <div>
    <div class="header-title">我的喜地</div>
    <div class="space">
      <div class="xiang" @click="goto('/login')">
        <template v-if="isLogin">
          <div class="avator1"></div>
          <p>{{username}}</p>
        </template>
        <template v-else>
          <div class="avator"></div>
          <p>登录</p>
        </template>
        +
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
    <el-main class="main" :class="[sty?'':'nn']"></el-main>
    <el-col class="chengxu" :class="[sty?'bb':'nn']">
      <div class="xiao">确认退出登录？</div>
      <div class="ok" @click="cancel">取消</div>
      <div class="ok" @click="ok" style=" background: #00bebf; color:#ffffff">确定</div>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sty: false,
      username: this.$store.state.common.user.username
    };
  },
  computed: {
    isLogin() {
      return Boolean(this.$store.state.common.user.Authorization);
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    logout() {
      this.sty = true;
    },
    ok() {
      this.sty = false;
      this.$store.commit("logout");
    },
    cancel() {
      this.sty = false;
    }
  }
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
    .avator1 {
      width: 75px;
      height: 75px;
      background-image: url(../img/07.jpg);
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
.chengxu {
  width: 353px;
  height: 135px;
  background: #fff;
  position: fixed;
  top: 300px;
  z-index: 1320;
  left: 10px;
  display: none;
  .xiao {
    width: 308px;
    height: 41px;
    border-bottom: #eee 1px solid;
    padding: 1.8rem;
    font-size: 13px;
    text-align: center;
    line-height: 21px;
  }
  .ok {
    width: 50%;
    height: 50px;
    color: #000;
    font-size: 17px;
    text-align: center;
    line-height: 50px;
    float: left;
    background: #ddd;
  }
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
  z-index: 1300;
}
</style>