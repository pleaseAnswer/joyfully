<template>
  <div>
    <div class="main">
      <div class="mobile-head" @click="goto('/login')">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="login">免费注册</div>
    </div>
    <div class="mobile-logo">
      <img src="../img/login-logo.png" alt />
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div class="L_box2" @click="submitForm('ruleForm')">注册</div>
    <div class="button">
      已阅读并同意
      <span>《喜地服务协议》</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    // 正则验证用户名格式
    var checkUsername1 = (rule, value, callback) => {
      if (!/^[a-z]/i.test(value)) {
        callback(new Error("用户名必须以字母开头"));
      } else if (!/^[\w-]+$/i.test(value)) {
        callback(new Error("用户名必须为数字、字母、_、-"));
      } else {
        callback();
      }
    };
    //校验用户名是否存在
    var checkUsername = async (rule, value, callback) => {
      let { data } = await this.$axios.get("http://localhost:1910/reg/check", {
        params: {
          username: this.ruleForm.username
        }
      });
      if (data.status === 0) {
        callback(new Error("用户名已存在"));
      } else {
        callback();
      }
      // console.log(data);
    };
    //确认密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        //校验失败
        callback(new Error("两次输入密码不一致!"));
      } else {
        //通过校验
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      rules: {
        username: [
          { required: true, message: "亲，用户名必须填写哟", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur"
          },
          { validator: checkUsername, trigger: "blur" },
          { validator: checkUsername1, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度必须为 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        checkPass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 校验成功发起ajax请求

          let { username, password } = this.ruleForm;
          let { data } = await this.$axios.post("http://localhost:1910/reg", {
            username,
            password
          });
          // console.log(data);
          if (data.status === 1) {
            alert("注册成功");
            this.$router.replace("/login");
          }
          alert("成功");
        } else {
          alert("注册失败");
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
  span {
    color: #0261b9;
  }
}
</style>