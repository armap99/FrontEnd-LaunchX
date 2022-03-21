import { createStore } from "vuex";

export default createStore({
  state: {
    sabores: [
      { nombre: "Chocolate", precio: 150, catidad: 10, unidades: "Kg" },
      { nombre: "Vainilla", precio: 100, catidad: 5, unidades: "Kg" },
      { nombre: "Fresa", precio: 130, catidad: 7, unidades: "Kg" },
      { nombre: "Café", precio: 180, catidad: 8, unidades: "Kg" },
    ],
    decoraciones: [
      {
        nombre: "Estrellas de Chocolate",
        precio: 10,
        catidad: 100,
        unidades: "Piezas",
      },
      {
        nombre: "Vacas astronautas",
        precio: 20,
        catidad: 50,
        unidades: "Piezas",
      },
      { nombre: "Cohetes", precio: 25, catidad: 70, unidades: "Piezas" },
      {
        nombre: "Asteroides de nuez",
        precio: 30,
        catidad: 150,
        unidades: "Piezas",
      },
    ],
    pedidos: [],
  },
  getters: {},
  mutations: {
    setPedidos: (state, pedidos) => {
      state.pedidos.push(pedidos);
    },
  },
  actions: {},
  modules: {},
});
