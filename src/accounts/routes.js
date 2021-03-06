const Router = require('koa-router');
const passport = require('koa-passport');
const ctrl = require('./controllers');

// const val = require('./validators');

const router = new Router();

router.post('/sign-in', ctrl.signIn);
router.get('/sign-up', ctrl.signUp);
router.get('/profile', passport.authenticate('jwt', { session: false }), ctrl.profile);
router.get('/email', ctrl.testEmail);
router.put('/photo', ctrl.updateUserPhoto);
router.get('/pdf', ctrl.generatePdf);

module.exports = router;
