<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <column-chart :data="escolaridad" legend="right" round="2" label="Años de Escolaridad" suffix="%"></column-chart>
        </b-card-text>
      </b-card>
      <b-card bg-variant="light" :header="titulo" class="text-left">
        <b-card-text>
          <Tabla2C encabezado="Años de escolaridad" :datos="escolaridad"></Tabla2C>
        </b-card-text>
      </b-card>
    </b-card-group>

  </div>
</template>

<script>
  import Tabla2C from '@/components/Tabla2C.vue'

  import {mapState} from 'vuex'

  export default {
    name: 'EscolaridadChart',
    components: {
      Tabla2C
    },
    data(){
      return {
        chartdata: null,
        opciones: null,
        titulo: 'Distribución de población según años de Escolaridad'
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
