const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
  // be sure to include its associated Product data
router.get('/',  (req, res) => {
  Tag.findAll({
    include: [Product],
  }).then((categories) => {
    res.json(categories);
  });
});

// find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id',  (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
  }).then((tag) => {
    res.json(tag);
  });
});

// create a new tag
router.post('/', async (req, res) => {
  Tag.create(req.body).then((tagData) => {
    res.status(200).json(tagData);
  });
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((tagData) => {
    res.json(tagData);
  });
});

  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((tagData) => {
    res.json(tagData);
  });
});

module.exports = router;
