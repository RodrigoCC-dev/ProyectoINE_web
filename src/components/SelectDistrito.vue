<template>

  <div>
    <b-form-select v-model="distrito">
      <b-form-select-option :value='null'>Seleccione un Distrito</b-form-select-option>
      <b-form-select-option v-for="(item, index) of distritos" :key="item.id" :value="index" :select="getComunas">Número Distrito: {{item.numero}}</b-form-select-option>
    </b-form-select>
    <p>Selección: {{distrito}}</p>
  </div>

</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default{
    name: 'SelectDistrito',
    props: ['listaEntrada'],
    data(){
      return{
        distritos: this.listaEntrada
      }
    },
    computed: {
      ...mapState(['distrito'])

    },
    methods: {
      ...mapMutations(['getComunas'])
    },
    mounted(){
      console.log('Props:', this.listaEntrada)
    }
  }



</script>
