const {env, fetch, client, rateLimit} = require('./modules');
const filterData = require('./format');

const limiter = rateLimit({
	// max 50 requests every 30 seconds
	windowMs: 30 * 1000,
	max: 50
})

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
		if (err) throw err;

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
		console.log(data);

		insertIntoCache(username, filterData(data));

		res.send(filterData(data));
		res.end();
	} catch (err) {
		console.error(err);
		res.send(err);
	}

}

module.exports = {limiter, cache, getUserData};
