const { Router } = require("express");
const router = Router();
const producto = require("../models/producto");
const validaUsuario = require("../middleware/validarUsuario");

router
  .route("/")
  .post(validaUsuario, async (req, res) => {
    await producto.agregarProducto(req);
    res.json("producto agregado correctamente");
  })
  .get(validaUsuario, async (req, res) => {
    const ObtenerProducto = await producto.obtenerPorID(req);
    res.json(ObtenerProducto);
  })
  .put(validaUsuario, async (req, res) => {
    await producto.actualizarPorID(req);
    res.json("Nombre del producto actualizado");
  })
  .delete(validaUsuario, async (req, res) => {
    await producto.eliminarProducto(req);
    res.json("producto eliminado exitosamente");
  });

module.exports = router;
