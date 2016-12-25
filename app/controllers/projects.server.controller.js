// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'render' controller method
exports.create = function(req, res, next) {
  var errors = [],
    formattedErrors = {}
  req.assert('name', 'name is required').notEmpty()
  req.assert('description', 'description is required').notEmpty();
  
  req.getValidationResult().then(function(result) {
     errors = result.array()
     if (errors.length) {
       console.log('errors sent: ', errors);
       errors.forEach(function(error) {
         formattedErrors[error.param] =  [];
         formattedErrors[error.param].push(error.msg);
       })
       res.status(422).send(formattedErrors);
     }
     else {
       console.log('New project created!');
       res.send({message:'Project Created!'});
     }
   });
   
};


