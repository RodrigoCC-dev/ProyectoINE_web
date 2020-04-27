<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant='light' :header="titulo" class="text-left">
        <b-card-text>
          <pie-chart :data="paises" legend="right" round="2" suffix="%"></pie-chart>
        </b-card-text>
      </b-card>
      <b-card bg-variant='light' :header='titulo' class="text-left">
        <b-card-text>
          <Tabla2C encabezado="Paises de procedencia" :datos="paises"></Tabla2C>
        </b-card-text>
      </b-card>
    </b-card-group>

  </div>
</template>

<script>
  import Tabla2C from '@/components/Tabla2C.vue'

  import {mapState} from 'vuex'

  export default{
    name: 'PaisChart',
    components: {
      Tabla2C
    },
    data(){
      return{
        titulo: 'Distribución de la población según País de Procedencia'
      }
    },
    computed: {
      ...mapState(['paises'])
    }
  }
</script>
