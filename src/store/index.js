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

    //Selectores de información
    listaReg: [],
    listaProv: [],
    listaCom: [],
    listaDist: [],
    listaCirc: [],
    region: null,
    provincia: null,
    comuna: null,
    localidad: null,
    distrito: null,
    circunscripcion: null,

    //Datos desde API
    tipologia: null,
    area: null,
    pueblos: null,
    grupos: null,
    paises: null,
    escolaridad: null,
    piramide: null
  },
  mutations: {
    /*/async getRegiones(){
    //  let datos = await axios.get('http://192.168.0.30:9898/listar/regiones')
    //  console.log(datos.data);
    //  this.regiones = await datos.data
    //},*/

    listarRegiones(state, lista){
      state.listaReg = lista
    },

    // Método para actualizar listado de distritos
    obtenerDistritos(state, distritos){
      state.listaDist = distritos
      console.log('State_listaDist', state.listaDist)
    },
    obtenerCircunscripciones(state, circunscripciones){
      state.listaCirc = circunscripciones
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
    },
    getComunasCircunscripcion(state, numero){
      state.listaCom = state.listaCirc[numero].listaComunas
    },
    getProvinciasRegion(state, numero){
      state.listaProv = state.listaReg[numero].listaProvincias
    },
    getComunasProvincia(state, numero){
      state.listaCom = state.listaProv[numero].listaComunas
    },
    seleccionDistrito(state, id){
      state.distrito = id
    },
    seleccionCircunscripcion(state, id){
      state.circunscripcion = id
    },
    seleccionComuna(state, nombre){
      state.comuna = nombre
    },
    seleccionProvincia(state, id){
      state.provincia = id
    },
    seleccionRegion(state, id){
      state.region = id
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
    },
    getCircunscripciones: async function({commit}){
      let datos = await axios.get('http://192.168.0.46:9898/listar/distritos')
      let lista = datos.data
      commit('obtenerCircunscripciones', lista)
    }
  },
  modules: {
  }
})
