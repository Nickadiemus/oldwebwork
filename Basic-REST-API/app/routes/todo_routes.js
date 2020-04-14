/*
Author: Nick Sladic
Date: 3/30/17
FoojiTask2: Create a Basic todo list API
Frameworks used: node.js, express.js, mongodb.js, nodemon.js, ES6, MLAB
*/

// note_routes.js

var ObjectID = require('mongodb').ObjectID;
//acquires the Todo Object Template from the models library
const TODO = require('../../models/todo.js');
//exports database
module.exports = (app, db) =>{

//================================|
//           Home Route           |
//================================|

  //default page w/ instructions
  app.get('/', (req,res) => {
    res.send('please use /api/ to use TODO API');
  });

//================================|
//          Delete Routes         |
//================================|

  //uses Delete request passed with a id parameter
  app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('TodoItems').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('The item ' + id + ' deleted!');
      }
    });
  });

//================================|
//          Input Routes          |
//================================|

  //uses post request to send :item input to the database
  app.post('/api/add/:item', (req, res) => {
    //acquires :item parameter inputed and inserts to the 'Todo' Object
    TODO["Todo"].TODOItem = req.params.item;
    //creates unique id for database
    TODO["_id"] = new ObjectID();

    db.collection('TodoItems').insert(TODO, (err, result) => {
      if (err) {
        console.log(err);
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });


//================================|
//          Update Route          |
//================================|

  //Updates current TodoItems with a put request based on ID and a input of your choice
  app.patch('/api/update/:id/:update', (req, res) => {
    //acquires :id
    const id = req.params.id;
    const detail = { '_id': new ObjectID(id) };
    //replaces a Todo Item with the parameter :update from the todo Model
    TODO["Todo"].TODOItem = req.params.update;
    db.collection('TodoItems').update(detail, TODO, (err, result) => {
      if (err) {
          console.log(err);
          res.send({'error':'An error has occurred'});
      } else {
          res.send(TODO);
      }
    });
  });

//================================|
//          Search Routes         |
//================================|


  //Finds TodoItems with a get request by unique ID
  app.get('/api/find/id/:id', (req, res) => {
    const id = req.params.id;
    const detail = { '_id': new ObjectID(id) };
    db.collection('TodoItems').findOne(detail, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  //Lists all the TODOItems and Their ID's from the collection and converts
  //the TodoItems into an array that can be used to manipulate for whatever
  //reason
  app.get('/api/group/', (req, res) => {
     db.collection('TodoItems',(err, collection) => {
        //Creates a list of Todo Objects that can be then grouped by
        //user's desire
         collection.find().toArray((err, items) => {
           console.log(items);
           res.send(items);
         });
     });
  });

};
