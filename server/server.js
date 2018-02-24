const {createServer} = require('http');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const express = require('express');
const addUser = require('./database/method_db');
const con = require('./database/init_db');
//  port for app
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT) || 8080;

//	init express app
const app = express();
const dev = app.get('env') !== 'production';


con.connect(err => {
	if (err) throw err;

	if(!dev) {
		app.use(compression());
		app.use(morgan('common'));
		app.use(express.static(path.resolve(__dirname, 'build')));

		app.get('*', (req, res) => {
			res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
		});

		app.post('/login', (req, res) => {

		});

		app.post('/register', (req, res) => {
			addUser()
		})
	}

	if (dev) {
		app.use(morgan('dev'))
	}

});


const server = createServer(app);

server.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Server is running on port ${PORT}`)
});
