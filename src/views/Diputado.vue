<template>
  <div>
    <div>
      <NavBar></NavBar>
    </div>
    <div class="diputado">
      <h1>Esta es la página del perfil Diputado</h1>
    </div>
  </div>
</template>

<script>
  
  import NavBar from '@/components/Navbar.vue'
  
  export default {
    name: 'Diputado',
    components: {
      NavBar
    }
  }
  
</script>
