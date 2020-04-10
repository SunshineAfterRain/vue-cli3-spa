import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components'
import './assets/css/global.css'
import api from './api/index'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(api)
Vue.use(element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
