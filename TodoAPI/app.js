const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors')
//sets up express
const app = express();

//debugging requests to console
app.use(logger('dev'));

//parses data from requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened: false}));
app.use(cors());
require('./server/routes')(app);
app.get('*', (req, res) => { res.status(200).send({
  message: 'Welcome to todo API',
})});

module.exports = app;
