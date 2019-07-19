const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator(v) {
        return v === 'test';
      },
      message: props => `${props.value} is not a valid category name!`,
    },
  },
});

categorySchema.pre('remove', (next) => {
  // an example of pre hook
  // console.log('PRE REMOVE');
  next();
});

module.exports = mongoose.model('Category', categorySchema);
