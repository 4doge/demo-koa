const config = require('config');
const mongoose = require('mongoose');
const beautifulUnique = require('mongoose-beautiful-unique-validation');

mongoose.connect(config.get('databaseUrl'), {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.plugin(beautifulUnique);

module.exports = mongoose;
