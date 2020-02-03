<template>
  <div class="mt-5">
    <div>
      <p class="lead">Elija perfil de usuario a utilizar:</p>
    </div>
    <div v-for="item of perfiles" :key="item.id">
      <b-button  variant="outline-primary" class="col-8" :href="item.direccion">{{item.nombre}}</b-button>
      <p></p>
    </div>
  </div>
</template>


<script>
  
  import {mapState} from 'vuex';

  export default{
    name: 'BotonesMenu',
    props: {
      msg: String
    },
    computed: {
      ...mapState(['perfiles'])
    }
  }
</script>
