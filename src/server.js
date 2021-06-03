const { app } = require('./modules');
const filterData = require('./format');
const mware = require('./middleware');

app.get('/get', mware.limiter, mware.cache, mware.getUserData);
