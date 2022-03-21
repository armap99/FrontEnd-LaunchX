<template>
  <div>
    <div class="general-index-cotainer">
      <!--Logo-->
      <div class="logo-imag-general-container">
        <div class="logo-imag-container">
          <img
            src="../img/MoonCakeLogo.png"
            alt="Logo MoonCake"
            class="logo-img"
          />
        </div>
      </div>
      <!-- Listas -->
      <div class="cliente-container">
        <Menu />
        <div class="form-client-container">
          <Form />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";
import Form from "../components/Form.vue";

export default {
  name: 'ClienteView',
  
  components:{
    Menu,
    Footer,
    Form,
  }
}
</script>