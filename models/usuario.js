// integracion con base de datos
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://master_juan:Acamica123@automosaiko.tk:3306/master_juan"
);

const Usuarios = {};
Usuarios.AgregarUsuario = async (datosUsuario) => {
  const {
    usuario,
    nombre,
    correo,
    telefono,
    direccion,
    contrasena,
    esAdmin,
  } = datosUsuario;

  let resultado = await sequelize.query(
    "INSERT INTO usuarios( usuario, nombreCompleto, correo, telefono, direccion, contraseña, esAdmin) VALUES (?,?,?,?,?,?,false)",
    {
      replacements: [
        usuario,
        nombre,
        correo,
        telefono,
        direccion,
        contrasena,
        esAdmin,
      ],
    }
  );
  return resultado;
};

Usuarios.obtenerUsuarios = async () => {
  const usuarios = await sequelize.query(
    "SELECT usuario,nombreCompleto FROM `usuarios`",
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );
  return usuarios;
};

Usuarios.eliminarUsuario = async (id) => {
  const usuario = await sequelize.query(
    "DELETE FROM `usuarios` WHERE idUsuario = ?",
    {
      replacements: [id],
    }
  );
  return usuario;
};

Usuarios.actualizarPorID = async (id) => {
  const resul = await sequelize.query(
    "UPDATE usuarios SET usuario='taniaMaria' WHERE idUsuario = ?",
    {
      replacements: [id],
    }
  );
  return resul;
};

Usuarios.validar = async (correo, contrasena) => {
  const resul = await sequelize.query(
    "SELECT usuario, nombreCompleto, correo, telefono, direccion FROM usuarios WHERE correo = ? and contraseña = ?",
    {
      replacements: [correo, contrasena],
      type: sequelize.QueryTypes.SELECT,
    }
  );
  resul.map(function (ele) {
    if (ele) {
      console.log(" ok datos usuario");
    } else {
      return -1;
    }
  });
  return resul;
};

// Usuarios.validarUsuario = async () => {
//   let resultado = await sequelize.query(
//     "SELECT usuario, correo, contraseña FROM usuarios",
//     {
//       type: sequelize.QueryTypes.SELECT,
//     }
//   );
//   return resultado;
// };

// Usuarios.AgregarPedido = async (idUsuario, fechaCreacion) => {
//   let resultado = await sequelize.query(
//     "INSERT INTO `Pedidos`(idUsuario, fechaCreacion) VALUES (?,?)",
//     {
//       replacements: [idUsuario, fechaCreacion],
//     }
//   );
//   return resultado;
// };
module.exports = Usuarios;
