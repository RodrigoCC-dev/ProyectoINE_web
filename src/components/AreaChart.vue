<template>
  <div>
    <pie-chart :data="area" legend="right" round="2" suffix="%"></pie-chart>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
    name: 'AreaChart',
    computed: {
      ...mapState(['area'])
    }
  }
</script>
