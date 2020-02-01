<template>
  <div>
    <div>
      <NavBar></NavBar>
    </div>
    <div class="gore">
      <h1>Esta es la página del perfil Gobernador Regional</h1>
    </div>
  </div>
</template>

<script>
  
  import NavBar from '@/components/Navbar.vue'
  
  export default{
    name: 'Gore',
    components: {
      NavBar
    }
  }
</script>
