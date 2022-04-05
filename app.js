var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);
const port = 8000
const routes = require('./routes')

app.use(express.static(path.join(__dirname,'home')));

app.use('/sports/chess',express.static(path.join(__dirname,'sports','chess')));
app.use('/sports/wrestling',express.static(path.join(__dirname,'sports','wrestling')));
app.use('/sports/badminton',express.static(path.join(__dirname,'sports','badminton')));
app.use('/sports/cricket',express.static(path.join(__dirname,'sports','cricket')));
app.use('/sports/volleyball',express.static(path.join(__dirname,'sports','volleyball')));
app.use('/sports/hockey',express.static(path.join(__dirname,'sports','hockey')));
app.use('/sports/kabaddi',express.static(path.join(__dirname,'sports','kabaddi')));
app.use('/sports/javelin_throw',express.static(path.join(__dirname,'sports','javelin_throw')));
app.use('/sports/archery',express.static(path.join(__dirname,'sports','archery')));
app.use('/sports/table_tennis',express.static(path.join(__dirname,'sports','table_tennis')));
app.use('/sports/basketball',express.static(path.join(__dirname,'sports','basketball')));
app.use('/sports/football',express.static(path.join(__dirname,'sports','football')));

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
