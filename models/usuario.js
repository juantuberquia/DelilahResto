const sequelize = require("../configuracion/conexionDB");
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
    "SELECT usuario,nombreCompleto, correo, telefono, direccion FROM usuarios",
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

Usuarios.obtenerPorID = async (req) => {
  const usuario = req.body.usuario;
  const datosUsuario = sequelize.query(
    "SELECT usuario, nombreCompleto, correo, telefono, direccion FROM usuarios WHERE usuario= ?",
    {
      replacements: [usuario],
      type: sequelize.QueryTypes.SELECT,
    }
  );
  return datosUsuario;
};

Usuarios.validar = async (correo, contrasena) => {
  const resul = await sequelize.query(
    "SELECT idUsuario, usuario, nombreCompleto, correo, telefono, direccion, esAdmin FROM usuarios WHERE correo = ? and contraseña = ?",
    {
      replacements: [correo, contrasena],
      type: sequelize.QueryTypes.SELECT,
    }
  );
  return resul;
};
module.exports = Usuarios;
