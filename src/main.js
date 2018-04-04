import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import './scss/app.scss'
import MInput from './components/MInput.vue'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content'
})
Vue.component('m-input', MInput)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('Done!')
