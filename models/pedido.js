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
  const id = req.query.id;

  const resultado = sequelize(
    "SELECT  `idUsuario`, `fechaCreacion`, `metodoPago`, `estadoProducto` FROM `Pedidos` WHERE idPedidos =?",
    {
      replacements: [id],
    }
  );
  return resultado;
};

pedido.cancelarPedido = async (req) => {
  const idPedido = req.body.id;

  const resultado = await sequelize.query(
    "UPDATE Pedidos SET estadoProducto = 'cancelado'  WHERE idPedidos =",
    {
      replacements: [idPedido],
    }
  );
  return resultado;
};

module.exports = pedido;
