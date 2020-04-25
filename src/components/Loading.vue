<template>
  <div>
    <b-toast title="Cargando datos, por favor espere..." toaster="b-toaster-bottom-full" :visible="listados.status" variant="primary" no-close-button no-auto-hide solid>
      <div class="progress">
        <b-progress-bar :value="listados.progreso" min="0" max="100" animated :variant="listados.color"></b-progress-bar>
      </div>
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
