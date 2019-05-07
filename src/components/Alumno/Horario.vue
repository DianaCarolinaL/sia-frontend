<template>
    <div>
        <div class="header bg-gradient-primary pb-5 pt-2 pt-md-4"></div>
        <div class="container-fluid mt-4">

<h1 align="center">Horario de Clases</h1>
<table class ="table table-bordered" >

        <thead>
      <tr class="table-success">
         
        <th scope="col" >HORA</th>
        <th scope="col" >LUNES</th>
        <th scope="col" >MARTES</th>
        <th scope="col" >MI&eacute;RCOLES</th>
        <th scope="col" >JUEVES</th>
        <th scope="col" >VIERNES</th>
        </tr>
        </thead>
        <tbody>
    <tr>
    <th scope="row">6:00 am</th>
    <td>Matemáticas</td>
    <td>Informática</td>
    <td>Sociales</td>
    <td>Español</td>
    <td>Biologia</td>
    </tr>

    <tr>
    <th scope="row">7:00 am</th>
    <td>Matematicas</td>
    <td>Informatica</td>
    <td>Sociales</td>
    <td>Español</td>
    <td>Biologia</td>
    </tr>

    <tr>
    <th scope="row">8:00 am</th>
    <td>Física</td>
    <td>Ingl&eacute;s</td>
    <td>F&iacute;sica</td>
    <td>Inglés</td>
    <td>Edu. Fisica</td>
    </tr>

    <tr>
    <th scope="row">9:00 am</th>
    <td>Biolog&iacute;a</td>
    <td>Ingl&eacute;s</td>
    <td>Naturales</td>
    <td>Artistica</td>
    <td>Edu. Fisica</td>
    </tr>


    <tr>
    <th scope="row">10:00 am</th>
    <td>Naturales</td>
    <td>Informática</td>
    <td>Naturales</td>
    <td>Artistica</td>
    <td>Edu. Fisica</td>
    </tr>

    <tr>
    <th scope="row">11:00 am</th>
    <td>Naturales</td>
    <td>Informática</td>
    <td>Matemáticas</td>
    <td>Informática</td>
    <td>Matemáticas</td>
    </tr>

    <tr>
    <th scope="row">12:00 am</th>
    <td>Informatica</td>
    <td>Informática</td>
    <td>Matemáticas</td>
    <td>Informática</td>
    <td>Matemáticas</td>
    </tr>
 </tbody>
</table>


<button type="button" class="btn btn-primary ">Descargar</button>


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
