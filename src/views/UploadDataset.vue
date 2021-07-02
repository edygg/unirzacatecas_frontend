<template>
  <!--   Big container   -->
  <div class="container-fluid">
    <div class="row justify-content-md-center">
      <div
        class="col-sm-8 col-sm-offset-2 pt-5 mt-5 pb-5 mb-5 wizard-container"
      >
        <form-wizard>
          <h2 slot="title">Plataforma de Aprendizaje automático</h2>

          <tab-content title="Términos y condiciones">
            <div class="row">
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
              <div class="col-sm-10 col-sm-offset-1">
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
              <div class="col-sm-10 col-sm-offset-1">
                <div class="overflow-auto overflow-scroll w-100 h-20">
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
            <div class="row">
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
                  Formato separado por comas CSV, utilizando el delimitador coma (,).
                </div>
              </div>
            </div>
          </tab-content>

          <tab-content title="Selección algoritmos">
            <h4 class="info-text">¿Cuál es el tipo de problema a resolver?</h4>
            <div class="row">
              <div class="col-sm-10 col-sm-offset-1">
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
                    <h6>Clasificación</h6>
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
                    <h6>Regresión</h6>
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
            ************Presentar lista
            <div>
              Seleccione las variables dependientes/columnas para identificar
              los patrones de entrenamiento. Usted puede elegir las variables
              que desee. Mínimo debe seleccionar una columna y puede máximo todo
              el conjunto de datos, excepto la columna que seleccionó para
              predecir.
            </div>
            ************Presentar tabla
          </tab-content>

          <tab-content title="Entrenar">
            <div class="row">
              <div class="col-sm-12">
                <h4 class="info-text">Entrenar Algoritmos</h4>
              </div>
              <div class="col-sm-10 col-sm-offset-1">
                <div class="form-group">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label
                        >Seleccione la cantidad de datos que desea para entrenar
                        y validar (Técnica Hold-out).</label
                      ><br />
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
              <div class="col-sm-10 col-sm-offset-1">
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
