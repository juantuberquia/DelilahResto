const jwt = require("jsonwebtoken");
const firma = "c0ntr4señaPar4F3rmar";
// const DatoUsuario = require("../routes/usuarios");
let token;
const Token = {};

Token.crearToken = (datoUsuario) => {
  const token = jwt.sign(datoUsuario, firma);
  console.log(token);
  return token;
};

Token.validarToken = () => {
  jwt.verify(token, firma);
};

module.exports = Token;
