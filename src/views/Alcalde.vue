<template>
  <div>
    <div>
      <NavBar></NavBar>
    </div>
    <div class="alcalde">
      <h1>Esta es la página del perfil Alcalde</h1>
    </div>
  </div>
</template>

<script>
  
  import NavBar from '@/components/Navbar.vue'

  export default{
    name: 'Alcalde',
    components: {
      NavBar
    }
  }
</script>
