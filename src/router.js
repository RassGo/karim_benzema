import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Particuliers',
      name: 'particuliers',
      component: () => import('./views/Particuliers.vue')
    },
    {
      path: '/Professionels',
      name: 'professionels',
      component: () => import('./views/Professionels.vue')
    },
    {
      path: '/Aide',
      name: 'aide',
      component: () => import('./views/Aide.vue')
    }
  ]
})
