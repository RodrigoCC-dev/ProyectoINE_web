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
            <b-col md="6" class="my-3">
              <SelectRegion></SelectRegion>
            </b-col>
            <b-col md="6" class="my-3">
              <SelectProvincia></SelectProvincia>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="my-3">
              <SelectComuna></SelectComuna>
            </b-col>
            <b-col md="6" class="my-3">
              <b-form-select v-model="actualizarLocalidad">
                <b-form-select-option :value="null">Seleccionar Localidad</b-form-select-option>
                <b-form-select-option v-for="(item, index) of listaLoc" :key="item.id" :value="item">{{item}}</b-form-select-option>
              </b-form-select>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12" class="my-3">
              <div>
                <b-button class="btn btn-success btn-block" v-on:click="disteClick">Obtener Datos</b-button>
              </div>
            </b-col>
          </b-row>
        </form>
      </div>
      <div>
        <StatusAPI></StatusAPI>
        <Loading></Loading>
      </div>
    </div>
  </div>
</template>

<script>

  import Bnavbar from '@/components/Bnavbar.vue'
  import SelectRegion from '@/components/SelectRegion.vue'
  import SelectProvincia from '@/components/SelectProvincia.vue'
  import SelectComuna from '@/components/SelectComuna.vue'
  import StatusAPI from '@/components/StatusAPI.vue'
  import Loading from '@/components/Loading.vue'

  import {mapState, mapActions} from 'vuex'

  export default{
    name: 'Usuario',
    components: {
      Bnavbar,
      SelectRegion,
      SelectProvincia,
      SelectComuna,
      StatusAPI,
      Loading
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
