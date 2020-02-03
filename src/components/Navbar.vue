<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" target="_self" href="/">Inico</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02" style="display: none;">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" target="_self" href="/alcalde">Alcalde <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_self" href="/gore">GORE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_self" href="/diputado">Diputado</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_self" href="/senador">Senador</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_self" href="/usuario">Usuario Común</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
  
  import {mapState} from 'vuex'

  export default{
    name: 'NavBar',
    computed: {
      ...mapState(['perfiles'])
    }
  }
</script>
