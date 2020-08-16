exports.up = function (knex) {
	return knex.schema.createTable('categories', function (table) {
		table.increments('id').primary()
		table.string('name').notNullable()
		table
			.integer('parentId', 10)
			.unsigned()
			.references('id')
			.inTable('categories')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('categories')
}
