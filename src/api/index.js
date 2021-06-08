const {env, fetch, rateLimit} = require('../util/modules');
const f = require('../util/filter-json');
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

const URL = 'https://api.github.com/users/';

const getUserData = async (req, res) => {
	try {
		const username = req.query.username;

		const fetchUser = await fetch(`${URL}${username}`, requestHeaders);
		const userData = await fetchUser.json();

		if (userData.message) return res.send(userData);

		const fetchUserRepos = await fetch(`${URL}${username}/repos`, requestHeaders);
		const userRepoData = await fetchUserRepos.json();
		const slicedRepoData = userRepoData.slice(0, 3);

		const filteredUserData = f.filterUserData(userData);
		const filteredRepoData = f.filterRepoData(slicedRepoData);

		const joinedData = {...filteredUserData, ...filteredRepoData};

		redis.insertIntoCache(username, joinedData);

		return res.send(joinedData);
	} catch (err) {
		console.error(err);
		return res.send(err);
	}
}

module.exports = {limiter, cache, getUserData, notFound};
