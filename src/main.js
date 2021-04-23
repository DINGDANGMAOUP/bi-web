// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import VueParticles from 'vue-particles'
import api from './http'
import global from './utils/global'
import 'font-awesome/css/font-awesome.min.css'
import i18n from './i18n'
import store from './store'
import vuetify from '@/plugins/vuetify'
// import Vuelidate from 'vuelidate'
// import VeeValidate from 'vee-validate'
Vue.config.productionTip = false
Vue.use(VueParticles)
require('@/mock/index.js')
Vue.prototype.global = global
Vue.use(api)

// Vue.use(Vuelidate)
// Vue.use(VeeValidate)

/* eslint-disable no-new */

new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
