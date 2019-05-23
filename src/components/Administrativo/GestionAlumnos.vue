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
                  <h2 class="ml-4 mb-4">Listado De Alumnos</h2>
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
                            <button class="btn btn-icon btn-2 btn-primary btn-sm" type="button"  data-toggle="modal" data-target="#modal-form" @click="editarAlumno(alumno.id, alumno._id)">
	                            <span class="btn-inner--icon"><i class="far fa-edit"></i></span>	
                            </button>
                             <button class="btn btn-icon btn-2 btn-success btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Ver Detalles">
	                            <span class="btn-inner--icon"> <i class="fas fa-eye"></i></span>	
                            </button>
                            <button class="btn btn-icon btn-2 btn-danger btn-sm" type="button" @click="eliminarAlumno(alumno.id, alumno._id)">
	                            <span class="btn-inner--icon"><i class="fas fa-trash-alt"></i></span>	
                            </button>
                           

                           
                           
                              <!-- <button class="btn btn-icon btn-3 btn-success" type="button">
	                              <span class="btn-inner--icon"><i class="fas fa-user-edit"></i></span>
	                              <span class="btn-inner--text">Ver Detalles</span>
                              </button> -->
                          </td>
                        </tr>
                       </template>
                       <template v-else>
                         <div class="d-flex justify-content-center">
                            <div class="spinner">
                                 <div class="rect1 mr-1"></div>
                                 <div class="rect2 mr-1"></div>
                                 <div class="rect3 mr-1"></div>
                                 <div class="rect4 mr-1"></div>
                                 <div class="rect5 mr-1"></div>
                            </div>
                         </div>
                         
                       </template>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- <pre>{{$data}}</pre> -->
        </div>

        
      <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
    <div class="modal-dialog modal- modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
        	
<div class="modal-body p-0">
            	
                	
   <div class="card bg-secondary shadow border-0">
   
    <div class="card-body px-lg-5 py-lg-5">
        <div class="text-center text-muted mb-4">
            <h2 class="text-center">Editar Alumno</h2>
        </div>
        <form role="form" @submit.prevent="modificarAlumno()">
            <div class="row">
              <div class="col">
                 <div class="form-group mb-3">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                        </div>
                        <input class="form-control" placeholder="Nombres" type="text" v-model="nombreAEditar">
                    </div>
                 </div>
              </div>
              <div class="col">
                <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                        </div>
                        <input class="form-control" placeholder="Apellidos" type="text" v-model="apellidoAEditar">
                    </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                 <div class="form-group mb-3">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-badge"></i></span>
                        </div>
                        <input class="form-control" placeholder="Documento" type="text" v-model="documentoAEditar">
                    </div>
                 </div>
              </div>
              <div class="col">
                <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                        </div>
                        <input class="form-control" placeholder="Direccion" type="text" v-model="direccionAEditar">
                    </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                 <div class="form-group mb-3">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                        </div>
                        <input class="form-control" placeholder="Barrio" type="text" v-model="barrioAEditar">
                    </div>
                 </div>
              </div>
              <div class="col">
                <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                        </div>
                        <input class="form-control" placeholder="Celular" type="text" v-model="celularAEditar">
                    </div>
                </div>
              </div>
            </div>
           

            <div class="d-flex justify-content-around align-items-center">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-primary my-4">Guardar Cambios</button>
            </div>
        </form>
    </div>
   </div>



                
            </div>
            
        </div>
    </div>
</div>
  

        <footersia></footersia>
   </div>
</template>

<script>
import footersia from './Footer.vue'
import axios from "axios"
import constants from "../../config/constants.js"
import $ from "jquery";
import Swal from "sweetalert2";

export default {
    components:{
        footersia
    },
     mounted(){
        this.initCursos(1);
        this.getCursos();
        
    },
    data(){
        return{   
            cursos: [],
            alumnos: [],
            indice: 0,
            idToEdit: 0,
            filtroNombre: '',  
            nombreAEditar: '',
            apellidoAEditar: '',  
            documentoAEditar: '',
            direccionAEditar: '',
            barrioAEditar: '',
            celularAEditar: '',
            currentCourse: ''
}
    },
    methods: {

      initCursos(idCurso){
        axios.get(`${constants.ALUMNOS}/all/${idCurso}`)
            .then(res => {
                this.alumnos = res.data;
                console.log(this.alumnos)
            }) 
      },

     getCursos(){

         axios.get(`${constants.CURSOS}`)
            .then(res => {
                this.cursos = res.data;
            }) 
     },

     getIndiceCurso(indice){
        this.currentCourse = indice;
        console.log(this.currentCourse)
        axios.get(`${constants.ALUMNOS}/all/${indice}`)
            .then(res => {
                this.alumnos = res.data;
                console.log(this.alumnos)
            }) 
     },
     editarAlumno(indice, index){
       axios.get(`${constants.ALUMNOS}/${indice}`)
            .then(res => {
           
                this.idToEdit = index;
                this.nombreAEditar = res.data[0].nombres;
                this.apellidoAEditar = res.data[0].apellidos;
                this.documentoAEditar = res.data[0].documento;
                this.direccionAEditar = res.data[0].direccion;
                this.barrioAEditar = res.data[0].barrio;
                this.celularAEditar = res.data[0].celular;
            })
     },

     modificarAlumno(){
       axios.put(`${constants.ALUMNOS}/${this.idToEdit}`, {
           nombres: this.nombreAEditar,
           apellidos: this.apellidoAEditar,
           doumento: this.documentoAEditar,
           direccion: this.direccionAEditar,
           barrio: this.barrioAEditar,
           celular: this.celularAEditar
         })
         .then( res => {
           console.log(res.data)
           Swal.fire('Edición Realizada','Se realizó la actualización con éxito ','success')   
           
           this.getIndiceCurso(this.currentCourse);  
           $('#modal-form').modal('hide')   

         })
     },

     
       eliminarAlumno(indice){
          Swal.fire({
              title: 'Está seguro de hacer la eliminación',
              text: "Recuerde que no podrá recuperar el contenido del Alumno",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Eliminar',
              cancelButtonText: 'Cancelar'
            }).then((result) => {
              if (result.value) {
                console.log(result)
                // axios.delete(`${constants.URL_CLIENTES}/${idClient}`)
                // .then(res => {
                //   this.getClients()
                //   console.log(res.data)
                //   axios.delete(`${constants.URL_VEHICULOS}/${idVehicle}`)
               // });

                Swal.fire(
                  'Datos del Alumno Eliminados',
                  'El registro ha sido eliminado de la base de datos',
                  'success'
                );
                
              }
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