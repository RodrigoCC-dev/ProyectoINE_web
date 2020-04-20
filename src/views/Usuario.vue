<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="usuario">
      <h1>Perfil Usuario Común</h1>
      <div class="mx-5 mt-5">
        <form>
          <b-row>
            <b-col md="6">
              <SelectRegion></SelectRegion>
            </b-col>
            <b-col md="6">
              <SelectProvincia></SelectProvincia>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <SelectComuna></SelectComuna>
            </b-col>
            <b-col md="6">
              <b-form-select v-model="actualizarLocalidad">
                <b-form-select-option :value="null">Seleccionar Localidad</b-form-select-option>
                <b-form-select-option v-for="(item, index) of listaLoc" :key="item.id" :value="item">{{item}}</b-form-select-option>
              </b-form-select>
              <p>Selección: {{actualizarLocalidad}}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <b-button class="btn btn-success btn-block" v-on:click="disteClick">Obtener Datos</b-button>
            </b-col>
          </b-row>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

  import NavBar from '@/components/Navbar.vue'
  import Bnavbar from '@/components/Bnavbar.vue'
  import SelectRegion from '@/components/SelectRegion.vue'
  import SelectProvincia from '@/components/SelectProvincia.vue'
  import SelectComuna from '@/components/SelectComuna.vue'

  import {mapState, mapActions} from 'vuex'

  export default{
    name: 'Usuario',
    components: {
      NavBar,
      Bnavbar,
      SelectRegion,
      SelectProvincia,
      SelectComuna
    },
    data(){
      return{

      }
    },
    computed: {
      ...mapState(['listaLoc', 'region', 'provincia', 'comuna', 'localidad', 'tipologia', 'area', 'pueblos', 'grupos', 'paises', 'escolaridad', 'piramide']),

      actualizarLocalidad: {
        get: function (){
          return this.$store.state.localidad;
        },
        set: function (nombre){
          return this.$store.commit('seleccionLocalidad', nombre);
        }
      }
    },
    methods: {
      ...mapActions(['datosRegion', 'datosProvincia', 'datosComuna', 'datosLocalidad']),

      disteClick(){
        if(this.localidad !== null){
          this.datosLocalidad();
        }else if(this.comuna !== null){
          this.datosComuna();
        }else if(this.provincia !== null){
          this.datosProvincia();
        }else{
          this.datosRegion();
        }
      }
    },
    mounted(){
      this.$store.commit('seleccionLocalidad', null);
    }
  }

</script>
