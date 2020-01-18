import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

router.beforeEach( (to, from, next) => {
  // window.console.log('before each', to, from)
  // if(to.fullPath === '/shoppingCart'){
  //   next('/login')
  // }else {

  // }
  next()
})

//时间触发比前置钩子晚一些
// router.beforeResolve((to, from, next) => {
//   window.console.log('before resolve', to, from)
//   next()
// })

// router.afterEach((to, from) => {
//   window.console.log('after each', to, from)
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
