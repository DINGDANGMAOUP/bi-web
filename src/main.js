// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuetify from '@/plugins/vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.config.productionTip = false
Vue.use(Vuetify)
const opts = {
  icons: {
    iconfont: 'mdi'
  }
}
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   Vuetify,
//   Components: { App },
//   template: '<App/>'
// })
new Vue({
  router,
  vuetify: new Vuetify(opts),
  render: h => h(App)
}).$mount('#app')
