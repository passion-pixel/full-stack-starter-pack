const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', routes);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

app.listen(process.env.PORT || 3000, error =>
	error
  ? console.error(error)
  : console.info(`==> 🌎 Listening🌎`)
);
