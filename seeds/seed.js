//get the objects returned in searchByIngredient function. This function takes in the user's search by ingredient to return a recipe.
//access data returned from searchByIngredient function
//seed the database with the data returned from searchByIngredient function.
//assign information to the recipe model

const sequelize = require("../config/connection");
// const fs = require('fs');
const { Ingredient, Recipe, User } = require("../models");
const seedData = require("./testRecipe.json");
const ingredientData = require("./testIngredient.json");
const userData = require("./userData.json");

console.log(seedData);
console.log(userData);

const seedDatabase = async () => {
  const recipe = await Recipe.bulkCreate(seedData, {
    individualHooks: true,
    returning: true,
  });

};
const seedUserDatabase = async () => {
  const UserDb = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

};
const seedIngredientDatabase = async () => {
  const UserDb = await Ingredient.bulkCreate(ingredientData, {
    individualHooks: true,
    returning: true,
  });

};

const seedAll = async () => {
  await sequelize.sync({ force: true });
 
  seedUserDatabase();
  console.log("++++++seeded user Data+++++++++")
  seedDatabase();
  console.log("++++++seeded recipe Data+++++++++")
  seedIngredientDatabase();
  console.log("++++++seeded ingredient Data+++++++++")
  console.log("Seed done");
};
seedAll();

