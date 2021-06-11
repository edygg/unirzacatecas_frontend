<template>
    <!--   Big container   -->
    <div class="container-fluid">
        <div class="row">
        <div class="col-sm-8 col-sm-offset-2 pb-5 mb-5" height="100px">
            <!--      Wizard container        -->
            <div class="wizard-container">

                <div class="card wizard-card" data-color="orange" id="wizardProfile">
                    <form action="" method="">
                    <div class="wizard-header">
                        <h3>
                            <b>Plataforma de Aprendizaje automático</b> <br>
                            <small>Universidad de Zacatecas</small>
                        </h3>
                    </div>
            <div class="wizard-navigation">
            <ul>
                            <li><a href="#condicion" data-toggle="tab">Términos y Condiciones</a></li>
                            <li><a href="#infobasic" data-toggle="tab">Cargar Conjunto de datos</a></li>
                            <li><a href="#selectalgorit" data-toggle="tab">Selección Algoritmos</a></li>
                            <li><a href="#selecttarget" data-toggle="tab">Selección Variables</a></li>
                            <li><a href="#look" data-toggle="tab">Entrenar</a></li>
            </ul>
            </div>
            <!--************************* Términos y Condiciones******************************************-->
                        <div class="tab-content">
                            <div class="tab-pane" id="condicion">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1">
                                <div class="form-group">
                                    <h3>Información Básica</h3>
                                    <label>Nombre Completo <small>(Requerido)</small></label>
                                    <input name="name" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-sm-10 col-sm-offset-1">
                                <div class="form-group">
                                    <label>Correo Electrónico <small>(Requerido)</small></label>
                                    <input name="correo" type="email" class="form-control" required>
                                </div>
                            </div>
                                <div class="col-sm-10 col-sm-offset-1">
                                    <div class="overflow-auto overflow-scroll  w-100 h-20" >
                                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit in atque, maiores veritatis eveniet numquam placeat quisquam quam modi dolorum a repudiandae sit, iure beatae non temporibus sunt corrupti. Autem?
                                    </p>
                                    </div>
                                </div>
                            <div class="form-check col-sm-10 col-sm-offset-1">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                                <label class="form-check-label" for="flexCheckIndeterminate">
                                He leido y Acepto Condiciones
                                </label>
                            </div>
                            </div>
                            </div>
<!--************************* Cargar Conjunto de datos ******************************************-->
                            <div class="tab-pane" id="infobasic">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1">
                                <div class="form-group">
                                    <h3>Subir el Conjunto de Datos</h3>
                                    <p class="text-start fs-2"></p>
                                    <p>Cuando se realiza Aprendizaje Automático el conjunto de datos
                                    es el elemento más importante, ya que es el que permite entrenar los algoritmos. 
                                    
                                    <p> 
                                    Por lo anterior, a continuación se presenta una serie de recomendaciones que deberá
                                    tener su conjunto de datos para que la predicción sea exitosa.
                                    </p><br>
                                    <div class="row">
                                    <div class="col-4 " >
                                        <div class="list-group" id="list-tab" role="tablist">
                                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Por qué Implementar IA</a>
                                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Calidad de los datos</a>
                                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Datos Incompletos</a>
                                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Tipos de Datos</a>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <div class="tab-content w-100" id="nav-tabContent">
                                        <div class="tab-pane active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"> <p>Antes de utilizar esta herramienta, es importante que te plantees las siguientes preguntas. ¿Qué Beneficio piensas Generar y para quien?, Cuál de las  siguientes funcionalidades te sería más últil(predecir alguna métrica o predecir una etiqueta). Si alguna de las preguntas anteriores la respondiste negativamente, lo más probable es que no necesites hacer uso de una Solución de Inteligencia Artificial.</p></div>
                                        <div class="tab-pane " id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"> <p> La calidad de los datos y la cantidad de información útil, son factores claves que determinan lo bien que pueden aprender los algoritmos de aprendizaje automático.Por lo anterior, es importante que tengas presente las indicaciones que acá se desarrollan</p></div>
                                        <div class="tab-pane " id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"> <p>La mayoría de veces que almacenamos datos, es muy común que las bases carezcan de información. Por lo anterior, observa si en alguna colummna le faltan datos o tienen errores. Completalos con un valor estimado. Si por lo contrario, más de la mitad de los datos no existen te recomendamos que elimines esa colummna. </p></div>
                                        <div class="tab-pane " id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"> <p> Para hacer uso de los algoritmos acá planteados ten presente los dos categorías:</p>
                                            <strong><p>Etiquetas de Clasificación</p></strong>
                                            <p>El objetivo es predecir nuevas instancias basadas en observaciones pasadas. Por lo anterior, los datos que acá debes usar son de tipo categóricas(bajo, alto, grande,etc)</p>
                                            <strong><p>Etiquetas de Regresión</p></strong>
                                            <p>A través de este tipo de algoritmos se hará predicción de valores continuos(numéricos)</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-10 col-sm-offset-1">
                                <label for="formFile" class="form-label">Subir el conjunto de datos</label>
                                <input class="form-control" type="file" id="formFile" name="#" required>
                                <div id="formFile" class="form-text">Recuerde que debe estar en formato CVS.</div>
                            </div>                              
                            </div>
                            </div>
<!--************************* Selección de algoritmos******************************************-->
                            <div class="tab-pane" id="selectalgorit">
                                <h4 class="info-text"> ¿Cuál es el tipo de problema a resolver?</h4>
                                <div class="row">
                                    <div class="col-sm-10 col-sm-offset-1">
                                        <div class="col-sm-6">
                                            <div class="choice" data-toggle="wizard-checkbox">
                                                <input type="checkbox" name="jobb" value="clasification">
                                                <div class="icon">
                                                    <i class="fa fa-list"></i>
                                                </div>
                                                <h6>Clasificación</h6>
                                                <h6>Datos categóricos</h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="choice" data-toggle="wizard-checkbox">
                                                <input type="checkbox" name="jobb" value="regressor">
                                                <div class="icon">
                                                    <i class= "fa fa-list-ol"></i>
                                                </div>
                                                <h6>Regresión</h6>
                                                <h6>Datos Numéricos</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
<!--************************* Selección de variables ******************************************-->
                        <div class="tab-pane" id="selecttarget">
                            <h4 class="info-text"> Seleccione las variables para entrenar y predeccir </h4>
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1">
                                    <div class="col-sm-12 mb-5">
                                    <div class="form-group">
                                        <label>Seleccione la variable a Predecir o clasificar</label><br>
                                        <select name="#" class="form-control" >
                                            <option value="primera"> First </option>
                                            <option value="segunda"> Last </option>
                                            <option value="tercera"> Handle </option>
                                            <option value="cuarta"> predict</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                    <table class="table table-bordered  border-dark table-dark table-striped">
                                        <label>Seleccione las columnas para realizar la Predicción o Clasificación</label><br>
                                        <thead>
                                        <tr>
                                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <th scope="col">#</th>
                                            <th scope="col"> <input type="checkbox" name="#"> First</th>
                                            <th scope="col"> <input type="checkbox" name="#"> Last</th>
                                            <th scope="col"> <input type="checkbox" name="#"> Handle</th>  
                                            <th scope="col"> <input type="checkbox" name="#" disabled> predict</th>
                                        </div>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>example</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>example</td>
                                            <td>@mdo</td>
                                            </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>example</td>
                                            <td>@mdo</td>
                                            
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>
<!--************************* Resultados******************************************-->
                            <div class="tab-pane" id="look">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="info-text"> Entrenar Algoritmos </h4>
                                    </div>
                                    <div class="col-sm-10 col-sm-offset-1">
                                        <div class="form-group">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Seleccione la cantidad de datos  que desea para entrenar y validar</label><br>
                                                <select name="#" class="form-control">
                                                    <option value="primera"> 50% para entrenar y 50% para validar </option>
                                                    <option value="segunda"> 40% para entrenar y 60% para validar </option>
                                                    <option value="tercera"> 30% para entrenar y 70% para validar </option>
                                                    <option value="cuarta"> 20% para entrenar y 80% para validar</option>
                                                </select>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-10 col-sm-offset-1">
                                        <div class="form-group">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Seleccione la cantidad de Veces que desea que entrenen sus algoritmos(Validación cruzada) </label><br>
                                                <select name="#" class="form-control">
                                                    <option value="5"> 5</option>
                                                    <option value="10"> 10</option>
                                                    <option value="15"> 15 </option>
                                                    <option value="20"> 20</option>
                                                </select>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wizard-footer height-wizard">
                            <div class="pull-right">
                                <input type='button' class='btn btn-next btn-fill btn-warning btn-wd btn-sm' name='next' value='Next' />
                                <input type='button' class='btn btn-finish btn-fill btn-warning btn-wd btn-sm' name='finish' value='Finish' data-toggle="modal" data-target="#staticBackdrop"/>
                            </div>
                            <div class="pull-left">
                                <input type='button' class='btn btn-previous btn-fill btn-default btn-wd btn-sm' name='previous' value='Previous' />
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </form>
                </div>
            </div> <!-- wizard container -->
        </div>
        </div><!-- end row -->
    </div> <!--  big container -->
</template>

<script>

export default {
  name: 'UploadDataset',
  components: {
  }
}
</script>

<style scoped>

</style>
