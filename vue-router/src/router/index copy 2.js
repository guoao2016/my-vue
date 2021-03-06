import Vue from 'vue'
import Router from 'vue-router'
import PageA from '../views/PageA'
import PageB from '../views/PageB'
import PageC from '../views/PageC'
import Test from '../views/Test'

// 安装路由到vue
Vue.use(Router)

const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/a'
  },
  {
    path: '/a',
    name: 'pageA',
    component:  PageA
  },
  {
    path: '/b/:id',
    component: PageB
  },
  {
    path: '/c/:id',
    props: true,
    component: PageC,
    children: [
      {
        path: 'test',
        component: Test
      }
    ]
  }
  
  
]

export default new Router({
  mode: 'history',
  routes
})