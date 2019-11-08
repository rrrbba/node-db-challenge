const express = require('express');

const Projects = require('./project-model');

const router = express.Router();


//GET ALL PROJECTS
router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
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



module.exports = router;