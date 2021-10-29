const router = require('express').Router();
const { Blog, Category, User} = require('../../models');

// The `/api/categories` endpoint

// DONE - find all categories. be sure to include its associated Categories
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: Category }, { model: User }],
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DONE - find one Blog by its `id` value. be sure to include its associated Categories
router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: Category }, { model: User }],
    });

    if (!blogData) {
      res.status(404).json({ message: 'No Blog found with that id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DONE - create a new Blog
router.post('/', async (req, res) => {
  try {
    const blogData = await Blog.create({
      name: req.body.name,
      description: req.body.description,
      category_id: req.body.category,
      user_id: req.session.user.id
    })
    res.status(200).json(blogData)
  } catch(err) {
      console.log(err);
      res.status(400).json({ message: "an error occured", err: err });
    };
});

// DONE - update a Blog by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const blogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!blogData[0]) {
      res.status(404).json({ message: 'No Blog with this id!' });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DONE - delete a Blog by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!blogData) {
      res.status(404).json({ message: 'No Blog with this id!' });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;