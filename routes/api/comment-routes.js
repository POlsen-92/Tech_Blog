const router = require('express').Router();
const { Comment, Blog, User} = require('../../models');

// The `http://localhost:3000/api/comments` endpoint

// DONE - find all Comments. be sure to include its associated Comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [Blog],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DONE - find one Comment by its `id` value. be sure to include its associated Comments
router.get('/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [Blog],
    });

    if (!commentData) {
      res.status(404).json({ message: 'No Comment found with that id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DONE - create a new Comment
router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
      name: req.body.name,
      description: req.body.description,
      blog_id: req.body.blogid
    })
    res.status(200).json(commentData)
    console.log('it worked')
  } catch(err) {
      console.log(err);
      res.status(400).json({ message: "an error occured", err: err });
    };
});

// DONE - update a Comment by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!commentData[0]) {
      res.status(404).json({ message: 'No Comment with this id!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DONE - delete a Comment by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!commentData) {
      res.status(404).json({ message: 'No Comment with this id!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;