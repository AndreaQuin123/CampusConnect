var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var usuariosRouter = require('./routes/users');
var app = express();

// view engine setupy
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usuariosRouter);

var publicacionesRouter = require('./routes/publicaciones');
app.use('/api/publicaciones', publicacionesRouter);


var swaggerJsDoc = require('swagger-jsdoc');
var swaggerUI = require('swagger-ui-express');

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Campus Connect Api Documentation",
      version: "0.1"
    },
    servers: [
      {
        url: "http://localhost:3000/api"
      }
    ]

  },
  apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options) 
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(specs))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
