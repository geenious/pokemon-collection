const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/pokemon', { useMongoClient: true }).then(function() {
  console.log('Connected to database');
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/', routes);

app.listen(3000, function() {
  console.log('Oh, hello there port 3000');
});
