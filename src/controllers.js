const Category = require('./models/category');

exports.homePage = async (ctx) => {
  // const categories = await Category.find({});
  // const categories = await Category.find({}).limit(20).skip(40);
  // const categories = await Category.find({}).select('-description');
  // const categories = await Category.find({}).sort('-viewsCount');
  // const categories = await Category.find({
  //   viewsCount: {
  //     $gt: 10,
  //   },
  // });
  // const categories = await Category.find({
  //   $or: [
  //     {
  //       description: {
  //         $regex: 'bla',
  //         $options: 'i',
  //       },
  //     },
  //     {
  //       name: {
  //         $regex: 'tes',
  //         $options: 'i',
  //       },
  //     },
  //   ],
  // });
  const categories = await Category.find({}).populate({
    path: 'subcategories',
    select: 'name',
  });
  await ctx.render('index', {
    username: 'John Smith',
    categories,
  });
};

exports.handlePost = async (ctx) => {
  // const { category } = ctx.request.body;
  const cat = new Category({
    name: 'test',
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

exports.example = async (ctx) => {
  // console.log(ctx.params.someId);
  await ctx.render('index');
};
