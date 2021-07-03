<template>
  <!--   Big container   -->
  <div class="container-fluid">
    <div class="row justify-content-md-center">
      <div
        class="col-sm-8 col-sm-offset-2 pt-5 mt-5 pb-5 mb-5 wizard-container"
      >
        <form-wizard  color="#2C55A4" back-button-text="Regresar" next-button-text="Siguiente" finish-button-text="Finalizar">
          <h2 slot="title">Plataforma de Aprendizaje automático</h2>

          <tab-content title="Términos y condiciones">
            <div class="row justify-content-md-center">
              <div class="col-sm-10 col-sm-offset-1">
                <div class="form-group">
                  <h3>Información Básica</h3>
                  <label>Nombre Completo * <small>(Requerido)</small></label>
                  <input
                    v-model="userName"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
              </div>
              <div class="col-sm-10 col-sm-offset-1 pb-3">
                <div class="form-group">
                  <label>Correo Electrónico * <small>(Requerido)</small></label>
                  <input
                    v-model="userEmail"
                    type="email"
                    class="form-control"
                    required
                  />
                </div>
              </div>
              <div class="col-sm-10 justify-content-md-center">
                <div>
                    <div>
                        <b-button v-b-toggle.collapse-2 class="m-1">Términos y Condiciones</b-button>
                        <b-collapse id="collapse-2">
                            <b-card>
                                <p>
                                    <br />AVISO DE PRIVACIDAD SIMPLIFICADO - PLATAFORMA DE
                                    INTELIGENCIA ARTIFICIAL & BIG DATA <br /><br />
                                    La Universidad Autónoma de Zacatecas “Francisco García
                                    Salinas”, con domicilio en Jardín Juárez No. 147, Centro
                                    Histórico de Zacatecas, Zacatecas, C.P. 98000, es el
                                    responsable del tratamiento de los datos personales que nos
                                    proporcione, los cuales serán protegidos conforme a lo
                                    dispuesto por la Ley General de Protección de Datos
                                    Personales en Posesión de Sujetos Obligados, la Ley de
                                    Protección de Datos Personales en Posesión de los Sujetos
                                    Obligados del Estado de Zacatecas, y demás normatividad que
                                    resulte aplicable.
                                    <br /><br />
                                    ¿Para qué fines utilizaremos sus datos personales?
                                    <br />
                                    Los datos personales que recabemos de usted, se podrán
                                    utilizar para las siguientes finalidades: Recolectar,
                                    almacenar y usar sus datos para realizar un estudio
                                    relacionado el uso y necesidades de algoritmos y una
                                    plataforma de Inteligencia Artificial que incluye: a)
                                    captura de datos, b) entrenamiento del(los) modelo(s) de
                                    inteligencia artificial seleccionados, c) análisis de
                                    resultados, d) generar informes o estadísticas, e)
                                    contactarlo a través de medios físicos, electrónicos o
                                    telefónicos. Para las finalidades anteriores, se podrán
                                    solicitar los siguientes datos personales: Nombre y correo
                                    electrónico.
                                    <br /><br />
                                    ¿Con quién compartimos su información personal y para qué
                                    fines?
                                    <br />
                                    Se informa que no se realizarán transferencias de datos
                                    personales, salvo aquellas que sean necesarias para atender
                                    requerimientos de información de una autoridad competente,
                                    que estén debidamente fundados y motivados.
                                    <br /><br />
                                    ¿Para qué fines utilizaremos los conjuntos de datos?
                                    <br />
                                    La información contenida en los conjuntos de datos
                                    (datasets) que usted entrenará podrán estar sujetos a
                                    análisis estádisticos para identificar las áreas de
                                    conocimiento más utilizadas en el entrenamiento de
                                    algoritmos de inteligencia artificial.
                                    <br /><br />
                                    Si desea conocer nuestro aviso de privacidad integral, lo
                                    podrá consultar en: http://transparencia.uaz.edu.mx
                                    <br /><br />
                                    Última actualización: 30/06/2021
                                    <br /><br />
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                
                </div>
              </div>
              <div class="form-check col-sm-10 col-sm-offset-1">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                />
                <label class="form-check-label" for="flexCheckIndeterminate">
                  He leído y Acepto las condiciones
                </label>
              </div>
            </div>
          </tab-content>

          <tab-content title="Cargar conjunto de datos">
                        <b-card no-body>
                <b-tabs pills card vertical>
                <b-tab title="Por qué implementar IA" active
                    ><b-card-text
                    >Antes de utilizar esta herramienta de aprendizaje automático «machine
                    learning», es importante que te plantees las siguientes preguntas.
                    ¿Qué beneficio piensas generar y para quién?, ¿cuál de las siguientes
                    funcionalidades te sería más útil (predecir un dato numérico o
                    predecir un dato categórico). ¿Tengo con un conjunto de datos que
                    permita analizar patrones y observaciones existentes que me permitan
                    analizar los datos en un modelo de aprendizaje automático? Si alguna
                    de las preguntas anteriores la respondiste positivamente, lo más
                    probable es que puedas hacer uso de esta herramienta.<br /><br />
                    La herramienta actualmente soporta algoritmos de aprendizaje
                    automático supervisado. En este tipo de algoritmos se necesita enseñar
                    la respuesta correcta. Por ejemplo, para resolver el problema de
                    clasificar nuevos correos electrónicos como spam o no spam, necesita
                    que le demos ejemplos históricos correctamente clasificados. En otras
                    palabras, para cada caso de ejemplo de entrenamiento que demos al
                    algoritmo, se necesita saber si el correo era spam o no.</b-card-text
                    ></b-tab
                >
                <b-tab title="Calidad de los datos"
                    ><b-card-text
                    >La calidad de los datos y la cantidad de información útil, son
                    factores claves que determinan lo bien que pueden aprender los
                    algoritmos de aprendizaje automático. Por lo anterior, es importante
                    que tengas presente las indicaciones que acá se
                    desarrollan.</b-card-text
                    ></b-tab
                >
                <b-tab title="Datos Incompletos"
                    ><b-card-text
                    >La mayoría de veces que almacenamos datos, es muy común que los
                    conjuntos de datos carezcan de información. Por lo anterior, observa
                    si en alguna columna le faltan datos o tienen errores. Complétalos con
                    un valor estimado o un valor neutral como NA o 0 (cero). Si por lo
                    contrario, más de la mitad de los datos no existen te recomendamos que
                    elimines esa columna.</b-card-text
                    ></b-tab
                >
                <b-tab title="Tipos de datos"
                    ><b-card-text
                    >Para hacer uso de la herramienta, ten presente los dos alternativas
                    que tendrás para predecir tus datos: <br /><br />
                    Clasificación: El objetivo de ésta opción es permitir al usuario
                    predecir valores categóricos. Por ejemplo, si se tiene información
                    demográfica y académica de estudiantes y se tiene una clasificación de
                    nivel académico de cada estudiante: Alto, Medio, Bajo. Se puede
                    preparar un modelo de aprendizaje automático, que entrene la
                    información actual, para que cuando se agreguen nuevos estudiantes se
                    haga una predicción de su nivel académico.
                    <br /><br/>
                    Regresión: El objetivo de ésta opción es permitir al usuario predecir
                    valores numéricos. Por ejemplo, si se tiene información demográfica y
                    académica de estudiantes y se tiene la calificación promedio (0-5) de
                    cada estudiante: 0,..1,.. 2,.. 2.5,3..,4..5. Se puede preparar un
                    modelo de aprendizaje automático, que entrene la información actual,
                    para que cuando se agreguen nuevos estudiantes se haga una predicción
                    de su posible calificación promedio.</b-card-text></b-tab>  
                </b-tabs>
            </b-card>
                        <div class="row pt-3">
              <div class="col-sm-10 col-sm-offset-1">
                <label for="formFile" class="form-label"
                  >Subir el conjunto de datos</label
                >
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  ref="datasetFile"
                  v-on:change="handleFileUpload()"
                  required
                />
                <div id="formFile" class="form-text">
                  Formato separado por comas CSV, utilizando el delimitador coma
                  (,).
                </div>
              </div>
            </div>
          </tab-content>

          <tab-content title="Selección algoritmos">
            <h4 class="info-text">¿Cuál es el tipo de problema a resolver?</h4>
            <div class="row justify-content-md-center">
              <div class="col-sm-10 d-flex justify-content-center">
                <div class="col-sm-6">
                  <div class="choice" data-toggle="wizard-checkbox">
                    <input
                      type="radio"
                      v-model="algorithmType"
                      value="classifier"
                      selected
                    />
                    <div class="icon">
                      <i class="fa fa-list"></i>
                    </div>
                    <h6>CLASIFICACIÓN</h6>
                    <h6>Datos categóricos</h6>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="choice" data-toggle="wizard-checkbox">
                    <input
                      type="radio"
                      v-model="algorithmType"
                      value="regressor"
                    />
                    <div class="icon">
                      <i class="fa fa-list-ol"></i>
                    </div>
                    <h6>REGRESIÓN</h6>
                    <h6>Datos Numéricos</h6>
                  </div>
                </div>
              </div>
            </div>
          </tab-content>

          <tab-content title="Selección variables">
           
                <div>
                    Seleccione la variable/columna a Predecir. Sólo puede escoger una
                    columna, la cual será la variable independiente del modelo.
                </div>
                <div>
                    ************Presentar lista
                </div>
                <div>
                    Seleccione las variables dependientes/columnas para identificar
                    los patrones de entrenamiento. Usted puede elegir las variables
                    que desee. Mínimo debe seleccionar una columna y puede máximo todo
                    el conjunto de datos, excepto la columna que seleccionó para
                    predecir.
                </div>
                <div>
                    ************Presentar tabla
                </div>

          </tab-content>

          <tab-content title="Entrenar">
            <div class="row justify-content-md-center ">
              <div class="col-sm-12">
                <h4 class="info-text">Entrenar Algoritmos</h4><br>
              </div>
              <div class="col-sm-10 col-sm-offset-1">
                <div class="form-group">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="pb-2"
                        >Seleccione la cantidad de datos que desea para entrenar
                        y validar (Técnica Hold-out).</label
                      ><br/>
                      <select v-model="trainingPct" class="form-control">
                        <option value="0.5">
                          50% para entrenamiento y 50% para validación
                        </option>
                        <option value="0.4">
                          60% para entrenamiento y 40% para validación
                        </option>
                        <option value="0.3">
                          70% para entrenamiento y 30% para validación
                        </option>
                        <option value="0.2">
                          80% para entrenamiento y 20% para validación
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-10 col-sm-offset-1 pt-3 pb-5">
                <div class="form-group">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label
                        >Seleccione la cantidad de partes en la que desea que se
                        divida su conjunto de datos para que entrene el modelo
                        de aprendizaje automático. Este valor también determina
                        la cantidad de veces en las que se entrenará su modelo
                        (Técnica de Validación cruzada).</label
                      ><br />
                      <select v-model="crossValidation" class="form-control">
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
        </form-wizard>
      </div>
    </div>
    <!-- end row -->
  </div>
  <!--  big container -->
</template>

<script>
import axios from "axios";

export default {
  name: "UploadDataset",
  components: {},
  data: () => {
    return {
      userName: "",
      userEmail: "",
      algorithmType: "",
      trainingPct: "",
      crossValidation: "",
      datasetFile: "",
      datasetId: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.datasetFile = this.$refs.datasetFile.files[0];
      this.submitDatasetFile();
    },
    submitDatasetFile() {
      let formData = new FormData();
      formData.append("original_csv_file", this.datasetFile);

      let url = `${process.env.VUE_APP_BACKEND_URL}/datasets/`;
      axios
        .post(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
.wizard-container {
  background: white;
  border-radius: 10px;
}



</style>
