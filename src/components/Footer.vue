<template>
  <footer class="text-center text-white footer">
      <!-- Grid container -->
      <div class="container-fluid p-1">
      <img src="../assets/CIIAM_png.png" alt="logo" class="img-responsive col-1 m-5">
      <img src="../assets/CIIBI_png.png" alt="logo" class="img-responsive col-1 m-5">
      <img src="../assets/LITUX FINAL.png" alt="logo" class="img-responsive col-1 m-5">
      <img src="../assets/MCPI_png.png" alt="logo" class="img-responsive col-1 m-5">
    </div>
      <!-- Grid container -->
      <!-- Copyright -->
      <div class="text-center p-3 copyright">
        © 2021 Copyright:
        <a class="text-white" href="https://baip.uaz.edu.mx/">litux.com</a>
      </div>
      <!-- Copyright -->
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
    background-color: #ffffff;
}

.copyright {
    background-color: #996633;
}
</style>
