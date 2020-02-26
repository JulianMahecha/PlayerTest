import Vue from 'vue'
import Router from 'vue-router'
import Popular from './views/Players.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'players',
      component: Popular
    }
  ]
})
