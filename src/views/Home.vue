<template>
  <div class="home container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <BotonesMenu></BotonesMenu>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BotonesMenu from '@/components/BotonesMenu.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    BotonesMenu
  }
}
</script>
