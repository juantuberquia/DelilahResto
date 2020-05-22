const { Router } = require("express");
const router = Router();
const producto = require("../models/producto");
const validarUsuario = require("../middleware/validarUsuario");

router
  .route("/")
  .post(validarUsuario.validarAdmin, async (req, res) => {
    await producto.agregarProducto(req);
    res.json("producto agregado correctamente");
  })
  .get(validarUsuario.validarAdmin, async (req, res) => {
    const ObtenerProducto = await producto.obtenerPorID(req);
    res.json(ObtenerProducto);
  })
  .put(validarUsuario.validarAdmin, async (req, res) => {
    await producto.actualizarPorID(req);
    res.json("Nombre del producto actualizado");
  })
  .delete(validarUsuario.validarAdmin, async (req, res) => {
    await producto.eliminarProducto(req);
    res.json("producto eliminado exitosamente");
  });

module.exports = router;
