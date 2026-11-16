<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';


</script>

<template>
<div>
    <div class="bg-crema w-full h-screen">
     <h1>favoritos</h1>
       
        <Button as-child>
            <RouterLink to="/Inicio">Inicio</RouterLink>
        </Button> 

        <Button as-child>
            <RouterLink to="/Cesta">Cesta</RouterLink>
        </Button>
       
    </div>

    </div>
</template>



<style scoped>

</style>