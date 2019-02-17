import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views'
import category from '@/views/category'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '首页',
    component: home
  },
  {
    path: '/category',
    name: '分类页',
    component: category
    // children: [
    //   {path: '/category/:tab'}
      // component: CategoryMain
    // ]
  }
]
export default new Router({
  routes
})
