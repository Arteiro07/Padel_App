var { Sequelize } = require('sequelize');

var sqlite = new Sequelize({
    dialect: 'sqlite',
    database: "pedoappdb",
    user:"dbAdmin",
    password:"1234",
    port:"3306"
});

// try {
//     sqlite.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }
const modelDefiners = [
	require('./user'),
	//require('./models/instrument.model'),
	//require('./models/orchestra.model'),
	// Add more models here...
	// require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

module.exports = sqlite ;



// MV - estava a funcionar a connection
// var mysql = require("mysql2");
// var connection = mysql.createConnection({
//   host:"localhost",
//   database:"pedoAppDb",
//   user:"dbAdmin",
//   password:"1234",
//   port:"3306"
// });
// connection.connect();
// connection.query('select * from user', function(err, rows, fields){
//     if(err)
//       throw err;
//     console.log(rows[0].Email);
// });
// connection.end();