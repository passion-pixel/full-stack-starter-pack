const path = require('path');
const express = require('express');
const app = express();
// const api = require('./api');
const api = require('./backend/api');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // For React/Redux
  // res.sendFile('index.html', {root: 'public/'}, (err) => {
  //   if (err) console.log(err);
  // });
});

app.use('/', api);

app.listen(process.env.PORT || 3000, error =>
	error
  ? console.error(error)
  : console.info(`==> 🌎 Listening🌎`)
);
