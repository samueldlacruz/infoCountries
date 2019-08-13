import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/dashboard.vue'
import About from './views/about.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path:'/about',
      name:'About',
      component: About
    }
  ]
})
