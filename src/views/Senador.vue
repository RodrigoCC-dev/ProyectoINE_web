<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="senador">
      <h1>Esta es la página del perfil Senador</h1>
    </div>
  </div>
</template>

<script>
  
  import NavBar from '@/components/Navbar.vue'
  import Bnavbar from '@/components/Bnavbar.vue'
  
  export default{
    name: 'Senador',
    components: {
      NavBar,
      Bnavbar
    }
  }
</script>
