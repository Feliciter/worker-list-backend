﻿require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes employee
app.use('/users', require('./users/users.controller'));
app.use('/employees', require('./employees/employee.controller'));
// global error handler
app.use(errorHandler);

// start server
//const port =  process.env.MONGODB_URI === 'production' ? (process.env.PORT || 80) : 4000;
//const port = process.env.MONGODB_URI || 'mongodb://localhost:27017/cookbookmean'
const port = process.env.PORT || 3000;

const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
