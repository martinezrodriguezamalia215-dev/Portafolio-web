
import CestaCompra from "@/pages/cesta/CestaCompra.vue";
import Principal from "../pages/paginaPrincipal/Principal.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Fav from "@/pages/favoritos/Fav.vue";
import Inicio from "../pages/home/inicio.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/inicio",
      name: "inicio",
      component: Inicio,
    },
    {
      path: "/principal",
      name: "principal",
      component: Principal,
    },
 {
      path: "/cesta",
      name: "cesta",
      component: CestaCompra,
    },

    {
      path: "/favoritos",
      name: "fav",
      component: Fav,
    },

    {
      path: "/:patchMatch(.*)",
      redirect: "/",
    },
  ],
});