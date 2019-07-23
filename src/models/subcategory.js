const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model('Subcategory', subcategorySchema);
