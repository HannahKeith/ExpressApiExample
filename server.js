const express= require('express');
const bodyParser= require('body-parser');

const app= express();

//node's built in filesystem
const fs= require('fs');

//configure our express instance using bodyParser- a node included middleware for json
app.use(bodyParser.json());

//extended protocol makes sure that it is using qs library capable of handling nested data structures
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3001, () => {
  console.log('listening on port...', server.address().port);
})
