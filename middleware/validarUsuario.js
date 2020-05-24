const adminToken = require("../utils/adminToken");

const validaciones = {};

validaciones.validarAdmin = (req, res, next) => {
  try {
    const usuario = adminToken.validarToken(req.headers.authorization);
    req.datosUsuarioLogin = usuario;
    next();
  } catch (error) {
    res.status(400).json("Acesso denegado");
    console.log(error);
  }
};

validaciones.autenticar = (req, res, next) => {
  const usuario = req.datosUsuarioLogin.usuario;

  if (usuario === "4dministr4dor") {
    next();
  } else {
    res.json("usuario no tiene permisos");
  }
};
module.exports = validaciones;
