const router = require("express").Router();
const { Category, Product, Tag } = require("../../models");

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products
router.get("/", (req, res) => {
  console.log("GEt categories hit");

  Category.findAll({
    include: [Product],
  }).then((categories) => {
    res.json(categories);
  });
});

// find one category by its `id` value
// be sure to include its associated Products
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
  }).then((category) => {
    res.json(category);
  });
});

// create a new category
router.post("/", (req, res) => {
  Category.create(req.body).then((categoryData) => {
    res.status(200).json(categoryData);
  });
});

// update a category by its `id` value
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((categoryData) => {
    res.json(categoryData);
  });
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((categoryData) => {
    res.json(categoryData);
  });
});

module.exports = router;
