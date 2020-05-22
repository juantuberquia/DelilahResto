const sequelize = require("../configuracion/conexionDB");

const pedido = {};

pedido.agregarPedido = async (req) => {
  const { fechaCreacion, metodoPago } = req.body;
  const idUsuario = req.datosUsuarioLogin.idUsuario;

  const resultado = await sequelize.query(
    " INSERT INTO Pedidos(idUsuario, fechaCreacion, metodoPago, estadoProducto) VALUES (?,?,?,'nuevo')",
    {
      replacements: [idUsuario, fechaCreacion, metodoPago],
    }
  );
  return resultado;
};

pedido.obtenerPedidos = async () => {
  const resultado = await sequelize.query("SELECT * FROM Pedidos", {
    type: sequelize.QueryTypes.SELECT,
  });
  return resultado;
};

pedido.obtenerPedidoPorId = async (req) => {
  const id = req.datosUsuarioLogin.idUsuario;
  const resultado = sequelize(
    "SELECT idPedido, `idUsuario`, `fechaCreacion`, `metodoPago`, `estadoProducto` FROM `Pedidos` WHERE idPedidos =?",
    {
      replacements: [id],
    }
  );
  return resultado;
};

pedido.cancelarPedido = async (req) => {
  const idusuario = req.datosUsuarioLogin.idUsuario;
  const idpedido = req.query.idpedido;

  const resultado = await sequelize.query(
    "UPDATE Pedidos SET estadoProducto = 'cancelado'  WHERE idUsuario =? and idPedidos = ?",
    {
      replacements: [idusuario, idpedido],
    }
  );
  return resultado;
};

module.exports = pedido;
