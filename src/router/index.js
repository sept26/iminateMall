import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views'
import category from '@/views/category'
import categoryMain from '@/components/category/main'
import detail from '@/views/detail'
import car from '@/views/car'
import pay from '@/components/pay/pay'
import login from '@/views/login'
import user from '@/views/user'

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
    redirect: '/category/all',
    component: category,
    children: [
      {
        path: '/category/:tab',
        component: categoryMain
      }
    ]
  },
  {
    path: '/detail',
    name: '详情页',
    component: detail
  },
  {
    path: '/car',
    name: '购物车页',
    component: car
  },
  {
    path: '/pay',
    name: '支付页',
    component: pay
  },
  {
    path: '/login',
    name: '登录页',
    component: login
  },
  {
    path: '/user',
    name: '用户页',
    component: user,
    meta: {
      requireAuth: true
    }
  }
]
export default new Router({
  routes
})
