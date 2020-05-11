// integracion con base de datos
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://master_juan:Acamica123@automosaiko.tk:3306/master_juan"
);

const Usuarios = {};

Usuarios.AgregarUsuario = async (datosUsuario) => {
  console.log(datosUsuario);
  const {
    usuario,
    nombre,
    correo,
    telefono,
    direccion,
    contrasena,
  } = datosUsuario;

  let resultado = await sequelize.query(
    "INSERT INTO usuarios( usuario, nombreCompleto, correo, telefono, direccion, contraseña) VALUES (?,?,?,?,?,?)",
    {
      replacements: [usuario, nombre, correo, telefono, direccion, contrasena],
    }
  );
  return resultado;
};

Usuarios.validarUsuario = async () => {
  let resultado = await sequelize.query(
    "SELECT usuario, correo, contraseña FROM usuarios",
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );
  return resultado;
};

Usuarios.AgregarPedido = async (idUsuario, fechaCreacion) => {
  let resultado = await sequelize.query(
    "INSERT INTO `Pedidos`(idUsuario, fechaCreacion) VALUES (?,?)",
    {
      replacements: [idUsuario, fechaCreacion],
    }
  );
  return resultado;
};
module.exports = Usuarios;
