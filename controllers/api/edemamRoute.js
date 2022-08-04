const fetch = require("node-fetch");
require("dotenv").config();

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.DB_API_KEY,
    "X-RapidAPI-Host": process.env.DB_HOST,
  },
};
console.log(options);

const searchByIngredient = async (userSearch) => {
  try {
    const url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${userSearch}&to=2`;
    const response = await fetch(url, options);

    const data = await response.json();

    const recipe = data.hits[0].recipe;
    // const urlResults = await data.hits[0].recipe.url;
    // const ingredientResults = await data.hits[0].recipe.ingredients;
    // const yieldResults = await data.hits[0].recipe.yield;
    // const mealTypeResults = await data.hits[0].recipe.mealType;
    // const dishTypeResults = await data.hits[0].recipe.dishType;
    //returns recipe results and the caution for the 2nd recipe
  
    
    if(userSearch){
      console.log(recipe);
      return recipe;
    }

    // res.send(results, cautionResults)
    // return results, cautionResults;
  } catch (err) {
    (err) => console.error("error:" + err);
  }
};

searchByIngredient('Steak');




module.exports = searchByIngredient;