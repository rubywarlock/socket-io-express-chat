var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('connected');
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


/*

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const documents = {};

io.on("connection", socket => {
  let previousId;
  const safeJoin = currentId => {
    socket.leave(previousId);
    socket.join(currentId);
    previousId = currentId;
  };

  socket.on("getDoc", docId => {
    console.log("getDoc: " + JSON.stringify(docId));
    safeJoin(docId);
    socket.emit("document", documents[docId]);
  });

  socket.on("addDoc", doc => {
    console.log("addDoc: " + JSON.stringify(doc));
    documents[doc.id] = doc;
    safeJoin(doc.id);
    io.emit("documents", Object.keys(documents));
    socket.emit("document", doc);
  });

  socket.on("editDoc", doc => {
    console.log("editDoc: " + JSON.stringify(doc));
    documents[doc.id] = doc;
    socket.to(doc.id).emit("document", doc);
  });

  io.emit("documents", Object.keys(documents));
});

http.listen(4444, _ => {
  console.log("listening on *:4444");
});

 */
