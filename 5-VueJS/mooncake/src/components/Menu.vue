<template>
  <div class="menu-container">
    <p class="menu-title">Sabores</p>
    <ul>
      <li class="menu-text">{{$store.state.sabores[0].nombre}} ------------ ${{$store.state.sabores[0].precio}}</li>
      <li class="menu-text">{{$store.state.sabores[1].nombre}} --------------- ${{$store.state.sabores[1].precio}}</li>
      <li class="menu-text">{{$store.state.sabores[2].nombre}} ------------------ ${{$store.state.sabores[2].precio}}</li>
      <li class="menu-text">{{$store.state.sabores[3].nombre}} ------------------- ${{$store.state.sabores[3].precio}}</li>
    </ul>
    <p class="menu-title">Decoraciones de otro mundo</p>
    <ul>
      <li class="menu-text">{{$store.state.decoraciones[0].nombre}} --- ${{$store.state.decoraciones[0].precio}}</li>
      <li class="menu-text">{{$store.state.decoraciones[1].nombre}} --- ${{$store.state.decoraciones[1].precio}}</li>
      <li class="menu-text">{{$store.state.decoraciones[2].nombre}} --- ${{$store.state.decoraciones[2].precio}}</li>
      <li class="menu-text">{{$store.state.decoraciones[3].nombre}} -- ${{$store.state.decoraciones[3].precio}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>
