<template>
    <div>
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">
      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Brand -->
      <a class="navbar-brand pt-0" href="./index.html">
        <img src="https://res.cloudinary.com/sigtam/image/upload/v1561634346/siaufps_zcbgjp.png" class="navbar-brand-img" alt="img-logo-sia-ufps">
        <h3 class="text-primary">Docente</h3>
        <h3 class="mt-3">Andrés Joel Carrillo</h3>
      </a>
      <!-- User -->
      <ul class="nav align-items-center d-md-none">
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" src="https://res.cloudinary.com/sigtam/image/upload/v1561634588/team-1-800x800_obh0as.jpg">
              </span>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
            <div class=" dropdown-header noti-title">
              <h6 class="text-overflow m-0">Bienvenido Andres</h6>
            </div>
            <a href="#" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>My profile</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span>Logout</span>
            </a>
          </div>
        </li>
      </ul>
      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="sidenav-collapse-main">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="./index.html">
                <img src="https://res.cloudinary.com/sigtam/image/upload/v1561634373/blue_jcspgj.png">
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'iniciodocente' }" class="nav-link" >
              <i class="ni ni-tv-2 text-primary"></i> Inicio
            </router-link>
          </li>
          <li class="nav-item">
             <router-link :to="{ name: 'infodocente' }" class="nav-link" >
              <i class="ni ni-planet text-blue"></i> Informacion Docente
            </router-link>
            
          </li>
          <li class="nav-item">
             <router-link :to="{ name: 'horariodocente' }" class="nav-link" >
              <i class="ni ni-pin-3 text-orange"></i> Horario de Clases
            </router-link>
           
          </li>
          <li class="nav-item">
             <router-link :to="{ name: 'notasdocente'}" class="nav-link" >
              <i class="ni ni-single-02 text-yellow"></i> Notas
            </router-link>
            
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'asistencia'}" class="nav-link" >
               <i class="ni ni-bullet-list-67 text-red"></i> Asistencia
            </router-link> 
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contenidodocente'}" class="nav-link" >
               <i class="ni ni-key-25 text-info"></i> Contenido Materias
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'materialapoyo'}" class="nav-link" >
               <i class="ni ni-circle-08 text-pink"></i> Material de Apoyo
            </router-link>
          </li>
           <li class="nav-item">
             <router-link :to="{ name: 'asesoriasdocente'}" class="nav-link" >
               <i class="ni ni-circle-08 text-pink"></i> Asesorias
            </router-link>   
          </li>
           <li class="nav-item">
             <router-link :to="{ name: 'tareasdocente'}" class="nav-link" >
               <i class="ni ni-circle-08 text-pink"></i> Tareas
            </router-link>   
          </li>
           <li class="nav-item">
             <router-link :to="{ name: 'reportes'}" class="nav-link" >
               <i class="ni ni-circle-08 text-pink"></i> Reportes
            </router-link>   
          </li>
           <li class="nav-item">
             <router-link :to="{ name: 'citaciones'}" class="nav-link" >
               <i class="ni ni-circle-08 text-pink"></i> Citaciones
            </router-link>   
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

