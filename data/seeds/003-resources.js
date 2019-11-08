
exports.seed = function(knex) {

      return knex('resources').insert([
        {name: 'computer', description: 'the essentials'},
        {name: 'test', description: 'its testing'},
        {name: 'another resource', description: 'another of something'}
      ]);
  
};
