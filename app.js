const Koa = require('koa');
const views = require('koa-views');
const Router = require('koa-router');
const bodyParser = require('koa-body');
const path = require('path');
const config = require('config');
const mongoose = require('mongoose');
const serve = require('koa-static');
const beautifulUnique = require('mongoose-beautiful-unique-validation');

mongoose.connect(config.get('databaseUrl'), {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.plugin(beautifulUnique);


const app = new Koa();
const router = new Router();

app.use(serve('public'));
app.use(bodyParser({
  multipart: true,
}));
app.use(views(path.join(__dirname, '/src/templates'), {
  extension: 'njk',
  map: {
    njk: 'nunjucks',
  },
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

router.use('/', require('./src/routes').routes());

app.use(router.routes());

app.listen(config.get('port'));
