const User = require("./UserData");
const Ingredient = require("./Ingredient");
const Recipe = require("./Recipe");

Recipe.belongsTo(Ingredient, {
  through: {
    model: Recipe,
    unique: false,
  },
  as: "planned_recipes",
});

User.belongsToMany(Recipe, {
  through: {
    Model: Recipe,
    unique: false,
  },
  as: "user_recipes",
});

module.exports = { User, Ingredient, Recipe };
