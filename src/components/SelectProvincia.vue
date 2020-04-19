<template>

  <div>
    <b-form-select v-model="actualizarProvincia">
      <b-form-select-option :value='null'>Seleccione una Provincia</b-form-select-option>
      <b-form-select-option v-for="(item, index) of listaProv" :key="item.id" :value="index">{{item.numero}} - {{item.nombre}}</b-form-select-option>
    </b-form-select>
    <p>Selección: {{actualizarProvincia}}</p>
  </div>

</template>

<script>
  import {mapState} from 'vuex'

  export default{
    name: 'SelectProvincia'
    data(){
      return{}
    },
    computed: {
      ...mapState(['listaProv']),

      actualizarProvincia: {
        get: function (){
          return this.$store.state.provincia
        },
        set: function (value){
          return this.$store.commit('seleccionProvincia', value)
        }
      }

    }
  }

</script>
