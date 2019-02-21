import * as types from '../types'
import Vue from 'vue'
let vm = new Vue({})

const state = {
  fetchLoading: false, // 全局加载状态loading
  productDatas: '' // 父组件请求的当前页面的鹅商品数量
}

const mutations = {
  [types.SET_LOADING] (state, res) {
    state.fetchLoading = res
  },
  // 异步获得商品数据
  [types.SET_DATAS] (state, res) {
    state.productDatas = res
  }
}

const actions = {
  setDatas ({commit}) {
    vm.$api({
      method: 'post',
      url: '/detail'
    }).then(response => {
      commit('SET_DATAS', response.data)
    })
  }
}

export default {
  state,
  actions,
  mutations
}
