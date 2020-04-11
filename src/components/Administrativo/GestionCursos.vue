<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>
        <div class="container-fluid mt-4">
        <div class="row mt-4">
        <div class="col">
          <div class="card shadow">
            <div class="card-header border-0" style="padding-bottom: 0px; padding-top: 10px;">
              <!-- <h3 class="mb-0">Listado De Cursos Actualmente en el Plantel Educativo</h3> -->
            <div class="row">
                <div class="col-md-6"><h2 class="text-center">Listado De Cursos Actualmente en el Plantel Educativo</h2></div>
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="input-group input-group-alternative mb-4">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                      </div>
                      <input class="form-control form-control-alternative" placeholder="Filtrar por nombre del Profesor" type="text" v-model="filtroNombre">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div class="row">
            <div class="col-xl-3 col-lg-6 mt-3 " v-for="curso in getDatosCurso" :key="curso.nombre">
              <div class="card card-stats mb-4 mb-xl-0 seleccion">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Grado</h5>
                      <span class="h2 font-weight-bold mb-0">{{ curso.nombre }}</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i class="fas fa-chalkboard-teacher"></i> 
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-muted text-sm">
                    <span class="text-primary mr-2">Titular</span>
                  </p>
                  <p class="mb-0 text-muted text-sm">
                    <span class="text-nowrap">{{`${curso.nombreProfesor} ${curso.apellidoProfesor}`}}</span>
                  </p>
                  <p class="mt-1 mb-0 text-muted text-sm">
                    <span class="text-primary mr-2">Estudiantes Matriculados</span>
                  </p>
                  <p class="mb-0 text-muted text-sm">
                    <span class="text-nowrap">{{curso.alumnosInscritos}}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        
       
     </div>  
     <footersia class="pl-4 pr-4"></footersia>
   </div>
</template>

<script>
import footersia from './Footer.vue'
import axios from "axios"
import constants from "../../config/constants.js"

export default {
    components:{
        footersia
    },
     mounted(){
        this.getCursosDocentes();
      
       
    },
    data(){
        return{
            arrayNuevo: [],
            cursos: [],
            filtroNombre: ''
            
        }
    },
    methods: {
        getCursosDocentes(){
            axios.post(`${constants.CURSOS}/docente`)
            .then(res => {
                console.log(res.data)
                this.cursos = res.data;
            })    
     }
   },
   computed: {
       getDatosCurso(){
           return this.cursos.filter(curso => curso.nombreProfesor.toLowerCase().includes(this.filtroNombre.toLowerCase()) )
       }
   }

}
</script>

<style>
.seleccion:hover{
    box-shadow: 1px 3px 6px -2px gray !important;
}
.card-stats .card-body {
    padding: 1rem 0.7rem;
}

</style>