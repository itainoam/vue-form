// Invoke 'strict' JavaScript mode
'use strict';

// Define the routes module' method
module.exports = function(app) {
  // Load the 'index' controller
  var projects = require('../controllers/projects.server.controller');
  
  // Mount the 'index' controller's 'render' method
  app.post('/projects/create', projects.create);
};