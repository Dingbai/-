import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
Vue.use(vuex)

const state = {
  count: 0
}

export default new vuex.Store({
  state,
  mutations
})
