<template>
    <div>
      <sidebar-Alumno></sidebar-Alumno>
      <div class="main-content" style="margin-left:250px"> 
      <navbarsia></navbarsia>
      
      
      
         <router-view></router-view>
      </div>
      
    </div>
</template>

<script>

import sidebarAlumno from '../components/Alumno/Sidebar.vue'
import navbarsia from '../components/Alumno/Navbar.vue'

export default {

    components: {
        sidebarAlumno,
        navbarsia
    }

}
</script>

<style>

</style>
