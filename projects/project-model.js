const db = require('../data/db-config');


module.exports = {
    find,
    findResources,
    findTasks
}

function find() {
    return db.select('*').from('project');
}

function findResources() {
    return db.select('*').from('resources');
}

function findTasks() {
    
}