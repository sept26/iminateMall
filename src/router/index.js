import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  }
]
export default new Router({
  routes
})
