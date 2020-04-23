<template>
  <div>
    <pie-chart :data="tipologia" legend="right" suffix="%" :round="2"></pie-chart>
  </div>
</template>


<script>

  import {mapState} from 'vuex'

  export default{
    name: "TipologiaChart",
    data(){
      return{
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
