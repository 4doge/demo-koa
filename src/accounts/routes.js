const Router = require('koa-router');
const passport = require('koa-passport');
const ctrl = require('./controllers');

// const val = require('./validators');

const router = new Router();

router.post('/sign-in', ctrl.signIn);
router.get('/sign-up', ctrl.signUp);
router.get('/profile', passport.authenticate('jwt', { session: false }), ctrl.profile);

module.exports = router;
