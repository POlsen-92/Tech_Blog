const router = require('express').Router();
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes.js');
const blogRoutes = require('./blog-routes');

// http://localhost:3000/api/

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;