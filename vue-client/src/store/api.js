import Vue from 'vue'

var state = {}

const getters = {
  aaa: state => {
    return state
  }
}

const mutations = {
  mutate_get: (state, payload) => {
    state = payload
  },
  mutate_post: (state, payload) => {
    state = payload
  },
  mutate_delete: (state, payload) => {
    state = payload
  }
}

const actions = {
  get123: ({commit}, url, payload) => {
    Vue.http.get(url)
    .then(response => {
      return response.body
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
