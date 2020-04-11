<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>
        <div class="container-fluid mt-7">
        <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="https://res.cloudinary.com/sigtam/image/upload/v1561634678/nina-adolescente_vk8vs4.jpg" class="rounded-circle">
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <!-- <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-sm btn-info mr-4">Connect</a>
                <a href="#" class="btn btn-sm btn-default float-right">Message</a>
              </div> -->
            </div>
            <div class="card-body pt-0 pt-md-5">
              <div class="row">
                <div class="col">
                   <div class="text-center mt-5">
                <h3>
                  Diana Lopez<span class="font-weight-light">, 16</span>
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Cúcuta Colombia
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>Institución Educativa María Concepción Loperena
                </div>
              </div>
                  <div class="card-profile-stats d-flex justify-content-center mt-md-1">
                    <div>
                      <span class="heading text-primary">Grado</span>
                      <span class="heading">7°</span>
                    </div>
                    <div>
                      <span class="heading text-primary">Grupo</span>
                      <span class="heading">A</span>
                      
                    </div>
        
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div class="col-xl-8 order-xl-1">
          <div class="card bg-secondary shadow">

            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Datos Personales</a>
                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Datos de Ubicación</a>
                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Datos del Acudiente</a>
              </div>
            </nav>

            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="card-header bg-white border-0">
            
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Información Personal</h3>
                </div>
                <!-- <div class="col-4 text-right">
                  <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                </div> -->
              </div>
            </div>
            <div class="card-body">
              <form>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-nombres">Nombres</label>
                        <input type="text" id="input-nombres" class="form-control form-control-alternative"  value="Diana Carolina" disabled>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-apellidos">Apellidos</label>
                        <input type="text" id="input-apellidos" class="form-control form-control-alternative" value="Lopez Bermont" disabled>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-documento">Documento</label>
                        <input type="text" id="input-documento" class="form-control form-control-alternative" placeholder="Username" value="1090483192" disabled>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-codigo">Código</label>
                        <input type="text" id="input-codigo" class="form-control form-control-alternative" value="1151139" disabled>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-curso">Curso</label>
                        <input type="text" id="input-curso" class="form-control form-control-alternative"  value="7-A" disabled>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-tipo">Tipo de Sangre</label>
                        <input type="text" id="input-tipo" class="form-control form-control-alternative" value=" O + " disabled>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-nacimiento">Fecha de Nacimiento</label>
                        <input type="text" id="input-nacimiento" class="form-control form-control-alternative"  value="03-10-2003" disabled>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-ingreso">Fecha de Ingreso</label>
                        <input type="text" id="input-ingreso" class="form-control form-control-alternative" value="17-01-2012" disabled>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
              </div>
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                 <div class="card-header bg-white border-0">         
                     <div class="row align-items-center">
                       <div class="col-8">
                         <h3 class="mb-0">Datos de Ubicación</h3>
                       </div>
                       <!-- <div class="col-4 text-right">
                         <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                       </div> -->
                     </div>
                    </div>
                    <div class="card-body">
                     <form>
                       <div class="pl-lg-4">
                         <div class="row">
                           <div class="col-lg-6">
                             <div class="form-group">
                               <label class="form-control-label" for="input-documento">Dirección</label>
                               <input type="text" id="input-documento" class="form-control form-control-alternative" value="Cll 14 #12-38" disabled>
                             </div>
                           </div>
                           <div class="col-lg-6">
                             <div class="form-group">
                               <label class="form-control-label" for="input-codigo">Barrio</label>
                               <input type="text" id="input-codigo" class="form-control form-control-alternative" value="El Contento" disabled>
                             </div>
                           </div>
                         </div>
                         <div class="row">
                           <div class="col-lg-6">
                             <div class="form-group">
                               <label class="form-control-label" for="input-curso">Telefono</label>
                               <input type="text" id="input-curso" class="form-control form-control-alternative"  value="3112189120" disabled>
                             </div>
                           </div>
                           <div class="col-lg-6">
                             <div class="form-group">
                               <label class="form-control-label" for="input-tipo">Correo</label>
                               <input type="text" id="input-tipo" class="form-control form-control-alternative" value="dianitalopez03@gmail.com" disabled>
                             </div>
                           </div>
                         </div>
                       </div>
                     </form>
                    </div>
              </div>
              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            <div class="card-header bg-white border-0">
            
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Información del Acudiente</h3>
                </div>
                <!-- <div class="col-4 text-right">
                  <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                </div> -->
              </div>
            </div>
            <div class="card-body">
              <form>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-nombres-acudiente">Nombres</label>
                        <input type="text" id="input-nombres-acudiente" class="form-control form-control-alternative"  value="Andrés Joel" disabled>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-apellidos-acudiente">Apellidos</label>
                        <input type="text" id="input-apellidos-acudiente" class="form-control form-control-alternative" value="Lopez Rodriguez" disabled>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-documento">Documento</label>
                        <input type="text" id="input-documento" class="form-control form-control-alternative"  value="1090483192" disabled>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-parentesco">Parentesco</label>
                        <input type="text" id="input-parentesco" class="form-control form-control-alternative" value="Padre" disabled>
                      </div>
                    </div>
                  </div>
                    <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-celular">Celular</label>
                        <input type="text" id="input-celular" class="form-control form-control-alternative"  value="3102584187" disabled>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-correo">Correo Electronico</label>
                        <input type="email" id="input-correo" class="form-control form-control-alternative" value="andresjoe24@gmail.com" disabled>
                      </div>
                    </div>
                  </div>
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
        
    </div>
</template>

<script>
import footersia from './Footer.vue'
export default {
    components:{
        footersia
    }
}
</script>

<style>

</style>
