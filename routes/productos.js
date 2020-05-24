const { Router } = require("express");
const router = Router();
const producto = require("../models/producto");
const validarUsuario = require("../middleware/validarUsuario");

router
  .route("/")
  .post(
    validarUsuario.validarAdmin,
    validarUsuario.autenticar,
    async (req, res) => {
      await producto.agregarProducto(req);
      res.json("producto agregado correctamente");
    }
  )

  // obtener productos
  .get(
    validarUsuario.validarAdmin,
    validarUsuario.autenticar,
    async (req, res) => {
      const productos = await producto.obtenerProductos(req);
      res.json(productos);
    }
  )

  .put(
    validarUsuario.validarAdmin,
    validarUsuario.autenticar,
    async (req, res) => {
      await producto.actualizarPorID(req);
      res.json("Nombre del producto actualizado");
    }
  )
  .delete(
    validarUsuario.validarAdmin,
    validarUsuario.autenticar,
    async (req, res) => {
      await producto.eliminarProducto(req);
      res.json("producto eliminado exitosamente");
    }
  );

// obtener producto por ID
router
  .route("/id")
  .get(
    validarUsuario.validarAdmin,
    validarUsuario.autenticar,
    async (req, res) => {
      const ObtenerProducto = await producto.obtenerPorID(req);
      res.json(ObtenerProducto);
    }
  );

module.exports = router;
