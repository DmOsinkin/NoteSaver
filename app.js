const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/note');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/note-saver', { promiseLibrary: require('bluebird') })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/noteSaver')));
app.use('/', express.static(path.join(__dirname, 'dist/NoteSaver')));
app.use('api/', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

var corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

module.exports = app;
