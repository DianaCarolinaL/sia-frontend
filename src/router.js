import Vue from "vue";
import Router from "vue-router";

//------------------------Alumno---------------------------------------
import Alumno from "./views/Alumno.vue";
import Inicio from "./components/Alumno/Inicio.vue";
import Asesorias from "./components/Alumno/Asesorias.vue";
import Contenido from "./components/Alumno/ContenidoMaterias.vue";
import Horario from "./components/Alumno/Horario.vue";
import Informacion from "./components/Alumno/InformacionEstudiantil.vue";
import Material from "./components/Alumno/MaterialApoyo.vue";
import Notas from "./components/Alumno/Notas.vue";
import Tareas from "./components/Alumno/Tareas.vue";

//------------------------Docente---------------------------------------
import Docente from "./views/Docente.vue";
import AsesoriasDocente from "./components/Docente/Asesorias.vue";
import AsistenciaDocente from "./components/Docente/Asistencia.vue";
import CitacionesDocente from "./components/Docente/Citaciones.vue";
import ContenidoDocente from "./components/Docente/Contenido.vue";
import HorarioDocente from "./components/Docente/Horario.vue";
import InformacionDocente from "./components/Docente/Informacion.vue";
import InicioDocente from "./components/Docente/Inicio.vue";
import MaterialDocente from "./components/Docente/Material.vue";
import NotasDocente from "./components/Docente/Notas.vue";
import ReportesDocente from "./components/Docente/Reportes.vue";
import TareasDocente from "./components/Docente/Tareas.vue";

//------------------------Administrativo---------------------------------------
import Admin from "./views/Administrador.vue";
import GestionCursos from "./components/Administrativo/GestionCursos.vue";
import GestionAlumnos from "./components/Administrativo/GestionAlumnos.vue";
import GestionDocentes from "./components/Administrativo/GestionDocentes.vue";
import GestionAcudientes from "./components/Administrativo/GestionAcudientes.vue";
import GestionBoletines from "./components/Administrativo/GestionBoletines.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Alumno,
      children: [
        {
          path: "/",
          name: "inicio",
          component: Inicio
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
    {
      path: "/docente",
      component: Docente,
      children: [
        {
          path: "/",
          name: "iniciodocente",
          component: InicioDocente,
        },
        {
          path: "/informacion",
          name: "infodocente",
          component: InformacionDocente,
        },
        {
          path: "/horario",
          name: "horariodocente",
          component: HorarioDocente,
        },
        {
          path: "/notas",
          name: "notasdocente",
          component: NotasDocente,
        },
        {
          path: "/asistencia",
          name: "asistencia",
          component: AsistenciaDocente,
        },
        {
          path: "/contenido",
          name: "contenidodocente",
          component: ContenidoDocente,
        },
        {
          path: "/material",
          name: "materialapoyo",
          component: MaterialDocente,
        },
        {
          path: "/asesorias",
          name: "asesoriasdocente",
          component: AsesoriasDocente,
        },
        {
          path: "/tareas",
          name: "tareasdocente",
          component: TareasDocente,
        },
        {
          path: "/reportes",
          name: "reportes",
          component: ReportesDocente,
        },
        {
          path: "/citaciones",
          name: "citaciones",
          component: CitacionesDocente,
        }
      ]
    },
    {
      path: "/admin",
      component: Admin,
      children: [
        {
          path: "/",
          name: "gestionCursos",
          component: GestionCursos
        },
        {
          path: "/gestion-alumnos",
          name: "gestionAlumnos",
          component: GestionAlumnos,
        },
        {
          path: "/gestion-docentes",
          name: "gestionDocentes",
          component: GestionDocentes
        },
        {
          path: "/gestion-acudientes",
          name: "gestionAcudientes",
          component: GestionAcudientes
        },
        {
          path: "/gestion-boletines",
          name: "gestionBoletines",
          component: GestionBoletines
        }
      ]
    }
  ]
});
