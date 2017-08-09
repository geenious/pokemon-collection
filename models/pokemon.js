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


monSchema.methods.getAllTypes = function(){
  let allTypes = monSchema.statics.allTypes;

  return allTypes.map((type) => {
    return { name: type, selected: this.type.includes(type)}
  })
}

monSchema.statics.allTypes = ['Grass', 'Poison', 'Fire', 'Flying', 'Water', 'Bug', 'Normal', 'Ground', 'Electric', 'Fairy', 'Psychic', 'Fighting', 'Rock', 'Ghost', 'Steel', 'Ice', 'Dark'];

module.exports = mongoose.model('Pokemon', monSchema);
