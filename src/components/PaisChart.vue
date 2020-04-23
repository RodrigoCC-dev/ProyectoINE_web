<template>
  <div>
    <pie-chart :data="paises" legend="right" round="2" suffix="%"></pie-chart>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
    name: 'PaisChart',
    computed: {
      ...mapState(['paises'])
    }
  }
</script>
