import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [1],
    data1: [2],
  },
  getters: {
    getData: (state) => {
      return state.data
    },
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    },
    setData1(state, payload) {
      state.data1 = payload
    },
  },
  actions: {
    updateMTData({ commit }, payload) {
      if (payload === 1) {
        commit('setData', payload)
      } else {
        commit('setData1', payload)
      }
    },
  },
  modules: {},
})
