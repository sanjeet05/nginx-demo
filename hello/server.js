var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  res.render("index");
});

app.listen(3000, function (req, res) {
  console.log("Catch the action at localhost:3000");
});
