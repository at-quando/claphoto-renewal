import * as types from './types'
import Vue from 'vue'

export default {
  someAction: ({commit}, payload) => {
    Vue.http.get(types.HOT_COSTUME).then(res => {
      commit('mutateSomeAction', res.body)
    })
  }
}
