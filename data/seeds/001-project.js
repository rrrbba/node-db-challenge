
exports.seed = function(knex) {

      return knex('project').insert([
        {name: "Sprint Challenge", project_description: "I hope this works"},
        {name: "Tester Project"},
        {name: "Another Project", project_description: "Anoter project description"}
      ]);

};
