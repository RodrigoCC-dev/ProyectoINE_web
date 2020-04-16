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
            <b-col md="4">
              <SelectDistrito :listaEntrada="listaDist"></SelectDistrito>
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
  import SelectDistrito from '@/components/SelectDistrito.vue'

  import store from 'vuex'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Diputado',
    components: {
      NavBar,
      Bnavbar,
      SelectDistrito
    },
    computed:{
      ...mapState(['listaDist'])
    },
    methods:{
      ...mapActions(['getDistritos'])
    },
    mounted(){
      this.getDistritos();
    }
  }

</script>
