<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>
        <div class="container-fluid mt-4">

        <div Class="row">
                <div class="d-flex flex-row justify-content-start align-items-center col-md-12">
                     <div class="btn-group mr-3">
                            <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown"
                                 aria-haspopup="true" aria-expanded="false">
                        Matemáticas
                       </button>
                       <div class="dropdown-menu">
                         <a class="dropdown-item" href="#">Español</a>
                         <a class="dropdown-item" href="#">Ingles</a>
                         <a class="dropdown-item" href="#">Sociales</a>

                       </div>
                    </div>
                      
                    <button type="button" class="btn btn-primary ">Buscar</button>

                          </div>
        </div>

        <div class="row">
                 <div class="d-flex flex-row justify-content-center align-items-center col-md-12">
                        <table class="table mt-6 ml-8 mr-8">
                         <thead class="table-success">
                          <tr>
                            <th scope="col">Tema </th>
                            <th scope="col">Material</th>
                           
                         </tr>
                        </thead>
                 <tbody>
                         <tr>
                    <th scope="row">Números Ordinales</th>
                    <td>
                    <a href="https://www.youtube.com/watch?v=KY7t8T5CMGY" target="_blank"> Ver Video</a>
                    </td>
                    </tr>
                
                  <tr>
                    <th scope="row">Ejemplo de Conjuntos</th>
                    <td><a href="http://www.frcu.utn.edu.ar/archivos/material_ingreso/02a_Modulo_2-Teoria-Intensivo-Ingreso2014.pdf" target="_blank">
                        <i class="fas fa-file-pdf fa-2x"></i>
                     </a>

                   
                    </td>
                    </tr>

               
                    </tbody>

                    </table>
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