const User = require("./User");
// const Ingredient = require("./Ingredient");
// const Recipe = require("./Recipe");

Ingredient.belongsTo(Recipe, {
  foreignKey: "recipe_id",
});

Recipe.hasMany(Ingredient, {
  foreignKey: "recipe_id",
});

User.belongsToMany(Recipe, {
  through: Recipe,
});

// module.exports = { User, Ingredient, Recipe };

module.exports = { User };
