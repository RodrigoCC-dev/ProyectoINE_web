<template>
  <div class="mx-5">
    <b-row>
      <b-col md="12">
        <TipologiaChart></TipologiaChart>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <AreaChart></AreaChart>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <PueblosChart></PueblosChart>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <GruposChart></GruposChart>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8" class="my-2">
        <strong class="text-info">Distribución de la población según País de Procedencia</strong>
        <PaisChart></PaisChart>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col md="8" class="my-2">
        <strong class="text-info">Distribución de población según años de Escolaridad</strong>
        <EscolaridadChart></EscolaridadChart>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col md="8" class="my-2">
        <strong class="text-info">Pirámide poblacional</strong>
        <PiramideChart></PiramideChart>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
  import TipologiaChart from '@/components/TipologiaChart.vue'
  import AreaChart from '@/components/AreaChart.vue'
  import PueblosChart from '@/components/PueblosChart.vue'
  import GruposChart from '@/components/GruposChart.vue'
  import PaisChart from '@/components/PaisChart.vue'
  import EscolaridadChart from '@/components/EscolaridadChart.vue'
  import PiramideChart from '@/components/PiramideChart.vue'

  import {mapState} from 'vuex'

  export default{
    name: 'Graficos',
    components: {
      TipologiaChart,
      AreaChart,
      PueblosChart,
      GruposChart,
      PaisChart,
      EscolaridadChart,
      PiramideChart
    },
    computed:{
      ...mapState(['tipologia', 'area', 'pueblos', 'grupos', 'paises', 'escolaridad', 'piramide'])
    }
  }
</script>
