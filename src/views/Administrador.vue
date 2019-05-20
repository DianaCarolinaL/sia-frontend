<template>
    <div>
      <sidebar-Admin></sidebar-Admin>
      <div class="main-content" style="margin-left:250px"> 
      <navbarsia></navbarsia>
      <router-view></router-view>
      </div>
      
    </div>
</template>

<script>

import sidebarAdmin from '../components/Administrativo/Sidebar.vue'
import navbarsia from '../components/Administrativo/Navbar.vue'

export default {

    components: {
        sidebarAdmin,
        navbarsia
    }

}
</script>

<style>

</style>