import Vue from 'vue'
import VueUi from '@vue/ui'
import '@vue/ui/dist/vue-ui.css'

import App from './App.vue'

Vue.use(VueUi)

new Vue({
  el: '#app',
  render: h => h(App)
})
