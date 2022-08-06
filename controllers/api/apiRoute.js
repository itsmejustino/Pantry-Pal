const router = require("express").Router();
const fetch = require("node-fetch");
require("dotenv").config();

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.DB_KEY,
    "X-RapidAPI-Host": process.env.DB_HOST,
  },
};

// /api/recipes/:search-query-here
router.get("/recipes/:userSearch", async (req, res) => {
  // find all recipe
  try {
    const search = req.params.userSearch;
    const url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${search}&to=2`;
    const fetch_response = await fetch(url, options);
    const json = await fetch_response.json();
    res.status(200).json(json);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// const searchByIngredient = async (userSearch) => {
//   try {
//     const url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${userSearch}&to=2`;
//     const response = await fetch(url, options);

//     const data = await response.json();

//     const recipe = data.hits[0].recipe;
//     const recipe_name = data.hits[0].recipe.label;
//     const is_vegetarian = await data.hits[0].recipe.healthLabels.includes(
//       "Vegetarian"
//     );
//     const is_vegan = await data.hits[0].recipe.healthLabels.includes("Vegan");
//     const is_gluten_free = await data.hits[0].recipe.healthLabels.includes(
//       "Gluten-Free"
//     );
//     const contains_dairy = !(await data.hits[0].recipe.healthLabels.includes(
//       "Dairy-Free"
//     ));
//     const is_low_carb = await data.hits[0].recipe.dietLabels.includes(
//       "Low-Carb"
//     );
//     //returns recipe results and the caution for the 2nd recipe

//     console.log(
//       recipe_name,
//       is_vegetarian,
//       is_vegan,
//       is_gluten_free,
//       contains_dairy,
//       is_low_carb
//     );

//     if (userSearch) {
//       console.log(recipe);
//     }

//     // res.send(results, cautionResults)
//     // return results, cautionResults;
//   } catch (err) {
//     (err) => console.error("error:" + err);
//   }
// };
// searchByIngredient("Steak");
