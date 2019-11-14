<template>
  <div>
    <div class="main">
      <div class="mobile-head">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="login" @click="goto('/login')">登录</div>
    </div>
    <div class="mobile-logo">
      <img src="../img/login-logo.png" alt />
    </div>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入手机号码"
        @click-right-icon="$toast('question')"
      />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="L_box2">注册</div>
    <div class="button">
      已阅读并同意
      <span>《喜地服务协议》</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss">
.main {
  overflow: hidden;
}
.mobile-head {
  width: 24px;
  height: 24px;
  margin: 15px 0 25px 15px;
  float: left;
}
.login {
  float: right;
  margin: 15px 15px 0 0;
}
.mobile-logo {
  width: 210px;
  height: 80px;
  margin: 50px auto;
  img {
    width: 100%;
    height: 100%;
  }
}
.L_box2 {
  width: 300px;
  height: 50px;
  background: #5fd9da;
  margin: 20px auto;
  text-align: center;
  line-height: 50px;
  color: #ffffff;
}
.button {
  width: 100%;
  margin-top: 150px;
  text-align: center;
  color: #777;
  font-size: 12px;
  span {
    color: #0261b9;
  }
}
</style>