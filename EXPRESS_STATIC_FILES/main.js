var express = require('express'); // import express
var app = express();
const path = require('path')

// get function
app.get('/', function (req, res) {
    // sending a file
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/about',function(req,res){
    // return about page
 res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/sitemap',function(req,res){
    // return site map page
 res.sendFile(path.join(__dirname+'/sitemap.html'));
});

// start the server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});