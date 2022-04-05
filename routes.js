var express = require('express');
var app = express.Router();
const dir = __dirname

app.get("/", function(req, res) {
  res.sendFile(dir+'/index.html');
  });

app.get("/sports/chess", function(req, res) {
    res.sendFile(dir+'/sports/chess/chess.html');
});

app.get("/sports/wrestling", function(req, res) {
    res.sendFile(dir+'/sports/wrestling/wrestling.html');
});

app.get("/sports/badminton", function(req, res) {
    res.sendFile(dir+'/sports/badminton/badminton.html');
});

app.get("/sports/cricket", function(req, res) {
    res.sendFile(dir+'/sports/cricket/cricket.html');
});

app.get("/sports/volleyball", function(req, res) {
    res.sendFile(dir+'/sports/volleyball/volleyball.html');
});

app.get("/sports/hockey", function(req, res) {
    res.sendFile(dir+'/sports/hockey/hockey.html');
});

app.get("/sports/kabaddi", function(req, res) {
    res.sendFile(dir+'/sports/kabaddi/kabaddi.html');
});

app.get("/sports/javelin_throw", function(req, res) {
    res.sendFile(dir+'/sports/javelin_throw/javelin_throw.html');
});

app.get("/sports/archery", function(req, res) {
    res.sendFile(dir+'/sports/archery/archery.html');
});

app.get("/sports/table_tennis", function(req, res) {
    res.sendFile(dir+'/sports/table_tennis/table_tennis.html');
});

app.get("/sports/basketball", function(req, res) {
    res.sendFile(dir+'/sports/basketball/basketball.html');
});

app.get("/sports/football", function(req, res) {
    res.sendFile(dir+'/sports/football/football.html');
});


module.exports = app;
