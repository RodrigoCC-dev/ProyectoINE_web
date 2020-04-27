<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <pie-chart :data="grupos" legend="right" round="2" suffix="%"></pie-chart>
        </b-card-text>
      </b-card>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <Tabla2C encabezado="Grupos de edad" :datos="grupos"></Tabla2C>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  import Tabla2C from '@/components/Tabla2C.vue'

  import {mapState} from 'vuex'

  export default{
    name: 'GruposChart',
    components: {
      Tabla2C
    },
    data(){
      return{
        titulo: 'Distribución de la población según Grupos Etarios'
      }
    },
    computed: {
      ...mapState(['grupos'])
    }
  }
</script>
