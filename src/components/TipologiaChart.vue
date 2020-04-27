<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <div class="container">
            <pie-chart :data="tipologia" legend="right" suffix="%" :round="2"></pie-chart>
          </div>
        </b-card-text>
      </b-card>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <Tabla2C encabezado="Tipo de Hogar" :datos="tipologia"></Tabla2C>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
  import Tabla2C from '@/components/Tabla2C.vue'

  import {mapState} from 'vuex'

  export default{
    name: "TipologiaChart",
    components: {
      Tabla2C
    },
    data(){
      return{
        titulo: 'Distribución de la población según Tipología del Hogar'
      }
    },
    computed:{
      ...mapState(['tipologia'])
    }
  }
</script>
