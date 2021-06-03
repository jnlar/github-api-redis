const env = require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');
const rateLimit = require('express-rate-limit');
const compression = require('compression');

const limiter = rateLimit({
	// max 50 requests every 30 seconds
	windowMs: 30 * 1000,
	max: 50
})

const PORT = process.env.PORT || 3000;
const client = redis.createClient();
const app = express();
app.use(express.static('public'));
app.use(compression())
const server = app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
})

module.exports = {
	env,
	express,
	fetch,
	server,
	limiter,
	client,
	app
}
