// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './server/axios.js'
import api from './server/api.js'
import store from './vuex'
// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 主题配置css
import '../theme/index.css'
// iconfont
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
// axios
Vue.prototype.$http = axios.$http
// api
Vue.prototype.api = api
Vue.config.productionTip = false
// element
Vue.use(ElementUI)
/* eslint-disable no-new */
window.$vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
