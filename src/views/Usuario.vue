<template>
  <div>
    <div>
      <NavBar></NavBar>
    </div>
    <div class="usuario">
      <h1>Esta es la página del perfil Usuario Común</h1>
    </div>
  </div>
</template>

<script>

  import NavBar from '@/components/Navbar.vue'
  
  export default{
    name: 'Usuario',
    components: {
      NavBar
    }
  }
  
</script>
