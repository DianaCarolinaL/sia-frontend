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
        <img src="../../assets/img/brand/siaufps.png" class="navbar-brand-img" alt="img-logo-sia-ufps">
        <h3 class="text-primary">Administrativo</h3>
        <h3 class="mt-3">Magaly Mancilla Guillen</h3>
      </a>
      <!-- User -->
      <ul class="nav align-items-center d-md-none">
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" src="../../assets/img/theme/team-1-800x800.jpg">
              </span>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
            <div class=" dropdown-header noti-title">
              <h6 class="text-overflow m-0">Bienvenida Magaly</h6>
            </div>
            <a href="#" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>My perfil</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span>Cerrar Sesión</span>
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
                <img src="../../assets/img/brand/blue.png">
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

        <!-- Navegación -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'gestionCursos' }" class="nav-link" >
              <i class="fas fa-bookmark text-primary"></i> Gestion de Cursos
            </router-link>
          </li>
          <li class="nav-item">
             <router-link :to="{ name: 'gestionAlumnos' }" class="nav-link" >
              <i class="fas fa-user-graduate"></i> Gestión Alumnos
            </router-link>
            
          </li>
          <li class="nav-item">
             <router-link :to="{ name: 'gestionDocentes' }" class="nav-link" >
              <i class="fas fa-user-tie text-orange"></i>Gestión Docentes
            </router-link>
           
          </li>
          <li class="nav-item">
             <router-link :to="{ name: 'gestionAcudientes'}" class="nav-link" >
              <i class="fas fa-users text-blue"></i>  Gestión Acudientes
            </router-link>        
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'gestionBoletines'}" class="nav-link" >
              <i class="far fa-clipboard text-red"></i> Gestion Notas 
            </router-link> 
          </li>
        </ul>
        <!-- Divider -->
        <!-- <hr class="my-3"> -->
        <!-- Heading -->
        <!-- <h6 class="navbar-heading text-muted">Documentation</h6> -->
        <!-- Navigation -->
        <!-- <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html">
              <i class="ni ni-spaceship"></i> Getting started
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html">
              <i class="ni ni-palette"></i> Foundation
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html">
              <i class="ni ni-ui-04"></i> Components
            </a>
          </li>
        </ul> -->
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
