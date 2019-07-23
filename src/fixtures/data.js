// eslint-disable-next-line import/no-extraneous-dependencies
const id = require('pow-mongodb-fixtures').createObjectId;

const subcategories = {
  subcategory1: {
    _id: id('4ed2b809d7446b9a0e000014'),
    name: 'Node.js',
    description: 'nodejs development',
  },
  subcategory2: {
    _id: id('5d37332af9c88d71c9840471'),
    name: 'Python',
    description: 'python development',
  },
};


const categories = {
  category1: {
    _id: id('5d37332a05c054d89ffd16f7'),
    name: 'Backend',
    description: 'bla bla bla',
    viewsCount: 12,
    subcategories: [
      // eslint-disable-next-line no-underscore-dangle
      subcategories.subcategory1._id,
      // eslint-disable-next-line no-underscore-dangle
      subcategories.subcategory2._id,
    ],
  },
  category2: {
    _id: id('5d37332a30ecc01823cd9294'),
    name: 'Frontend',
    description: 'description here',
    viewsCount: 34,
    subcategories: [],
  },
};


module.exports = {
  subcategories,
  categories,
};
