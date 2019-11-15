const db = require('../data/dbConfig');

const { add, remove } = require('./server-model');

describe('', function() {
	describe('add()', function() {
		beforeEach(async () => {
			await db('users').truncate();
		});

		it('should add a user', async function() {
			await add({ username: 'student', password: 'pass' });

			const users = await db('users');

			expect(users).toHaveLength(1);
		});

		it("should add a user's password", async function() {
			await add({ username: 'student2', password: 'pass2' });
			await add({ username: 'student3', password: 'pass3' });

			const users = await db('users');

			expect(users[0].password).toBe('pass2');
			expect(users[1].password).toBe('pass3');
		});
	});
});

describe('', function() {
	describe('remove()', function() {
		it('should remove a user', async function() {
			await remove(1);

			const users = await db('users');

			expect(users).toHaveLength(1);
		});

		it('should remove two users from db', async function() {
			await remove(1);
			await remove(2);

			const users = await db('users');

			expect(users).toHaveLength(0);
		});

		it('user1 should be undefined', async function() {
			await remove(1);

			const users = await db('users');

			expect(users[1]).toBeUndefined();
		});
	});
});
