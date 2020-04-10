/*
 * @Author: Tango
 * @Date: 2020-04-09 16:43:00
 * @Last Modified by: Tango
 * @Last Modified time: 2020-04-09 16:46:44
 */
// components/index.js
import Vue from 'vue'

// 自动加载 global 目录下的 .js 结尾的文件
const componentsContext = require.context('./global', true, /\.js$/)
console.log(componentsContext.keys())
componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})
