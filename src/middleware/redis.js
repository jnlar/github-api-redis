const {client} = require('../modules');

const insertIntoCache = (username, data) => {
	return client.hmset(username, data);
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
