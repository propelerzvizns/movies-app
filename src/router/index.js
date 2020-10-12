import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovies from '../components/AppMovies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movies',
    component: AppMovies
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
