

module.exports = (sequelize, Sequelize) => {

const User = sequelize.define('User', {
  // Model attributes are defined here
  IdUser: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  UserName: {
    type: Sequelize.STRING,
    allowNull: false

    // allowNull defaults to true
  },
  DisplayName: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  Telephone: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  Location: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  tableName: "User",
  timestamps: false,
});
return User;
};
