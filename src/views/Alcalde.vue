<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="alcalde">
      <h1>Usuario perfil Alcalde</h1>
      <div class="mx-5 mt-5">
        <form>
          <b-row>
            <b-col md="4">
              <SelectRegion></SelectRegion>
            </b-col>
            <b-col md="4">
              <SelectProvincia></SelectProvincia>
            </b-col>
            <b-col md="4">
              <SelectComuna></SelectComuna>
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
  import Bnavbar from '@/components/Bnavbar.vue'
  import SelectRegion from '@/components/SelectRegion.vue'
  import SelectProvincia from '@/components/SelectProvincia.vue'
  import SelectComuna from '@/components/SelectComuna.vue'

  import {mapState, mapActions} from 'vuex'

  export default{
    name: 'Alcalde',
    components: {
      Bnavbar,
      SelectRegion,
      SelectProvincia,
      SelectComuna
    },
    data(){
      return{
      }
    },
    computed:{
      ...mapState(['region', 'provincia', 'comuna', 'tipologia', 'area', 'pueblos', 'grupos', 'paises', 'escolaridad', 'piramide'])

    },
    methods:{
      ...mapActions(['datosRegion', 'datosProvincia', 'datosComuna']),

      disteClick(){
        if(this.comuna !== null){
          this.datosComuna();
        }else if(this.provincia !== null){
          this.datosProvincia();
        }else{
          this.datosRegion();
        }
      }
    },
    mounted(){
      this.getRegiones();
    }
  }
</script>
