const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
const express = require('express');

const redis = require('./redis');
const insertIntoCache = redis.insertIntoCache;
const checkCache = redis.checkCache;

const filter = require('./filter-json');
const filterUserData = filter.filterUserData;
const filterRepoData = filter.filterRepoData;

const router = express.Router();

const limiter = rateLimit({
	/* max 50 requests every 30 seconds */
	windowMs: 30 * 1000,
	max: 50
})

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

		const slicedRepoData = userRepoData.slice(0, 5);
		const filteredUserData = filterUserData(userData);
		const filteredRepoData = filterRepoData(slicedRepoData);

		const joinedData = {...filteredUserData, ...filteredRepoData};

		insertIntoCache(username, joinedData);

		return res.status(200).send(joinedData);
	} catch (err) {
		console.error(err);
		return res.send(err);
	}
}

router.get('/', limiter, checkCache, getUserData);

module.exports = router;
