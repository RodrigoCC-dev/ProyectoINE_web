<template>

  <div>
    <b-form-select v-model="actualizarComuna">
      <b-form-select-option :value="null">Seleccionar Comuna</b-form-select-option>
      <b-form-select-option v-for="item of listaCom" :key="item.id" :value="item.nombre">{{item.numero}} - {{item.nombre}}</b-form-select-option>
    </b-form-select>
    <p>Selección: {{actualizarComuna}}</p>
  </div>

</template>


<script>
  import {mapState} from 'vuex'

  export default{
    name: 'SelectComuna',
    data(){
      return {
      }
    },
    computed:{
      ...mapState(['listaCom']),

      actualizarComuna:{
        get: function(){
          return this.$store.state.comuna
        },
        set: function(value){
          return this.$store.commit('seleccionComuna', value)
        }
      }
    }
  }
</script>
