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
router.get("/recipe/:userSearch", async (req, res) => {
  // find all recipe
  try {
    console.log(req.params)
    const search = req.params.userSearch;
    const url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&random=true&dishType%5B0%5D=?q=${search}&to=5`;
    const fetch_response = await fetch(url, options);
    const json = await fetch_response.json();
    res.status(200).json(json);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

