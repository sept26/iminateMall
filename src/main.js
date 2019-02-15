// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from '@/http/api'
import store from '@/store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/style/common.less'
Vue.use(Mint)
Vue.config.productionTip = false
Vue.prototype.$api = api

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 需要权限的,进一步判断
    if (store.state.login.token) { // 有权限的话,进入路由
      next()
    } else { // 否则跳到登录页
      next({paht: 'login'})
    }
  } else { // 不需要权限的,直接路由跳转
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
