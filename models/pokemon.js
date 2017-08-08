const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let monSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: [String]
  },
  caughtPokemon: {
    type: Boolean,
    default: false
  },
  isWonder: {
    type: Boolean,
    default: false
  },
  dateCaught: {
    type: Date,
  }
});

module.exports = mongoose.model('Pokemon', monSchema);
