var http = require('http');

//For Docker Purpose 
require("dotenv").config({path:__dirname+'/../.env'});


var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var app = express();





var server = http.createServer(app)




const port = process.env.NODE_DOCKER_PORT || 8787;
app.set('port', port);
server.listen(port);



/*
app.use(bodyParse.urlencoded({//dis is important in post
  extended: true
}));*/

//Prevent cors
app.use(cors());





//In case generate views by Express

/*
__dirname="./";

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('views', "/home/mehdi/Documents/Red/red/client/public");
app.set('views', path.join(__dirname, 'public'));

app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));
*/

app.use(function (req, res, next) {
 
  next();
});

app.use(express.json());

/** spare options */
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

app.get("/api",function(req,res){
res.send("Message from API express")
})
/*
app.get("/",function(req,res){
  console.log(__dirname);
  var options = {
    root: path.join(__dirname,"public")
};
  res.sendFile("index.html",options, function (err) {
    if (err) {
        console.log(err);
    } else {
       
        
    }
  });
})

**/
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
  res.render('error');
});










