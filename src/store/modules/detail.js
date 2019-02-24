import * as types from '../types'
import Util from '../../util/common'
import Vue from 'vue'
let vm = new Vue({})

const state = {
  fetchLoading: false, // 全局加载状态loading
  productDatas: '', // 父组件请求的当前页面的鹅商品数量
  colSelected: 0, // 默认第一种颜色
  sizeSelected: 0, // 默认第一种规格
  count: 0, // 购物车中商品数量
  carList: '', // 购物车中的商品列表
  selectedList: '', // 已选择的购物车商品列表
  unSelectedList: '' // 未选择的购物车商品列表,提交订单后用
}

const mutations = {
  [types.SET_LOADING] (state, res) {
    state.fetchLoading = res
  },
  // 异步获得商品数据
  [types.SET_DATAS] (state, res) {
    state.productDatas = res
  },
  // 详情页商品颜色选择
  [types.CHANGE_COL_SELECTED] (state, res) {
    state.colSelected = res
  },
  // 详情页商品尺寸选择
  [types.CHANGE_SIZE_SELECTED] (state, res) {
    state.sizeSelected = res
  },
  // 获取当前购物车商品数量
  [types.CHANGE_COUNT] (state, res) {
    state.count = Util.getLocal('count')
  },
  // 向购物车中添加商品
  [types.ADD_PRODUCT] (state) {
    state.carList = Util.getLocal('carList')
  },
  // 重置购物车
  [types.RESET_CARLIST] (state) {
    state.carList = Util.getLocal('carList')
  },
  // 购物车里打钩的商品
  [types.SET_SELECTEDLIST] (state, res) {
    state.selectedList = Util.getLocal('selectedList')
  },
  // 重置购物车数量
  [types.RESET_COUNT] (state) {
    state.count = Util.getLocal('carList').length
  },
  // 购物车里没打钩的商品
  [types.SET_UNSELECTEDLIST] (state) {
    state.unSelectedList = Util.getLocal('unSelectedList')
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
  },
  // 购物车数量增减,true是加,false是减
  setLocalCount ({commit}, bool = true) {
    let count = Util.getLocal('count') || 0
    if (bool) {
      Util.setLocal(++count, 'count')
    } else {
      Util.setLocal(--count, 'count')
    }
    commit(types.CHANGE_COUNT)
  },
  // 向购物车中添加数据
  addCarList ({commit}, res) {
    Util.setLocal(res, 'carList', true)
    commit(types.ADD_PRODUCT)
  },
  // 删除购物车中的某一项
  cutCarList ({commit}, res) {
    Util.setLocal(res, 'carList')
    commit(types.RESET_CARLIST)
  },
  // 分别保存打钩的商品和未打钩的商品
  setSelectedList ({commit, getters}) {
    Util.setLocal(getters.selectedList, 'selectedList')
    commit('SET_SELECTEDLIST')
    Util.setLocal(getters.unSelectedList, 'unSelectedList')
    commit('SET_UNSELECTEDLIST')
  },
  resetCarList ({commit, getters}) {
    const unSelectedList = Util.getLocal('unSelectedList')
    Util.setLocal(unSelectedList, 'carList')
    commit(types.RESET_CARLIST)
  },
  // 重置购物车数量Count,即没打钩的商品的数量
  resetCount ({commit, getters}) {
    const count = Util.getLocal('unSelectedList').length
    Util.setLocal(count, 'count')
    commit(types.RESET_COUNT)
  }
}

const getters = {
  selectedList (state) {
    if (state.carList !== '') {
      let arr = state.carList.filter((ele) => {
        return ele.choseBool === true
      })
      return arr
    }
  },
  unSelectedList (state) {
    if (state.carList !== '') {
      let arr = state.carList.filter((ele) => {
        return ele.choseBool === false
      })
      return arr
    }
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
