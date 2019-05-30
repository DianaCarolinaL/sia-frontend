<template>
    <div>
<div class="bg-default">
  <div class="main-content">
    <!-- Navbar -->
    <nav class="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
      <div class="container px-4">
        <a class="navbar-brand" href="../index.html">
          <img src="../assets/img/brand/siaufps.png"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-collapse-main">
          <!-- Collapse header -->
          <div class="navbar-collapse-header d-md-none">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a href="../index.html">
                  <img src="../assets/img/brand/blue.png">
                </a>
              </div>
              <div class="col-6 collapse-close">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <!-- Navbar items -->
          <ul class="navbar-nav ml-auto">
            
            <li class="nav-item">
              <router-link :to="{ name: 'LoginEstudiante' }" class="nav-link nav-link-icon">
                  <i class="ni ni-single-02"></i>
                  <span class="nav-link-inner--text">Estudiante</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'LoginDocente' }" class="nav-link nav-link-icon">
                  <i class="ni ni-single-02"></i>
                  <span class="nav-link-inner--text">Docente</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'LoginAdmin' }" class="nav-link nav-link-icon">
                  <i class="ni ni-single-02"></i>
                  <span class="nav-link-inner--text">Administrativo</span>
              </router-link>
              
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <!-- Header -->
    <div class="header bg-gradient-primary py-7 py-lg-8">
      <div class="container">
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
        <router-view></router-view>
  </div>
 

</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
