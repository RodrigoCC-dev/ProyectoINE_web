import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
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
