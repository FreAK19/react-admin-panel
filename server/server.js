const {createServer} = require('http');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const express = require('express');
const UserTable = require('./database/user_db');
const con = require('./database/init_db');

//  port for app
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT) || 8080;

//	init express app
const app = express();
const dev = app.get('env') !== 'production';

if (!dev) {
	app.use(compression());
	app.use(morgan('common'));
	app.use(express.static(path.resolve(__dirname, 'build')));

	con.connect(() => {
		app.get('*', (req, res) => {
			res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
		});

		//	login route

		app.post('/login', (req, res) => {
			const body = JSON.parse(req.headers.body);
			con.query(`SELECT * FROM users WHERE email = '${body.email}'`, (err, data) => {
				if (err) throw err;
				//	if user present
				if (data) {
					//	if passwords identical
					if(body.password === data[0].password) {
						//	only for dev target
						delete data[0].password;
						res.send(JSON.stringify(data[0]));
					} else {
						res.send(JSON.stringify({
							error: 'Invalid password!'
						}));
					}
				} else {
					res.send(JSON.stringify({
						error: 'User not found!'
					}));
				}
			});
		});

		//	register route

		app.post('/register', (req, res) => {
			const body = JSON.parse(req.headers.body);
			const { firstName, lastName, password, email, gender } = body;
			const user = {
				firstName,
				email,
				password,
				lastName,
				gender
			};
			//	create new row in table
			UserTable.insert(user);
			//	send its object again
			//	only for dev target
			const newUser = Object.assign({}, user);
			delete newUser.password;
			res.send(JSON.stringify(newUser))
		})
	})
}

if (dev) {
	app.use(morgan('dev'))
}


const server = createServer(app);

server.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Server is running on port ${PORT}`)
});
