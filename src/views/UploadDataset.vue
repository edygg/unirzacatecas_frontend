<template>
    <!--   Big container   -->
    <div class="container-fluid">
        <div class="row justify-content-md-center">
        <div class="col-sm-8 col-sm-offset-2 pt-5 mt-5 pb-5 mb-5 wizard-container">
           
            <form-wizard>
                <h2 slot="title">Plataforma de Aprendizaje automático</h2>

                <tab-content title="Términos y condiciones">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="form-group">
                                <h3>Información Básica</h3>
                                <label>Nombre Completo <small>(Requerido)</small></label>
                                <input v-model="userName" type="text" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="form-group">
                                <label>Correo Electrónico <small>(Requerido)</small></label>
                                <input v-model="userEmail" type="email" class="form-control" required>
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
                              
                </tab-content>

                <tab-content title="Cargar conjunto de datos">
                     <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <label for="formFile" class="form-label">Subir el conjunto de datos</label>
                            <input class="form-control" type="file" id="formFile" ref="datasetFile" v-on:change="handleFileUpload()" required>
                            <div id="formFile" class="form-text">Recuerde que debe estar en formato CVS.</div>
                        </div> 
                    </div>                             
                              
                </tab-content>

                <tab-content title="Selección algoritmos">
                    <h4 class="info-text"> ¿Cuál es el tipo de problema a resolver?</h4>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="col-sm-6">
                                <div class="choice" data-toggle="wizard-checkbox">
                                    <input type="radio" v-model="algorithmType" value="classifier" selected>
                                    <div class="icon">
                                        <i class="fa fa-list"></i>
                                    </div>
                                    <h6>Clasificación</h6>
                                    <h6>Datos categóricos</h6>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="choice" data-toggle="wizard-checkbox">
                                    <input type="radio" v-model="algorithmType" value="regressor">
                                    <div class="icon">
                                        <i class= "fa fa-list-ol"></i>
                                    </div>
                                    <h6>Regresión</h6>
                                    <h6>Datos Numéricos</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </tab-content>

                <tab-content title="Selección variables">
                    Yuhuuu! This seems pretty damn simple
                </tab-content>

                <tab-content title="Entrenar">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4 class="info-text"> Entrenar Algoritmos </h4>
                        </div>
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="form-group">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label>Seleccione la cantidad de datos  que desea para entrenar y validar</label><br>
                                    <select v-model="trainingPct" class="form-control">
                                        <option value="0.5"> 50% para entrenar y 50% para validar </option>
                                        <option value="0.4"> 40% para entrenar y 60% para validar </option>
                                        <option value="0.3"> 30% para entrenar y 70% para validar </option>
                                        <option value="0.2"> 20% para entrenar y 80% para validar</option>
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
                                    <select v-model="crossValidation" class="form-control">
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
                </tab-content>

            </form-wizard>
        </div>
        </div><!-- end row -->
    </div> <!--  big container -->
</template>

<script>
import axios from 'axios'

export default {
  name: 'UploadDataset',
  components: {
  },
  data: () => {
      return {
        userName: "",
        userEmail: "",
        algorithmType: "",
        trainingPct: "",
        crossValidation: "",
        datasetFile: "",
        datasetId: "",
      }
  },
  methods: {
      handleFileUpload() {
        this.datasetFile = this.$refs.datasetFile.files[0]
        this.submitDatasetFile()
      },
      submitDatasetFile() {
        let formData = new FormData();
        formData.append("original_csv_file", this.datasetFile)
        
        let url = `${process.env.VUE_APP_BACKEND_URL}/datasets/`
        axios.post(
        url, 
        formData, 
        { 
            headers: { 'Content-Type': 'multipart/form-data' } 
        }).then(function(response) {
            console.log(response)
        });
      },
  }
}
</script>

<style scoped>
.wizard-container {
    background: white;
    border-radius: 10px;
}
</style>
