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

    baseURL: 'http://192.168.0.46:9898',

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
    piramide: null,

    // Variables para alertas
    datosAPI: {
      progreso: 0,
      status: false
    },
    listados: {
      progreso: 20,
      status: false
    },

    mostrarGraficos: false
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
    seleccionLocalidad(state, nombre){
      state.localidad = nombre
    },

    // Métodos para guardar datos desde la API
    guardarTipologia(state, lista){
      let datos = {};
      datos['Unipersonal'] = lista.unipersonal
      datos['Compuesto'] = lista.compuesto
      datos['Extenso'] = lista.extenso
      datos['Sin Nucleo'] = lista.sinNucleo
      datos['Monoparental'] = lista.monoParental
      datos['Parejas Sin Hijos'] = lista.parejasSinHijos
      datos['Parejas Con Hijos'] = lista.parejasConHijos
      state.tipologia = datos
    },
    guardarArea(state, lista){
      let datos = {};
      datos['Urbana'] = lista.urbana;
      datos['Rural'] = lista.rural;
      state.area = datos;
    },
    guardarPueblos(state, lista){
      let datos = {};
      datos['Mapuche'] = lista.mapuche;
      datos['Aymara'] = lista.aymara;
      datos['Rapa Nui'] = lista.rapaNui;
      datos['Lican Antai'] = lista.licanAntai;
      datos['Quechua'] = lista.quechua;
      datos['Colla'] = lista.colla;
      datos['Diaguita'] = lista.diaguita;
      datos['Kawésqar'] = lista.kawesqar;
      datos['Yagán o Yámara'] = lista.yagan;
      datos['Otro'] = lista.otro;
      datos['Ignorado'] = lista.ignorado;
      state.pueblos = datos;
    },
    guardarGrupos(state, lista){
      let datos = {}
      datos['Menores a 15 años'] = lista.menoresA15
      datos['15 a 64 años'] = lista.entre15y65
      datos['65 años o más'] = lista.masDe65
      state.grupos = datos
    },
    guardarPaises(state, lista){
      let datos = {}
      datos['Perú'] = lista.peru
      datos['Colombia'] = lista.colombia
      datos['Argentina'] = lista.argentina
      datos['Bolivia'] = lista.bolivia
      datos['Venezuela'] = lista.venezuela
      datos['Ecuador'] = lista.ecuador
      datos['Haití'] = lista.haiti
      datos['Otro'] = lista.otro
      datos['Ignorado'] = lista.ignorado
      state.paises = datos
    },
    guardarEscolaridad(state, lista){
      let datos = {}
      datos['5 años o más de edad'] = lista.masDe5
      datos['15 años o más de edad'] = lista.masDe15
      datos['19 años o más de edad'] = lista.masDe19
      datos['25 años o más de edad'] = lista.masDe25
      state.escolaridad = lista
    },
    guardarPiramide(state, lista){
      let datos = [];
      let info = {};
      let etiqueta = {};
      info['100+'] = lista.hombre.masDe100;
      info['95-99'] = lista.hombre.entre95y99;
      info['90-94'] = lista.hombre.entre90y94;
      info['85-89'] = lista.hombre.entre85y89;
      info['80-84'] = lista.hombre.entre80y84;
      info['75-79'] = lista.hombre.entre75y79;
      info['70-74'] = lista.hombre.entre70y74;
      info['65-69'] = lista.hombre.entre65y69;
      info['60-64'] = lista.hombre.entre60y64;
      info['55-59'] = lista.hombre.entre55y59;
      info['50-54'] = lista.hombre.entre50y54;
      info['45-49'] = lista.hombre.entre45y49;
      info['40-44'] = lista.hombre.entre40y44;
      info['35-39'] = lista.hombre.entre35y39;
      info['30-34'] = lista.hombre.entre30y34;
      info['25-29'] = lista.hombre.entre25y29;
      info['20-24'] = lista.hombre.entre20y24;
      info['15-19'] = lista.hombre.entre15y19;
      info['10-14'] = lista.hombre.entre10y14;
      info['5-9'] = lista.hombre.entre5y9;
      info['0-4'] = lista.hombre.entre0y4;
      etiqueta['name'] = 'Hombre';
      etiqueta['data'] = info;
      datos.push(etiqueta);
      info = {};
      etiqueta = {};
      info['100+'] = lista.mujer.masDe100;
      info['95-99'] = lista.mujer.entre95y99;
      info['90-94'] = lista.mujer.entre90y94;
      info['85-89'] = lista.mujer.entre85y89;
      info['80-84'] = lista.mujer.entre80y84;
      info['75-79'] = lista.mujer.entre75y79;
      info['70-74'] = lista.mujer.entre70y74;
      info['65-69'] = lista.mujer.entre65y69;
      info['60-64'] = lista.mujer.entre60y64;
      info['55-59'] = lista.mujer.entre55y59;
      info['50-54'] = lista.mujer.entre50y54;
      info['45-49'] = lista.mujer.entre45y49;
      info['40-44'] = lista.mujer.entre40y44;
      info['35-39'] = lista.mujer.entre35y39;
      info['30-34'] = lista.mujer.entre30y34;
      info['25-29'] = lista.mujer.entre25y29;
      info['20-24'] = lista.mujer.entre20y24;
      info['15-19'] = lista.mujer.entre15y19;
      info['10-14'] = lista.mujer.entre10y14;
      info['5-9'] = lista.mujer.entre5y9;
      info['0-4'] = lista.mujer.entre0y4;
      etiqueta['name'] = 'Mujer';
      etiqueta['data'] = info;
      datos.push(etiqueta);
      state.piramide = datos
    },
    resetearDatos(state){
      state.tipologia = null;
      state.area = null;
      state.pueblos = null;
      state.grupos = null;
      state.paises = null;
      state.escolaridad = null;
      state.piramide = null;
    },
    cambiarStatusDatosAPI(state){
      state.datosAPI.status = !state.datosAPI.status
    },
    cambiarProgresoDatosAPI(state, valor){
      state.datosAPI.progreso = valor
    },
    cambiarStatusListados(state){
      state.listados.status = !state.listados.status
    },
    cambiarProgesoListados(state, valor){
      state.listados.progreso = valor
    },
    desplegarGraficos(state, valor){
      state.mostrarGraficos = valor
    }
  },
  actions: {
    getRegiones: async function({commit}){
      commit('cambiarStatusListados');
      let datos = await axios.get(`${this.state.baseURL}/listar/regiones`);
      commit('cambiarProgesoListados', 60);
      let lista = await datos.data;
      commit('cambiarProgesoListados', 80);
      commit('listarRegiones', lista);
      commit('cambiarProgesoListados', 100);
      commit('cambiarStatusListados');
      commit('cambiarProgesoListados', 20);
    },
    getDistritos: async function({commit}){
      commit('cambiarStatusListados');
      let datos = await axios.get(`${this.state.baseURL}/listar/distritos`);
      commit('cambiarProgesoListados', 60);
      let lista = datos.data;
      commit('cambiarProgesoListados', 80);
      commit('obtenerDistritos', lista);
      commit('cambiarProgesoListados', 100);
      commit('cambiarStatusListados');
      commit('cambiarProgesoListados', 20);
    },
    getCircunscripciones: async function({commit}){
      commit('cambiarStatusListados');
      let datos = await axios.get(`${this.state.baseURL}/listar/circunscripciones`);
      commit('cambiarProgesoListados', 60);
      let lista = datos.data;
      commit('cambiarProgesoListados', 80);
      commit('obtenerCircunscripciones', lista);
      commit('cambiarProgesoListados', 100);
      commit('cambiarStatusListados');
      commit('cambiarProgesoListados', 20);
    },
    datosComuna: async function({commit}){
      commit('resetearDatos');
      commit('cambiarStatusDatosAPI');
      let params = {Comuna: this.state.comuna};
      let datos = await axios.post(`${this.state.baseURL}/tipologia/comuna`, params);
      let lista = await datos.data;
      commit('guardarTipologia', lista);
      commit('cambiarProgresoDatosAPI', 13);
      datos = await axios.post(`${this.state.baseURL}/area/comuna`, params);
      lista = await datos.data;
      commit('guardarArea', lista);
      commit('cambiarProgresoDatosAPI', 26);
      datos = await axios.post(`${this.state.baseURL}/pueblos/comuna`, params);
      lista = await datos.data;
      commit('guardarPueblos', lista);
      commit('cambiarProgresoDatosAPI', 39);
      datos = await axios.post(`${this.state.baseURL}/grupos/comuna`, params);
      lista = await datos.data;
      commit('guardarGrupos', lista);
      commit('cambiarProgresoDatosAPI', 52);
      datos = await axios.post(`${this.state.baseURL}/paises/comuna`, params);
      lista = await datos.data;
      commit('guardarPaises', lista);
      commit('cambiarProgresoDatosAPI', 65);
      datos = await axios.post(`${this.state.baseURL}/escolaridad/comuna`, params);
      lista = await datos.data;
      commit('guardarEscolaridad', lista);
      commit('cambiarProgresoDatosAPI', 80);
      datos = await axios.post(`${this.state.baseURL}/piramide/comuna`, params);
      lista = await datos.data;
      commit('guardarPiramide', lista);
      commit('cambiarProgresoDatosAPI', 100);
      commit('cambiarStatusDatosAPI');
      commit('cambiarProgresoDatosAPI', 0);
    },
    datosDistrito: async function({commit}){
      commit('resetearDatos');
      commit('cambiarStatusDatosAPI');
      let params = {Distrito: this.state.listaDist[this.state.distrito].numero};
      let datos = await axios.post(`${this.state.baseURL}/tipologia/distrito`, params);
      let lista = await datos.data;
      commit('guardarTipologia', lista);
      commit('cambiarProgresoDatosAPI', 13);
      datos = await axios.post(`${this.state.baseURL}/area/distrito`, params);
      lista = await datos.data;
      commit('guardarArea', lista);
      commit('cambiarProgresoDatosAPI', 26);
      datos = await axios.post(`${this.state.baseURL}/pueblos/distrito`, params);
      lista = await datos.data;
      commit('guardarPueblos', lista);
      commit('cambiarProgresoDatosAPI', 39);
      datos = await axios.post(`${this.state.baseURL}/grupos/distrito`, params);
      lista = await datos.data;
      commit('guardarGrupos', lista);
      commit('cambiarProgresoDatosAPI', 52);
      datos = await axios.post(`${this.state.baseURL}/paises/distrito`, params);
      lista = await datos.data;
      commit('guardarPaises', lista);
      commit('cambiarProgresoDatosAPI', 65);
      datos = await axios.post(`${this.state.baseURL}/escolaridad/distrito`, params);
      lista = await datos.data;
      commit('guardarEscolaridad', lista);
      commit('cambiarProgresoDatosAPI', 80);
      datos = await axios.post(`${this.state.baseURL}/piramide/distrito`, params);
      lista = await datos.data;
      commit('guardarPiramide', lista);
      commit('cambiarProgresoDatosAPI', 100);
      commit('cambiarStatusDatosAPI');
      commit('cambiarProgresoDatosAPI', 0);
    },
    datosCircunscripcion: async function({commit}){
      commit('resetearDatos');
      commit('cambiarStatusDatosAPI');
      let params = {Circunscripcion: this.state.listaCirc[this.state.circunscripcion].numero};
      let datos = await axios.post(`${this.state.baseURL}/tipologia/circunscripcion`, params);
      let lista = await datos.data;
      commit('guardarTipologia', lista);
      commit('cambiarProgresoDatosAPI', 13);
      datos = await axios.post(`${this.state.baseURL}/area/circunscripcion`, params);
      lista = await datos.data;
      commit('guardarArea', lista);
      commit('cambiarProgresoDatosAPI', 26);
      datos = await axios.post(`${this.state.baseURL}/pueblos/circunscripcion`, params);
      lista = await datos.data;
      commit('guardarPueblos', lista);
      commit('cambiarProgresoDatosAPI', 39);
      datos = await axios.post(`${this.state.baseURL}/grupos/circunscripcion`, params);
      lista = await datos.data;
      commit('guardarGrupos', lista);
      commit('cambiarProgresoDatosAPI', 52);
      datos = await axios.post(`${this.state.baseURL}/paises/circunscripcion`, params);
      lista = await datos.data;
      commit('guardarPaises', lista);
      commit('cambiarProgresoDatosAPI', 65);
      datos = await axios.post(`${this.state.baseURL}/escolaridad/circunscripcion`, params);
      lista = await datos.data;
      commit('guardarEscolaridad', lista);
      commit('cambiarProgresoDatosAPI', 80);
      datos = await axios.post(`${this.state.baseURL}/piramide/circunscripcion`, params);
      lista = await datos.data;
      commit('guardarPiramide', lista);
      commit('cambiarProgresoDatosAPI', 100);
      commit('cambiarStatusDatosAPI');
      commit('cambiarProgresoDatosAPI', 0);
    },
    datosRegion: async function({commit}){
      commit('resetearDatos');
      commit('cambiarStatusDatosAPI');
      let params = {Region: this.state.listaReg[this.state.region].nombre}
      let datos = await axios.post(`${this.state.baseURL}/tipologia/region`, params);
      let lista = await datos.data;
      commit('guardarTipologia', lista);
      commit('cambiarProgresoDatosAPI', 13);
      datos = await axios.post(`${this.state.baseURL}/area/region`, params);
      lista = await datos.data;
      commit('guardarArea', lista);
      commit('cambiarProgresoDatosAPI', 26);
      datos = await axios.post(`${this.state.baseURL}/pueblos/region`, params);
      lista = await datos.data;
      commit('guardarPueblos', lista);
      commit('cambiarProgresoDatosAPI', 39);
      datos = await axios.post(`${this.state.baseURL}/grupos/region`, params);
      lista = await datos.data;
      commit('guardarGrupos', lista);
      commit('cambiarProgresoDatosAPI', 52);
      datos = await axios.post(`${this.state.baseURL}/paises/region`, params);
      lista = await datos.data;
      commit('guardarPaises', lista);
      commit('cambiarProgresoDatosAPI', 65);
      datos = await axios.post(`${this.state.baseURL}/escolaridad/region`, params);
      lista = await datos.data;
      commit('guardarEscolaridad', lista);
      commit('cambiarProgresoDatosAPI', 80);
      datos = await axios.post(`${this.state.baseURL}/piramide/region`, params);
      lista = await datos.data;
      commit('guardarPiramide', lista);
      commit('cambiarProgresoDatosAPI', 100);
      commit('cambiarStatusDatosAPI');
      commit('cambiarProgresoDatosAPI', 0);
    },
    datosProvincia: async function({commit}){
      commit('resetearDatos');
      commit('cambiarStatusDatosAPI');
      let params = {Provincia: this.state.listaProv[this.state.provincia].nombre};
      let datos = await axios.post(`${this.state.baseURL}/tipologia/provincia`, params);
      let lista = await datos.data;
      commit('guardarTipologia', lista);
      commit('cambiarProgresoDatosAPI', 13);
      datos = await axios.post(`${this.state.baseURL}/area/provincia`, params);
      lista = await datos.data;
      commit('guardarArea', lista);
      commit('cambiarProgresoDatosAPI', 26);
      datos = await axios.post(`${this.state.baseURL}/pueblos/provincia`, params);
      lista = await datos.data;
      commit('guardarPueblos', lista);
      commit('cambiarProgresoDatosAPI', 39);
      datos = await axios.post(`${this.state.baseURL}/grupos/provincia`, params);
      lista = await datos.data;
      commit('guardarGrupos', lista);
      commit('cambiarProgresoDatosAPI', 52);
      datos = await axios.post(`${this.state.baseURL}/paises/provincia`, params);
      lista = await datos.data;
      commit('guardarPaises', lista);
      commit('cambiarProgresoDatosAPI', 65);
      datos = await axios.post(`${this.state.baseURL}/escolaridad/provincia`, params);
      lista = await datos.data;
      commit('guardarEscolaridad', lista);
      commit('cambiarProgresoDatosAPI', 80);
      datos = await axios.post(`${this.state.baseURL}/piramide/provincia`, params);
      lista = await datos.data;
      commit('guardarPiramide', lista);
      commit('cambiarProgresoDatosAPI', 100);
      commit('cambiarStatusDatosAPI');
      commit('cambiarProgresoDatosAPI', 0);
    },
    datosLocalidad: async function({commit}){
      commit('resetearDatos');
      commit('cambiarStatusDatosAPI');
      let params = {Comuna: this.state.comuna, Localidad: this.state.localidad};
      let datos = await axios.post(`${this.state.baseURL}/tipologia/localidad`, params);
      let lista = await datos.data;
      commit('guardarTipologia', lista);
      commit('cambiarProgresoDatosAPI', 13);
      datos = await axios.post(`${this.state.baseURL}/area/localidad`, params);
      lista = await datos.data;
      commit('guardarArea', lista);
      commit('cambiarProgresoDatosAPI', 26);
      datos = await axios.post(`${this.state.baseURL}/pueblos/localidad`, params);
      lista = await datos.data;
      commit('guardarPueblos', lista);
      commit('cambiarProgresoDatosAPI', 39);
      datos = await axios.post(`${this.state.baseURL}/grupos/localidad`, params);
      lista = await datos.data;
      commit('guardarGrupos', lista);
      commit('cambiarProgresoDatosAPI', 52);
      datos = await axios.post(`${this.state.baseURL}/paises/localidad`, params);
      lista = await datos.data;
      commit('guardarPaises', lista);
      commit('cambiarProgresoDatosAPI', 65);
      datos = await axios.post(`${this.state.baseURL}/escolaridad/localidad`, params);
      lista = await datos.data;
      commit('guardarEscolaridad', lista);
      commit('cambiarProgresoDatosAPI', 80);
      datos = await axios.post(`${this.state.baseURL}/piramide/localidad`, params);
      lista = await datos.data;
      commit('guardarPiramide', lista);
      commit('cambiarProgresoDatosAPI', 100);
      commit('cambiarStatusDatosAPI');
      commit('cambiarProgresoDatosAPI', 0);
    }
  },
  modules: {
  }
})
