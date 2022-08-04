const fetch = require("node-fetch");
require("dotenv").config();
// const userSearch =
const url = "https://edamam-recipe-search.p.rapidapi.com/search?q=chicken&to=2";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.DB_API_KEY,
    "X-RapidAPI-Host": process.env.DB_HOST,
  },
};
console.log(options);

const fetchedData = async () => {
  try {
    const response = await fetch(url, options);

    const data = await response.json();

    const results = await data.hits;
    const cautionResults = await data.hits[1].recipe.cautions;
    //returns recipe results and the caution for the 2nd recipe
    console.log(results);
    console.log(cautionResults);
    // return results, cautionResults;
  } catch (err) {
    (err) => console.error("error:" + err);
  }
};

fetchedData();

module.export = fetchedData;
