const { app, express } = require('./util/modules');
const api = require('./api');
const helmet = require ('helmet');
const router = express.Router();

router.use(helmet());
router.use(express.json());
router.get('/', api.limiter, api.cache, api.getUserData);

app.use('/api/user', router);
app.use(api.notFound);
