<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="alcalde">
      <div class="my-3">
        <h1>Usuario perfil Alcalde</h1>
      </div>
      <div class="mx-5 mt-5">
        <form>
          <b-row>
            <b-col md="4" class="my-3">
              <SelectRegion></SelectRegion>
            </b-col>
            <b-col md="4" class="my-3">
              <SelectProvincia></SelectProvincia>
            </b-col>
            <b-col md="4" class="my-3">
              <SelectComuna></SelectComuna>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12" class="my-3">
              <b-button class="btn btn-success btn-block" v-on:click="disteClick">Obtener Datos</b-button>
            </b-col>
          </b-row>
        </form>
      </div>
      <div>
        <StatusAPI></StatusAPI>
        <Loading></Loading>
      </div>
      <div>
        <Graficos v-if="mostrarGraficos"></Graficos>
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
  import Graficos from '@/components/Graficos.vue'

  import {mapState, mapActions} from 'vuex'

  export default{
    name: 'Alcalde',
    components: {
      Bnavbar,
      SelectRegion,
      SelectProvincia,
      SelectComuna,
      StatusAPI,
      Loading,
      Graficos
    },
    computed:{
      ...mapState(['comuna','mostrarGraficos'])

    },
    methods:{
      ...mapActions(['datosComuna']),

      disteClick(){
        if(this.comuna !== null){
          this.datosComuna();
          this.$store.commit('desplegarGraficos', true);
        }else{
          alert('Debe seleccionar una comuna para mostrar');
        }
      }
    },
    mounted(){
      this.$store.commit('desplegarGraficos', false);
    }
  }
</script>
