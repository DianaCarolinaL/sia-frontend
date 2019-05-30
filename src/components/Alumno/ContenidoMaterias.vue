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
                 <div class= "d-flex flex-row justify-content-center align-items-center col-md-10 ml-8">
                    <div class="card mt-5">
                     <h5 class="card-header">Matemáticas</h5>
                        <div class="card-body">
                    <h5 class="card-title">Tabla de Contenido</h5>
                    <p class="card-text">
                        -Proporción geométrica
                        -Proporción discreta, 
                        continua-Propiedades de las proporciones
                        -Operaciones básicas con números reales-Sumas,restas, 
                        multiplicaciones, divisiones,
                        potenciación yradicación-Propiedades de cada una de ellas
                        -Recta numérica
                        -Regla de tres-Regla de tres simple y su aplicación en problemas
                        -Regla de tres
                         Compuesta y su aplicación en problemas
                        -Conversiones-Unidades de longitud</p>
                        <a href="#" class="btn btn-primary">Descargar</a>
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