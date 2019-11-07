var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(8010, function(){
  console.log('listening on *:8010');
});

/*var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about', function (req, res) {
  res.send('about page');
});

app.get('/login', function (req, res) {
  res.send('login page');
});

app.get('/login', function (req, res) {
  res.send('login page');
});

app.listen(8010, function () {
  console.log('Example app listening on port 8010!');
});*/
