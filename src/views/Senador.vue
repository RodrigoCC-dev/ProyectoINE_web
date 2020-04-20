<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="senador">
      <h1>Esta es la página del perfil Senador</h1>
      <div class="mx-5 mt-5">
        <form>
          <b-row md="6">
            <b-col md="6">
              <b-form-select v-model="actualizarCircunscripcion">
                <b-form-select-option :value="null">Seleccione Circunscripción</b-form-select-option>
                <b-form-select-option v-for="(item, index) of listaCirc" :key="item.id" :value="index">Circunscripción #: {{item.numero}}</b-form-select-option>
              </b-form-select>
              <p>Selección: {{actualizarCircunscripcion}}</p>
            </b-col>
            <b-col md="6">
              <SelectComuna></SelectComuna>
            </b-col>
            <div>
              <b-button class="btn btn-success" v-on:click="disteClick">Obtener Datos</b-button>
            </div>
          </b-row>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

  import NavBar from '@/components/Navbar.vue'
  import Bnavbar from '@/components/Bnavbar.vue'
  import SelectComuna from '@/components/SelectComuna.vue'

  import {mapState, mapActions} from 'vuex'

  export default{
    name: 'Senador',
    components: {
      NavBar,
      Bnavbar,
      SelectComuna
    },
    data(){
      return {

      }
    },
    computed: {
      ...mapState(['listaCirc']),

      actualizarCircunscripcion: {
        get: function () {
          return this.$store.state.circunscripcion
        },
        set: function (idCircuns) {
          this.$store.commit('seleccionComuna', null);
          this.$store.commit('seleccionCircunscripcion', idCircuns);
          return this.listarComunas();
        }
      }
    },
    methods: {
      ...mapActions(['getCircunscripciones']),

      disteClick(){
        console.log("Obtener datos de la API")
      },
      listarComunas: function(){
        return this.$store.commit('getComunasCircunscripcion', this.actualizarCircunscripcion);
      }
    },
    mounted(){
      this.getCircunscripciones();
    }
  }
</script>
