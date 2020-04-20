<template>

  <div>
    <b-form-select v-model="actualizarRegion">
      <b-form-select-option :value='null'>Seleccione una Region</b-form-select-option>
      <b-form-select-option v-for="(item, index) of listaReg" :key="item.id" :value="index">{{item.numero}} - {{item.nombre}}</b-form-select-option>
    </b-form-select>
    <p>Selección: {{actualizarRegion}}</p>
  </div>

</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default{
    name: 'SelectRegion',
    data(){
      return{}
    },
    computed: {
      ...mapState(['listaReg']),

      actualizarRegion: {
        get: function (){
          return this.$store.state.region;
        },
        set: function (value){
          this.$store.commit('seleccionRegion', value);
          return this.listarProvincias();
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
      this.getRegiones()
    }
  }

</script>
