<template>
  <div class="inicio container">
    <div class="row align-items-center">
      <div class="col">
        <BotonesMenu></BotonesMenu>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BotonesMenu from '@/components/BotonesMenu.vue'

export default {
  name: 'inicio',
  components: {
    BotonesMenu
  }
}
</script>
