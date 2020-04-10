import { service, axios } from '@/utils/request'
import user from './v1/user'
import homePage from './v1/homePage'

const api = {
  install(Vue) {
    Vue.prototype.$api = api
    Vue.prototype.$http = service
    Vue.prototype.$third = axios
  },
  homePage,
  user
}

export default api
