const Category = require('./models/category');

exports.homePage = async (ctx) => {
  const categories = await Category.find({});
  await ctx.render('index', {
    username: 'John Smith',
    categories,
  });
};

exports.handlePost = async (ctx) => {
  const { category } = ctx.request.body;
  const cat = new Category({
    name: category,
  });
  await cat.save();
  ctx.body = {
    success: true,
  };
};

exports.singleCategory = async (ctx) => {
  const category = await Category.findById(ctx.params.categoryId);
  await ctx.render('category', {
    category,
  });
};

exports.deleteCategory = async (ctx) => {
  const category = await Category.findById(ctx.params.categoryId);
  await category.remove();
  ctx.body = {
    success: true,
  };
};
