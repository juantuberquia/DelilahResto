const sequelize = require("../configuracion/conexionDB");
const pedido = {};

pedido.agregarPedido = async (req) => {
  const { fechaCreacion, metodoPago } = req.body;
  const idUsuario = req.datosUsuarioLogin.idUsuario;
  // const idPedido = req.query.idPed;
  const idProducto = req.query.idPro;

  const resultado = await sequelize.query(
    " INSERT INTO Pedidos(idUsuario, fechaCreacion, metodoPago, estadoProducto) VALUES (?,?,?,'nuevo')",
    {
      replacements: [idUsuario, fechaCreacion, metodoPago],
    }
  );

  const obtenerPedidos = await sequelize.query(
    " SELECT idPedidos FROM Pedidos ",
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );

  let vector = [];
  let conta = 0;
  obtenerPedidos.map((ele) => {
    vector[conta] = ele.idPedidos;
    conta++;
    vector.sort((a, b) => a - b);
  });
  let id = vector[vector.length - 1];

  const pedidoProducto = await sequelize.query(
    "INSERT INTO Pedidos_Productos(idPedidos, idProducto) VALUES ( ?,?)",
    {
      replacements: [id, idProducto],
    }
  );
  return [resultado, pedidoProducto];
};

pedido.obtenerPedidos = async () => {
  const resultado = await sequelize.query(
    "SELECT Pedidos.estadoProducto, Pedidos.fechaCreacion, Pedidos.idPedidos, Productos.nombre, Pedidos.metodoPago, Productos.precio, usuarios.nombreCompleto, usuarios.direccion FROM usuarios INNER JOIN Pedidos ON usuarios.idUsuario = Pedidos.idUsuario INNER JOIN Pedidos_Productos ON Pedidos_Productos.idPedidos = Pedidos.idPedidos INNER JOIN Productos ON Pedidos_Productos.idProducto = Productos.idProducto ",
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );
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

pedido.actualizarEstado = async (req) => {
  const idusuario = req.datosUsuarioLogin.idUsuario;
  const idpedido = req.query.idpedido;
  const estado = req.body.estadoProducto;

  const resultado = await sequelize.query(
    `UPDATE Pedidos SET estadoProducto = ?  WHERE idUsuario =? and idPedidos = ?`,
    {
      replacements: [estado, idusuario, idpedido],
    }
  );
  return resultado;
};
module.exports = pedido;
