<template>
  <div>
    <b-toast title="Obteniendo datos, por favor espere..." toaster="b-toaster-top-full" :visible="datosAPI.status" variant="info" no-close-button no-auto-hide solid>
      <div class="progress">
        <b-progress-bar :value="datosAPI.progreso" min="0" max="100" animated :variant="datosAPI.color"></b-progress-bar>
      </div>
    </b-toast>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default{
  name: 'StatusAPI',
  computed: {
    ...mapState(['datosAPI'])
  },

}

</script>
