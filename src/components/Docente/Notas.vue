<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>
        
        
        <div class="row"> 
        <div class="d-flex flex-row justify-content-center align-items-center mt-4 col-md-12">
            <div>
            <p class="font-weight-bold">NOTAS</p>
                            </div>
            </div>

            </div>

       
        <div class="row">
            <div class="col-md-3 mb-0 mt-4 ">
                 
                 <div class="row">
                        <span class="ml-5 text-center"> Materia</span>

                <div class="btn-group ml-4">
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
        </div>
 </div>
            
            
            <div class="col-md-3 mt-4">
                 <div class="row">
                        <span class="ml-5 text-center"> Curso</span>

                <div class="btn-group ml-4">
                <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">
                        2-A
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">3-A</a>
                    <a class="dropdown-item" href="#">5-A</a>
                    <a class="dropdown-item" href="#">5-B</a>
                </div>
                </div>
        </div>
            </div>




        <div class="col-md-3 mt-4">
                 <div class="row">
                        <span class=" text-center"> Periodo</span>

                <div class="btn-group ml-4">
                <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">
                        1
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                    <a class="dropdown-item" href="#">4</a>
                </div>
                </div>
        </div>

         </div>


        <div class="col-md-3 ">
        <button type="button" class="btn btn-primary mt-4">
            Buscar</button>
        </div>
      </div>



      <div class="row ml-7 mt-5">

      <div class="col-md-8">
      <div class="card border-info  mb-3">
      <div class="container">
      <div class="row col-md-6 col-md-offset-2 custyle">
      <table class="table table-striped custab">
      <thead>
   
        <tr>
            <th>Estudiante</th>
            <th>Previo</th>
            <th class="text-center">Talleres</th>
            <th>Definitiva</th>
            <th>Refuerzo</th>
        </tr>
    </thead>
            <tr>
                <td>Jesus Flores</td>
                <td class="text-center">3.5</td>
               <td class="text-center">
                 <span class="text-center"> 4.0 </span>
                <a class='btn btn-info btn-sm ml-3' href="#"><span class="glyphicon glyphicon-edit"></span> 
                Editar</a></td>
                <td> 3.7</td>
                <td>----</td>
            </tr>
            <tr>
               <td>Sofia Ramirez Perez</td>
                <td class="text-center">3.9</td>
               <td class="text-center">
                 <span class="text-center"> 3.4 </span>
                <a class='btn btn-info btn-sm ml-3' href="#"><span class="glyphicon glyphicon-edit"></span> 
                Editar</a></td>
                <td> 3.7</td>
                <td>----</td>
            </tr>
            <tr>
               <td>Leonardo Flores</td>
                <td class="text-center">4.2</td>
               <td class="text-center">
                 <span class="text-center"> 3.9 </span>
                <a class='btn btn-info btn-sm ml-3' href="#"><span class="glyphicon glyphicon-edit"></span> 
                Editar</a></td>
                <td> 3.7</td>
                <td>----</td>
            </tr>
    </table>
    </div>
</div>
</div>
    </div>
</div>



<div class="row ml-7 mt-5">
  <div class="col-md-8">
    
    <div class="row col-md-6 col-md-offset-2 custyle">
    <table class="table table-striped custab">
    <thead>
        <tr>
            <th>Nombre Taller</th>
            <th>Nota</th>
           
        </tr>
    </thead>
            <tr>
                <td>Conjuntos</td>
                <td>3.0</td>
            </tr>
            <tr>
                <td>Umidades de medida</td>
                <td>3.9</td>
            </tr>
            <tr>
                <td>Numeros primos</td>
                <td>4.1</td>
            </tr>
             
    </table>
    </div>
</div>

  
</div>


  <div class="col-md-6 ml-9 ">
    <button type="button" class="btn btn-primary mt-4">
        Guardar</button>
    </div>     


    </div>







                    
 
</template>

<script>
export default {
    
}
</script>

<style>

</style>