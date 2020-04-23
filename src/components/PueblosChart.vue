<template>
  <div>
    <pie-chart :data="pueblos" legend="right" round="2" suffix="%"></pie-chart>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
    name: 'PueblosChart',
    computed:{
      ...mapState(['pueblos'])
    }
  }
</script>
