var express = require('express');
var app = express.Router();
const dir = __dirname

app.get("/", function(req, res) {
  res.sendFile(dir+'/index.html');
  });

app.get("/sports/chess", function(req, res) {
    res.sendFile(dir+'/sports/chess/chess.html');
});

  module.exports = app;
  
