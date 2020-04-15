<template>

  <b-form-select v-model="selected" :options="regiones"></b-form-select>
  <p>Selección: {{selected}}</p>


</template>

<script>
  export default{
    name: 'SelectorRegion',
    select: null,
    regiones: [
      {value: null, text: 'Seleccione una Región'},
      {value: 'TARAPACÁ', text: 'Tarapacá'},
      {value: 'ATACAMA', text: 'Atacama'},
      {value: 'COQUIMBO', text: 'Coquimbo'},
      {value: 'VALPARAÍSO', text: 'Valparaíso'},
      {value: "LIBERTADOR BERNARDO O'HIGGINS", text: "Libertador Bernardo O'higgins"}
    ],
  }

</script>
