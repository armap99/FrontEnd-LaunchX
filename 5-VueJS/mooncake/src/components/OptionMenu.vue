<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
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
    <div class="options-index">
      <RouterLink to="/chef" class="index-option-container">
        <div>
          <div class="icon-container">
            <img src="../icons/user.svg" alt="user icon" class="logo-img" />
          </div>
          <h2 class="option-text">Chef</h2>
        </div>
      </RouterLink>
      <RouterLink to="/cliente" class="index-option-container">
        <div>
          <div class="icon-container">
            <img src="../icons/cookie.svg" alt="cookie icon" class="logo-img" />
          </div>
          <h2 class="option-text">Cliente</h2>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionMenu",
};
</script>
