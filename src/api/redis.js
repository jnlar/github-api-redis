const {client} = require('../util/modules');
const util = require('util');
const ttl = util.promisify(client.ttl).bind(client);

const insertIntoCache = (username, data) => {
	return client.hmset(username, data, () => {
		client.expire(username, 60 * 10);
	});
}

const checkCache = (req, res, next) => {
	const username = req.query.username;

	client.hgetall(username, async (err, data) => {
		try {
			if (err) return next();

			const remainingTime = await ttl(username);

			if (remainingTime < 300) {
				return next();
			} else {
				return res.status(304).send(data);
			}
		} catch (err) {
			return next();
		}
	})
}

module.exports = {insertIntoCache, checkCache};
