const Router = require('koa-router');
const ctrl = require('./controllers');

const router = new Router();

router.get('home', ctrl.homePage);

module.exports = router;
