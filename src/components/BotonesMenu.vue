<template>
  <div class="mt-5">
    <div class="mt-5 mb-4">
      <p class="lead">Elija perfil de usuario a utilizar:</p>
    </div>
    <div v-for="(item, index) of perfiles" :key="item.id">
      <b-button variant="outline-primary" class="col-6 mt-4" :href="item.direccion">{{item.nombre}}</b-button>
      <span class="col-6"></span>
      <span class="badge badge-pill badge-info mt-3" v-on:click="info(index)">?</span>
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
    },
    methods: {
      info: function (numero){
        if(numero == 0){
          alert('Usuario de perfil Alcalde, que visualiza información de las comunas.');
        }else if(numero == 1){
          alert('Usuario de perfil Gobernador Regional, que visualiza información de su región, provicinas y comunas');
        }else if(numero == 2){
          alert('Usuario de perfil Diputado, que visualiza información de su distrito y sus comunas');
        }else if(numero == 3){
          alert('Usuario de perfil Senador, que visualiza información de su circunscripción y sus comunas');
        }else{
          alert('Perfil de usuario común, que visualiza información de regiones, provincias, comunas y/o localidades');
        }
      }
    }
  }
</script>
