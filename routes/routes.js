const router = require('express').Router();
const Pokemon = require('../models/pokemon.js');

router.get('/', (req, res) => {
  Pokemon.find({}).then((results) => {
    res.render('index', { pokemons: results });
  })
});

router.post('/', (req, res) => {
  let newPokemon = new Pokemon({
    name: req.body.name,
    type: req.body.type,
    caughtPokemon: req.body.caughtPokemon,
    isWonder: req.body.isWonder,
    dateCaught: req.body.dateCaught
  });
  console.log(newPokemon);

  newPokemon
  .save()
  .then((result) => {
    res.redirect('/');
  })
  .catch((err) => {
    console.log(err);
    res.redirect('/');
  });
  // res.json(req.body);
});

router.post('/delete/:id', (req, res) => {
  let pokemonId = req.params.id;

  Pokemon.findByIdAndRemove(pokemonId, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.redirect('/');
    }
  })
})

module.exports = router;
