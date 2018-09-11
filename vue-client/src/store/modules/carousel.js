import Vue from 'vue'

var state = {
  costumes: ''
}

const getters = {
  costumes: state => {
    return state.costumes
  }
}

const mutations = {
  mutate_get: (state, payload) => {
    state.costumes = payload
  },
  mutate_post: (state, payload) => {
    state = payload
  },
  mutate_delete: (state, payload) => {
    state = payload
  }
}

const actions = {
  getHotCostume: ({commit}, url) => {
    Vue.http.get(url)
    .then(response => {
      commit('mutate_get', response.body)
    })
  },
  post: ({commit}, url, payload) => {
    Vue.http.post(url, {params: payload})
    .then(response => {
      commit('mutate_post', response.body)
    })
  },
  delete: ({commit}, url, payload) => {
    Vue.http.delete(url, {params: payload})
    .then(response => {
      commit('mutate_delete', response.body)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
