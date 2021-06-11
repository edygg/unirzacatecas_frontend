<template>
  <header role="banner">
      <div class="header">
        <div class="container p-4">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <router-link class="nav-link" to="/"><img src="../assets/logo.png" alt="logo_universidad"></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link link-light links" aria-current="index.html" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link link-light links" aria-current="#" to="/traning-results" >Seguimiento del Entrenamiento</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link link-light links" aria-current="#" to="https://baip.uaz.edu.mx/">Equipo de trabajo</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </header> 
</template>

<script>
export default {
  name: 'Header',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    background:#0a1f45;
}

.links {
    color: #ffffff;
}
</style>
