import Vue from 'vue'
import Vuex from 'vuex'

// 模块
import detail from './modules/detail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    detail
  }
})
