const db = require('../data/db-config');


module.exports = {
    find,
    findResources,
    findTasks,
    addResource, 
    addProject, 
    addTask

}

function find() {
    return db.select('*').from('project');
}

function findResources() {
    return db.select('*').from('resources');
}


function findTasks(id) {
    return db('tasks as t')
    .join('project as p', 'p.id', 't.project_id')
    .select('t.task_id', 't.task_description', 't.notes', 'p.name', 'p.project_description', 't.completed')
    .where({ project_id: id});
}


function addProject(project) {
    return db('project')
    .insert(project)
    .then(ids => ({ id: ids[0] }))
}

function addResource(resource){
    return db('resources')
    .insert(resource)
    .then(ids => ({ id: ids[0] }))
}

function addTask(task) {
    return db('tasks')
    .insert(task, 'id')
    .then(ids => ({ id: ids[0] }))
}