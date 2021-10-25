

const Sequelize = require("sequelize");
const sequelize = new Sequelize('pedoappdb','root','1234', {
  host:'localhost',
  dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.js")(sequelize, Sequelize);

module.exports = db;
