import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueRouter from 'vue-router'
import router from './router/index'
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')