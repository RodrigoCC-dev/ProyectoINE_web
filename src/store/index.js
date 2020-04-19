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
    listaReg: [],
    listaProv: [],
    listaCom: [],
    listaDist: [],
    listaCirc: [],
    distrito: null,
    comuna: null
  },
  mutations: {
    /*/async getRegiones(){
    //  let datos = await axios.get('http://192.168.0.30:9898/listar/regiones')
    //  console.log(datos.data);
    //  this.regiones = await datos.data
    //},
    listarRegiones(state, lista){
      state.regiones = lista
    }, */
    obtenerDistritos(state, distritos){
      state.listaDist = distritos
      console.log('State_listaDist', state.listaDist)
    },
    getComunasDistrito(state, numero){
      let lista;
      state.comuna = null;
      if(state.listaDist.empty){
        lista = [];
      }else{
        if(state.distrito !== null){
          lista = state.listaDist[numero].listaComunas;
        }else{
          lista = [];
        }
      }
      state.listaCom = lista;
      //console.log(numero, state.listaCom);
      //return state.listaCom;
    },
    seleccionDistrito(state, id){
      state.distrito = id
    },
    seleccionComuna(state, nombre){
      state.comuna = nombre
    }
  },
  actions: {
    getRegiones: async function({commit}){
      let datos = await axios.get('http://192.168.0.46:9898/listar/regiones')
      let lista = await datos.data
      commit('listarRegiones', lista)
    },
    getDistritos: async function({commit}){
      let datos = await axios.get('http://192.168.0.46:9898/listar/distritos')
      let lista = datos.data
      commit('obtenerDistritos', lista)
    }
  },
  modules: {
  }
})
