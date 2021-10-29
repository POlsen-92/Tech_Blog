const router = require('express').Router();
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes.js');
const blogRoutes = require('./blog-routes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;