<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="diputado">
      <h1>Esta es la página del perfil Diputado</h1>
      <div class="mx-5 mt-5">
        <form>
          <b-row>
            <b-col md="6">
              <b-form-select v-model="actualizarDistrito">
                <b-form-select-option :value='null'>Seleccione un Distrito</b-form-select-option>
                <b-form-select-option v-for="(item, index) of listaDist" :key="item.id" :value="index">Número Distrito: {{item.numero}}</b-form-select-option>
              </b-form-select>
              <p>Selección: {{actualizarDistrito}}</p>
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

  export default {
    name: 'Diputado',
    components: {
      NavBar,
      Bnavbar,
      SelectComuna
    },
    data(){
      return{}
    },
    computed:{
      ...mapState(['listaDist']),

      actualizarDistrito: {
        get: function(){
          return this.$store.state.distrito;
        },
        set: function(idDistrito){
          this.$store.commit('seleccionDistrito', idDistrito);
          return this.listarComunas();
        }
      }
    },
    methods:{
      ...mapActions(['getDistritos']),

      disteClick(){
        console.log("Obtener Datos API")
      },
      listarComunas: function(){
        return this.$store.commit('getComunasDistrito', this.actualizarDistrito);
      }
    },
    mounted(){
      this.getDistritos();
    }
  }

</script>
