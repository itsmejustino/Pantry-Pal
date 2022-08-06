const router = require("express").Router();
const { Recipe, User } = require("../models");
const withAuth = require("../utils/auth");

// router.get('/', withAuth, async (req, res) => {
//   const ingredientData = await Recipe.findAll();
// });
