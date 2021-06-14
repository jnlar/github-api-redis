const express = require('express');
const helmet = require('helmet');
const path = require('path');
const compression = require('compression');

require('dotenv').config();

const api = require('./api');

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.use('/api/user', api);

module.exports = app;
