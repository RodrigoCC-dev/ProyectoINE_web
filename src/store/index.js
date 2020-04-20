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
    listaLoc: [],
    listaDist: [],
    listaCirc: [],
    region: null,
    provincia: null,
    comuna: null,
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

    // Métodos para actualizar listados
    listarRegiones(state, lista){
      state.listaReg = lista
    },
    obtenerDistritos(state, distritos){
      state.listaDist = distritos
    },
    obtenerCircunscripciones(state, circunscripciones){
      state.listaCirc = circunscripciones
    },
    getComunasDistrito(state, numero){
      state.listaCom = state.listaDist[numero].listaComunas
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
    getLocalidadesComuna(state, nombre){
      let index = 0
      for(let i = 0; i < state.listaCom.length; i++){
        if(state.listaCom[i].nombre === nombre){
          index = i
        }
      }
      state.listaLoc = state.listaCom[index].localidades
    },

    // Métodos para guardar elecciones de valores
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
    },

    // Métodos para guardar datos desde la API
    guardarTipologia(state, lista){
      state.tipologia = lista
    },
    guardarArea(state, lista){
      state.area = lista
    },
    guardarPueblos(state, lista){
      state.pueblos = lista
    },
    guardarGrupos(state, lista){
      state.grupos = lista
    },
    guardarPaises(state, lista){
      state.paises = lista
    },
    guardarEscolaridad(state, lista){
      state.escolaridad = lista
    },
    guardarPiramide(state, lista){
      state.piramide = lista
    },
    resetearDatos(state){
      state.tipologia = null;
      state.area = null;
      state.pueblos = null;
      state.grupos = null;
      state.paises = null;
      state.escolaridad = null;
      state.piramide = null;
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
    },
    datosComuna: async function({commit}){
      commit('resetearDatos');
      let params = {Comuna: this.state.comuna};
      let datos = await axios.post('http://192.168.0.46:9898/tipologia/comuna', params);
      let lista = await datos.data;
      commit('guardarTipologia', lista);
      datos = await axios.post('http://192.168.0.46:9898/area/comuna', params);
      lista = await datos.data;
      commit('guardarArea', lista);
      datos = await axios.post('http://192.168.0.46:9898/pueblos/comuna', params);
      lista = await datos.data;
      commit('guardarPueblos', lista);
      datos = await axios.post('http://192.168.0.46:9898/grupos/comuna', params);
      lista = await datos.data;
      commit('guardarGrupos', lista);
      datos = await axios.post('http://192.168.0.46:9898/paises/comuna', params);
      lista = await datos.data;
      commit('guardarPaises', lista);
      datos = await axios.post('http://192.168.0.46:9898/escolaridad/comuna', params);
      lista = await datos.data;
      commit('guardarEscolaridad', lista);
      datos = await axios.post('http://192.168.0.46:9898/piramide/comuna', params);
      lista = await datos.data;
      commit('guardarPiramide', lista);
    },
    datosDistrito: async function({commit}){
      commit('resetearDatos');
      let params = {Distrito: this.state.listaDist[this.state.distrito].numero};
      let datos = await axios.post('http://192.168.0.46:9898/tipologia/distrito', params);
      let lista = await datos.data;
      commit('guardarTipologia', lista);
      datos = await axios.post('http://192.168.0.46:9898/area/distrito', params);
      lista = await datos.data;
      commit('guardarArea', lista);
      datos = await axios.post('http://192.168.0.46:9898/pueblos/distrito', params);
      lista = await datos.data;
      commit('guardarPueblos', lista);
      datos = await axios.post('http://192.168.0.46:9898/grupos/distrito', params);
      lista = await datos.data;
      commit('guardarGrupos', lista);
      datos = await axios.post('http://192.168.0.46:9898/paises/distrito', params);
      lista = await datos.data;
      commit('guardarPaises', lista);
      datos = await axios.post('http://192.168.0.46:9898/escolaridad/distrito', params);
      lista = await datos.data;
      commit('guardarEscolaridad', lista);
      datos = await axios.post('http://192.168.0.46:9898/piramide/distrito', params);
      lista = await datos.data;
      commit('guardarPiramide', lista);
    },
    datosCircunscripcion: async function({commit}){
      commit('resetearDatos');
      let params = {Circunscripcion: this.state.listaCirc[this.state.circunscripcion].numero};
      let datos = await axios.post('http://192.168.0.46:9898/tipologia/circunscripcion', params);
      let lista = await datos.data;
      commit('guardarTipologia', lista);
      datos = await axios.post('http://192.168.0.46:9898/area/circunscripcion', params);
      lista = await datos.data;
      commit('guardarArea', lista);
      datos = await axios.post('http://192.168.0.46:9898/pueblos/circunscripcion', params);
      lista = await datos.data;
      commit('guardarPueblos', lista);
      datos = await axios.post('http://192.168.0.46:9898/grupos/circunscripcion', params);
      lista = await datos.data;
      commit('guardarGrupos', lista);
      datos = await axios.post('http://192.168.0.46:9898/paises/circunscripcion', params);
      lista = await datos.data;
      commit('guardarPaises', lista);
      datos = await axios.post('http://192.168.0.46:9898/escolaridad/circunscripcion', params);
      lista = await datos.data;
      commit('guardarEscolaridad', lista);
      datos = await axios.post('http://192.168.0.46:9898/piramide/circunscripcion', params);
      lista = await datos.data;
      commit('guardarPiramide', lista);
    }
  },
  modules: {
  }
})
