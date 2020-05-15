const { Router } = require("express");
const router = Router();
const usuario = require("../models/usuario");
const validar = require("../middleware/validarUsuario");

// implementar el jwt
// implemenatr usuarios admin y usuarios corrientes

router
  .route("/")
  // agregar usuario
  .post(async (req, res) => {
    // const resultado = await index.Usuarios();
    await usuario.AgregarUsuario(req.body);
    res.json("usuario agregado");
  })
  // obtener todos los usurios
  .get(async (req, res) => {
    await usuario.obtenerUsuarios();
    res.json(" get usuarios ok ");
  })
  // eliminar usuario por id
  .delete(async (req, res) => {
    await usuario.eliminarUsuario(req.query.id);
    res.json("usuario eliminado");
  })
  // actualizar usuario por id
  .put(async (req, res) => {
    await usuario.actualizarPorID(req.query.id);
    res.json("dato del usuario actualizado ");
  });

router.route("/login").get(validar(), async (req, res) => {});

// .get(async (req, res) => {
//   const { usuario, correo, contrasena } = req.body;
//   const getDatosUsarios = await usuario.validarUsuario();

//   getDatosUsarios.map((ele) => {
//     if (ele.usuario === usuario || ele.correo === correo) {
//       if (ele.contraseña === contrasena) {
//         res.json("usuario logueado");
//       }
//     }
//   });
// });

module.exports = router;
