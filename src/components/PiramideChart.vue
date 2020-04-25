<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="ligth" :header="titulo" class="text-left">
        <b-card-text>
          <bar-chart :data="piramide" legend="bottom"></bar-chart>
        </b-card-text>
      </b-card>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <div class="table-responsive-md">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Grupo de edad</th>
                <th scope="col">Hombre</th>
                <th scope="col">Mujer</th>
              </tr>
            </thead>
            <tbody v-for="(item, index) of datosTabla">
              <th scope="col">{{datosTabla[index][0]}}</th>
              <td>{{datosTabla[index][1]}}</td>
              <td>{{datosTabla[index][2]}}</td>
            </tbody>
          </table>
          </div>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
    name: 'PiramideChart',
    data(){
      return {
        titulo: 'Pirámide poblacional',
        datosTabla: []
      }
    },
    computed: {
      ...mapState(['piramide']),

      transformarDatos: function (){
        let datos = [];
        let keys = Object.keys(this.piramide[0].data);
        let hombres = Object.values(this.piramide[0].data);
        let mujeres = Object.values(this.piramide[1].data);
        let aux = [];
        for(let i = 0; i < keys.length; i++){
          aux.push(keys[i]);
          aux.push(hombres[i]);
          aux.push(mujeres[i]);
          datos.push(aux);
          aux = [];
        }
        this.datosTabla = datos;
        return this.datosTabla;
      }
    }
  }
</script>
