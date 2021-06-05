const {env, fetch, client, rateLimit} = require('./modules');
const filterData = require('./format');

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

const insertIntoCache = (username, data) => {
	return client.hmset(username, data);
}

const cache = (req, res, next) => {
	const username = req.query.username;

	client.hgetall(username, (err, data) => {
		if (err) next(err);

		if (data !== null) {
			res.send(data);
		} else next();
	})
}

const getUserData = async (req, res) => {
	try {
		const username = req.query.username;
		const response = 
			await fetch(`https://api.github.com/users/${username}`, requestHeaders);

		const data = await response.json();

		if (data.message) return res.send(data);

		insertIntoCache(username, filterData(data));

		console.log(data);
		return res.send(filterData(data));
	} catch (err) {
		console.error(err);
		return res.send(err);
	}
}

module.exports = {limiter, cache, getUserData, notFound};
