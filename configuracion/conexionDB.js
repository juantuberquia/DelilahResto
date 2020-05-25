const Sequelize = require("sequelize");
const user = "master_juan";
const pass = "Acamica123";
const port = "3306";
const host = "automosaiko.tk";
const database = "master_juan";

const sequelize = new Sequelize(
  `mysql://${user}:${pass}@${host}:${port}/${database}`
);

module.exports = sequelize;
