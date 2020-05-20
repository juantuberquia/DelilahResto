const jwt = require("jsonwebtoken");
const firma = "c0ntr4señaPar4F3rmar";
let token;
const Token = {};

Token.crearToken = (datoUsuario) => {
  token = jwt.sign(datoUsuario[0], firma);
  return token;
};

Token.validarToken = (datoToken) => {
  return jwt.verify(datoToken, firma);
};

module.exports = Token;
