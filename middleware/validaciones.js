const adminToken = require("../utils/adminToken");
const validaciones = {};

validaciones.validarToken = (req, res, next) => {
  try {
    const usuario = adminToken.validarToken(req.headers.authorization);
    console.log(usuario)
    req.datosUsuarioLogin = usuario;
    next();
  } catch (error) {
    res.status(400).json("Acesso denegado");
    console.log(error);
  }
};

// valido si es admin
validaciones.autenticarAdmin = (req, res, next) => {
  const permisosUsuario = req.datosUsuarioLogin.esAdmin;

  if (permisosUsuario == false) {
    res.status(401).json("usuario no tiene permisos")
  } else {
     next()
  }
};
module.exports = validaciones;
