const env = require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');
const rateLimit = require('express-rate-limit');
const compression = require('compression');

const PORT = process.env.PORT || 3000;
const client = redis.createClient();
const app = express();
app.use(compression())
const server = app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
})

module.exports = {
	env,
	express,
	fetch,
	server,
	client,
	app,
	rateLimit
}
