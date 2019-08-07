const {
  default: validator,
  object,
  string,
  // number,
  // any,
} = require('koa-context-validator');

exports.userValidator = validator({
  body: object().keys({
    category: string().required(),
    // lastName: string().required(),
  }),
  // files: object().keys({
  //   photo: any().keys({
  //     size: number().required().max(600000),
  //   }),
  // }),
});
