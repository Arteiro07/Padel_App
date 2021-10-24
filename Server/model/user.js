const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  IdUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  UserName: {
    type: DataTypes.STRING,
    allowNull: false
    
    // allowNull defaults to true
  },
  DisplayName: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  Telephone: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  Location: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  tableName: "user"
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true

module.exports = User;