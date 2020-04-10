import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)
export const types = {
  TOKEN: 'TOKEN'
}

export default new Vuex.Store({
  state: {
    [types.TOKEN]: false
  },
  mutations: {
    [types.TOKEN]: (state, res) => {
      state[types.TOKEN] = res
    }
  },
  action: {
    [types.TOKEN]: async ({ commit }, state) => {
      return commit([types.TOKEN, state])
    }
  },
  getters: {
    getTOKEN: state => {
      return state[types.TOKEN]
    }
  },
  modules: {
    user
  }
})
