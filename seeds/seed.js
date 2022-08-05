
//get the objects returned in searchByIngredient function. This function takes in the user's search by ingredient to return a recipe.
//access data returned from searchByIngredient function
//seed the database with the data returned from searchByIngredient function.
//assign information to the recipe model

// const sequelize = require('../config/connection');
// const fs = require('fs');
// const { Recipe } = require('../models');
const searchByIngredient = require('../controllers/api/apiRoute');


const seedDatabase = async () => {
await searchByIngredient('apple')
};

seedDatabase();
