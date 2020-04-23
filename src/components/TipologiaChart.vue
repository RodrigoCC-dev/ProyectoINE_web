<template>
  <div class="mt-3">
    <b-card-group deck>
    <div class="card border-light mb-3" style="width: 80rem;">
      <div class="card-header">Distribución de la población según Tipología del Hogar</div>
      <div class="card-body">
        <div class="container">
          <pie-chart :data="tipologia" legend="right" suffix="%" :round="2"></pie-chart>
        </div>
      </div>
    </div>
    <div class="car border-light mb-3 pr-3" style="width: 30rem;">
      <div class="card-header">Distribución de la población según Tipología del Hogar</div>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Tipo de Hogar</th>
              <th scope="col">Distribución porcentual</th>
            </tr>
          </thead>
          <tbody v-for="(value, key) of tipologia">
            <th scope="row">{{key}}</th>
            <td>{{Math.round(value*100)/100}}%</td>
          </tbody>
        </table>
      </div>
    </div>
  </b-card-group>
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
