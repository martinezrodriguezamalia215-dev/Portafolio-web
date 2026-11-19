<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>


<template>
    <div class="bg-crema w-full min-h-screen text-3xl">
        
        <div class="flex gap-1 p-4">
        <Button as-child>
            <RouterLink to="/Inicio">Inicio</RouterLink>
        </Button> 

         <div class="flex w-[80%] ml-4 items-center gap-2 ">
            <Input type="busqueda" placeholder="Quiero a..." class="flex-1 bg-willow opacity-80"/>
            <Button type="submit" class="bg-cerulean hover:bg-aqua hover:text-black">
              <Search />
            </Button>
        </div>

        <Button as-child class="ml-auto">
            <RouterLink to="/Cesta">Cesta</RouterLink>
        </Button>

        <Button as-child >
            <RouterLink to="/favoritos">Favoritos</RouterLink>
        </Button>

     </div>
    
        <span>
            <h1>Aqui estan todos los productos disponibles</h1>
        </span>
    
<div class="bg-rosa mx-auto w-11/12 min-h-screen mt-4 p-2 content-start">
    
 <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
    <Card class="bg-aqua w-[220px] h-auto m-2 cursor-pointer hover:bg-cerulean hover:text-white">
        <CardHeader class="pb-2">
            <CardTitle class="text-3xl font-bold">2</CardTitle>
        </CardHeader>
        <CardContent class="pt-0 px-0">
            <img
            src="/imagenes/resident/claire.png"
            class="w-full aspect-square object-contain bg-crema rounded-b-md"
            />
        </CardContent>
    </Card>
        
        <Card class="bg-aqua w-[220px] h-auto m-2 cursor-pointer hover:bg-cerulean hover:text-white">
        <CardHeader class="pb-2">
            <CardTitle class="text-3xl font-bold">2</CardTitle>
        </CardHeader>
        <CardContent class="pt-0 px-0">
            <img
            src="/imagenes/resident/claire.png"
            class="w-full aspect-square object-contain bg-crema rounded-b-md"
            />
        </CardContent>
    </Card>

    <Card class="bg-aqua w-[220px] h-auto m-2 cursor-pointer hover:bg-cerulean hover:text-white">
        <CardHeader class="pb-2">
            <CardTitle class="text-3xl font-bold">2</CardTitle>
        </CardHeader>
        <CardContent class="pt-0 px-0">
            <img
            src="/imagenes/resident/claire.png"
            class="w-full aspect-square object-contain bg-crema rounded-b-md"
            />
        </CardContent>
    </Card>

    <Card class="bg-aqua w-[220px] h-auto m-2 cursor-pointer hover:bg-cerulean hover:text-white">
        <CardHeader class="pb-2">
            <CardTitle class="text-3xl font-bold">2</CardTitle>
        </CardHeader>
        <CardContent class="pt-0 px-0">
            <img
            src="/imagenes/resident/claire.png"
            class="w-full aspect-square object-contain bg-crema rounded-b-md"
            />
        </CardContent>
    </Card>

    <Card class="bg-aqua w-[220px] h-auto m-2 cursor-pointer hover:bg-cerulean hover:text-white">
        <CardHeader class="pb-2">
            <CardTitle class="text-3xl font-bold">2</CardTitle>
        </CardHeader>
        <CardContent class="pt-0 px-0">
            <img
            src="/imagenes/resident/claire.png"
            class="w-full aspect-square object-contain bg-crema rounded-b-md"
            />
        </CardContent>
    </Card>

    <Card class="bg-aqua w-[220px] h-auto m-2 cursor-pointer hover:bg-cerulean hover:text-white">
        <CardHeader class="pb-2">
            <CardTitle class="text-3xl font-bold">2</CardTitle>
        </CardHeader>
        <CardContent class="pt-0 px-0">
            <img
            src="/imagenes/resident/claire.png"
            class="w-full aspect-square object-contain bg-crema rounded-b-md"
            />
        </CardContent>
    </Card>
 </div>

 
    
    </div>

        
           

        



    </div>
    
     

</template>


<style scoped>

</style>