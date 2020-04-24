<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" header="Distribución de la población según Grupos Etarios" class="text-left">
        <b-card-text>
          <pie-chart :data="grupos" legend="right" round="2" suffix="%"></pie-chart>
        </b-card-text>
      </b-card>
      <b-card bg-variant="light" header="Distribución de la población según Grupos Etarios" class="text-left">
        <b-card-text>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Grupos de edad</th>
                <th scope="col">Distribución porcentual</th>
              </tr>
            </thead>
            <tbody v-for="(value, key) of grupos">
                <th scope="col">{{key}}</th>
                <td>{{Math.round(value*100)/100}}</td>
            </tbody>
          </table>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
    name: 'GruposChart',
    computed: {
      ...mapState(['grupos'])
    }
  }
</script>
