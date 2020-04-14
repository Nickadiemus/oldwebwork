/*
Author: Nick Sladic
Date: 3/30/17
FoojiTask2: Create a Basic todo list API
Frameworks used: node.js, express.js, mongodb.js, nodemon.js, ES6, MLAB
*/

//server.js

//aquires express framework
const express = require('express');
//MongocDB Client
const MongoClient = require('mongodb').MongoClient;
//body-parser
const bodyParser = require('body-parser');
//MLab database url w/ username and password
//const db = require('./config/db');

//sam's database
const dbf = "mongodb://sammarks:fooji@ds145800.mlab.com:45800/foojitask2";
//express object named app
const app = express();
//port used to listen
const port = 3000;

//decodes uri for html requests
app.use(bodyParser.urlencoded({ extended: true }));

//connects to the Mongo Database at specified url in config
//just made a temp account and gave you access
MongoClient.connect(dbf, (err, database) => {
  //checks for loading error
  if (err) return console.log(err)

  //obtains routing requests from app/routes/
  require('./app/routes')(app, database);

  //Verifies if server local server is running
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });

})
