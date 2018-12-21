const express = require('express'); 
const bodyParser = require('body-parser'); 
const morgan = require('morgan'); 
const path = require('path'); 
const db = require('../database/knex.js');
require('dotenv').config();
const port = process.env.PORT || 3002;



const app = express(); 
app.use(express.static(path.join(__dirname, '../client/dist')));

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(bodyParser.json()); 
app.use(morgan('dev')); 

// ROUTES
// GET all projects from database 
app.get('/projects', (req, res) => {
  console.log('PROCESS VARIABLES', process.env.PSQL_PASSWORD)
  db.select()
    .from('projects')
    .then(listOfProjects => {
      console.log('HERE IS A LIST OF OUR PROJECTS!!!', listOfProjects); 
      return listOfProjects;
    })
    .then(listOfProjects => {
      res.status(200).json(listOfProjects);
    })
    .catch((err) => {
      console.log('Errror', err)
      res.status(400).send('Error getting projects from server');
    })
}); 
// GET one project route from external servers
app.get('/projects/:id', (req, res) => {
  
}); 


app.listen(port, () => {
  console.log(`Proxy server running at: http://localhost:${port}`);
});




