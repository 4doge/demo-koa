const passport = require('koa-passport');
const config = require('config');
const jwt = require('jwt-simple');
const fs = require('fs');
const path = require('path');
const wkhtmltopdf = require('wkhtmltopdf');
const nunjucks = require('nunjucks');
const User = require('./models/user');
const sendEmail = require('../utils/sendEmail');
const uploadS3 = require('../utils/uploadS3');

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
          fullName: user.fullName,
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

exports.testEmail = async (ctx) => {
  const attachments = [
    {
      content: Buffer.from(fs.readFileSync('cage.jpg')).toString('base64'),
      filename: 'test.jpg',
    },
  ];
  await sendEmail(
    'antonboksha@gmail.com',
    'notifications@example.com',
    'Hello world!',
    '<p>test data</p>',
    attachments,
  );
  ctx.body = {
    success: true,
  };
};

exports.updateUserPhoto = async (ctx) => {
  // console.log(ctx.request.files.photo);
  // const photo = await uploadS3(config.get('aws').userPhotoFolder, ctx.request.files.photo);
  // eslint-disable-next-line no-underscore-dangle
  // await User.findByIdAndUpdate(ctx.state.user._id, { photo });
  ctx.body = {
    photo: 'new url',
  };
};

exports.generatePdf = async (ctx) => {
  const html = await nunjucks.render(path.join(__dirname, '../templates/ticket.html'), {
    fullName: 'Vasya Pupkin',
  });
  ctx.set('Content-Type', 'application/pdf');
  // ctx.attachment('example.pdf');
  ctx.body = await wkhtmltopdf(html);
  // ctx.body = {
  //   success: true,
  // };
};
