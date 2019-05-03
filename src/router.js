import Vue from "vue";
import Router from "vue-router";
import Alumno from "./views/Alumno.vue";
import Inicio from "./components/Alumno/Inicio.vue"
import Asesorias from "./components/Alumno/Asesorias.vue"
import Contenido from "./components/Alumno/ContenidoMaterias.vue"
import Horario from "./components/Alumno/Horario.vue"
import Informacion from "./components/Alumno/InformacionEstudiantil.vue"
import Material from "./components/Alumno/MaterialApoyo.vue"
import Notas from "./components/Alumno/Notas.vue"
import Tareas from "./components/Alumno/Tareas.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "alumno",
      component: Alumno,
      children: [
        {
          path: "/inicio",
          name: "inicio",
          component: Inicio,
        },
        {
          path: "/informacion",
          name: "info",
          component: Informacion,
        },
        {
          path: "/horario",
          name: "horario",
          component: Horario,
        },
        {
          path: "/notas",
          name: "notas",
          component: Notas,
        },
        {
          path: "/contenido",
          name: "contenido",
          component: Contenido,
        },
        {
          path: "/material",
          name: "material",
          component: Material,
        },
        {
          path: "/asesorias",
          name: "asesorias",
          component: Asesorias,
        },
        {
          path: "/tareas",
          name: "tareas",
          component: Tareas,
        }

      ]
    },
   
  ]
});
