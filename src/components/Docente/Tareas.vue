<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-"></div>

 <div class="header-body mt-4">       
<div class="row"> 
        <div class="col-md-11 ml-6">
            <div class="card card-stats mb-4 mb-xl-0">
            <div class="card-body">
            <p class="font-weight-bold">TAREAS</p>
            </div>



<div class="row  ">
<div class="col-md-11" >
    
<div class="btn-group ml-2 d-flex flex-row justify-content-start align-items-center">
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
                    <div class="col-md-4">
                      <h5 class="card-title text-uppercase text-muted mb-0 text-center">Nombre</h5>
                       <div class="mt-4"><input class="form-control" type="text" ></div> 
                       <div class="mt-6"><input class="form-control" type="text" ></div>
                       <div class="mt-6"><input class="form-control" type="text" ></div>

                    </div>
                    <div class="col-md-4 ">
                    <h5 class="card-title text-uppercase text-muted mb-0 text-center">Fecha</h5>
                    <div class="mt-4"><input class="form-control" type="date" ></div> 
                    <div class="mt-6"><input class="form-control" type="date" ></div>
                    <div class="mt-6"><input class="form-control" type="date" ></div>

                    </div>
                    
                    <div class="col-md-4">
                      <h5 class="card-title text-uppercase text-muted mb-0 text-center">Opción</h5>
                     <div class="d-flex flex-row justify-content-center mt-4">
                         <button class="btn btn-icon btn-2 btn-primary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Editar tarea">
	                            <span class="btn-inner--icon"><i class="far fa-edit"></i></span>	
                            </button>
                             <button class="btn btn-icon btn-2 btn-success btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Ver Detalles">
	                            <span class="btn-inner--icon"> <i class="fas fa-eye"></i></span>	
                            </button>
                             <button class="btn btn-icon btn-2 btn-light btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Habilitar-deshabilitar">
	                            <span class="btn-inner--icon"><i class="fas fa-ban"></i></span>	
                            </button>
                            <button class="btn btn-icon btn-2 btn-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Eliminar tarea">
	                            <span class="btn-inner--icon"><i class="fas fa-trash-alt"></i></span>	
                            </button>
                           
                    </div>

                      <div class="d-flex flex-row justify-content-center mt-7">
                         <button class="btn btn-icon btn-2 btn-primary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Editar tarea">
	                            <span class="btn-inner--icon"><i class="far fa-edit"></i></span>	
                            </button>
                             <button class="btn btn-icon btn-2 btn-success btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Ver Detalles">
	                            <span class="btn-inner--icon"> <i class="fas fa-eye"></i></span>	
                            </button>
                             <button class="btn btn-icon btn-2 btn-light btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="habilitar y deshabilitar">
	                            <span class="btn-inner--icon"><i class="fas fa-ban"></i></span>	
                            </button>
                            <button class="btn btn-icon btn-2 btn-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Eliminar tarea">
	                            <span class="btn-inner--icon"><i class="fas fa-trash-alt"></i></span>	
                            </button>

                     </div>

                 <div class="d-flex flex-row justify-content-center mt-7">
                         <button class="btn btn-icon btn-2 btn-primary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Editar tarea">
	                            <span class="btn-inner--icon"><i class="far fa-edit"></i></span>	
                            </button>
                             <button class="btn btn-icon btn-2 btn-success btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Ver Detalles">
	                            <span class="btn-inner--icon"> <i class="fas fa-eye"></i></span>	
                            </button>
                             <button class="btn btn-icon btn-2 btn-light btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Habilitar y deshabilitar">
	                            <span class="btn-inner--icon"><i class="fas fa-ban"></i></span>	
                            </button>
                            <button class="btn btn-icon btn-2 btn-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Eliminar tarea">
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
            
    <div class="row">
        <div class="d-flex flex-row justify-content-start col-md-12 mt-5 ml-6">
        <span> <p class="text-center">Nueva Tarea</p></span>
        <button class="btn btn-icon btn-3 btn-success btn-s ml-3" type="button" data-toggle="tooltip" data-placement="top" title="nueva tarea">
	    <span class="btn-inner--icon"><i class="fas fa-plus-circle"></i></span>	
        </button>
        <span> <p class="text-center ml-8">Guardar</p></span>
        <button class="btn btn-icon btn-3 btn-primary btn-s ml-3 size:5x" type="button" data-toggle="tooltip" data-placement="top" title="nueva tarea">
	    <span class="btn-inner--icon"><i class="fas fa-save "></i></span>	
        </button>
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