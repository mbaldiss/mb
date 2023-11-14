const Router = require('express');
const welcome = require('../middlewares/welcome');

const router = Router();

router.get('/', welcome);

module.exports = router;