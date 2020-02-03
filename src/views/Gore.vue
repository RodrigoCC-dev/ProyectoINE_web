<template>
  <div>
    <div>
      <Bnavbar></Bnavbar>
    </div>
    <div class="gore">
      <h1>Esta es la página del perfil Gobernador Regional</h1>
    </div>
  </div>
</template>

<script>
  
  import NavBar from '@/components/Navbar.vue'
  import Bnavbar from '@/components/Bnavbar.vue'
  
  export default{
    name: 'Gore',
    components: {
      NavBar,
      Bnavbar
    }
  }
</script>
