<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>
        <div class="container-fluid mt-4">
            <div Class="row">
                <div class="d-flex flex-row justify-content-start align-items-center col-md-12">
                   <!-- ml-1 ( margin a la izquierda) -->
                   <!-- mr-1 ( margin a la derecha) -->
                   <!-- mt-1 ( margin arriba) -->
                   <!-- mb-1 ( margin abajo ) -->

                   <!-- Guía Básica de Flexbox  :D -->
                   <!-- d-flex = Eso lo hace flexible -->
                   <!-- flex-row = eso es para ponerlos en modo fila -->
                   <!-- flex-column = eso es para ponerlos en modo columna -->
                   <!-- justify-content-center = eso es para ponerlos en el centro-->
                   <!-- justify-content-start = eso es para ponerlos en el al inicio-->
                   <!-- justify-content-end = eso es para ponerlos en el al final-->
                   <!-- justify-content-between = eso es para ponerlos a los extremos-->
                   <!-- justify-content-around = eso es para ponerlos a los extremos dejando espacios al inicio mitad y final-->

                   <!-- align-items-center = eso es para ponerlos al inicio-->
                   <!-- align-items-end = eso es para ponerlos al final-->
                   <!-- align-items-start = eso es para ponerlos al inicio-->

                   <!-- Eso es todo, juiciosa, peleona :D -->

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