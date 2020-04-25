<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <div class="container">
            <pie-chart :data="tipologia" legend="right" suffix="%" :round="2"></pie-chart>
          </div>
        </b-card-text>
      </b-card>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <Tabla2C encabezado="Tipo de Hogar" :datos="tipologia"></Tabla2C>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
  import Tabla2C from '@/components/Tabla2C.vue'

  import {mapState} from 'vuex'

  export default{
    name: "TipologiaChart",
    components: {
      Tabla2C
    },
    data(){
      return{
        titulo: 'Distribución de la población según Tipología del Hogar',
        datosGrafico: []
      }
    },
    computed:{
      ...mapState(['tipologia']),

      obtenerData(){
        let listaDatos = [];
        let datos = [];
        datos.push('Unipersonal');
        datos.push(Math.round(this.tipologia.unipersonal*100)/100);
        listaDatos.push(datos);
        datos = [];
        datos.push('Compuesto');
        datos.push(Math.round(this.tipologia.compuesto*100)/100);
        listaDatos.push(datos);
        datos = [];
        datos.push('Extenso');
        datos.push(Math.round(this.tipologia.extenso*100)/100);
        listaDatos.push(datos);
        datos = [];
        datos.push('Sin Nucleo');
        datos.push(Math.round(this.tipologia.sinNucleo*100)/100);
        listaDatos.push(datos);
        datos = [];
        datos.push('Monoparental');
        datos.push(Math.round(this.tipologia.monoParental*100)/100);
        listaDatos.push(datos);
        datos = [];
        datos.push('Parejas Sin Hijos');
        datos.push(Math.round(this.tipologia.parejasSinHijos*100)/100);
        listaDatos.push(datos);
        datos = [];
        datos.push('Parejas Con Hijos');
        datos.push(Math.round(this.tipologia.parejasConHijos*100)/100);
        listaDatos.push(datos);
        this.datosGrafico = listaDatos;
      }
    }
  }
</script>
