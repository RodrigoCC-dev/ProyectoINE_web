<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="diputado">
      <h1>Usuario perfil Diputado</h1>
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
          </b-row>
          <b-row>
            <b-col md="12">
              <b-button class="btn btn-success btn-block" v-on:click="disteClick">Obtener Datos</b-button>
            </b-col>
          </b-row>

        </form>
      </div>
      <div>
        <StatusAPI></StatusAPI>
      </div>
    </div>
  </div>
</template>

<script>

  import Bnavbar from '@/components/Bnavbar.vue'
  import SelectComuna from '@/components/SelectComuna.vue'
  import StatusAPI from '@/components/StatusAPI.vue'

  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Diputado',
    components: {
      Bnavbar,
      SelectComuna,
      StatusAPI
    },
    data(){
      return{}
    },
    computed:{
      ...mapState(['listaDist', 'comuna', 'tipologia', 'area', 'pueblos', 'grupos', 'paises', 'escolaridad', 'piramide']),

      actualizarDistrito: {
        get: function(){
          return this.$store.state.distrito;
        },
        set: function(idDistrito){
          this.$store.commit('seleccionComuna', null);
          this.$store.commit('seleccionDistrito', idDistrito);
          return this.listarComunas();
        }
      }
    },
    methods:{
      ...mapActions(['getDistritos', 'datosComuna', 'datosDistrito']),

      disteClick(){
        if(this.comuna !== null){
          this.datosComuna();
        }else{
          this.datosDistrito();
        }
      },
      listarComunas: function(){
        return this.$store.commit('getComunasDistrito', this.actualizarDistrito);
      }
    },
    mounted(){
      this.getDistritos();
      this.$store.commit('seleccionDistrito', null);
    }
  }

</script>
