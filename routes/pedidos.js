const { Router } = require("express");
const router = Router();
const pedido = require("../models/pedido");
const validaUsuario = require("../middleware/validarUsuario");

router
  .route("/")
  // agregar pedido
  .post(validaUsuario, async (req, res) => {
    await pedido.agregarPedido(req);
    res.json("pedido agregado");
  })
  // obtener todos los pedidos
  .get(async (req, res) => {
    const datos = await pedido.obtenerPedidos();
    res.json(datos);
  })
  //obtener pedido por id
  .get(async (req, res) => {
    const dato = await pedido.obtenerPedidoPorId(req);
    res.json(dato);
  })
  // cancelar peddido
  .put(async (req, res) => {
    await pedido.cancelarPedido(req);
  });

module.exports = router;
