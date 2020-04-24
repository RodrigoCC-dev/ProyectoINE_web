<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" header="Distribución de la población según Área urbana y rural" class="text-left">
        <b-card-text>
          <pie-chart :data="area" legend="right" round="2" suffix="%"></pie-chart>
        </b-card-text>
      </b-card>
      <b-card bg-variant="light" header="Distribución de la población según Área urbana y rural" class="text-left">
        <b-card-text>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Tipo de Área</th>
                <th scope="col">Distribución porcentual</th>
              </tr>
            </thead>
            <tbody v-for="(value, key) of area">
              <th scope="row">{{key}}</th>
              <td>{{Math.round(value*100)/100}}%</td>
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
    name: 'AreaChart',
    computed: {
      ...mapState(['area'])
    }
  }
</script>
