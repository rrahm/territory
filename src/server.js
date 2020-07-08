var express = require('express');
var app = express();

let file = {
  data: 1,
};

app.get('/api', function(req, res) {
  res.send(file);
});

app.listen(5000, function() {
  console.log('Example app listening on port 5000!');
});
