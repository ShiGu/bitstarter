var express = require('express');
var app = express();
app.use(express.logger());

/*
var data = new Buffer(25);
data = fs.readFileSync('/index.html')
data = data.toString("utf-8");
*/



app.get('/', function(request, response) {
  response.send("Hello World, I am born again!!");
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
