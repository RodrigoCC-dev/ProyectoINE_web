<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <column-chart :data="escolaridad" legend="right" round="2" label="Años de Escolaridad" suffix="%"></column-chart>
        </b-card-text>
      </b-card>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <Tabla2C encabezado="Años de escolaridad" :datos="escolaridad"></Tabla2C>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  import Tabla2C from '@/components/Tabla2C.vue'

  import {mapState} from 'vuex'

  export default {
    name: 'EscolaridadChart',
    components: {
      Tabla2C
    },
    data(){
      return {
        titulo: 'Distribución de población según años de Escolaridad'
      }
    },
    computed: {
      ...mapState(['escolaridad'])
    }
  }

</script>
