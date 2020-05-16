const adminToken = require("../utils/adminToken");

module.exports = function validarAdmin(req, res, next) {
  try {
    adminToken.validarToken(req.headers.authorization);
    next();
  } catch (error) {
    res.status(400).json("Acesso denegado");
    console.log(error);
  }
};
