<template>
  <div class="table-responsive-md">
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">{{encabezado}}</th>
          <th scope="col">Distribución porcentual</th>
        </tr>
      </thead>
      <tbody v-for="(value, key) of datos">
        <th scope="col">{{key}}</th>
        <td>{{Math.round(value*100)/100}}%</td>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default{
    name: 'Tabla2C',
    props: ['encabezado', 'datos']
  }
</script>
