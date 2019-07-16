exports.homePage = async (ctx) => {
  await ctx.render('index', {
    username: 'John Smith',
  });
};
