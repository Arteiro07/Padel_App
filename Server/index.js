// server/index.js

const config = require("./config");

const express = require("express");
const db = require("./model");

var cors = require("cors");


try {
    db.sequelize.sync();
     console.log('Connection has been established successfully.');
 } catch (error) {
     console.error('Unable to connect to the database:', error);
 }
const app = express();

app.use(cors());

app.get("/api",(req, res) => {
	makeHandlerAwareOfAsyncErrors(getAll(req,res))
});

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});

async function getAll(req, res) {
  //console.log("1");
	const users = await db.users.findAll();
  //console.log(users);
	res.status(200).json(users);
};

function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}