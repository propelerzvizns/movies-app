import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovies from '../components/AppMovies.vue'
import AddMovie from '../components/AddMovie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'movies-all',
    component: AppMovies
  },
  {
    path: '/add-movie',
    name: 'add-movie',
    component: AddMovie
  },
  {
    path: '/edit-movie/:id',
    name: 'edit-movie',
    component: AddMovie
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
