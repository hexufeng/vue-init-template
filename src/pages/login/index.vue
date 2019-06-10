<template>
  <div>
    <div class="main">
      <p class="sign" align="center">Sign in</p>
      <form
        :model="user"
        class="form1">
        <input
          v-model="user.username"
          class="un"
          type="text"
          align="center"
          placeholder="Username">
        <input
          v-model="user.password"
          class="pass"
          type="password"
          align="center"
          placeholder="Password">
        <a class="submit" align="center" @click="submit('loginForm')">Sign in</a>
        <p class="forgot" align="center"><a href="#">Forgot Password?</a></p>
      </form>
    </div>
    <el-alert
      v-if="loginFailed"
      class="footerMsg"
      title="登录失败"
      type="error"
      center
      show-icon
      effect="dark"
      @close="closeMsg()"/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '@/store/user'
import * as api from '@/api/login'
import * as auth from '@/utils/auth'
import * as common from '@/api/common'

export default {
  data() {
    return {
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      user: {
        username: '',
        password: ''
      },
      centerDialogVisible: false,
      loginFailed: false
    }
  },
  methods: {
    ...mapActions([USER_SIGNIN]),
    submit(formName) {
      console.log('login info: ', this.user)
      api.login(this.user).then(res => {
        if (res) {
          auth.setToken(res)
          delete this.user.password
          this.USER_SIGNIN(this.user)
          this.$router.replace({ path: '/home' })
        } else {
          this.loginFailed = true
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
    closeMsg() {
      this.loginFailed = false
    }
  }
}
</script>

<style lang="less" scoped>
  body {
    font-family: 'Ubuntu', sans-serif;
  }

  .main {
    background-color: #FFFFFF;
    width: 400px;
    height: 400px;
    margin: 7em auto;
    border-radius: 1.5em;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  }

  .sign {
    padding-top: 40px;
    color: #8C55AA;
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
    font-size: 23px;
  }

  .un {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
  }

  form.form1 {
    padding-top: 40px;
  }

  .pass {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
  }

  .un:focus, .pass:focus {
    border: 2px solid rgba(0, 0, 0, 0.18) !important;

  }

  .submit {
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    background: linear-gradient(to right, #9C27B0, #E040FB);
    border: 0;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: 'Ubuntu', sans-serif;
    margin-left: 35%;
    font-size: 13px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  }

  .forgot {
    text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
    color: #E1BEE7;
    padding-top: 15px;
  }

  a {
    text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
    color: #E1BEE7;
    text-decoration: none
  }

  @media (max-width: 600px) {
    .main {
      border-radius: 0px;
    }
  }

  .footerMsg {
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 60px;
  }
</style>
