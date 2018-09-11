import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import carousel from './modules/carousel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    action: ''
  },
  api,
  actions,
  getters,
  mutations,
  modules: {
    carousel
  }
})
