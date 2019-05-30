<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>

<div class="col-xl-8 order-xl-1 mt-5">
          <div class="card bg-secondary shadow">
            <div class="card-header bg-white border-3">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Mi Perfil</h3>
                </div>
                
              </div>
            </div>
            <div class="card-body">
              <form>
                <h6 class="heading-small text-muted ">Informacion Docente</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6 ">
                      <div class="form-group">
                        <label class="form-control-label" for="input-Nombres">Nombres</label>
                        <input type="text" id="input-nombres" class="form-control form-control-alternative"  value="Sergio Andres" disabled>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-Apellidos">Apellidos</label>
                        <input type="text" id="input-apellidos" class="form-control form-control-alternative"  value="Perez Martinez " disabled>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-Documento">Documento</label>
                        <input type="number" id="input-Documento" class="form-control form-control-alternative" placeholder="1090678908" disabled>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-Codigo">Codigo</label>
                        <input type="number" id="input-Codigo" class="form-control form-control-alternative" placeholder="Codigo" disabled>
                      </div>
                    </div>
                  </div>
                 <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">Fecha Nacimiento</label>
                        <input type="text" id="input-nacimiento" class="form-control form-control-alternative"  value="05-12-1970" disabled>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-tipo">Tipo de Sangre</label>
                        <input type="text" id="input-tipo" class="form-control form-control-alternative" value=" A+ " disabled>
                      </div>
                    </div>
                  </div>


                </div>
                <hr class="my-2" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Informacion Contacto </h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                       <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">Dirección</label>
                            <input id="input-address" class="form-control form-control-alternative" 
                            placeholder="Home Address" value="Calle 14 # 4-02 " disabled>                     
                     </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-tipo">Barrio</label>
                        <input type="text" id="input-tipo" class="form-control form-control-alternative" value="Ciudad Jardín" disabled>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-telefono">Teléfono</label>
                        <input type="number" id="input-telefono" class="form-control form-control-alternative" value="311234567" disabled>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email">Correo</label>
                        <input type="email" id="input-Correo" class="form-control form-control-alternative" value="SergioAndres@gmail.com" disabled>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-fechaIngreso">Fecha Ingreso</label>
                        <input type="text" id="input-fechaIngreso" class="form-control form-control-alternative" value="21-02-2019" disabled>
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
=======
                
                
>>>>>>> f4770cd2dd15d236a164d150cea2856aeeb15a0a
              </form>
            </div>
          </div>



        </div>
<<<<<<< HEAD
<footersia></footersia> 
=======


     

>>>>>>> f4770cd2dd15d236a164d150cea2856aeeb15a0a
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