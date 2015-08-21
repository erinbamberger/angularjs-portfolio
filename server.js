if (!process.env.NODE_ENV) process.env.NODE_ENV='development'
var express      = require('express'),
    http         = require('http'), // to use http server
    path         = require('path'),
    bodyParser   = require('body-parser'), // exposes factories to create middleware
    colors       = require('colors'); // colors in node console
var app = express();
var clientDir = path.join(__dirname, 'public/');
app.set('port', process.env.PORT || 9000)
app.use(express.static(clientDir)) 
app.use(express.static(clientDir)) 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.all('/*', function(req, res, next) {
    //CORS Header
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    //Custom headers for CORS
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Access-Token,X-Key");
    if(req.method == "OPTIONS") {
        res.status(200).end();
    }
    else {
        next();
    }
});
app.get('/', function(req, res) {//get,put,post,delete
  res.sendFile(path.join(clientDir, 'index.html'));
});

// **** SERVER CONFIG ****
var server = http.createServer(app)
//reload(server, app)

server.listen(app.get('port'), function(){
  console.log("Web server now listening in %s on port %d", colors.rainbow(process.env.NODE_ENV), app.get('port'));
});
