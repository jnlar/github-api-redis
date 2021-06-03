const { app } = require('./modules');
const mware = require('./middleware'); 
app.get('/get', mware.limiter, mware.cache, mware.getUserData);
