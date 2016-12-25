// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'render' controller method
exports.create = function(req, res, next) {
  var errors = [];
  req.assert('name', 'name is required').notEmpty()
  req.assert('description', 'description is required').notEmpty();
  
  req.getValidationResult().then(function(result) {
     errors = result.array()
     if (errors.length) {
       console.log('errors sent: ', errors);
       res.status(422).send(errors);
     }
     else {
       res.send('Project Created!');
     }
   });
   
};
