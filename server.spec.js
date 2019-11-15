const request = require('supertest');

const server = require('./server');

it('should set db environment to test', function() {
	expect(process.env.DB_ENV).toBe('testing');
});

describe('server / GET', function() {
	it('should return 200 OK', function() {
		return request(server)
			.get('/users')
			.then(res => {
				expect(res.status).toBe(200);
			});
	});

	it('check for format type', function() {
		return request(server)
			.get('/users')
			.then(res => {
				expect(res.type).toMatch(/json/i);
			});
	});
});
