<template>
  <div class="login">
    <Vheader class="login-title">
      <h1 slot="title">登录页</h1>
    </Vheader>
    <section>
      <mt-field
        label="账号"
        placeholder="请输入账号"
        type = "text"
        v-model = "account"
        :readonly = '!toggle'
        :disableClear = '!toggle'
      >
      </mt-field>
      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        :readonly='!toggle'
        :disableClear = '!toggle'
        ></mt-field>
        <p class="tip">Tip : 账号密码随便输</p>
    </section>
    <mt-button
     plain
     size="large"
     @click="login"
     v-if='toggle'>登录</mt-button>
    <mt-button
     plain
     size="large"
     @click="logout"
     v-else>退出登录</mt-button>
  </div>
</template>
<script>
import Vheader from '@/common/_header'
import { Toast } from 'mint-ui'
export default {
  components: {
    Vheader
  },
  data () {
    return {
      account: '',
      password: '',
      toggle: !this.$store.state.login.token
    }
  },
  methods: {
    // 登录按钮
    login () {
      if (this.accoutn !== '' && this.password !== '') {
        Toast('登录成功,存储token,跳转网页')
        this.toggle = false
        this.$store.commit('CHANGE_TOKEN', 1)
      } else {
        Toast('账号密码不能为空')
      }
      setTimeout(_ => {
        this.$router.replace({
          path: 'user'
        })
      }, 1000)
    },
    // 退出登录按钮
    logout () {
      Toast('退出登录成功,清除token')
      this.$store.commit('CHANGE_TOKEN', 0)
      this.toggle = true
      this.account = ''
      this.password = ''
    }
  }
}
</script>
<style lang="less" scoped>
.login-title {
  height: 15vw;
  line-height: 15vw;
  text-align: center;
  h1 {
    font-size: 20px;
  }
}
.tip {
  padding: 6vw 3vw;
  color:rgb(224, 145, 71);
  letter-spacing: 2px;
  font-size: 16px;
}
</style>
