const Router = require('koa-router');
const ctrl = require('./controllers');
// const val = require('./validators');

const router = new Router();

router.get('home', ctrl.homePage);
router.get('category/:categoryId', ctrl.singleCategory);
router.delete('category/:categoryId', ctrl.deleteCategory);
router.get('handler', ctrl.handlePost);
router.get('example/:someId', ctrl.example);

module.exports = router;
