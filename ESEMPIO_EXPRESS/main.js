var express = require('express'); // import express
var app = express();

// get function
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// start the server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});