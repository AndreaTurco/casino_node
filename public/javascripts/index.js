var express = require('express');
var mongoose = require('mongoose');

var app = express();


app.get('/',function(req, res){
   res.send('hello world') ;
});

mongoose.connect('mongodb://localhost/casino');
var db = mongoose.connection;

app.listen(3000, function () {
    console.log('Example');
});