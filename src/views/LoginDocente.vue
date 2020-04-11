<template>
     <div class="container mt--8 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary shadow border-0" style="width: 500px;">
          
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <h2>Bienvenido Docente por favor ingrese las credenciales para acceder</h2>
              </div>
              <div class="d-flex justify-content-between">
                  <img src="https://res.cloudinary.com/sigtam/image/upload/v1561634266/icono-docente_l8g5wz.png" alt="logoadmin" height="150" width="150">
                <div class=" d-flex flex-column ml-4">
                <div class="form-group mb-3">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                    </div>
                    <input class="form-control" placeholder="Correo Electronico" type="email" v-model="userEmail">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input class="form-control" placeholder="Contraseña" type="password" v-model="userPass">
                  </div>
                </div>
                <!-- <div class="custom-control custom-control-alternative custom-checkbox">
                  <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
                  <label class="custom-control-label" for=" customCheckLogin">
                    <span class="text-muted">Remember me</span>
                  </label>
                </div> -->
                <div class="text-center">
                  <p class="help-block text-center text-danger"><small>{{emptyData}}</small></p>
                  <button type="button" class="btn btn-primary my-4" @click="initSession()">Iniciar Sesión</button>
                </div>
              </div>
              </div>
             
            </div>
          </div>
         <!--  <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light"><small>Forgot password?</small></a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-light"><small>Create new account</small></a>
            </div>
          </div> -->
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios"
import firebase from "firebase";
import constants from "../config/constants.js"
// import util from '../util/utilities.js'
export default {
  data() {
    return {
       userEmail: '',
       userPass: '',
       emptyData: ''

    }
  },
  computed: {

    // validateFormatEmail(){
    //   return util.validarCorreo(this.userEmail)
    // }
    
  },
  methods:{
    initSession(){

      if(this.userEmail.length === 0 && this.userPass.length === 0){
        this.emptyData = "Debe ingresar un correo y una contraseña para iniciar sesión"
      }
      else if(this.userEmail.length === 0){
         this.emptyData = "Debe ingresar un correo para iniciar sesión"
         
       }else if(this.userPass.length === 0){
         this.emptyData = "Debe ingresar una contraseña para iniciar sesión"
       }else{
         firebase.auth().signInWithEmailAndPassword(this.userEmail, this.userPass)
        .then(user => {
            this.$router.replace('docente');
        })
        .catch((err) => {
          console.log(err)
          this.emptyData = "No se encontró registro de este usuario por favor verifique el correo o contraseña ingresados"
        })
       }
  
    }
  }
}
</script>

<style>

</style>
