const { 
	env, express, fetch,
	limiter, client, app, server 
} = require('./modules');
const { filterCacheData, returnFormatData } = require('./format');

const cache = (req, res, next) => {
	const username = req.query.username;

	client.hgetall(username, (err, data) => {
		if (err) throw err;

		if (data !== null) {
			res.send(returnFormatData(data));
		} else next();
	})
}

const requestHeaders = {
	authorization: `token ${process.env.TOKEN}`,
	accept: 'application/vnd.github.v3+json'
}

const insertIntoCache = (username, data) => {
	return client.hmset(username, data);
}

const getUserData = async (req, res) => {
	try {
		const username = req.query.username;
		const response = 
			await fetch(`https://api.github.com/users/${username}`, requestHeaders);

		const data = await response.json();
		console.log(data);

		insertIntoCache(username, filterCacheData(data));

		res.send(returnFormatData(data));
		res.end();
	} catch (err) {
		console.error(err);
		res.send(err);
	}
}

app.get('/get', limiter, cache, getUserData);
