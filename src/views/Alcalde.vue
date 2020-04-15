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
                <b-form-select-option v-for="(item, index) of regiones" :key="item.id" :value="index" :select="getProvincias">{{item.numero}} - {{item.nombre}}</b-form-select-option>
              </b-form-select>
              <p>Selección: {{region}}</p>
            </b-col>

            <b-col md="4">
              <b-form-select v-model="provincia">
                <b-form-select-option :value="null">Seleccione Provincia</b-form-select-option>
                <b-form-select-option v-for="(item, index) of provincias" :key="item.id" :value="index" :select="getComunas">{{item.numero}} - {{item.nombre}}</b-form-select-option>
              </b-form-select>
              <p>Selección: {{provincia}}</p>
            </b-col>

            <b-col md="4">
              <b-form-select v-model="comuna">
                <b-form-select-option :value="null">Seleccione Comuna</b-form-select-option>
                <b-form-select-option v-for="(item, index) of comunas" :key="item.id" :value="item.nombre">{{item.numero}} - {{item.nombre}}</b-form-select-option>
              </b-form-select>
              <p>Selección: {{comuna}}</p>
            </b-col>

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
        select: null,
        regionesES: [
          {value: null, text: 'Seleccione una Región'},
          {value: 'TARAPACÁ', text: 'Tarapacá'},
          {value: 'ATACAMA', text: 'Atacama'},
          {value: 'COQUIMBO', text: 'Coquimbo'},
          {value: 'VALPARAÍSO', text: 'Valparaíso'},
          {value: "LIBERTADOR BERNARDO O'HIGGINS", text: "Libertador Bernardo O'higgins"}
        ],
        regiones: [],
        provincias: [],
        comunas: [],
        region: null,
        provincia: null,
        comuna: null
      }
    },
    computed:{
      getProvincias: function (){
        let lista;
        this.provincia = null;
        if(this.regiones.empty){
          lista = [];
        }else{
          if(this.region !== null){
            lista = this.regiones[this.region].listaProvincias;
          }
          else{
            lista = [];
          }
        }
        this.provincias = lista;
        console.log(this.provincias);
        return this.provincias
      },
      getComunas: function (){
        let lista;
        this.comuna = null;
        if(this.regiones.empty){
          lista = [];
        }else{
          if(this.provincias.empy){
            lista = [];
          }else{
            if(this.provincia !== null){
              lista = this.regiones[this.region].listaProvincias[this.provincia].listaComunas;
            }else{
              lista = [];
            }
          }
        }
        this.comunas = lista;
        console.log(this.comunas);
        return this.comunas;
      }
      //...mapState(['regiones'])
    },
    methods:{
      async getRegiones(){
        let datos = await axios.get('http://192.168.0.30:9898/listar/regiones')
        let lista = await datos.data
        console.log(lista);
        this.regiones = lista
      }
      //...mapActions(['getRegiones'])
    },
    mounted(){
      //store.dispatch('getRegiones'),
      this.getRegiones()
      //console.log(regiones)
    }
    //computed: {
    //  ...mapState(['regiones'])
    //},
    //action(){
    //  ...mapMutations(['getRegiones'])
    //}

  }
</script>
