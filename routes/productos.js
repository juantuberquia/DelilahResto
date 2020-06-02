const { Router } = require("express");
const router = Router();
const producto = require("../models/producto");
const validacion = require("../middleware/validaciones");

router
  .route("/")
  .post(
    validacion.validarToken,
    validacion.autenticarAdmin,
    async (req, res) => {
      await producto.agregarProducto(req);
      res.json("producto agregado correctamente");
    }
  )

  // obtener productos
  .get(
    validacion.validarToken,
    async (req, res) => {
      const productos = await producto.obtenerProductos(req);
      res.json(productos);
    }
  )

  .put(
    validacion.validarToken,
    validacion.autenticarAdmin,
    async (req, res) => {
      await producto.actualizarPorID(req);
      res.json("Nombre del producto actualizado");
    }
  )
  .delete(
    validacion.validarToken,
    validacion.autenticarAdmin,
    async (req, res) => {
      await producto.eliminarProducto(req);
      res.json("producto eliminado exitosamente");
    }
  );

// obtener producto por ID
router
  .route("/id")
  .get(
    validacion.validarToken,
    validacion.autenticarAdmin,
    async (req, res) => {
      const ObtenerProducto = await producto.obtenerPorID(req);
      res.json(ObtenerProducto);
    }
  );

module.exports = router;
