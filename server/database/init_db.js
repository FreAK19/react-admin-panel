const mysql = require('mysql');

//	init database customers

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'customers'
});

module.exports = connection;
