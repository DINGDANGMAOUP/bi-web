import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Layout/Home'
import NotFound from '@/views/404'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    }
  ]
})