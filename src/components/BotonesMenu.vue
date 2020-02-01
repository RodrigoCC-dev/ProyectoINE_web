<template>
  <div>
    <div>
      <p class="lead">Elija perfil de usuario a utilizar:</p>
    </div>
    <div v-for="item of perfiles" :key="item.id">
      <button  type="button" class="btn btn-outline-primary col-8">{{item.nombre}}</button>
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
