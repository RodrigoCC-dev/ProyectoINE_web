<template>
  <div>
    <b-toast title="Cargando datos, por favor espere..." toaster="b-toaster-top-full" :visible="listado.status" variant="secundary" no-close-button no-auto-hide solid>
      <b-progress-bar :value="listados.progreso" min="0" max="100" animated variant="warnig"></b-progress-bar>
    </b-toast>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
    name: 'Loading',
    computed: {
      ...mapState(['listados'])
    }
  }
</script>
