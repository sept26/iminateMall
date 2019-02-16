import axios from 'axios'
import store from '@/store'
import router from '../router'
// import router from '@/router'

const api = axios.create()
api.defaults.baseURL = 'http://api.com'
api.defaults.timeout = 5000
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

// 请求拦截
api.interceptors.request.use((config) => {
  // 在发送请求前可以做些事情
  store.commit('SET_LOADING', true)
  // 如果有token,添加到请求报文, 后台会根据报文返回status
  if (store.state.login.token) {
    config.headers.Authorization = `token$S{store.state.login.token}`
  }
  return config
}, (error) => {
  // 对请求错误做些什么
  alert('网络错误,请稍后再试')
  store.commit('SET_LOADING', false)
  return Promise.reject(error)
})
// 响应拦截
api.interceptors.response.use((response) => {
  // 对响应数据做些什么
  // 加定时器是为了展示loading效果,项目中应去除掉
  setTimeout(() => {
    store.commit('SET_LOADING', false)
  }, 500)
  return response
}, (error) => {
  // 对响应错误做点什么
  store.commit('SET_LOADING', false)
  if (error.response) {
    if (error.response.status === 401) {
      // 如果返回401,即是没有权限,跳到登录页重新登录
      store.commit('CHANGE_TOKEN', 0)
      alert('请重新登录')
      router.replace({
        path: 'login',
        query: {redirect: router.currentRoute.fullPath}
      })
    }
  }
  return Promise.reject(error)
})
export default api
