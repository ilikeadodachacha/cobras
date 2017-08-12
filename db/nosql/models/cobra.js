var mongoose = require('mongoose');

var cobraSchema = mongoose.Schema({
  name: String,
  age: Number,
  dataSrc: String,
  framework: String
}, {collection: 'Cobras'})

var Cobra = mongoose.model('Cobra', cobraSchema);

module.exports = Cobra;
