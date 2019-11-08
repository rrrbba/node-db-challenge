const express = require('express');

const Projects = require('./project-model');

const router = express.Router();



router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
    })
});




module.exports = router;