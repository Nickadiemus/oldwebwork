// routes index.js

//obtains the module export from note_routes.js
// routes/index.js
const todoItemRoutes = require('./todo_routes');

module.exports = function(app, db) {
  todoItemRoutes(app, db);
  // Other route groups could go here, in the future
};
