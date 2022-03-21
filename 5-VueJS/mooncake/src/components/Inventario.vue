<template>
  <table class="table">
    <caption>
      <h2>Inventario</h2>
    </caption>
    <thead>
      <tr>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Unidades</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in this.$store.state.sabores" :key="item.id">
        <td>{{ item.nombre }}</td>
        <td>{{ item.catidad }}</td>
        <td>{{ item.unidades }}</td>
      </tr>
      <tr v-for="item in this.$store.state.decoraciones" :key="item.id">
        <td>{{ item.nombre }}</td>
        <td>{{ item.catidad }}</td>
        <td>{{ item.unidades }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Inventario",
};
</script>
