const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://master_juan:Acamica123@automosaiko.tk:3306/master_juan"
);

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

module.exports = productos;
