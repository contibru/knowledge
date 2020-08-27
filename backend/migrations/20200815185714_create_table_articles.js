exports.up = function (knex) {
	return knex.schema.createTable('articles', function (table) {
		table.increments('id').primary()
		table.string('name').notNullable()
		table.string('description', 1000).notNullable()
		table.string('imageurl', 1000)
		table.binary('content').notNullable()
		table.integer('userId', 10).unsigned().references('id').inTable('users')
		table
			.integer('categoryId', 10)
			.unsigned()
			.references('id')
			.inTable('categories')
			.notNullable()
	})
}

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('articles')
}