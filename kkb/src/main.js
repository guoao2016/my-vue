import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.myconsole = function(msg){
  window.console.log(msg)
}
new Vue({
  render: h => h(App),
}).$mount('#app')
