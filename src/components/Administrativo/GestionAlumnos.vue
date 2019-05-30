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
                            <h5>{{alumno.correo}}</h5>
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
                             <!-- <button class="btn btn-icon btn-2 btn-success btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Ver Detalles">
	                            <span class="btn-inner--icon"> <i class="fas fa-eye"></i></span>	
                            </button> -->
                            <button class="btn btn-icon btn-2 btn-danger btn-sm" type="button" @click="eliminarAlumno(alumno._id)">
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
                  <img src="../../assets/img/theme/imagen-perfil-alumno.jpg" class="rounded-circle mr-3" alt="Img Perfil" width="100" height="100" style="border: solid #5e72e4 1px">
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
            <!-- <div class="row">
              <div class="col">
                 <div class="form-group mb-3">
                    <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                        </div>
                        <input class="form-control" placeholder="Nombres" type="text" v-model="nombreNuevo" disabled>
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
                 <div class="form-group mb-3">
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
                        <input class="form-control" placeholder="correo" type="email" v-model="correoNuevo" required>
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
                        <input class="form-control" placeholder="Barrio" type="text" v-model="barrioNuevo" required>
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

            <div class="row">
              <div class="col">
                <div class="form-group">
                            <h4 for="exampleFormControlSelect1">Seleccione El Curso</h4>
                            <select class="form-control"  @change="getIndiceToCreate(indiceToCreate)" v-model="indiceToCreate">
                              <option disabled selected value="">Seleccione Un Curso</option>
                              <option v-for="curso in cursos" :key="curso.nombre"  :value="curso.id">{{ curso.nombre }}</option>
                            </select>
                          </div>
              </div>
            </div> -->
           

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
  
      <pre>{{$data}}</pre>
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
            

            nombreNuevoAcudiente: '',
            apellidoNuevoAcudiente: '',  
            documentoNuevoAcudiente: '',
            celularNuevoAcudiente: '',
            celularOpcionalNuevo:'',
            celularTrabajoNuevo: '',
            barrioNuevoAcudiente: '',
            direccionNuevoAcudiente: '',
            parentezco: '',

            nombreExistenteAcudiente: '',
            apellidoExistenteAcudiente: '',  
            documentoExistenteAcudiente: '',
            celularExistenteAcudiente: '',
            celularOpcionalExistente:'',
            celularTrabajoExistente: '',
            barrioExistenteAcudiente: '',
            direccionExistenteAcudiente: '',
            parentezcoExistente: '',
            
            documentoABuscar: '',
            existeAcudiente: true,
            creacionNuevoAcudiente: false,
            idAcudienteSeleccionado: ''
            
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

     getIndiceCurso(indiceRecibido){
       
        axios.get(`${constants.ALUMNOS}all/${indiceRecibido}`)
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
           direccion: this.direccionAEditar,
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

<style>

</style>