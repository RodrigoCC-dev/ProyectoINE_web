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
              <b-button class="btn btn-info" v-on:click="getTipologia">Obtener Datos</b-button>
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
        tipologia: []
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
        console.log(lista);
        this.tipologia = lista;
      }
    },
    mounted(){
      //store.dispatch('getRegiones'),
      this.getRegiones()
      //console.log(regiones)
    }
  }
</script>
