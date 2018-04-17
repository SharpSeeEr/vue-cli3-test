import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import './scss/app.scss'
import MInput from './components/MInput.vue'
import SaveButton from './components/SaveButton.vue'
import BTimepicker from './components/BTimepicker.vue'
import Pizza from './components/pizza.vue'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content'
})
Vue.component('m-input', MInput)
Vue.component('save-button', SaveButton)
Vue.component('b-timepicker', BTimepicker)
Vue.component('pizza', Pizza)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('Done!')
