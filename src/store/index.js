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
    listaReg: null,
    listaProv: null,
    listaCom: null,
    listaDist: null,
    listaCirc: null,
    distrito: null,
    comuna: null
  },
  mutations: {
    //async getRegiones(){
    //  let datos = await axios.get('http://192.168.0.30:9898/listar/regiones')
    //  console.log(datos.data);
    //  this.regiones = await datos.data
    //},
    listarRegiones(state, lista){
      state.regiones = lista
    },
    obtenerDistritos(state, distritos){
      this.state.listaDist = distritos
      console.log('State_listaDist', this.state.listaDist)
    },
    getComunas: function (){
      let lista;
      this.state.comuna = null;
      if(this.state.listaDist.empty){
        lista = [];
      }else{
        if(this.state.distrito !== null){
          lista = this.state.listaDist[this.state.distrito].listaComunas;
        }else{
          lista = [];
        }
      }
      this.state.listaCom = lista;
      console.log(this.state.distrito, this.state.listaCom);
      return this.state.listaCom;

    }
  },
  actions: {
    getRegiones: async function({commit}){
      let datos = await axios.get('http://192.168.0.30:9898/listar/regiones')
      let lista = await datos.data
      commit('listarRegiones', lista)
    },
    getDistritos: async function({commit}){
      let datos = await axios.get('http://192.168.0.30:9898/listar/distritos')
      let lista = datos.data
      commit('obtenerDistritos', lista)
    }
  },
  modules: {
  }
})
