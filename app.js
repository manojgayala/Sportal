var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);
const port = 8000
const routes = require('./routes')

app.use(express.static(path.join(__dirname,'home')));
app.use('/sports',express.static(path.join(__dirname,'sports')));

// To parse the html request
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.use('/', routes);
// Routes

server.listen(port, () => {
  console.log(`Listening on port ${port}`)})