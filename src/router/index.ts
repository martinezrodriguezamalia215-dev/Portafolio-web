
import CestaCompra from "@/pages/Cesta/CestaCompra.vue";
import Principal from "../pages/PaginaPrincipal/Principal.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Fav from "@/pages/Favoritos/Fav.vue";
import Inicio from "@/pages/Inicio/Inicio.vue";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
    },
    {
      path: "/principal",
      name: "Principal",
      component: Principal,
    },
 {
      path: "/Cesta",
      name: "Cesta",
      component: CestaCompra,
    },

    {
      path: "/Favoritos",
      name: "Fav",
      component: Fav,
    },

    {
      path: "/:patchMatch(.*)",
      redirect: "/",
    },
  ],
});