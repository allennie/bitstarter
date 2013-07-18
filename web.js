var express = require('express');

var app = express.createServer(express.logger());

//var buffer new Buffer("I am a string", "utf-8")

var file2str = function(filename){
  fs.readFileSync(filename);
  return "Hello World 2!";

}

app.get('/', function(request, response) {
  response.send(file2str("index.html"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
