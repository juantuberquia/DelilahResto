const { Router } = require("express");
const router = Router();
const pedido = require("../models/pedido");
const validarUsuario = require("../middleware/validarUsuario");

router
  .route("/")
  // agregar pedido
  .post(validarUsuario.validarAdmin, async (req, res) => {
    await pedido.agregarPedido(req);
    res.json("pedido agregado");
  })
  // obtener todos los pedidos
  .get(
    validarUsuario.validarAdmin,
    validarUsuario.autenticar,
    async (req, res) => {
      const datos = await pedido.obtenerPedidos();
      res.json(datos);
    }
  )
  //obtener pedido por id
  .get(validarUsuario.validarAdmin, async (req, res) => {
    const dato = await pedido.obtenerPedidoPorId(req);
    res.json(dato);
  })
  // cancelar pedido
  .put(validarUsuario.validarAdmin, async (req, res) => {
    const resultado = await pedido.cancelarPedido(req);

    res.json("producto cancelado correctamente");
  });

module.exports = router;
