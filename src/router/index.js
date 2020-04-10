/*
 * @Author: Tango
 * @Date: 2020-04-09 16:43:14
 * @Last Modified by: Tango
 * @Last Modified time: 2020-04-09 20:26:09
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
Vue.use(Router)
const IndexRoute = {
  path: '/',
  component: Index,
  children: []
}
let routes = [
  IndexRoute,
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/login.vue')
  },
  {
    path: '*',
    redirect: '/login'
  }
]

//自动扫描子模块路由并导入
const routerContext = require.context('./', true, /index\.js$/)
console.log(routerContext.keys())

routerContext.keys().forEach(route => {
  if (route.startsWith('./index')) return
  const routerModule = routerContext(route)
  IndexRoute.children = [
    ...IndexRoute.children,
    ...(routerModule.default || routerModule)
  ]
})

export default new Router({
  mode: 'hash',
  routes: routes
})
