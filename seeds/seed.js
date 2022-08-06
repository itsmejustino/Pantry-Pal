//get the objects returned in searchByIngredient function. This function takes in the user's search by ingredient to return a recipe.
//access data returned from searchByIngredient function
//seed the database with the data returned from searchByIngredient function.
//assign information to the recipe model

const sequelize = require("../config/connection");
// const fs = require('fs');
const { Recipe } = require("../models");
const searchByIngredient = require("../controllers/api/apiRoute");
const seedData = require("./RecipeData.json");

console.log(seedData);

const seedDatabase = async () => {
  // await searchByIngredient('apple')
  await sequelize.sync({ force: true });

  const recipe = await Recipe.bulkCreate(seedData, {
    individualHooks: true,
    returning: true,
  });

  // for (const newRecipe of seedData) {
  //   await Recipe.create({
  //     ...newRecipe,
  //     user_id: recipe[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
