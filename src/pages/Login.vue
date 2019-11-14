<template>
  <div>
    <div class="ye">
      <div class="mobile-head">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="reg" @click="goto('/reg')">注册</div>
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
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <div class="yan">
      <van-icon name="eye-o" color="#999" />
    </div>
    <div class="L_box2">登录</div>
    <div class="button">首次登录将自动注册</div>
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
<style lang="scss" scoped>
.ye {
  overflow: hidden;
}
.mobile-head {
  width: 24px;
  height: 24px;
  margin: 15px 0 25px 15px;
  float: left;
}
.reg {
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
}
.yan{
  position: fixed;
  top:300px;
  right: 15px;
}
</style>