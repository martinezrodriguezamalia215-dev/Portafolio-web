<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';




</script>

<template>
<div class="bg-crema w-full h-screen">
  <h1>compra</h1>
      
    <Button as-child>
        <RouterLink to="/Inicio">Inicio</RouterLink>
    </Button> 

    <Button as-child>
      <RouterLink to="/favoritos">Favoritos</RouterLink>
    </Button>
       
</div>
</template>

<style scoped>

</style>