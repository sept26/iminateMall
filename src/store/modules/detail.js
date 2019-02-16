import * as types from '../types'
// import Vue from 'vue'

const state = {
  fetchLoading: false // 全局加载状态loading
}

const mutations = {
  [types.SET_LOADING] (state, res) {
    state.fetchLoading = res
  }
}

const actions = {

}

export default {
  state,
  actions,
  mutations
}
