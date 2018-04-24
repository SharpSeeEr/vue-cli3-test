import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import { registerComponents } from './util/helpers'
import * as Views from './views'
import * as Components from './components'
import './scss/app.scss'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content'
})
console.log(Components)
registerComponents(Views)
registerComponents(Components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
