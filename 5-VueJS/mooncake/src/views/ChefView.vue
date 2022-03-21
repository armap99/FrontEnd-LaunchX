<template>
  <div>
    <aside></aside>
    <div class="general-index-cotainer">
      <div class="logo-imag-general-container">
        <div class="logo-imag-container">
          <img
            src="../img/MoonCakeLogo.png"
            alt="Logo MoonCake"
            class="logo-img"
          />
        </div>
      </div>
      <Inventario />
      <Pedidos />
    </div>
  </div>
</template>


<script>
import Inventario from "../components/Inventario.vue";
import Pedidos from "../components/Pedidos.vue";

export default {
  name: 'ChefView',
  
  components:{
    Inventario,
    Pedidos,
  }
}
</script>