<template>
  <main>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-white">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-1 fw-normal">Bienvenidos</h1>
          <p class="lead fw-normal fs-3" >Plataforma de Inteligencia Artificial laboratorio L.I.T.U.X. Universidad Autónoma de Zacatecas</p>
          <router-link class="btn btn-outline-light" to="/upload-dataset">Comenzar</router-link>
        </div>
      </div>
    </main>
</template>

<script>


export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>

</style>
