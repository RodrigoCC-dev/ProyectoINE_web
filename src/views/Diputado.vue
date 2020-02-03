<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="diputado">
      <h1>Esta es la página del perfil Diputado</h1>
    </div>
  </div>
</template>

<script>
  
  import NavBar from '@/components/Navbar.vue'
  import Bnavbar from '@/components/Bnavbar.vue'
  
  export default {
    name: 'Diputado',
    components: {
      NavBar,
      Bnavbar
    }
  }
  
</script>
