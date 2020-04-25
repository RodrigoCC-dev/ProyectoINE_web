<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <b-row class="align-items-center">
            <b-col>
              <pie-chart :data="pueblos" legend="right" round="2" suffix="%"></pie-chart>
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <Tabla2C encabezado="Pueblo originario" :datos="pueblos"></Tabla2C>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  import Tabla2C from '@/components/Tabla2C.vue'

  import {mapState} from 'vuex'

  export default{
    name: 'PueblosChart',
    components: {
      Tabla2C
    },
    data(){
      return{
        titulo: 'Distribución de la población según Pueblos Originarios'
      }
    },
    computed: {
      ...mapState(['pueblos'])
    }
  }
</script>
