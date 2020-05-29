const { Router } = require("express");
const router = Router();
const usuario = require("../models/usuario");
const adminToken = require("../utils/adminToken");
const validarUsuario = require("../middleware/validarUsuario");

router
  .route("/")
  // agregar usuario
  .post(
    validarUsuario.validarAdmin,
    validarUsuario.autenticar,
    async (req, res) => {
      await usuario.AgregarUsuario(req.body);
      res.json("usuario agregado correctamente");
    }
  )
  // obtener todos los usurios
  .get(
    validarUsuario.validarAdmin,
    validarUsuario.autenticar,
    async (req, res) => {
      const resul = await usuario.obtenerUsuarios();
      console.log(resul);
      res.json(resul[0]);
    }
  )
  // eliminar usuario por id
  .delete(
    validarUsuario.validarAdmin,
    validarUsuario.autenticar,
    async (req, res) => {
      await usuario.eliminarUsuario(Number(req.query.id));
      res.json("usuario eliminado");
    }
  )
  // actualizar usuario por id
  .put(
    validarUsuario.validarAdmin,
    validarUsuario.autenticar,
    async (req, res) => {
      await usuario.actualizarPorID(req);
      res.json("dato del usuario actualizado ");
    }
  );

// obtener datos personales del usuario
router
  .route("/usuario")
  .get(
    validarUsuario.validarAdmin,
    validarUsuario.autenticar,
    async (req, res) => {
      const resultado = await usuario.obtenerPorID(req);
      res.json(resultado);
    }
  );

// validacion logueo
router.route("/login").get(async (req, res) => {
  const { correo, contrasena } = req.body;
  const user = await usuario.validar(correo, contrasena);
  let token;

  if (user.length > 0) {
    token = adminToken.crearToken(user);
    res.json({ token });
  } else {
    res.json(" datos ingresados son incorrectos ");
  }
});

module.exports = router;
