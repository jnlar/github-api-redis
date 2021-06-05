const {env, fetch, rateLimit} = require('../modules');
const filterData = require('../util/filter-json');
const redis = require('./redis');
const cache = redis.cache;

const limiter = rateLimit({
	/* max 50 requests every 30 seconds */
	windowMs: 30 * 1000,
	max: 50
})

const notFound = (req, res, next) => {
	res.status(404).send();
}

const requestHeaders = {
	authorization: `token ${process.env.TOKEN}`,
	accept: 'application/vnd.github.v3+json'
}

const getUserData = async (req, res) => {
	try {
		const username = req.query.username;
		const response = 
			await fetch(`https://api.github.com/users/${username}`, requestHeaders);

		const data = await response.json();

		if (data.message) return res.send(data);

		redis.insertIntoCache(username, filterData(data));

		console.log(data);
		return res.send(filterData(data));
	} catch (err) {
		console.error(err);
		return res.send(err);
	}
}

module.exports = {limiter, cache, getUserData, notFound};
