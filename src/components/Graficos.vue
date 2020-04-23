<template>
  <div class="container">
    <b-row>
      <b-col md="8" class="my-2">
        <strong class="text-info">Distribución de la población según Tipología del Hogar</strong>
        <TipologiaChart></TipologiaChart>
      </b-col>
      <b-col md="4" class="my-2">
        <strong class="text-info">Distribución de la población según Tipología del Hogar</strong>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8" class="my-2">
        <strong class="text-info">Distribución de la población según Área urbana y rural</strong>
        <AreaChart></AreaChart>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col md="8" class="my-2">
        <strong class="text-info">Distribución de la población según Pueblos Originarios</strong>
        <PueblosChart></PueblosChart>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col md="8" class="my-2">
        <strong class="text-info">Distribución de la población según Grupos Etarios</strong>
        <GruposChart></GruposChart>
      </b-col>
      <b-col></b-col>
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
        <strong class="text-info">Distribución de años de Escolaridad</strong>
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
      ...mapState(['tipologia'])
    }
  }
</script>
