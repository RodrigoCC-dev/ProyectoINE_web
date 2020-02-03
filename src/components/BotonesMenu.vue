<template>
  <div class="mt-5">
    <div class="mt-5 mb-4">
      <p class="lead">Elija perfil de usuario a utilizar:</p>
    </div>
    <div v-for="item of perfiles" :key="item.id">
      <b-button variant="outline-primary" class="col-6 mt-4" :href="item.direccion">{{item.nombre}}</b-button>
      <span class="col-6"></span>
      <span class="badge badge-pill badge-info">?</span>
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
    data(){
      return{
        mainProps: {width: 75, heigth: 75, class: 'm1'}
      }
    },
    computed: {
      ...mapState(['perfiles'])
    }
  }
</script>
