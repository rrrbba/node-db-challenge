const express = require('express');

const Projects = require('./project-model');

const router = express.Router();


//GET ALL PROJECTS
router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        projects.forEach(project => {
            project.completed = project.completed ? true : false
        })
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
    })
});

//GET ALL RESOURCES
router.get('/resources', (req, res) => {
    Projects.findResources()
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' });
    })
})

//GET TASKS BY PROJECT ID 
router.get('/:id/tasks', (req, res) => {
    const id = req.params.id;
    Projects.findTasks(id)
    .then(tasks => {
        tasks.forEach(task => {
            task.completed = task.completed ? true : false
        })
        res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
})

//ADD PROJECT
router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
    .then(project => {
        res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
})


//ADD RESOURCE
router.post('/resources', (req, res) => {
    const resourceData = req.body;

    Projects.addResource(resourceData)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
})

//ADD TASK
router.post('/tasks', (req, res) => {
    const taskData = req.body;

    Projects.addTask(taskData)
    .then(task => {
        res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
})

module.exports = router;