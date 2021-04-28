<template>
  <v-app>
    <v-content class="login-main"
               style="position: relative;"
    >
      <v-container class="login-form" fluid fill-height
                   style="  position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translateY(-50%) translateX(-50%);"
      >
        <v-layout class="align-center justify-center">
          <v-flex xs12 sm8 md6 lg5 xl3>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>欢迎光临</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="login_form">
                    <v-text-field
                      label="用户名"
                      name="用户名"
                      prepend-icon="mdi-account"
                      v-model="loginForm.account"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      label="密码"
                      name="密码"
                      v-model="loginForm.password"
                      prepend-icon="mdi-lock"
                      :type="passwordDisplay ? 'text' : 'password'"
                      :append-icon="passwordDisplay ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="passwordDisplay = !passwordDisplay"
                    ></v-text-field>

<!--                  <v-text-field-->
<!--                    prepend-icon="mdi-security"-->
<!--                    :append-icon="img"-->
<!--                    outlined-->
<!--                    clearable-->
<!--                    placeholder="请输入验证码"-->
<!--                    name="captcha"-->
<!--                    label="验证码"-->
<!--                  >-->
<!--                    <div-->
<!--                      slot="append"-->
<!--                      class="mt-0 captcha"-->
<!--                      @click="refreshCaptcha"-->
<!--                    >-->
<!--                      <v-img-->
<!--                        :aspect-ratio="16/9"-->
<!--                        class="v-sheet"-->
<!--                        ref="captcha"-->
<!--                        lazy-src="https://picsum.photos/id/11/100/60"-->
<!--                        src="https://picsum.photos/id/11/500/300"-->
<!--                      />-->
<!--                    </div>-->
<!--&lt;!&ndash;                    <v-icon slot="prepend">mdi-security</v-icon>&ndash;&gt;-->
<!--                  </v-text-field>-->
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :loading="loginLoading"
                  color="primary"
                  @click="login ()"
                >登入
                </v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <vue-particles
        color="#292929"
        :particleOpacity="1"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="2"
        linesColor="#292929"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.8"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="remove"
        style="background-image: image('/src/assets/cool-background.png')"
      ></vue-particles>
    </v-content>
    <v-snackbar top :color="snackbar.color" v-model="snackbar.show">
      {{ snackbar.text }}
      <v-btn text @click="snackbar.show = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'Login',
  data () {
    return {
      passwordDisplay: false,
      loginLoading: false,
      // captchaSrc: 'https://picsum.photos/id/11/500/300',
      snackbar: {
        show: false,
        text: '',
        color: 'primary'
      },
      loginForm: {
        account: 'biadmin',
        password: 'admin',
        captcha: '',
        src: ''
      },
      fieldRules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      checked: true
    }
  },
  methods: {
    login () {
      // this.loading = true
      this.$store.commit('setUserName')
      let userInfo = {
        account: this.loginForm.account,
        password: this.loginForm.password,
        captcha: this.loginForm.captcha
      }
      this.$store.commit('setUserName', this.loginForm.account)
      localStorage.setItem('username', this.loginForm.account)
      this.$api.login.login(userInfo).then((res) => { // 调用登录接口
        if (res.msg != null) {
          this.snackbar.show = true
          this.snackbar.text = res.message
        } else {
          Cookies.set('token', res.data.token) // 放置token到Cookie
          sessionStorage.setItem('user', userInfo.account) // 保存用户到本地会话
          this.$store.commit('menuRouteLoaded', false) // 要求重新加载导航菜单
          this.$router.push('/') // 登录成功，跳转到主页
        }
        // this.loading = false
      }).catch((res) => {
        this.snackbar.show = true
        this.snackbar.text = '未找到用户信息'
      })
    },
    refreshCaptcha: function () {
      this.loginForm.src = this.global.baseUrl + '/captcha.jpg?t=' + new Date().getTime()
    }
    // reset () {
    //   this.$refs.loginForm.resetFields()
    // }
  },
  mounted () {
    this.refreshCaptcha()
  }

}
</script>

<style lang="scss" scoped>

</style>
