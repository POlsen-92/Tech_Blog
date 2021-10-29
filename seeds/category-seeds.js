const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Sports',
  },
  {
    category_name: 'Fashion',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Tech',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;