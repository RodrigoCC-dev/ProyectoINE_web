<template>

  <div>
    <b-form-select v-model="actualizarRegion">
      <b-form-select-option :value='null'>Seleccione una Región</b-form-select-option>
      <b-form-select-option v-for="(item, index) of listaReg" :key="item.id" :value="index">{{item.numero}} - {{item.nombre}}</b-form-select-option>
    </b-form-select>
    <h1></h1>
  </div>

</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default{
    name: 'SelectRegion',
    computed: {
      ...mapState(['listaReg']),

      actualizarRegion: {
        get: function (){
          return this.$store.state.region;
        },
        set: function (value){
          if(value !== null){
            this.$store.commit('seleccionComuna', null);
            this.$store.commit('seleccionProvincia', null);
            this.$store.commit('seleccionRegion', value);
            return this.listarProvincias();
          }else{
            return this.$store.commit('seleccionRegion', value);
          }
        }
      }
    },
    methods: {
      ...mapActions(['getRegiones']),

      listarProvincias: function (){
        return this.$store.commit('getProvinciasRegion', this.actualizarRegion);
      }
    },
    mounted(){
      this.getRegiones();
      this.$store.commit('seleccionRegion', null);
    }
  }

</script>
