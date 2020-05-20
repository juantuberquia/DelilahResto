const adminToken = require("../utils/adminToken");

module.exports = function validarAdmin(req, res, next) {
  try {
    const usuario = adminToken.validarToken(req.headers.authorization);
    req.datosUsuarioLogin = usuario;
    next();
  } catch (error) {
    res.status(400).json("Acesso denegado");
    console.log(error);
  }
};
