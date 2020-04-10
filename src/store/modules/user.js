import { setToken, getToken } from '@/utils/common.js'
import api from '../../api'

const state = {
  token: getToken(),
  access: '',
  userName: '',
  userId: ''
}
const actions = {
  handleLogin: async ({ commit }, { username, password }) => {
    const res = await api.user.getToken({ username, password })
    commit('setUserName', username)
    commit('setToken', res.token)
    setToken(res.token)
  }
}
const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUserName(state, username) {
    state.userName = username
  }
}
const getters = {}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
