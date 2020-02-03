<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="usuario">
      <h1>Esta es la página del perfil Usuario Común</h1>
    </div>
  </div>
</template>

<script>

  import NavBar from '@/components/Navbar.vue'
  import Bnavbar from '@/components/Bnavbar.vue'
  
  export default{
    name: 'Usuario',
    components: {
      NavBar,
      Bnavbar
    }
  }
  
</script>
