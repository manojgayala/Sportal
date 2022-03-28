var express = require('express');
var app = express.Router();
const dir = __dirname

app.get("/", function(req, res) {
  res.sendFile(dir+'/index.html');
  });

app.get("/sports", function(req, res) {
    const sport = req.query.name
    res.sendFile(dir+'/sports/'+sport+'.html');
});

  module.exports = app;
  
