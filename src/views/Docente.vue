<template>
    <div>
      <sidebar-Docente></sidebar-Docente>
      <div class="main-content" style="margin-left:250px"> 
         <navbardocente></navbardocente>
         <router-view></router-view>
      </div>
      
    </div>
</template>

<script>

import sidebarDocente from '../components/Docente/SidebarDocente.vue'
import navbardocente from '../components/Docente/Navbar.vue'

export default {

    components: {
        sidebarDocente,
        navbardocente
    }

}
</script>

<style>

</style>