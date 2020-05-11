const { Router } = require("express");
const router = Router();
const index = require("../models/index");

// implementar el jwt
// implemenatr usuarios admin y usuarios corrientes

router
  .route("/")
  .post(async (req, res) => {
    // const resultado = await index.Usuarios();
    const resultado = await index.AgregarUsuario(req.body);
    res.json("usuario agregado");
  })
  .get(async (req, res) => {
    const { usuario, correo, contrasena } = req.body;
    const getDatosUsarios = await index.validarUsuario();

    getDatosUsarios.map((ele) => {
      if (ele.usuario === usuario || ele.correo === correo) {
        if (ele.contraseña === contrasena) {
          res.json("usuario logueado");
        }
      }
    });
  });

module.exports = router;
