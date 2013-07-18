var express = require('express');

var app = express.createServer(express.logger());

var buffer new Buffer("I am a string", "utf-8")


app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
