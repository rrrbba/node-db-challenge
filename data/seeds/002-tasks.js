
exports.seed = function(knex) {

      return knex('tasks').insert([
        {task_description: 'Make a 2 at least', notes: 'plan effectively', project_id: 1},
        {task_description: 'Tester task', project_id: 2},
        {task_description: 'Another description', notes: 'another note', project_id: 3},
      ]);

};
