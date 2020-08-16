module.exports = {
	client: 'mysql',
	connection: {
		database: 'knowledge',
		user: 'root',
		password: 'laranjauva',
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: 'knex_migrations',
	},
}
