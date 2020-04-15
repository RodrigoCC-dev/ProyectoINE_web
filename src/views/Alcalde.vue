<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="alcalde">
      <h1>Esta es la página del perfil Alcalde</h1>
      <div class="mx-5 mt-5">
        <form>
          <b-row>

            <b-col md="4">
              <b-form-select v-model="region">
                <b-form-select-option :value="null">Seleccione Región</b-form-select-option>
                <b-form-select-option v-for="(item, index) of listaReg" :key="item.id" :value="index" :select="getProvincias">{{item.numero}} - {{item.nombre}}</b-form-select-option>
              </b-form-select>
              <p>Selección: {{region}}</p>
            </b-col>

            <b-col md="4">
              <b-form-select v-model="provincia">
                <b-form-select-option :value="null">Seleccione Provincia</b-form-select-option>
                <b-form-select-option v-for="(item, index) of listaProv" :key="item.id" :value="index" :select="getComunas">{{item.numero}} - {{item.nombre}}</b-form-select-option>
              </b-form-select>
              <p>Selección: {{provincia}}</p>
            </b-col>

            <b-col md="4">
              <b-form-select v-model="comuna">
                <b-form-select-option :value="null">Seleccione Comuna</b-form-select-option>
                <b-form-select-option v-for="(item, index) of listaCom" :key="item.id" :value="item.nombre">{{item.numero}} - {{item.nombre}}</b-form-select-option>
              </b-form-select>
              <p>Selección: {{comuna}}</p>
            </b-col>
            <div class="d-flex md-4">
              <b-button class="btn btn-info" v-on:click="getPiramide">Obtener Datos</b-button>
            </div>
          </b-row>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import NavBar from '@/components/Navbar.vue'
  import Bnavbar from '@/components/Bnavbar.vue'

  import {mapState, mapActions} from 'vuex'

  export default{
    name: 'Alcalde',
    components: {
      NavBar,
      Bnavbar
    },
    data(){
      return{
        listaReg: [],
        listaProv: [],
        listaCom: [],
        region: null,
        provincia: null,
        comuna: null,
        tipologia: null,
        area: null,
        pueblos: null,
        grupos: null,
        paises: null,
        escolaridad: null,
        piramide: null
      }
    },
    computed:{
      getProvincias: function (){
        let lista;
        this.provincia = null;
        if(this.listaReg.empty){
          lista = [];
        }else{
          if(this.region !== null){
            lista = this.listaReg[this.region].listaProvincias;
          }
          else{
            lista = [];
          }
        }
        this.listaProv = lista;
        console.log(this.region, this.listaProv);
        return this.listaProv
      },
      getComunas: function (){
        let lista;
        this.comuna = null;
        if(this.listaReg.empty){
          lista = [];
        }else{
          if(this.listaProv.empy){
            lista = [];
          }else{
            if(this.provincia !== null){
              lista = this.listaReg[this.region].listaProvincias[this.provincia].listaComunas;
            }else{
              lista = [];
            }
          }
        }
        this.listaCom = lista;
        console.log(this.provincia, this.listaCom);
        return this.listaCom;
      }
      //...mapState(['regiones'])
    },
    methods:{
      async getRegiones(){
        let datos = await axios.get('http://192.168.0.30:9898/listar/regiones')
        let lista = await datos.data
        console.log(lista);
        this.listaReg = lista
      },
      async getTipologia(){
        let datos = await axios.post('http://192.168.0.30:9898/tipologia/comuna', {Comuna: this.comuna});
        let lista = await datos.data;
        this.tipologia = lista;
        console.log(this.tipologia);
      },
      async getArea(){
        let datos = await axios.post('http://192.168.0.30:9898/area/comuna', {Comuna: this.comuna});
        let lista = await datos.data;
        this.area = lista;
        console.log(this.area);
      },
      async getPueblos(){
        let datos = await axios.post('http://192.168.0.30:9898/pueblos/comuna', {Comuna: this.comuna});
        let lista = await datos.data;
        this.pueblos = lista;
        console.log(this.pueblos);
      },
      async getGrupos(){
        let datos = await axios.post('http://192.168.0.30:9898/grupos/comuna', {Comuna: this.comuna});
        let lista = await datos.data;
        this.grupos = lista;
        console.log(this.grupos);
      },
      async getEscolaridad(){
        let datos = await axios.post('http://192.168.0.30:9898/escolaridad/comuna', {Comuna: this.comuna});
        let lista = await datos.data;
        this.escolaridad = lista;
        console.log(this.escolaridad);
      },
      async getPiramide(){
        let datos = await axios.post('http://192.168.0.30:9898/piramide/comuna', {Comuna: this.comuna});
        let lista = await datos.data;
        this.piramide = lista;
        console.log(this.piramide);
      },
  /*    async getDatos(variable, param){
        let datos = await axios.post(`http://192.168.0.30:9898/{$param}/comuna`, {Comuna: this.comuna});
        let lista = await datos.data;
        console.log(lista);
        variable = lista;
        console.log(variable);
      },
      datosComuna(){
        this.tipologia = getTipologia();
        this.
      } */
    },
    mounted(){
      //store.dispatch('getRegiones'),
      this.getRegiones()
      //console.log(regiones)
    }
  }
</script>
