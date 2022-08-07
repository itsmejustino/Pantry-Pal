const router = require("express").Router();
const { Ingredient, Recipe } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await Ingredient.findByPk(req.session.ingredient_id);
  
      const user = userData.get({ plain: true });
  
      res.render("usersearch");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;