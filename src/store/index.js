import Vue from 'vue'
import vuex from 'vuex'
import app from './modules/app'
import tab from './modules/tab'
import iframe from './modules/iframe'
import user from './modules/user'
import menu from './modules/menu'
import report from './modules/report'
import username from './modules/name'
Vue.use(vuex)

const store = new vuex.Store({
  modules: {
    app: app,
    tab: tab,
    iframe: iframe,
    user: user,
    menu: menu,
    report: report,
    username: username
  }
})
export default store
