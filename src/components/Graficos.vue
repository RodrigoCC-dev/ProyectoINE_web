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
      <b-col md="12">
        <PaisChart></PaisChart>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <EscolaridadChart></EscolaridadChart>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <PiramideChart></PiramideChart>
      </b-col>
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
