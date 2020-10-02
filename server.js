const express = require('express');
const template = require('./util/template');
const challenges = require('./util/challenges');

const app = express();

app.use('/mocha.css', express.static('./node_modules/mocha/mocha.css'));
app.use('/mocha.js', express.static('./node_modules/mocha/mocha.js'));
app.use('/mocha.js.map', express.static('./node_modules/mocha/mocha.js.map'));
app.use('/chai.js', express.static('./node_modules/chai/chai.js'));
app.use('/favicon.ico', express.static('./favicon.ico'));
app.use('/challenges', express.static('./challenges'));

app.get('/', (req, res) => {
  res.send(template(challenges())).end();
});

app.listen(3000, process.stdout.write('Now Listening on 3000'));
