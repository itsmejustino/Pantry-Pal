const router = require("express").Router();
const { Ingredient, Recipe } = require("../../models");
const withAuth = require("../../utils/auth");




router.get("/", async (req, res) => {
    try {
      const userData = await Ingredient.findByPk(req.session.ingredient_id);
  
      const user = userData.get({ plain: true });
  
      res.render("search");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;