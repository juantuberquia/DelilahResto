const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://master_juan:Acamica123@automosaiko.tk:3306/master_juan"
);

module.exports = sequelize;
