<template>
  <header role="banner">
      <div class="header">
        <div class="container p-4">
          <ul class="nav justify-content-center">
            <li class="nav-item">
                <!-- <img alt="Vue logo" src=""> -->
              <a class="nav-link" href="index.html"><img src="../assets/logo.png" alt="logo_universidad"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-light links" aria-current="index.html" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-light links" aria-current="#" href="check.html" >Seguimiento del Entrenamiento</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-light links" aria-current="#" href="https://baip.uaz.edu.mx/">Equipo de trabajo</a>
            </li>
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
