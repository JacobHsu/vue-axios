import Vue from 'vue'
import App1 from './App1.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App1)
}).$mount('#api')