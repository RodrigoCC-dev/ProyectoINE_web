<template>
  <div>
    <column-chart :data="escolaridad" legend="right" round="2" label="Años de Escolaridad" suffix="%"></column-chart>
  </div>
</template>

<script>

  import {mapState} from 'vuex'

  export default {
    name: 'EscolaridadChart',
    data(){
      return {
        chartdata: null,
        opciones: null
      }
    },
    computed: {
      ...mapState(['escolaridad', 'mostrarGraficos']),

      datosGrafico(){
        let datos = [];
        if(this.escolaridad !== null){
          datos.push(Math.round(this.escolaridad.masDe5*100)/100);
          datos.push(Math.round(this.escolaridad.masDe15*100)/100);
          datos.push(Math.round(this.escolaridad.masDe19*100)/100);
          datos.push(Math.round(this.escolaridad.masDe25*100)/100);
        }
        let etiquetas = ['5 años o más de edad', '15 años o más de edad', '19 años o más de edad', '25 años o más de edad'];
        let leyenda = 'Años de escolaridad';
        let colorRelleno = '#033C73';
        let colorBorde = '#033C73';
        let datasets = [];
        let seteo = {}
        seteo['label'] = leyenda;
        seteo['data'] = datos;
        seteo['backgroundColor'] = colorRelleno;
        seteo['borderColor'] = colorBorde;
        seteo['borderWidth'] = 1;
        datasets.push(seteo);
        let data = {};
        data['labels'] = etiquetas;
        Object.assign(data, datasets);
        let options = {
          responsive: true,
          maintainAspectRatio: false
        }
        this.chartdata = data;
        this.opciones = options;
        this.$store.commit('desplegarGraficos', true);
      }
    }
  }

</script>
