<template>
  <div>
    <div>
      <NavBar></NavBar>
    </div>
    <div class="senador">
      <h1>Esta es la página del perfil Senador</h1>
    </div>
  </div>
</template>

<script>
  
  import NavBar from '@/components/Navbar.vue'
  
  export default{
    name: 'Senador',
    components: {
      NavBar
    }
  }
</script>
