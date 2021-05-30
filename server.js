const { 
	express, fetch, redis, rateLimit, socket,
	limiter, PORT, client, app, server 
} = require('./modules');

const io = socket(server)
app.use(express.urlencoded({ extended: true }))

const cache = (req, res, next) => {
	const { username } = req.params;

	client.get(username, (err, data) => {
		if (err) throw err;

		if (data !== null) {
			res.send(setResponse(username, data));
		} else next();
	})
}

const getRepos = async (req, res, next) => {
	try {
		console.log('Fetching...')
		const { username } = req.params;
		const response = await fetch(`https://api.github.com/users/${username}`);

		const data = await response.json();
		const repos = data.public_repos;

		// clear cache after 10 minutes
		// TODO: LRU cache implementation
		client.setex(username, 600, repos);

		res.send(setResponse(username, repos));
	} catch (err) {
		console.error(err);
	}
}

//const getRepos = async (req, res, next) => {
//	try {
//		console.log('Fetching...');
//		const username = data.username;
//		const response = await fetch(`https://api.github.com/users/${username}`);
//
//		const data = await response.json();
//		const repos = data.public_repos;
//
//		client.setex(username, 600, repos);
//		return setResponse(username, repos);
//
//	} catch (err) {
//		console.error(err);
//	}
//}

const setResponse = (username, repos) => {
	return `<p>${username} has ${repos} Github repositories!</p>`;
}

app.get('/repos/:username', limiter, cache, getRepos);

io.on('connection', socket => {
	socket.on('get-user', data => {

		io.emit('get-user', data.username);
	})
})
