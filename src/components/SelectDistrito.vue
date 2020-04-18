<template>

  <div>
    <b-form-select v-model="eleccion">
      <b-form-select-option :value='null'>Seleccione un Distrito</b-form-select-option>
      <b-form-select-option v-for="(item, index) of listaEntrada" :key="item.id" :value="index" :select="getComunasDistrito">Número Distrito: {{item.numero}}</b-form-select-option>
    </b-form-select>
    <p>Selección: {{eleccion}}</p>
  </div>

</template>

<script>
  import store from 'vuex'
  import {mapState, mapMutations} from 'vuex'

  export default{
    name: 'SelectDistrito',
    props: ['listaEntrada'],
    data(){
      return{
        eleccion: null
      }
    },
    computed: {
      ...mapState(['distrito']),

      actualizarDistrito: function(){
        store.state.distrito = this.eleccion
        return console.log(store.state.distrito)
      }

    },
    methods: {
      ...mapMutations(['getComunasDistrito'])
    },
    mounted(){
      console.log('Props:', this.listaEntrada)
    }
  }



</script>
