<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>
        <div class="container-fluid mt-4">
            <div class="row mt-4">
              <div class="col">
                <div class="card shadow">
                  <div class="card-header border-0">
                    <!-- <h3 class="mb-0">Listado De Cursos Actualmente en el Plantel Educativo</h3> -->
                  <div class="row">
                      <div class="col-md-6"><h2 class="text-center">Listado De Alumnos Actualmente en el Plantel Educativo</h2></div>
                      <div class="col-md-6">
                         <div class="form-group">
                            <h4 for="exampleFormControlSelect1">Seleccione El Curso de los Alumnos a Visualizar</h4>
                            <select class="form-control"  @change="getIndiceCurso(indice)" v-model="indice">
                              <option disabled selected value="">Seleccione Un Curso</option>
                              <option v-for="curso in cursos" :key="curso.nombre"  :value="curso.id">{{ curso.nombre }}</option>
                            </select>
                          </div>
                      </div>
                      <!-- <div class="col-md-5">
                          <div class="form-group">
                            <label for="exampleFormControlSelect1">Curso</label>
                            <div class="input-group input-group-alternative mb-4">
                             
                              <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                              </div>
                              <input class="form-control form-control-alternative" placeholder="Filtrar por Nombre" type="text" v-model="filtroNombre">
                            </div>
                          </div>
                      </div> -->
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table align-items-center table-flush">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Nombres</th>
                          <th scope="col">Apellidos</th>
                          <th scope="col">Documento</th>
                          <th scope="col">Dirección</th>
                          <th scope="col">Barrio</th>
                          <th scope="col">Celular</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                       <template v-if="getAlumnosCurso.length > 0">
                        <tr v-for="alumno in getAlumnosCurso" :key="alumno.nombre">
                           <td>                          
                                <h5>{{ alumno.nombres }}</h5>
                           </td>
                          <td>
                             <h5>{{alumno.apellidos}}</h5>
                          </td>
                          <td>
                            <h5>{{alumno.documento}}</h5>
                          </td>
                          <td>
                            <h5>{{alumno.direccion}}</h5>
                          </td>
                          <td>
                            <h5>{{alumno.barrio}}</h5>
                          </td>
                          <td>
                            <h5>{{alumno.celular}}</h5>
                          </td>
                          <td>
                              <button class="btn btn-icon btn-3 btn-success" type="button">
	                              <span class="btn-inner--icon"><i class="fas fa-user-edit"></i></span>
	                              <span class="btn-inner--text">Ver Detalles</span>
                              </button>
                          </td>
                        </tr>
                       </template>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- <pre>{{$data}}</pre> -->
        </div>
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
        this.getCursos();
      
       
    },
    data(){
        return{   
            cursos: [],
            alumnos: [],
            indice: 0,
            filtroNombre: ''    
        }
    },
    methods: {
     getCursos(){
         axios.get(`${constants.CURSOS}`)
            .then(res => {
                this.cursos = res.data;
            }) 
     },
     getIndiceCurso(indice){
        axios.get(`${constants.ALUMNOS}/${indice}`)
            .then(res => {
                this.alumnos = res.data;
                console.log(this.alumnos)
            }) 
     }

   },
   computed: {
    
       getAlumnosCurso(){
           return this.alumnos.filter(alumno => alumno.nombres.toLowerCase().includes(this.filtroNombre.toLowerCase()) )
       }
   }

}
</script>

<style>
</style>