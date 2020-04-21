<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="senador">
      <h1>Usuario perfil Senador</h1>
      <div class="mx-5 mt-5">
        <form>
          <b-row md="6">
            <b-col md="6">
              <b-form-select v-model="actualizarCircunscripcion">
                <b-form-select-option :value="null">Seleccione Circunscripción</b-form-select-option>
                <b-form-select-option v-for="(item, index) of listaCirc" :key="item.id" :value="index">Circunscripción #: {{item.numero}}</b-form-select-option>
              </b-form-select>
            </b-col>
            <b-col md="6">
              <SelectComuna></SelectComuna>
            </b-col>
            <b-col md="12">
              <b-button class="btn btn-success btn-block" v-on:click="disteClick">Obtener Datos</b-button>
            </b-col>
          </b-row>
        </form>
      </div>
      <div>
        <StatusAPI></StatusAPI>
        <Loading></Loading>
      </div>
    </div>
  </div>
</template>

<script>

  import Bnavbar from '@/components/Bnavbar.vue'
  import SelectComuna from '@/components/SelectComuna.vue'
  import StatusAPI from '@/components/StatusAPI.vue'
  import Loading from '@/components/Loading.vue'

  import {mapState, mapActions} from 'vuex'

  export default{
    name: 'Senador',
    components: {
      Bnavbar,
      SelectComuna,
      StatusAPI,
      Loading
    },
    data(){
      return {

      }
    },
    computed: {
      ...mapState(['listaCirc', 'comuna', 'tipologia', 'area', 'pueblos', 'grupos', 'paises', 'escolaridad', 'piramide']),

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
      ...mapActions(['getCircunscripciones', 'datosComuna', 'datosCircunscripcion']),

      disteClick(){
        if(this.comuna !== null){
          this.datosComuna();
        }else{
          this.datosCircunscripcion();
        }
      },
      listarComunas: function(){
        return this.$store.commit('getComunasCircunscripcion', this.actualizarCircunscripcion);
      }
    },
    mounted(){
      this.getCircunscripciones();
      this.$store.commit('seleccionCircunscripcion', null);
    }
  }
</script>
