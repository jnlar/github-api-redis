const { 
	express, fetch, redis, rateLimit,
	limiter, PORT, client, app, server 
} = require('./modules');

app.use(express.urlencoded({ extended: true }))

const cache = (req, res, next) => {
	const { username } = req.params;

	client.get(username, (err, data) => {
		if (err) throw err;

		if (data !== null) {
			res.json(data)
			//res.send(setResponse(username, data));
		} else next();
	})
}

const getRepos = async (req, res, next) => {
	try {
		console.log('Fetching...')
		//const { username } = req.params;
		const username = req.query.username;
		const response = await fetch(`https://api.github.com/users/${username}`);

		const data = await response.json();
		const repos = data.public_repos;

		// clear cache after 10 minutes
		// TODO: LRU cache implementation - https://redis.io/topics/lru-cache
		//client.setex(username, 600, repos);

		//res.send(setResponse(username, repos));
		res.json(data)
		console.log(data)
		res.end()
	} catch (err) {
		console.error(err);
	}
}

const setResponse = (username, repos) => {
	return `<p>${username} has ${repos} Github repositories!</p>`;
}

app.get('/get', limiter, /*cache,*/ getRepos);
