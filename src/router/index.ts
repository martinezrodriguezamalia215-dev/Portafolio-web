
import CestaCompra from "@/pages/cesta/CestaCompra.vue";
import Principal from "../pages/paginaPrincipal/Principal.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Fav from "@/pages/favoritos/Fav.vue";
import Inicio from "../pages/home/inicio.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/Inicio",
      name: "Inicio",
      component: Inicio,
    },
    {
      path: "/Principal",
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
      name: "fav",
      component: Fav,
    },

    {
      path: "/:patchMatch(.*)",
      redirect: "/",
    },
  ],
});