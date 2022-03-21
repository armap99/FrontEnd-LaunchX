<template>
  <table class="table">
    <caption>
      <h2>Pedidos</h2>
    </caption>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Telefono</th>
        <th>Email</th>
        <th>Descripción</th>
        <th>Sabores</th>
        <th>Adornos</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in this.$store.state.pedidos" :key="item.id">
        <td>{{ item.nombre }}</td>
        <td>{{ item.telefono }}</td>
        <td>{{ item.correo }}</td>
        <td>{{ item.descripcion }}</td>
        <td>{{ item.sabores.join(", ") }}</td>
        <td>{{ item.adornos.join(", ") }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Pedidos",
};
</script>
