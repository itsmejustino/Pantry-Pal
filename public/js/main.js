const router = require("express").Router();
const fetch = require("node-fetch");
require("dotenv").config();

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eca86d4e2fmsh158280de98a7ef7p14ea91jsn088c0f0e454d",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
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
