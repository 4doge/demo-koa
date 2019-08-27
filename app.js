const Koa = require('koa');
const Router = require('koa-router')
const bodyParser = require("koa-body");
const config = require('config');
const cors = require('@koa/cors');
const koaSwagger =  require('koa2-swagger-ui');
const passport = require('./src/libs/passport/index');
var serve = require('koa-static');

require('./src/libs/mongoose');

passport.initialize();

const app = new Koa();
const router = new Router({
  prefix: '/api',
});

app.use(cors());
app.use(serve('docs'));
app.use(
  koaSwagger({
    routePrefix: '/docs',
    hideTopbar: true,
    swaggerOptions: {
      url: 'http://localhost:3000/docs.yml',
    },
  }),
);
app.use(bodyParser({
  multipart: true,
}));
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // console.log(err);
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
