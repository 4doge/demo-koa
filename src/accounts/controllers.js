const passport = require('koa-passport');
const config = require('config');
const jwt = require('jwt-simple');
const User = require('./models/user');

exports.signIn = async (ctx, next) => {
  await passport.authenticate('local', (err, user) => {
    if (user) {
      const payload = {
        // eslint-disable-next-line no-underscore-dangle
        id: user._id,
      };
      ctx.body = {
        token: jwt.encode(payload, config.get('jwtSecret')),
        user: {
          fullname: user.fullName,
          email: user.email,
          photo: user.photo,
        },
      };
    } else {
      ctx.body = {
        error: err,
      };
    }
  })(ctx, next);
};

exports.signUp = async (ctx) => {
  const user = new User({
    fullName: 'Vasya Pupkin',
    email: 'vasya@pupki1n.org',
    password: 'q',
  });
  await user.save();
  ctx.body = {
    success: true,
  };
};

exports.profile = async (ctx) => {
  ctx.body = 'SUPER SECRET CONTENT ONLY FOR USERS!';
};
