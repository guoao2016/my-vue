// 命名视图

import Vue from 'vue'
import Router from 'vue-router'
import PageA from '../views/PageA'
import PageB from '../views/PageB'
import PageC from '../views/PageC'
import Test from '../views/Test'

// 安装路由到vue
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/a'
  },
  {
    path: '/a/:id',
    name: 'pageA',
    beforeEnter: (to, from, next) => {
      window.console.log('before enter')
      next()
    },
    components: {
      default: PageA,
      david: Test
    }
  },
  {
    path: '/b/:id',
    props: true,
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
  },
  {
    path: '/asyncTest',
    component: () => import ('../views/AsyncTest')
  }
  
  
]

export default new Router({
  mode: 'history',
  routes
})