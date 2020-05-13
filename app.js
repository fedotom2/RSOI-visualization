'use strict';

const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const util = require('util');
const api = require('./api.js');
const app = express();

const writeFile = util.promisify(fs.writeFile);

fs.exists(path.join(__dirname, 'log.txt'), async (exists) => {
  try {
    if (!exists)
      await writeFile(path.join(__dirname, 'log.txt'), '');
  } catch (err) {
    console.error(err);
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true 
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api);

const PORT = config.get('PORT') || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
