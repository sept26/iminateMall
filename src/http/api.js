import axios from 'axios'
// import store from '@/store'
// import router from '@/router'

const api = axios.create()
api.defaults.baseURL = 'http://api.com'
api.defaults.timeout = 5000
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

// 请求拦截
