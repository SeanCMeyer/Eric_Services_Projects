const express = require('express'); 
const bodyParser = require('body-parser'); 
const morgan = require('morgan'); 
const path = require('path'); 
const knex = require('../database/knex.js');
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
  knex.select()
    .from('projects')
    .then(listOfProjects => {
      return listOfProjects;
    })
    .then(listOfProjects => {
      res.status(200).json(listOfProjects);
    })
    .catch((err) => {
      res.status(403).send('Error retrieving projects');
    })
}); 
// GET one project route from external servers
app.get('/projects/:id', (req, res) => {

  
  console.log('CURRENT PARAMS stuff ', req.params); 
  res.status(200).send(req.params.id)
}); 


app.listen(port, () => {
  console.log(`Proxy server running at: http://localhost:${port}`);
});




