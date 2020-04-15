import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    perfiles: [
      {nombre: "Alcalde", direccion: "/alcalde"},
      {nombre: "GORE", direccion: "/gore"},
      {nombre: "Diputado", direccion: "/diputado"},
      {nombre: "Senador", direccion: "/senador"},
      {nombre: "Usuario Común", direccion: "/usuario"}
    ],
    regiones: []
  },
  mutations: {
    //async getRegiones(){
    //  let datos = await axios.get('http://192.168.0.30:9898/listar/regiones')
    //  console.log(datos.data);
    //  this.regiones = await datos.data
    //},
    listarRegiones(state, lista){
      state.regiones = lista
    }
  },
  actions: {
    getRegiones: async function({commit}){
      let datos = await axios.get('http://192.168.0.30:9898/listar/regiones')
      let lista = await datos.data
      commit('listarRegiones', lista)
    }
  },
  modules: {
  }
})
