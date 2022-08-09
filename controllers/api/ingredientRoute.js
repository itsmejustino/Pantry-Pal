const router = require("express").Router();
const { Ingredient, Recipe } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
    try {
      const ingredientData = await Ingredient.findAll({include:{model: Recipe}});
  
      res.status(200).json(ingredientData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
router.post("/", async (req, res) => {
  try {
    const ingredientData = await Ingredient.create(req.body);

    res.status(200).json(ingredientData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  


  module.exports = router;