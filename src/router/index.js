import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/alcalde',
    name: 'alcalde',
    component: () => import(/* webpackChunkName: "alcalde" */ '../views/Alcalde.vue')
  },
  {
    path: '/gore',
    name: 'gore',
    component: () => import(/* webpackChunkName: "gore" */ '../views/Gore.vue')
  },
  {
    path: '/diputado',
    name: 'diputado',
    component: () => import(/* webpackChunkName: "diputado" */ '../views/Diputado.vue')
  },
  {
    path: '/senador',
    name: 'senador',
    component: () => import(/* webpackChunkName: "senador" */ '../views/Senador.vue')
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
