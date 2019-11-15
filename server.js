require('dotenv').config();
const express = require('express');

const Users = require('./server/server-model');

const server = express();

server.use(express.json());

server.get('/users', (req, res) => {
	Users.find()
		.then(response => {
			res.status(200).json(response);
		})
		.catch(error => {
			console.log(error);
			res.status(500).json(error);
		});
});

server.post('/users', (req, res) => {
	console.log(req.body);
	Users.add(req.body)
		.then(response => {
			res.status(201).json(response);
		})
		.catch(error => {
			console.log(error);
			res.status(500).json(error);
		});
});

server.delete('/users/:id', (req, res) => {
	Users.remove(req.params.id)
		.then(response => {
			res.status(200).json(response);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = server;
