<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
    
<div class="bg-rosa mx-auto w-11/12 h-screen mt-6 mb-6 opacity-90 grid grid-rows-4 grid-cols-4 gap-4">
    

    <Card class="bg-aqua w-60 h-60 m-2">
        <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        </CardHeader>
            <CardContent>
            <p>Card Content</p>
            </CardContent>
     </Card>
    
     <Card class="bg-aqua w-60 h-60 m-2">
        <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        </CardHeader>
            <CardContent>
            <p>Card Content</p>
            </CardContent>
     </Card>
    
     <Card class="bg-aqua w-60 h-60 m-2">
        <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        </CardHeader>
            <CardContent>
            <p>Card Content</p>
            </CardContent>
     </Card>
     <Card class="bg-aqua w-60 h-60 m-2">
        <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        </CardHeader>
            <CardContent>
            <p>Card Content</p>
            </CardContent>
     </Card>
     <Card class="bg-aqua w-60 h-60 m-2">
        <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        </CardHeader>
            <CardContent>
            <p>Card Content</p>
            </CardContent>
     </Card>
    
    
    </div>

        
           

        



    </div>
    
     

</template>


<style scoped>

</style>