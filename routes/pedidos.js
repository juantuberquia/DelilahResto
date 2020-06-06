const { Router } = require("express");
const router = Router();
const pedido = require("../models/pedido");
const validacion = require("../middleware/validaciones");

router
  .route("/")
  // agregar pedido
  .post(validacion.validarToken, async (req, res) => {
    await pedido.agregarPedido(req);
    res.json("pedido agregado");
  })
  // obtener todos los pedidos
  .get(
    validacion.validarToken,
    validacion.autenticarAdmin,
    async (req, res) => {
      const pedidos = await pedido.obtenerPedidos();
      res.json({ pedidos });
    }
  )
  //obtener pedido por id
  .get(
    validacion.validarToken,
    validacion.autenticarAdmin,
    async (req, res) => {
      const dato = await pedido.obtenerPedidoPorId(req);
      res.json(dato);
    }
  )

  // borrar pedido
  .delete(
    validacion.validarToken,
    validacion.autenticarAdmin,
    async (req, res) => {
      await pedido.eliminarPedido(req);
      res.status(200).json("pedido eliminado correctamente");
    }
  )

  // actualizar pedido
  .put(
    validacion.validarToken,
    validacion.autenticarAdmin,
    async (req, res) => {
      await pedido.actualizarEstado(req);
      res.json("estado del producto actualizado correctamente");
    }
  );

module.exports = router;
