const router = require('express').Router();
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes.js');
const blogRoutes = require('./blog-routes');
const tagRoutes = require('./tag-routes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/blogs', blogRoutes);
router.use('/tags', tagRoutes);

module.exports = router;