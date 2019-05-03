<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>
        <div class="container-fluid mt-4">
    
    <table class="table">
  <thead class="table-success">
    <tr>
      <th scope="col">Materia </th>
      <th scope="col">Numero de Horas</th>
      <th scope="col">Docente</th>
      <th scope="col">Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Matemáticas</th>
      <td>6</td>
      <td>Luz Mery Rojas</td>
      <td>9.0 
    <a data-toggle="modal" href="#myModal">Ver Detalles</a> 
      </td>
    </tr>
    <tr>
      <th scope="row">Español</th>
      <td>6</td>
      <td>Jesus Andres Flores</td>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">Ingles</th>
      <td>4</td>
      <td> Maria Monica Martinez</td>
      <td>9</td>
    </tr>

    <tr>
      <th scope="row">Sociales</th>
      <td>4</td>
      <td>Claudia Milena Sepulveda</td>
      <td>8</td>
    </tr>

    <tr>
      <th scope="row">Artística</th>
      <td>3</td>
      <td>Manuel Alejandro Flores</td>
      <td>9</td>
    </tr>
<tr>
      <th scope="row">Religión</th>
      <td>3</td>
      <td>Sergio andres Bustamante</td>
      <td>9.8</td>
    </tr>

<tr>
      <th scope="row">Naturales</th>
      <td>4</td>
      <td>Gregorio jose Perez</td>
      <td>8.9</td>
    </tr>

  </tbody>

</table>
 
     <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Matemáticas</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>


     <div class="modal-body">
            <table class="table table-striped">
     <thead>
    <tr>
      <th scope="col">Descripcion</th>
      <th scope="col">Fecha</th>
      <th scope="col">Nota</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sistema Numérico</th>
      <td>02/02/2019</td>
      <td>10</td>
    
    </tr>
    <tr>
      <th scope="row">Descomposición de Números</th>
      <td>05/02/2019</td>
      <td>8.5</td>
    
    </tr>
    <tr>
      <th scope="row">Conjuntos</th>
      <td>12/03/2019</td>
      <td>9.7</td>
   
    </tr>

    <tr>
      <th scope="row">Clase de Lineas</th>
      <td>27/03/2019</td>
      <td>10</td>
   
    </tr>

  </tbody>
</table>

         
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Volver</button>
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