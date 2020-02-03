<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="alcalde">
      <h1>Esta es la página del perfil Alcalde</h1>
    </div>
  </div>
</template>

<script>
  
  import NavBar from '@/components/Navbar.vue'
  import Bnavbar from '@/components/Bnavbar.vue'

  export default{
    name: 'Alcalde',
    components: {
      NavBar,
      Bnavbar
    }
  }
</script>
