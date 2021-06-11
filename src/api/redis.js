const {client} = require('../util/modules');

const insertIntoCache = (username, data) => {
	return client.hmset(username, data, () => {
		/* hash will expire after 10 minutes */
		client.expire(username, 60 * 10);
	});
}

const cache = (req, res, next) => {
	const username = req.query.username;

	client.hgetall(username, (err, data) => {
		if (err) return next(err);

		if (data !== null) {
			return res.send(data);
		} else next();
	})
}

module.exports = {insertIntoCache, cache};
