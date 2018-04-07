import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import './scss/app.scss'
import MInput from './components/MInput.vue'
import BTimepicker from './components/BTimepicker.vue'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content'
})
Vue.component('m-input', MInput)
Vue.component('b-timepicker', BTimepicker)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('Done!')
