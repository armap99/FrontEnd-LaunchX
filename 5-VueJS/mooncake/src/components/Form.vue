<template>
  <form action="" @submit="handleSubmit">
    <div>
      <input
        class="input"
        type="text"
        name="nombreCliente"
        id="nombreCliente"
        placeholder="Nombre Completo"
        @change="handleChangeNombre"
      />
      <input
        class="input"
        type="tel"
        name="telefonoCliente"
        id="telefonoCliente"
        placeholder="Telefono"
        @change="handleChangeTelefono"
      />
      <input
        class="input"
        type="email"
        name="emailCliente"
        id="emailCliente"
        placeholder="example@gmail.com"
        @change="handleChangeCorreo"
      />
      <input
        class="input"
        type="text"
        name="descripcionPastel"
        id="descripcionPastel"
        placeholder="Describa detalladamente su pastel"
        @change="handleChangeDescripcion"
      />
    </div>
    <p class="sub-title-form">Sabores</p>
    <div class="multiple-select">
      <div>
        <label for="saborChocolate">Chocolate</label>
        <input
          class="option-check"
          type="checkbox"
          name="saborChocolate"
          value="Chocolate"
          id="saborChocolate"
          @change="handleChangeSabores"
        />
      </div>
      <div>
        <label for="saborVainilla">Vainilla</label>
        <input
          class="option-check"
          type="checkbox"
          name="saborVainilla"
          value="Vainilla"
          id="saborVainilla"
          @change="handleChangeSabores"
        />
      </div>
      <div>
        <label for="saborFresa">Fresa</label>
        <input
          class="option-check"
          type="checkbox"
          name="saborFresa"
          value="Fresa"
          id="saborFresa"
          @change="handleChangeSabores"
        />
      </div>
      <div>
        <label for="saborCafé">Café</label>
        <input
          class="option-check"
          type="checkbox"
          value="Café"
          name="saborCafé"
          id="saborCafé"
          @change="handleChangeSabores"
        />
      </div>
    </div>
    <p class="sub-title-form">Decoraciones</p>
    <div class="multiple-select">
      <div>
        <label for="EstrellasdeChocolate">Estrellas</label>
        <input
          class="option-check"
          type="checkbox"
          name="EstrellasdeChocolate"
          value="Estrellas"
          id="EstrellasdeChocolate"
          @change="handleChangeAdornos"
        />
      </div>
      <div>
        <label for="VacasAstronautas">Vacas</label>
        <input
          class="option-check"
          type="checkbox"
          value="Vacas"
          name="VacasAstronautas"
          id="VacasAstronautas"
          @change="handleChangeAdornos"
        />
      </div>
      <div>
        <label for="Cohetes">Cohetes</label>
        <input
          class="option-check"
          type="checkbox"
          name="Cohetes"
          value="Cohetes"
          id="Cohetes"
          @change="handleChangeAdornos"
        />
      </div>
      <div>
        <label for="Asteroides">Asteroides</label>
        <input
          class="option-check"
          type="checkbox"
          name="Asteroides"
          value="Asteroides"
          id="Asteroides"
          @change="handleChangeAdornos"
        />
      </div>
    </div>
    <button class="button-form" type="submit">Hacer pedido</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      nombre: "",
      telefono: "",
      correo: "",
      descripcion: "",
      adornos: [],
      sabores: [],
    };
  },
  methods: {
    handleChangeNombre(e) {
      this.nombre = e.target.value;
    },
    handleChangeTelefono(e) {
      this.telefono = e.target.value;
    },
    handleChangeCorreo(e) {
      this.correo = e.target.value;
    },
    handleChangeDescripcion(e) {
      this.descripcion = e.target.value;
    },
    handleChangeAdornos(e) {
      const { checked, value } = e.target;
      if (checked) {
        this.adornos.push(value);
      } else {
        this.adornos = this.adornos.filter((adorno) => adorno !== value);
      }
    },
    handleChangeSabores(e) {
      const { checked, value } = e.target;
      if (checked) {
        this.sabores.push(value);
      } else {
        this.sabores = this.sabores.filter((adorno) => adorno !== value);
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      const data = {
        nombre: this.nombre,
        telefono: this.telefono,
        correo: this.correo,
        descripcion: this.descripcion,
        adornos: this.adornos,
        sabores: this.sabores,
      };
      this.$store.commit("setPedidos", data);
      console.log(this.$store.state.pedidos);
    },
  },
};
</script>
