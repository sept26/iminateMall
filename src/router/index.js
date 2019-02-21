import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views'
import category from '@/views/category'
import categoryMain from '@/components/category/main'
import detail from '@/views/detail'

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
  }
]
export default new Router({
  routes
})
