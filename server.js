var express = require('express');
var bodyParser = require('body-parser');
var Cobra = require('./db/nosql/models/cobra.js')

var port = process.env.PORT || '3000';
var app = express();
var db = require('./db/nosql/config.js');

app.listen(port, function() {
  console.log('Listening on: ', port);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/client/angular'));

app.get('/api/cobras', function(req, res) {
  Cobra.find(function(err, cobras) {
    if (err) {
      console.log(err);
    }
    res.status(200).send(cobras);
    console.log('sending cobras');
  })
})


app.post('/api/cobras', function(req, res) {

  var name = req.body.name;
  var age = req.body.age;

  var newCobra = new Cobra({
    name: name,
    age: age
  })

  newCobra.save(function(err, newCobra) {
    if(err) {
      res.status(500).send("this is and error");
    }

    res.send('name created');
  })

})

module.exports = app;
