const mysql = require('mysql');
const Table = require('./Table');

class DataBase {
	constructor(dbName, setting) {
		this.dbName = dbName;
		this.setting = setting;
		this.connection = null;
		this.init();
	}

	//	create connection to Database with setting

	init() {
		this.connection = mysql.createConnection(this.setting);
	}

	//	delete selected DB
	//	@dbName: string - DB that should be delete

	deleteDB(dbName) {
		this.connection.query(`DROP DATABASE ${dbName}`, (err, res) => {
			if (err) throw err;
			console.log(`DATABASE ${dbName} was successfully deleted`)
		})
	}

	//	create table in mySQL Database
	//	@tableName: string - name of table
	//	@con: {} - connection object

	createTable(tableName) {
		return new Table(tableName, this.connection)
	}

}

module.exports = DataBase;
