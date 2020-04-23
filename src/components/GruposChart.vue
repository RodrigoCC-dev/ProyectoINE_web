<template>
  <div>
    <pie-chart :data="grupos" legend="right" round="2" suffix="%"></pie-chart>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
    name: 'GruposChart',
    computed: {
      ...mapState(['grupos'])
    }
  }
</script>
