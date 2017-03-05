/*
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://andrea_18:andysigturk18@ds157439.mlab.com:57439/sd_db', function (err, db) {
    if (err) throw err;

    db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
    })
});*/

var express = require('express');
var mongoose = require('mongoose');

var app = express();

Provider = require('./models/provider');

app.get('/',function(req, res){
    res.send('hello world nodemon2') ;
});

// app.get('/api/providers/:id req.params.id', function (req, response) {
app.get('/api/providers', function (req, response) {
    Provider.getProviders(function (err, providers) {
        if(err){
            throw err;
        }
        response.json(providers);
    })
});

mongoose.connect('mongodb://localhost/casino');
var db = mongoose.connection;

app.listen(3000, function () {
    console.log('Example');
});

module.exports = app;