import Vue from 'vue'
import Router from 'vue-router'
import TopRated from './views/TopRated.vue'
import Popular from './views/Popular.vue'
import Upcoming from './views/Upcoming.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/upcoming',
      name: 'upcoming',
      component: Upcoming
    },
    {
      path: '/top-rated',
      name: 'top',
      component: TopRated
    },
    {
      path: '/',
      name: 'popular',
      component: Popular
    },
  ]
})
