
exports.up = function(knex) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable()
        tbl.string('project_description')
        tbl.boolean('completed').notNullable().defaultTo(0);
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.string('task_description', 255).notNullable()
        tbl.string('notes', 255)
        tbl.boolean('completed').notNullable().defaultTo(0)
        tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('project')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      })
      
      .createTable('resources', tbl => {
          tbl.increments('resources_id');
          tbl.string('name', 255).notNullable()
          tbl.string('description', 255);
      })
      .createTable('project_resources', tbl => {
          tbl.increments('project_resource_id');
          tbl.integer('project_id')
          .unsigned()
          .references('id')
          .inTable('project')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
    
          tbl.integer('resource_id')
          .unsigned()
          .references('resources_id')
          .inTable('resources')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
      
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('project')
};
