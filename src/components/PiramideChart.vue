<template>
  <div>
    <bar-chart :data="piramide" legend="bottom"></bar-chart>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
    name: 'PiramideChart',
    computed: {
      ...mapState(['piramide'])
    }
  }
</script>
