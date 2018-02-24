const isObject = require('../utils/isObject');

class Table {
	constructor(name, connection) {
		this.name = name;
		this.con = connection;
		this.fields = [];
		this.init();
	}

	init() {
		const sql = `CREATE TABLE ${this.name} (id INT AUTO_INCREMENT PRIMARY KEY)`;
		this.con.query(sql,
			(err) => {
				if (err) throw err;
				console.log(`Table ${this.name} was added`)
			});
	}

	//	add new column to Table
	//	@column; string - column name
	//	@type; string - type of column

	addColumn(column, type) {
		this.fields.push(column);
		const sql = `ALTER TABLE ${this.name} ADD COLUMN ${column} ${type}`;
		this.con.query(sql, err => {
			if (err) throw err;
			console.log("Table altered");
		});
		return this;
	}

	getItemStartWith(key, char) {
		this.con.query(`SELECT * FROM ${this.name} WHERE ${key} LIKE '${char}%'`, (err, data) => {
			if (err) throw err;
			return data;
		})
	}

	getWhere(key, value) {
		this.con.query(`SELECT * FROM ${this.name} WHERE ${key} = '${value}'`, (err, data) => {
			if (err) throw err;
			return data;
		})
	}

	//	return row from table based on passed index

	getItem(index) {
		this.con.query(`SELECT * FROM ${this.name}`, (err, data) => {
			if (err) throw err;
			return data[index];
		});
	}

	//	return all table

	getAll() {
		this.con.query(`SELECT * FROM ${this.name}`, (err, data) => {
			if (err) throw err;
			return data;
		});
	}
	//	show all field from table
	//	@tableName: string - name of table that should be show

	showAll() {
		this.con.query(`SELECT * FROM ${this.name}`, (err, data) => {
			if (err) throw err;
			console.dir(data)
		});
		return this;
	}

	//	normalize values from array into one string
	//	['Andrew', 'New-York'] => "'Andrew', 'New-York'"

	normalizeField(fields) {
		if (Array.isArray(fields)){
			let res = '';
			for (let i = 0; i < fields.length; i += 1) {
				res += `'${fields[i]}', `
			}
			//	delete trailing comma
			return res.slice(0, -2);
		}
		return new Error('Argument should be Array')
	}

	insert(values) {
		//	if fields is present and its object type and its not empty object
		let sql = '';
		if (values) {
			if (isObject(values) && Object.keys(values).length > 0) {
				//	more than 80 character because its string template and /n will throw sql error
				sql = `INSERT INTO ${this.name} (${Object.keys(values).join(', ')}) VALUES (${this.normalizeField(Object.values(values))})`;
			} else if (Array.isArray(values)) {
				//	if values is array and if keys not passed, using it from cache
				sql = `INSERT INTO ${this.name} (${this.fields.join(', ')}) VALUES (${this.normalizeField(values)})`;
			}
		}
		this.con.query(sql, (err) => {
			if (err) throw err;
			console.log("1 record inserted");
		});

		return this;
	}

	//	update table row based on user ID or object of column name
	//	field: string - what field to change
	//	id: number | string - id of user that should change
	//	query: {} - obj of property that will be as filter

	update(field, value, query) {
		let sql = ' ';
		if (isObject(query)) {
			sql = `UPDATE ${this.name} SET ${field} = '${value}' WHERE ${Object.keys(query)[0]} = '${Object.values(query)[0]}'`;
		} else if(typeof query === 'number') {
			sql = `UPDATE ${this.name} SET ${field} = '${value}' WHERE id = '${parseInt(query, 10)}'`;
		}

		this.con.query(sql, err => {
			if (err) throw err;
		});
		return this;
	}

	//	delete table from mySQL Database
	//	@tableName: string - name of table that will be delete

	deleteTable() {
		this.con.query(`DROP TABLE ${this.name}`, (err) => {
			if (err) throw err;
			console.log(`Table ${this.name} was successfully removed`)
		});
	}
}

module.exports = Table;
