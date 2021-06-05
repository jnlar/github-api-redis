const { app, express } = require('./modules');
const mware = require('./middleware'); 
const helmet = require ('helmet');
const router = express.Router();

router.use(helmet());
router.use(express.json())
router.get('/', mware.limiter, mware.cache, mware.getUserData);
app.use('/api', router);
app.use(mware.notFound);
