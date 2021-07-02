<template>
   <div class="container">
        <div class="row">
        <div class="col-sm-12 col-sm-offset-1 bg-light m-5 p-5">
            <h2 class="text-center p-3 mb-3"> Consultar el estado de su solicitud</h2>
            <div class="form-group">
            <label class="fs-3">Correo Electrónico * <small>(Requerido)</small></label>
            <input name="correo" type="text" class="form-control" id="myInput" placeholder="buscar">
        </div>
            <table class="table align-middle">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Entrenamientos</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Actualización</th>
                    <th scope="col">Consulta </th>
                </tr>
                </thead>
                <tbody id="myTable">
                <tr>
                    <th scope="row">001</th>
                    <td>Dataset_1</td>
                    <td>En proceso</td>
                    <td>12/12/2021 12:12:20</td>
                    <td>
                    <button type="button" class="btn btn-primary btn-sm px-3 " data-toggle="modal" data-target="#staticBackdrop">
                        <i class="fa fa-eye"></i>
                    </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">002</th>
                    <td>Dataset_2</td>
                    <td>Finalizado</td>
                    <td>12/12/2021 12:12:20</td>
                    <td>
                    <button type="button" class="btn btn-primary btn-sm px-3">
                        <i class="fa fa-eye"></i>
                    </button>
                    <button type="button" class="btn btn-success btn-sm px-3">
                        <i class="fa fa-download"></i>
                    </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">003</th>
                    <td>Dataset_3</td>
                    <td>Error</td>
                    <td>12/12/2021 12:12:20</td>
                    <td>
                    <button type="button" class="btn btn-danger btn-sm px-3">
                        <i class="fa fa-exclamation-triangle"></i>
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'TraningResults',
  components: {
  }
}
</script>

<style scoped>

</style>
