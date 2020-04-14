const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Application Programming Interface'
  }))
  //Route for creating new Todo Object
  app.post('/api/todos', todosController.create);
  //Route for Getting All Todo Objects and Their TodoItems
  app.get('/api/todos', todosController.list);
  //Route for creating TodoItems
  app.post('/api/todos/:todoId/items', todoItemsController.create);
  //Route for fetching a single Todo Object
  app.get('/api/todos/:todoId', todosController.retrieve);
  //Route for updating a single Todo Object
  app.put('/api/todos/:todoId', todosController.update);
  //Route for deleting a single Todo Object
  app.delete('/api/todos/:todoId', todosController.destroy);

  //Route for creating TodoItems
  app.post('/api/todos/:todoId/items', todoItemsController.create);
  //Route for updating a Todo Object's TodoItem
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  //Route for deleting a Todo Object's TodoItem
  app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);

  //prevents any other request method on Todo Items
  app.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
       message: 'Error, this method is forbidden',
  }));
}
