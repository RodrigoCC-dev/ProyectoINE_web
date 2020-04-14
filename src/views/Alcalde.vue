<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="alcalde">
      <h1>Esta es la página del perfil Alcalde</h1>
      <form>
        <b-row>
          <b-col md="3">
            <b-form-select v-model="select">
              <b-form-select-option :value="null">Seleccione Región</b-form-select-option>
              <b-form-select-option v-for="item of regiones" :key="item.id" :value="item.nombre">{{item.numero}} - {{item.nombre}}</b-form-select-option>
            </b-form-select>
            <p>Selección: {{select}}</p>
          </b-col>
        </b-row>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import NavBar from '@/components/Navbar.vue'
  import Bnavbar from '@/components/Bnavbar.vue'

  export default{
    name: 'Alcalde',
    components: {
      NavBar,
      Bnavbar
    },
    data(){
      return{
        select: null,
        regionesES: [
          {value: null, text: 'Seleccione una Región'},
          {value: 'TARAPACÁ', text: 'Tarapacá'},
          {value: 'ATACAMA', text: 'Atacama'},
          {value: 'COQUIMBO', text: 'Coquimbo'},
          {value: 'VALPARAÍSO', text: 'Valparaíso'},
          {value: "LIBERTADOR BERNARDO O'HIGGINS", text: "Libertador Bernardo O'higgins"}
        ],
        regiones: null
      }
    },
    methods:{
      async getRegiones(){
        let datos = await axios.get('http://192.168.0.30:9898/listar/regiones')
        console.log(datos.data);
        this.regiones = datos.data
      }
    },
    created(){
      this.getRegiones()
    }
    //computed: {
    //  ...mapState(['regiones'])
    //},
    //action(){
    //  ...mapMutations(['getRegiones'])
    //}

  }
</script>
