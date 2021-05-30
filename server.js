const { 
	express, fetch, redis, rateLimit,
	limiter, PORT, client, app, server 
} = require('./modules');

app.use(express.urlencoded({ extended: true }))

const cache = (req, res, next) => {
	const username = req.query.username;

	client.hgetall(username, (err, data) => {
		if (err) throw err;

		if (data !== null) {
			res.json(data)
		} else next();
	})
}

const getRepos = async (req, res, next) => {
	try {
		console.log('Fetching...')
		console.log(req.query.username);
		const username = req.query.username;
		const response = await fetch(`https://api.github.com/users/${username}`);

		const data = await response.json();

		// TODO: 
		// 1. clear cache after 10 minutes
		// 2. LRU cache implementation - https://redis.io/topics/lru-cache
		client.hmset(username, {
			'public_repos': `${data.public_repos}`,
			'bio': `${data.bio}`,
			'followers': `${data.followers}`,
			'following': `${data.following}`,
			'created': `${data.created_at}`,
			'company': `${data.company}`,
			'location': `${data.location}`,
			'url': `${data.html_url}`,
			'email': `${data.email}`
		});

		res.json(data)
		console.log(data)
		res.end()
	} catch (err) {
		console.error(err);
	}
}

app.get('/get', limiter, cache, getRepos);
