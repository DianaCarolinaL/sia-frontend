<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>

 <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-xl-7 mb-5 mb-xl-0">
          <div class="card shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                <div class="d-flex flex-row justify-content-between align-items-center">
                     <h2 class="mb-0">Información del Evento</h2>
                     <h3 class="mb-0">23 de Abril de 2019</h3>
                </div>
                 
                </div>
             
              </div>
            </div>
            <div class="card-body">
                <div class="d-flex flex-row justify-content-between">
                    <img src="../../assets/img/theme/dia-libro.jpg" style="border-radius:50%;" alt="Logo dia libro">
                    <div class="text-right">
                        <h3>Día del libro</h3>
                        <p>La institución Educativa Maria concepción Loperena invita a la jornada de la Mañana a celebrar el día del libro con la participación de la 9 edición del Cuento</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5">
          <div class="card shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                      <h2 class="mb-0">Próximos Eventos</h2>
                </div>
              </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                   <table class="table align-items-center table-hover">
                      <thead class="thead-light">
                         <tr>
                            <th scope="col" class="text-center">Nombre del Evento</th>
                         </tr>
                      </thead>
                          <tbody>
                              <tr>
                                  <th scope="row">
                                        <div class="row">
                                            <div class="col-md-4 text-center">
                                              <i class="fas fa-book fa-2x"></i>
                                            </div>
                                            <div class="col-md-8 text-center">
                                               <span class="mb-0 text-sm">Dia del Libro</span>
                                             </div>
                                        </div>
                                  </th>
                              </tr>
                              <tr>
                                  <th scope="row">
                                       <div class="row">
                                            <div class="col-md-4 text-center">
                                              <i class="fas fa-address-card  fa-2x"></i>
                                            </div>
                                            <div class="col-md-8 text-center">
                                               <span class="mb-0 text-sm">Jornada de Carnetización</span>
                                             </div>
                                        </div>
                                  </th>
                              </tr>
                              <tr>
                                  <th scope="row">
                                        <div class="row">
                                            <div class="col-md-4 text-center">
                                              <i class="fas fa-medkit fa-2x"></i>
                                            </div>
                                            <div class="col-md-8 text-center">
                                               <span class="mb-0 text-sm">Jornada de Salud</span> 
                                            </div>
                                        </div>
                                  </th>
                              </tr>    
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
        </div>
      </div>
   
      <!-- Footer -->
      <footersia></footersia>
     
    </div>




    </div>
</template>

<script>
import footersia from "../Alumno/Footer.vue"
export default {
  components: {
    footersia
  }
    
}
</script>

<style>

</style>