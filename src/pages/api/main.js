import Vue from 'vue'
import App1 from './App1.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App1)
}).$mount('#api')
