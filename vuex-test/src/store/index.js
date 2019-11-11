import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/a'
import number from './modules/b'

Vue.use(Vuex) 

export default new Vuex.Store({
  modules: {
    count,
    number
  }
})
