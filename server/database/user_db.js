const con = require('./init_db');
const Table = require('../core/Table');

con.connect();

const UserTable = new Table('users', con);

UserTable
	.addColumn('firstName', 'VARCHAR(255)')
	.addColumn('lastName', 'VARCHAR(255)')
	.addColumn('gender', 'VARCHAR(255)')
	.addColumn('email', 'VARCHAR(255)')
	.addColumn('password', 'VARCHAR(255)')
	.addColumn('avatar', 'VARCHAR(255)')
	.addColumn('country', 'VARCHAR(255)')
	.insert({
		firstName: 'Andrew',
		lastName: 'Kirichencko',
		gender: 'male',
		password: 'MTIzNHF3ZXJ0eQ==',
		country: 'Ukraine',
		email: 'andrey@yandex.ru'
	});

module.exports = UserTable;
