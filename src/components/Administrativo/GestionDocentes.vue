<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>
        <div class="container-fluid mt-4">
        <div class="card shadow">
            <div class="card-header border-0" style="padding-bottom: 0px; padding-top: 10px;">
              <!-- <h3 class="mb-0">Listado De Cursos Actualmente en el Plantel Educativo</h3> -->
            <div class="row">
                <div class="col-md-6"><h2 class="text-center">Listado De Docentes Actualmente en el Plantel Educativo</h2></div>
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

                  <div class="table-responsive">
                    <table class="table align-items-center table-flush">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Nombres</th>
                          <th scope="col">Apellidos</th>
                          <th scope="col">Documento</th>
                          <!-- <th scope="col">Dirección</th> -->
                          <!-- <th scope="col">Barrio</th> -->
                          <th scope="col">Celular</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                       <template v-if="getDocentesCurso.length > 0">
                        <tr v-for="docente in getDocentesCurso" :key="docente.nombre">
                           <td>                          
                                <h5>{{ docente.nombres }}</h5>
                           </td>
                          <td>
                             <h5>{{docente.apellidos}}</h5>
                          </td>
                          <td>
                            <h5>{{docente.documento}}</h5>
                          </td>
                          <!-- <td>
                            <h5>{{docente.direccion}}</h5>
                          </td>
                          <td>
                            <h5>{{docente.barrio}}</h5>
                          </td> -->
                          <td>
                            <h5>{{docente.celular}}</h5>
                          </td>
                          <td>
                            <button class="btn btn-icon btn-2 btn-primary btn-sm" type="button" data-toggle="modal" data-target="#modal-form"  @click="editarDocente(docente.id, docente._id)">
	                            <span class="btn-inner--icon"><i class="far fa-edit"></i></span>	
                            </button>
                             <!-- <button class="btn btn-icon btn-2 btn-success btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Ver Detalles">
	                            <span class="btn-inner--icon"> <i class="fas fa-eye"></i></span>	
                            </button> -->
                            <button class="btn btn-icon btn-2 btn-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Eliminar Alumno" @click="eliminarDocente(docente._id)">
	                            <span class="btn-inner--icon"><i class="fas fa-trash-alt"></i></span>	
                            </button>
                           
                          </td>
                        </tr>
                       </template>
                      </tbody>
                    </table>
                  </div>

                 <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
    <div class="modal-dialog modal- modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
        	
<div class="modal-body p-0">
            	
                	
   <div class="card bg-secondary shadow border-0">
   
    <div class="card-body px-lg-5 py-lg-5">
        <div class="text-center text-muted mb-4">
            <h2 class="text-center">Editar Docente</h2>
        </div>
        <form role="form" @submit.prevent="modificarDocente()">
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
              <!-- <div class="col">
                <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                        </div>
                        <input class="form-control" placeholder="Direccion" type="text" v-model="direccionAEditar" >
                    </div>
                </div>
              </div> -->
            </div>

            <div class="row">
              <!-- <div class="col">
                 <div class="form-group mb-3">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                        </div>
                        <input class="form-control" placeholder="Barrio" type="text" v-model="barrioAEditar">
                    </div>
                 </div>
              </div> -->
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

            </div>
        </div>
            <footersia></footersia>
        </div>
        
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
    
        this.getDocentes();
        
    },
    data(){
        return{   
            docentes: [],
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

        }
    },
    methods: {



     getDocentes(){

         axios.get(`${constants.DOCENTES}`)
            .then(res => {
                this.docentes = res.data;
            }) 
     },

     editarDocente(indice, index){
        axios.get(`${constants.DOCENTES}/${index}`)
            .then(res => {
                console.log(res.data)
                this.idToEdit = index;
                this.nombreAEditar = res.data.nombres;
                this.apellidoAEditar = res.data.apellidos;
                this.documentoAEditar = res.data.documento;
                this.celularAEditar = res.data.celular;
            })
     },

     modificarDocente(){

         axios.put(`${constants.DOCENTES}/${this.idToEdit}`, {
           nombres: this.nombreAEditar,
           apellidos: this.apellidoAEditar,
           doumento: this.documentoAEditar,
           celular: this.celularAEditar,
           
         })
         .then( res => {
           console.log(res.data)
           Swal.fire('Edición Realizada','Se realizó la actualización con éxito ','success')   
           
           this.getDocentes(); 
           $('#modal-form').modal('hide')   

         })

     },

      eliminarDocente(indice){
          Swal.fire({
              title: 'Está seguro de hacer la eliminación',
              text: "Recuerde que no podrá recuperar el contenido del Docente",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Eliminar',
              cancelButtonText: 'Cancelar'
            }).then((result) => {
              if (result.value) {
                console.log(result)
                axios.delete(`${constants.DOCENTES}/${indice}`)
                .then(res => {
                  this.getDocentes();

               });

                Swal.fire(
                  'Datos del Docente Eliminados',
                  'El registro ha sido eliminado de la base de datos',
                  'success'
                );
                
              }
            })

            
        }

   },
   computed: {
    
       getDocentesCurso(){
           return this.docentes.filter(alumno => alumno.nombres.toLowerCase().includes(this.filtroNombre.toLowerCase()) )
       }
   }

}
</script>

<style>

</style>