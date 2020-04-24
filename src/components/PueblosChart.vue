<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" header="Distribución de la población según Pueblos Originarios" class="text-left">
        <b-card-text>
          <b-row class="align-items-center">
            <b-col>
              <pie-chart :data="pueblos" legend="right" round="2" suffix="%"></pie-chart>
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
      <b-card bg-variant="light" header="Distribución de la población según Pueblos Originarios" class="text-left">
        <b-card-text>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Pueblo originario </th>
                <th scope="col">Distribución porcentual</th>
              </tr>
            </thead>
            <tbody v-for="(value, key) of pueblos">
              <th scope="col">{{key}}</th>
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
    name: 'PueblosChart',
    computed:{
      ...mapState(['pueblos'])
    }
  }
</script>
