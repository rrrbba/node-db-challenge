

exports.up = function(knex) {
    return knex.schema.createTable('projectt', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable()
        tbl.string('project_description')
        tbl.boolean('completed').notNullable().defaultTo(0);
    })
    .createTable('taskss', tbl => {
        tbl.increments();
        tbl.string('task_description', 255).notNullable()
        tbl.string('notes', 255)
        tbl.boolean('completed').notNullable().defaultTo(0)
        tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projectt')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      })
      
      .createTable('resourcess', tbl => {
          tbl.increments();
          tbl.string('name', 255).notNullable()
          tbl.string('description', 255);
      })
      .createTable('project_resourcess', tbl => {
          tbl.increments();
          tbl.integer('project_id')
          .unsigned()
          .references('id')
          .inTable('projectt')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
    
          tbl.integer('resource_id')
          .unsigned()
          .references('resources_id')
          .inTable('resourcess')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
      
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resourcess')
    .dropTableIfExists('resourcess')
    .dropTableIfExists('taskss')
    .dropTableIfExists('projectt')
};