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
                              <option value="" selected disabled>Seleccione Un Curso</option>
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
                  <div class="d-flex justify-content-around align-items-center">
                    <h2 class="ml-4 mb-4">Listado De Alumnos</h2>
                      <button class="btn btn-icon btn-3 btn-primary" type="button" data-toggle="modal" data-target="#modal-aniadir">
	                      <span class="btn-inner--icon"><i class="fas fa-user-plus"></i></span>
                       <span class="btn-inner--text">Agregar Alumno</span>
                     </button>
                  </div>
                  
                  <div class="table-responsive mt-3">
                    <table class="table align-items-center table-flush">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Nombres</th>
                          <th scope="col">Apellidos</th>
                          <th scope="col">Documento</th>
                          <th scope="col">Correo</th>
                          <th scope="col">Acciones</th>
                          <!-- <th scope="col">Celular</th> -->
                          <th scope="col"></th>
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
                            <h5>{{alumno.correo}}</h5>
                          </td>
                          <td>
                            <button class="btn btn-icon btn-3 btn-success btn-sm" type="button" @click="getDataAcademica(alumno.nombres, alumno.apellidos, alumno.documento)">
	                      <span class="btn-inner--icon"><i class="fas fa-book"></i></span>
                       <span class="btn-inner--text">Desempeño Académico</span>
                     </button>
                          </td>
                          <!-- <td>
                            <h5>{{alumno.celular}}</h5>
                          </td> -->
                          <td>
                            <button class="btn btn-icon btn-2 btn-primary btn-sm" type="button"  data-toggle="modal" data-target="#modal-form" @click="editarAlumno(alumno.id, alumno._id)">
	                            <span class="btn-inner--icon"><i class="far fa-edit"></i></span>	
                            </button>
                             <!-- <button class="btn btn-icon btn-2 btn-success btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Ver Detalles">
	                            <span class="btn-inner--icon"> <i class="fas fa-eye"></i></span>	
                            </button> -->
                            <button class="btn btn-icon btn-2 btn-danger btn-sm" type="button" @click="eliminarAlumno(alumno._id)">
	                            <span class="btn-inner--icon"><i class="fas fa-trash-alt"></i></span>	
                            </button>
                           

                           
                           
                              <button class="btn btn-icon btn-3 btn-success btn-sm" type="button" data-toggle="modal" data-target="#modal-view" @click="obtenerAcudiente(alumno.id)">
	                              <span class="btn-inner--icon"><i class="fas fa-user-lock"></i></span>
	                              <!-- <span class="btn-inner--text">Ver Detalles</span> -->
                              </button>
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



                          
  
                  <template v-if="loadBoletin">

                  <div class="row mt-5 pl-3 pr-3">
                         <div class="col-md-12">
                           <h3 class="text-dark">Desempeño Academico del Estudiante</h3>
                         </div>
                         
                  </div> 
                        
                  <div class="row mt-2 pl-3 pr-3">
                         <div class="col-md-4">
                           <p class="font-weight-bold mb-2 text-dark">Nombre Completo del Estudiante</p>
                           <p>{{nombreSeleccionado}} {{apellidoSeleccionado}}</p>
                         </div>
                         <div class="col-md-2">
                           <p class="font-weight-bold mb-2 text-dark">N° Identificacion</p>
                           <p class="mt-0 mb-0">{{documentoSeleccionado}}</p>
                         </div>
                         <div class="col-md-2">
                           <p class="font-weight-bold mb-2 text-dark">Grado</p>
                           <p class="mt-0 mb-0">11-A</p>
                         </div>
                         <div class="col-md-4">
                           <p class="font-weight-bold mb-2 text-dark">Seleccione un periodo</p>
                           <select class="form-control" @change="getActividaesMaterias(idPeriodo)" v-model="idPeriodo">
                             <option selected disabled value="Seleccione una Categoria">Seleccione un Periodo</option>
                             <option value="1">Primer Periodo</option>
                             <option value="2">Segundo Periodo</option>
                             <option value="3">Tercer Periodo</option>
                             <option value="4">Cuarto Periodo</option>
                           </select>
                         </div>
                  </div>

                  <div class="row pr-3 pl-3 mt-3">
                    <div class="col-md-12">
                      <template v-if="nombresMaterias.length > 0">
                        <p class="font-weight-bold mb-2 text-dark pl-2">Materias Vistas durante el Periodo</p>
                        <table class="table table-hover" id="tablaprint">
                           <template v-for="(item, index) in nombresMaterias" >
                            <thead :key="index">
                              <tr class="table-primary">
                                <th colspan="5">{{item.nombre}} - Definitiva: 4.2</th>
                              </tr>
                              <tr>
                                <th>Tema</th>
                                <!-- <th>Descripción</th> -->
                                <th>Indicaciones</th>
                                <th>Fecha</th>
                                <th>Nota</th>
                               
                              </tr>
                            </thead>
                            <tbody :key="item.id" >
                              <tr v-for="(value, index) in item.actividades" :key="index">
                                <th scope="row">{{value.tema}}</th>
                                <!-- <td>{{value.descripcion}}</td> -->
                                <td>{{value.indicaciones}}</td>
                                <td>{{value.fecha}}</td>
                                <td>{{value.nota}}</td>
                              </tr>
                             
                            </tbody>
                            </template>
                          </table>
                      </template>
                      
                        
                          
                    </div>
                  </div>

                  <div>
                    <button class="btn btn-primary fa-pull-right mt-2 mr-3" @click="generarBoletin()">Generar Boletin</button>
                  </div>

                  </template>
                </div>
              </div>
            </div>
            <!-- <pre>{{$data}}</pre> -->
        </div>

<!-- Modal -->
<div class="modal fade" id="modal-view" tabindex="-1" role="dialog" aria-labelledby="modal-view" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="text-center">Datos del Acudiente del Alumno</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputnombres">Nombres</label>
              <input type="text" class="form-control" id="inputnombres" disabled v-model="nombreAcudienteAlumno">
            </div>
            <div class="form-group col-md-6">
              <label for="inputapellidos">Apellidos</label>
              <input type="text" class="form-control" id="inputapellidos" disabled v-model="apellidoAcudienteAlumno">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputdocumento">Documento</label>
              <input type="text" class="form-control" id="inputdocumento"  disabled v-model="documentoAcudienteAlumno">
            </div>
            <div class="form-group col-md-6">
              <label for="inputparentezco">Parentezco</label>
              <input type="text" class="form-control" id="inputparentezco"  disabled v-model="parentezcoAcudienteAlumno">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputcelular">Celular</label>
              <input type="text" class="form-control" id="inputcelular" disabled v-model="celularAcudienteAlumno">
            </div>
            <div class="form-group col-md-6">
              <label for="inputcorreo">Barrio</label>
              <input type="text" class="form-control" id="inputcorreo" disabled v-model="barrioAcudienteAlumno">
            </div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

 <div class="modal fade" id="modal-aniadir" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
        	
<div class="modal-body p-0">
            	
                	
   <div class="card bg-secondary shadow border-0">
   
    <div class="card-body px-lg-5 py-lg-5">
        <!-- <div class="text-center text-muted mb-4">
            <h2 class="text-center">Agregar Alumno</h2>
            <div class="d-flex justify-content-around mt-3">
                <h4 class="text-left"><span class="badge badge-circle badge-success">1</span> <span class="ml-3">Ingrese los Datos Principales del Alumno</span> </h4>
                <h4 class="text-left"><span class="badge badge-circle badge-success">2</span> <span class="ml-3">Ingrese los Datos Secundarios del Alumno</span> </h4>
            </div>
            <div class="d-flex justify-content-around mt-3">
                <h4 class="text-left"><span class="badge badge-circle badge-success">3</span> <span class="ml-3">Ingrese los Datos del Acudiente</span> </h4>
                <h4 class="text-left"><span class="badge badge-circle badge-success">4</span> <span class="ml-3">Con los datos completos de click en crear Alumno</span> </h4>
            </div>
            
        </div> -->
        <h2 class="text-center">Agregar Alumno</h2>
        <form role="form" @submit.prevent="crearAlumno()">

          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Datos Principales del Alumno</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Datos Secundarios del Alumno</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Datos del Acudiente</a>
            </li>
            
           
          </ul>
          <div class="tab-content" id="myTabContent">

            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

              <div class="d-flex flex-column justify-content-center align-items-center mt-3">
                  <img src="https://res.cloudinary.com/sigtam/image/upload/v1561634465/imagen-perfil-alumno_jbfhc6.jpg" class="rounded-circle mr-3" alt="Img Perfil" width="100" height="100" style="border: solid #5e72e4 1px">
                  <input class="mt-2" type="file"><p class="text-muted"> Imagen del Alumno (250x250 pixeles)</p>
              </div>

              <div class="row">
                <div class="col">
                  <div class="form-group">
                       <div class="input-group input-group-alternative">
                           <div class="input-group-prepend">
                               <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                           </div>
                           <input class="form-control" placeholder="Nombres" type="text" v-model="nombreNuevo" required>
                       </div>
                    </div>
                </div>

                <div class="col">
                   <div class="form-group">
                       <div class="input-group input-group-alternative">
                           <div class="input-group-prepend">
                               <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                           </div>
                           <input class="form-control" placeholder="Apellidos" type="text" v-model="apellidoNuevo" required>
                    </div>
                  </div> 
                </div>            
              </div>

               <div class="row">
                  <div class="col">
                     <div class="form-group">
                        <div class="input-group input-group-alternative">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-badge"></i></span>
                            </div>
                            <input class="form-control" placeholder="Documento" type="text" v-model="documentoNuevo" required>
                        </div>
                     </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                       <div class="input-group input-group-alternative">
                           <div class="input-group-prepend">
                               <span class="input-group-text"><i class="fas fa-envelope-square"></i></span>
                           </div>
                           <input class="form-control" placeholder="Correo" type="email" v-model="correoNuevo" required>
                       </div>
                    </div>
                  </div>

                  <div class="col">
                    <div class="form-group">
                      <div class="input-group input-group-alternative">
                          <div class="input-group-prepend">
                              <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                          </div>
                          <input class="form-control" placeholder="Celular" type="text" v-model="celularNuevo" required>
                      </div>
                    </div>
                  </div>
                </div>

      
            

            <div class="row mt-3">
              <div class="col">
               <div class="form-group">
                <select class="form-control"  @change="getIndiceToCreate(indiceToCreate)" v-model="indiceToCreate">
                  <option value="" selected disabled>Seleccione Un Curso</option>
                  <option v-for="curso in cursos" :key="curso.nombre"  :value="curso.id">{{ curso.nombre }}</option>
                </select>
               </div> 
              </div>
            </div>

            </div>

            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                  <div class="row mt-3">
                  <div class="col">
                 <div class="form-group mb-3">
                    <h4>Fecha de Nacimiento</h4>
                    <div class="input-group input-group-alternative">
                        <!-- <div class="input-group-prepend">
                            <span class="input-group-text"><i class="far fa-calendar-plus"></i></span>
                        </div> -->
                        <input class="form-control" placeholder="Fecha de Nacimiento" type="date" v-model="fechaNacimiento" required>
                    </div>
                 </div>
              </div>
              <div class="col">
                <div class="form-group">
                    <h4>Fecha de Ingreso</h4>
                    <div class="input-group input-group-alternative">
                        <!-- <div class="input-group-prepend">
                            <span class="input-group-text"><i class="far fa-calendar-plus"></i></span>
                        </div> -->
                        <input class="form-control" placeholder="Fecha de Ingreso" type="date" v-model="fechaIngreso" required>
                    </div>
                </div>
              </div>
              <div class="col">
                 <div class="form-group mb-3">
                   <h4>Barrio en el que reside</h4>
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                        </div>
                        <input class="form-control" placeholder="Barrio" type="text" v-model="barrioNuevo" required>
                    </div>
                 </div>
              </div>
            </div>
       

           

            <div class="row">

              <div class="col">
                 <div class="form-group mb-3">
                   <h4>Direccion de la Vivienda</h4>
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                        </div>
                        <input class="form-control" placeholder="Direccion" type="text" v-model="direccionNuevo" required>
                    </div>
                 </div>
              </div>

              <div class="col">
                <h4>Tipo de Sangre</h4>
                <select class="form-control"  @change="getTipoSangre(tipoSangreSeleccionado)" v-model="tipoSangreSeleccionado">
                  <option value="" selected disabled>Seleccione uno</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>    
                </select>
              </div>
              
              <div class="col">
                <h4>Genero</h4>
                <select class="form-control"  @change="getGenero(generoSeleccionado)" v-model="generoSeleccionado">
                  <option value="" selected disabled>Seleccione uno</option>
                  <option value="MASCULINO">MASCULINO</option>
                  <option value="FEMENINO">FEMENINO</option>   
                </select>
              </div>

        
              
            </div>

            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="row mt-5">
                 <div class="col-md-8 pl-0">
                  <!-- <div class="form-group">
                    <div class="input-group input-group-alternative mb-4">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                      </div>
                      <input class="form-control form-control-alternative" placeholder="Ingrese el N° de Documento del Acudiente" type="text">
                    </div>
                  </div> -->
                  <template v-if="!nuevoAcudiente">

                    <form class="form-inline" @submit.prevent="buscarExistente()">
                      <div class="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" class="sr-only">Documento</label>
                        <input type="text" class="form-control" id="inputPassword2" placeholder="N° de Documento" v-model="documentoABuscar">
                      </div>
                      <button type="submit" class="btn btn-primary mb-2">Buscar Acudiente</button>
                    </form>
                    <template v-if="!existeAcudiente">
                      <p class="mb-0 text-danger pl-3">No existe Acudiente con ese número de documento</p>
                    </template>
                    
                   
                  </template>
                  

                </div>
                <div class="col-md-4">
                  <div class="form-check mt-2">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="nuevoAcudiente">
                    <label class="form-check-label" for="defaultCheck1">
                      ¿Crear Acudiente Nuevo?
                    </label>
                  </div>
                </div>
              </div>

              <template v-if="nuevoAcudiente">
                  <div class="d-flex justify-content-between mt-5">
                    <h3 class="mt-3">Crear Nuevo Acudiente</h3>
                    <button class="btn btn-primary" @click="crearNuevoAcudiente()">Crear Acudiente</button>
                  </div>
                   <template v-if="creacionNuevoAcudiente">
                      <p class="mb-0 text-success">¡Acudiente Creado Exitosamente!</p>
                    </template>

                  
                  
                <div class="row mt-3">
                <div class="col">
                  <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                        </div>
                        <input class="form-control" placeholder="Nombres" type="text" v-model="nombreNuevoAcudiente" required>
                    </div>
                  </div> 
                </div>

                <div class="col">
                  <div class="form-group">
                       <div class="input-group input-group-alternative">
                           <div class="input-group-prepend">
                               <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                           </div>
                           <input class="form-control" placeholder="Apellidos" type="text" v-model="apellidoNuevoAcudiente" required>
                       </div>
                    </div>
                </div>

                
              </div>

               <div class="row">
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-badge"></i></span>
                        </div>
                        <input class="form-control" placeholder="Documento" type="text" v-model="documentoNuevoAcudiente" required>
                    </div>
                 </div>
                </div>
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                        </div>
                        <input class="form-control" placeholder="Celular" type="text" v-model="celularNuevoAcudiente" required>
                    </div>
                </div>
                </div>
              </div>   

            <div class="row">
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                        </div>
                        <input class="form-control" placeholder="Celular Opcional" type="text" v-model="celularOpcionalNuevo">
                    </div>
                 </div>
                </div>
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                        </div>
                        <input class="form-control" placeholder="Celular Trabajo" type="text" v-model="celularTrabajoNuevo">
                    </div>
                </div>
                </div>
              </div> 

              <div class="row">
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                        </div>
                        <input class="form-control" placeholder="Barrio" type="text" v-model="barrioNuevoAcudiente">
                    </div>
                 </div>
                </div>
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                        </div>
                        <input class="form-control" placeholder="Dirección" type="text" v-model="direccionNuevoAcudiente">
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">

                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-badge"></i></span>
                        </div>
                        <input class="form-control" placeholder="Parentezco con el Estudiante (Padre, Madre, Abuelo, Tio)" type="text" v-model="parentezco">
                    </div>
                  </div>

                </div>
              </div>

              
                
              </template>

              <template v-else>
                <h3 class="mt-3">Datos del Acudiente</h3>
                <div class="row mt-3">
                
                <div class="col">
                  <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                        </div>
                        <input class="form-control" placeholder="Nombres" type="text" v-model="nombreExistenteAcudiente" disabled>
                    </div>
                  </div> 
                </div>

                <div class="col">
                  <div class="form-group">
                       <div class="input-group input-group-alternative">
                           <div class="input-group-prepend">
                               <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                           </div>
                           <input class="form-control" placeholder="Apellidos" type="text" v-model="apellidoExistenteAcudiente" disabled>
                       </div>
                    </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-badge"></i></span>
                        </div>
                        <input class="form-control" placeholder="Documento" type="text" v-model="documentoExistenteAcudiente" disabled>
                    </div>
                 </div>
                </div>
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                        </div>
                        <input class="form-control" placeholder="Celular" type="text" v-model="celularExistenteAcudiente" disabled>
                    </div>
                </div>
                </div>
              </div>   

            <div class="row">
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                        </div>
                        <input class="form-control" placeholder="Celular Opcional" type="text" v-model="celularOpcionalExistente" disabled>
                    </div>
                 </div>
                </div>
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                        </div>
                        <input class="form-control" placeholder="Celular Trabajo" type="text" v-model="celularTrabajoExistente" disabled>
                    </div>
                </div>
                </div>
              </div> 

              <div class="row">
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                        </div>
                        <input class="form-control" placeholder="Barrio" type="text" v-model="barrioExistenteAcudiente" disabled>
                    </div>
                 </div>
                </div>
                <div class="col">
                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                        </div>
                        <input class="form-control" placeholder="Dirección" type="text" v-model="direccionExistenteAcudiente" disabled>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">

                   <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-badge"></i></span>
                        </div>
                        <input class="form-control" placeholder="Parentezco con el Estudiante (Padre, Madre, Abuelo, Tio)" type="text" v-model="parentezco">
                    </div>
                  </div>

                </div>
              </div>
                
              </template>
              
              
        
                   
                

                 

               
              
            </div>
            
          </div>
         
           

            <div class="d-flex justify-content-around align-items-center">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-primary my-4">Crear Alumno</button>
            </div>
        </form>
    </div>
   </div>



                
            </div>
            
        </div>
    </div>
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
                        <input class="form-control" placeholder="Nombres" type="text" v-model="nombreAEditar" required>
                    </div>
                 </div>
              </div>
              <div class="col">
                <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                        </div>
                        <input class="form-control" placeholder="Apellidos" type="text" v-model="apellidoAEditar" required>
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
                        <input class="form-control" placeholder="Documento" type="text" v-model="documentoAEditar" >
                    </div>
                 </div>
              </div>
              <div class="col">
                <div class="form-group">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-envelope-square"></i></span>
                        </div>
                        <input class="form-control" placeholder="Direccion" type="email" v-model="correoAEditar">
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
  
      <!-- <pre>{{$data}}</pre> -->
        <footersia></footersia>
   </div>
</template>

<script>
import footersia from './Footer.vue'
import axios from "axios"
import constants from "../../config/constants.js"
import $ from "jquery";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import html2canvas from "html2canvas";

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
            indiceToCreate: '', 
            cursos: [],
            alumnos: [],
            indice: 1,
            idToEdit: 0,
            nuevoAcudiente: false, 
            
            filtroNombre: '',  
            nombreAEditar: '',
            apellidoAEditar: '',  
            documentoAEditar: '',
            correoAEditar: '',
            barrioAEditar: '',
            celularAEditar: '',
            currentCourse: '',
            nombreNuevo: '',
            apellidoNuevo: '',  
            documentoNuevo: '',
            correoNuevo: '',
            direccionNuevo: '',
            barrioNuevo: '',
            celularNuevo: '',
            tipoSangreSeleccionado: '',
            generoSeleccionado: '',
            fechaNacimiento: '',
            fechaIngreso: '',

            idPeriodo: '',
            nombresMaterias: [],

            nombreAcudienteAlumno: '',
            apellidoAcudienteAlumno: '',
            barrioAcudienteAlumno: '',
            celularAcudienteAlumno: '',
            documentoAcudienteAlumno: '',
            nombreAcudienteAlumno: '',
            parentezcoAcudienteAlumno: '',


            

            nombreNuevoAcudiente: '',
            apellidoNuevoAcudiente: '',  
            documentoNuevoAcudiente: '',
            celularNuevoAcudiente: '',
            celularOpcionalNuevo:'',
            celularTrabajoNuevo: '',
            barrioNuevoAcudiente: '',
            direccionNuevoAcudiente: '',
            parentezco: '',
            materiasActividades: [],

            nombreExistenteAcudiente: '',
            apellidoExistenteAcudiente: '',  
            documentoExistenteAcudiente: '',
            celularExistenteAcudiente: '',
            celularOpcionalExistente:'',
            celularTrabajoExistente: '',
            barrioExistenteAcudiente: '',
            direccionExistenteAcudiente: '',
            parentezcoExistente: '',
            loadBoletin: false,
            documentoABuscar: '',
            existeAcudiente: true,
            creacionNuevoAcudiente: false,
            idAcudienteSeleccionado: '',

            nombreSeleccionado: '',
            apellidoSeleccionado: '',
            documentoSeleccionado: ''

            
}
    },
    methods: {

      generarBoletin(){
         var doc = new jsPDF('p', 'pt');

       let dataimage = "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";
       doc.addImage(dataimage, 'JPEG', 40, 30, 140, 30)
       doc.setFontSize(12)
       doc.setFont("helvetica");
       doc.text(40, 100, `Nombre Completo del Alumno`);
       doc.text(40, 120, `${this.nombreSeleccionado} ${this.apellidoSeleccionado}`);

       doc.text(240, 100, `N° Identificacion`);
       doc.text(240, 120, `${this.documentoSeleccionado}`);

       doc.text(350, 100, `Grado`);
       doc.text(350, 120, `11-A`);

       doc.text(440, 100, `Periodo`);
       doc.text(440, 120, `PRIMERO`);


       doc.autoTable(
        { html: '#tablaprint',
          margin: {top: 220, right: 30, bottom: 0, left: 30} });
       doc.save(`boletin.pdf`);
      },

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

     getIndiceCurso(indiceRecibido){
       
        axios.get(`${constants.ALUMNOS}/all/${indiceRecibido}`)
            .then(res => {
                this.alumnos = res.data;
                console.log(this.alumnos)
            }) 
     },

     buscarExistente(){
       axios.post(`${constants.ACUDIENTES}/documento/${this.documentoABuscar}`)
       .then( res => {

         if(res.data.length > 0){

            this.existeAcudiente = true;
            this.nombreExistenteAcudiente = res.data[0].nombres;
            this.apellidoExistenteAcudiente = res.data[0].apellidos
            this.documentoExistenteAcudiente = res.data[0].documento;
            this.celularExistenteAcudiente = res.data[0].celular;
            this.celularOpcionalExistente = res.data[0].celularOpcional;
            this.celularTrabajoExistente = res.data[0].celularTrabajo;
            this.barrioExistenteAcudiente = res.data[0].barrio;
            this.direccionExistenteAcudiente = res.data[0].direccion;
            this.idAcudienteSeleccionado = res.data[0].id;
            console.log(this.idAcudienteSeleccionado)

         }else {

           this.existeAcudiente = false;
           this.nombreExistenteAcudiente = "";
           this.apellidoExistenteAcudiente = "";
           this.documentoExistenteAcudiente = "";
           this.celularExistenteAcudiente = "";
           this.celularOpcionalExistente = "";
           this.celularTrabajoExistente = "";
           this.barrioExistenteAcudiente = "";
           this.direccionExistenteAcudiente = "";
           console.log(res.data[0])

         }
         
         
         

       })
     },

     getGenero(generoSeleccionado){
       console.log(generoSeleccionado)
     },

     getTipoSangre(tipoSangreSeleccionado){
       console.log(tipoSangreSeleccionado)
     },

     getIndiceToCreate(indiceCourse){
       console.log(indiceCourse)
     },

     crearNuevoAcudiente(){

         axios.post(`${constants.ACUDIENTES}`, {
          
          nombres: this.nombreNuevoAcudiente,
          apellidos: this.apellidoNuevoAcudiente,
          documento: this.documentoNuevoAcudiente,
          direccion: this.direccionNuevoAcudiente,
          barrio: this.barrioNuevoAcudiente,
          celular: this.celularNuevoAcudiente,
          celularOpcional: this.celularOpcionalNuevo,
          celularTrabajo: this.celularTrabajoNuevo,
          parentezco: this.parentezco
       })
       .then(res => {

            this.creacionNuevoAcudiente = true;
            axios.post(`${constants.ACUDIENTES}/documento/${this.documentoNuevoAcudiente}`)
            .then(res => {
              this.idAcudienteSeleccionado = res.data[0].id;
              console.log("id acudiente creado", this.idAcudienteSeleccionado);
            })


       }) 


     },

     crearAlumno(){
       axios.post(`${constants.ALUMNOS}`, {
          correo: this.correoNuevo,
          nombres: this.nombreNuevo,
          apellidos: this.apellidoNuevo,
          documento: this.documentoNuevo,
          idCurso: this.indiceToCreate,
          tipoSangre: this.tipoSangreSeleccionado,
          genero: this.generoSeleccionado,
          fechaIngreso: this.fechaIngreso,
          fechaNacimiento: this.fechaNacimiento,
          direccion: this.direccionNuevo,
          barrio: this.barrioNuevo,
          celular: this.celularNuevo,
          idAcudiente: this.idAcudienteSeleccionado
       })
            .then(res => {
                Swal.fire(
                  'Alumno Creado Correctamente',
                  'El registro ha sido creado exitosamente',
                  'success'
                );

                  

                 this.initCursos(this.indiceToCreate);
                 $('#modal-aniadir').modal('hide')
            }) 
     },
     editarAlumno(indice, index){
       axios.get(`${constants.ALUMNOS}/${indice}`)
            .then(res => {
           
                this.idToEdit = index;
                this.nombreAEditar = res.data[0].nombres;
                this.apellidoAEditar = res.data[0].apellidos;
                this.documentoAEditar = res.data[0].documento;
                this.correoAEditar = res.data[0].correo;
                this.barrioAEditar = res.data[0].barrio;
                this.celularAEditar = res.data[0].celular;
            })
     },

     modificarAlumno(){
       axios.put(`${constants.ALUMNOS}/${this.idToEdit}`, {
           nombres: this.nombreAEditar,
           apellidos: this.apellidoAEditar,
           doumento: this.documentoAEditar,
           correo: this.correoAEditar,
           barrio: this.barrioAEditar,
           celular: this.celularAEditar,
           
         })
         .then( res => {
           console.log(res.data)
           Swal.fire('Edición Realizada','Se realizó la actualización con éxito ','success')   
           
           this.initCursos(this.indice);
           this.cleanData();
           $('#modal-form').modal('hide')   

         })
     },

     
       eliminarAlumno(indice){
          Swal.fire({
              title: 'Está seguro de hacer dar de Baja el Alumno',
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
                axios.delete(`${constants.ALUMNOS}/${indice}`)
                .then(res => {
                  this.initCursos(this.indice)
                  console.log(res)
               });

                Swal.fire(
                  'Datos del Alumno Eliminados',
                  'El registro ha sido eliminado de la base de datos',
                  'success'
                );
                
              }
            })

            
        },

        obtenerAcudiente(idAlumno){

          axios.get(`${constants.ALUMNOS}/acudienteAlumno/${idAlumno}`).then(res=> {
            this.nombreAcudienteAlumno = res.data[0].nombreAcudiente;
            this.barrioAcudienteAlumno = res.data[0].barrioAcudiente;
            this.celularAcudienteAlumno = res.data[0].celularAcudiente;
            this.documentoAcudienteAlumno = res.data[0].documentoAcudiente;
            this.apellidoAcudienteAlumno = res.data[0].apellidoAcudiente; 
            this.parentezcoAcudienteAlumno = res.data[0].parentezcoAcudiente;
          })
        },

        getActividaesMaterias(id){

          axios.get(`${constants.ACTIVIDADES}/actividadMateria/${id}`).then(res=> {
            
           

           this.nombresMaterias.push({nombre:'Matematicas', actividades: []}, {nombre: 'Español', actividades: []})
           res.data.forEach(element => {
             if(element.nombreMateria === "Matematica"){

               this.nombresMaterias[0].actividades.push(element)

             } else{

               this.nombresMaterias[1].actividades.push(element)
             }
           })

           console.log(this.nombresMaterias);
            
          })
          
        },

        getDataAcademica(nombres, apellidos, documento){

          this.loadBoletin = true;
          this.nombreSeleccionado = nombres;
          this.apellidoSeleccionado = apellidos;
          this.documentoSeleccionado = documento;


        },
        cleanData(){
                  this.correoNuevo = "";
                  this.nombreNuevo = "";
                  this.apellidoNuevo = "";
                  this.documentoNuevo = "";
                  this.indiceToCreate = "";
                  this.tipoSangreSeleccionado = "";
                  this.generoSeleccionado = "";
                  this.fechaIngreso = "";
                  this.fechaNacimiento = "";
                  this.direccionNuevo = "";
                  this.barrioNuevo = "";
                  this.celularNuevo = "";
                  this.idAcudienteSeleccionado = ""
        }

   },
   computed: {
    
       getAlumnosCurso(){
           return this.alumnos.filter(alumno => alumno.nombres.toLowerCase().includes(this.filtroNombre.toLowerCase()) )
       }
   }

}
</script>

<style scoped>

.table td, .table th {
    white-space: normal !important;
}

</style>