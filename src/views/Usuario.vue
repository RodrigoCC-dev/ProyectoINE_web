<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="usuario">
      <h1>Esta es la página del perfil Usuario Común</h1>
      <div class="mx-5 mt-5">
        <form>
          <b-row>
            <b-col md="6">
              <SelectRegion></SelectRegion>
            </b-col>
            <b-col md="6">
              <SelectProvincia></SelectProvincia>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <SelectComuna></SelectComuna>
            </b-col>
            <b-col md="6">
              <b-form-select v-model="localidad">
                <b-form-select-option :value="null">Seleccionar Localidad</b-form-select-option>
                <b-form-select-option v-for="(item, index) of listaLoc" :key="item.id" :value="item">{{item}}</b-form-select-option>
              </b-form-select>
            </b-col>
          </b-row>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

  import NavBar from '@/components/Navbar.vue'
  import Bnavbar from '@/components/Bnavbar.vue'
  import SelectRegion from '@/components/SelectRegion.vue'
  import SelectProvincia from '@/components/SelectProvincia.vue'
  import SelectComuna from '@/components/SelectComuna.vue'

  import {mapState} from 'vuex'

  export default{
    name: 'Usuario',
    components: {
      NavBar,
      Bnavbar,
      SelectRegion,
      SelectProvincia,
      SelectComuna
    },
    data(){
      return{
        localidad: null
      }
    },
    computed: {
      ...mapState(['listaLoc'])


    },
    methods: {

    },
    mounted(){

    }
  }

</script>
