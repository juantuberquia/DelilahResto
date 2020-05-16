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
  } = datosUsuario;

  let resultado = await sequelize.query(
    "INSERT INTO usuarios( usuario, nombreCompleto, correo, telefono, direccion, contraseña, esAdmin) VALUES (?,?,?,?,?,?,false)",
    {
      replacements: [usuario, nombre, correo, telefono, direccion, contrasena],
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

// corregir le tania maria ****
Usuarios.actualizarPorID = async (req) => {
  const id = req.query.id;
  const NewUsuario = req.body.usuario;

  const resul = await sequelize.query(
    "UPDATE usuarios SET usuario=? WHERE idUsuario = ?",
    {
      replacements: [NewUsuario, id],
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
