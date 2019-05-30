<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>

<div class="row"> 
        <div class="d-flex flex-row justify-content-center align-items-center mt-4 col-md-12">
            <div>
            <p class="font-weight-bold">MATERIAL DE APOYO</p>
            </div>
         </div>
</div>



<div class="row  ">
<div class="col-md-12 mt-4" >
    
<div class="btn-group ml-4  d-flex flex-row justify-content-start align-items-center">
<span class="ml-3"> Curso</span>
 <button type="button" class="btn btn-info dropdown-toggle ml-6" data-toggle="dropdown" aria-haspopup="true" 
 aria-expanded="false">2-A
 </button>
 <div class="dropdown-menu">
     <a class="dropdown-item" href="#">3-A</a>
     <a class="dropdown-item" href="#">5-A</a>
     <a class="dropdown-item" href="#">5-B</a>
        </div>
       </div>
    </div>
</div>

 <div class="header-body mt-5">
          
          <div class="row">
            <div class="col-md-11 ml-6  ">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-3">
                      <h5 class="card-title text-uppercase text-muted mb-0">Nombre</h5>
                       <div class="mt-4"><input class="form-control" type="text" ></div> 
                       <div class="mt-6"><input class="form-control" type="text" ></div>
                        <div class="mt-6"><input class="form-control" type="text" ></div>

                    </div>
                    <div class="col-md-3">
                      <h5 class="card-title text-uppercase text-muted mb-0">Descripcion</h5>
                     <div class="mt-4"> <textarea class="form-control" aria-label="With textarea"></textarea> </div>
                     <div class="mt-5"> <textarea class="form-control" aria-label="With textarea"></textarea> </div>
                     <div class="mt-5"> <textarea class="form-control" aria-label="With textarea"></textarea> </div>

                    </div>
                    <div class="col-md-3 ">
                      <h5 class="card-title text-uppercase text-muted mb-0">Archivo</h5>
                    <div class=" mt-4 btn-sm"><input type="file" name="fileToUpload" id="fileToUpload" ></div>
                    <div class=" mt-7 btn-sm"><input type="file" name="fileToUpload" id="fileToUpload" ></div>
                    <div class=" mt-7 btn-sm"><input type="file" name="fileToUpload" id="fileToUpload" ></div>

                    </div>
                    <div class="col-md-3">
                      <h5 class="card-title text-uppercase text-muted mb-0">Opción</h5>
                     <div class="mt-4">
                         <button class="btn btn-icon btn-2 btn-primary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Editar Alumno">
	                            <span class="btn-inner--icon"><i class="far fa-edit"></i></span>	
                            </button>
                             <button class="btn btn-icon btn-2 btn-success btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Ver Detalles">
	                            <span class="btn-inner--icon"> <i class="fas fa-eye"></i></span>	
                            </button>
                            <button class="btn btn-icon btn-2 btn-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Eliminar Alumno">
	                            <span class="btn-inner--icon"><i class="fas fa-trash-alt"></i></span>	
                            </button>
                    </div>

                      <div class="mt-7">
                         <button class="btn btn-icon btn-2 btn-primary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Editar Alumno">
	                            <span class="btn-inner--icon"><i class="far fa-edit"></i></span>	
                            </button>
                             <button class="btn btn-icon btn-2 btn-success btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Ver Detalles">
	                            <span class="btn-inner--icon"> <i class="fas fa-eye"></i></span>	
                            </button>
                            <button class="btn btn-icon btn-2 btn-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Eliminar Alumno">
	                            <span class="btn-inner--icon"><i class="fas fa-trash-alt"></i></span>	
                            </button>

                     </div>

                 <div class="mt-7">
                         <button class="btn btn-icon btn-2 btn-primary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Editar Alumno">
	                            <span class="btn-inner--icon"><i class="far fa-edit"></i></span>	
                            </button>
                             <button class="btn btn-icon btn-2 btn-success btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Ver Detalles">
	                            <span class="btn-inner--icon"> <i class="fas fa-eye"></i></span>	
                            </button>
                            <button class="btn btn-icon btn-2 btn-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Eliminar Alumno">
	                            <span class="btn-inner--icon"><i class="fas fa-trash-alt"></i></span>	
                            </button>

                    </div>
                    </div>
                 </div>
                 </div>
              </div>
            </div>
         </div>
    </div>
            
    <div class="col-md-6 ml-5 ">
    <button type="button" class="btn btn-success mt-4">
        Nuevo</button>
    
    <button type="button" class="btn btn-primary mt-4 ml-12">
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