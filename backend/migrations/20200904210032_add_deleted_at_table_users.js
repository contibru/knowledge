exports.up = function (knex) {
    return knex.schema.alterTable('users', table => {
        table.timestamp('deletedAt').nullable()
    })
};

exports.down = function (knex) {

    return knex.schema.alterTable('users', table => {
        table.dropColumn('deletedAt')
    })

};