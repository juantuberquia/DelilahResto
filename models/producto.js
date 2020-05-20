const sequelize = require("../configuracion/conexionDB");

const productos = {};

productos.agregarProducto = async (req) => {
  const { nombre, precio } = req.body;
  const resultado = await sequelize.query(
    "INSERT INTO Productos( nombre, precio) VALUES ( ?,?)",
    {
      replacements: [nombre, precio],
    }
  );
  return resultado;
};

productos.obtenerPorID = async (req) => {
  const id = req.query.id;

  const resultado = await sequelize.query(
    " SELECT  nombre, precio FROM `Productos` WHERE idProducto = ? ",
    {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT,
    }
  );
  return resultado;
};

productos.actualizarPorID = async (req) => {
  const nombre = req.body.nombre;
  const id = req.query.id;

  const resultado = await sequelize.query(
    " UPDATE Productos SET nombre=?  WHERE idProducto = ?",
    {
      replacements: [nombre, id],
    }
  );
  return resultado;
};

productos.eliminarProducto = async (req) => {
  const id = req.query.id;

  const resultado = await sequelize.query(
    "DELETE FROM `Productos` WHERE idProducto = ?",
    {
      replacements: [id],
    }
  );
  return resultado;
};

module.exports = productos;
