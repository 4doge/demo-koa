const mongoose = require('mongoose');
const Subcategory = require('./subcategory');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    // validate: {
    //   validator(v) {
    //     return v === 'test';
    //   },
    //   message: props => `${props.value} is not a valid category name!`,
    // },
  },
  viewsCount: {
    type: Number,
  },
  description: {
    type: String,
  },
  subcategories: [
    {
      ref: Subcategory,
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

categorySchema.pre('remove', (next) => {
  // an example of pre hook
  // console.log('PRE REMOVE');
  next();
});

module.exports = mongoose.model('Category', categorySchema);
