<template>
  <div>
    <div class="ye">
      <div class="mobile-head" @click="goto('/reg')">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="reg">goto登录</div>
    </div>
    <div class="mobile-logo">
      <img src="../img/login-logo.png" alt />
    </div>
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :error="errorMsg">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="mdl">
        <van-checkbox v-model="loginForm.mdl" checked-color="#5fd9da">7天免登陆</van-checkbox>
      </el-form-item>
    </el-form>
    <div class="L_box2" @click="submitForm('loginForm')">登录</div>
    <div class="button">首次登录将自动注册</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      errorMsg: "",
      loginForm: {
        username: "",
        password: "",
        mdl: true
      },
      rules: {
        username: [
          { required: true, message: "亲，用户名必须填写哟", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度必须为 6 到 12 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 校验成功发起ajax请求
          let { username, password } = this.loginForm;

          let { data } = await this.$axios.get("http://localhost:1910/login", {
            params: {
              username,
              password
            }
          });

          if (data.status === 0) {
            this.errorMsg = "用户名或者密码错误";
          } else {
            //获取token
            let user = data.data;
            this.$store.commit("login", { user, username });
            let redirectUrl = this.$route.query.redirectUrl || "/mine";
            // alert("登录成功");
            this.$router.replace(redirectUrl);
          }
        } else {
          alert("登录失败");
          return false;
        }
      });
    },
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
  margin: 15px 150px 0 0;
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
  width: 80px;
  height: 50px;
  background: #5fd9da;
  margin: 20px 0 0 100px;
  text-align: center;
  line-height: 50px;
  color: #ffffff;
  border-radius: 10px;
}
.button {
  width: 100%;
  margin-top: 50px;
  text-align: center;
  color: #777;
  font-size: 12px;
}
</style>