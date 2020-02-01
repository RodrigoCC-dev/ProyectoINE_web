import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    perfiles: [
      {nombre: "Alcalde"},
      {nombre: "GORE"},
      {nombre: "Diputado"},
      {nombre: "Senador"},
      {nombre: "Usuario Común"}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
