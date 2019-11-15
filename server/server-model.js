const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	remove
};

function add(body) {
	return db.insert(body).into('users');
}

function find() {
	return db('users');
}

function remove(id) {
	return db('users')
		.where({ id })
		.del();
}
