import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const actions = {
  apiMethods(store, payload) {
    return { Amount: payload.amount, ReturnUrl: payload.returnUrl }
  }
}
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions
})
