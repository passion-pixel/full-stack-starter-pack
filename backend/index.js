const path = require('path');
const express = require('express');
const app = express();
const api = require('./api');
// const api = require('./backend/api');
const bodyParser = require('body-parser');

app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

app.use('/', api);

app.listen(process.env.PORT || 3000, error =>
	error
  ? console.error(error)
  : console.info(`==> 🌎 Listening🌎`)
);
