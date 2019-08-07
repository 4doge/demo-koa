const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-body');
const config = require('config');
const passport = require('./src/libs/passport/index');
require('./src/libs/mongoose');

passport.initialize();

const app = new Koa();
const router = new Router();

app.use(bodyParser({
  multipart: true,
}));
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
    // const errors = [];
    // Object.keys(err.errors).forEach((key) => {
    //   errors.push(err.errors[key].message);
    // });
    ctx.status = 500;
    ctx.body = {
      error: true,
    };
  }
});

router.use('/accounts', require('./src/accounts/routes').routes());

app.use(router.routes());

app.listen(config.get('port'));
