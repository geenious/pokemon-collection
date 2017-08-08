const router = require('express').Router();
const Pokemon = require('../models/pokemon.js');

router.get('/', (req, res) => {
  res.render('index', {});
});

router.post('/', (req, res) => {
  res.json(req.body);
})

module.exports = router;
