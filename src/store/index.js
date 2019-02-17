import Vue from 'vue'
import Vuex from 'vuex'

// 模块
import detail from './modules/detail'
import login from './modules/login'
import category from './modules/category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    detail,
    login,
    category
  }
})
