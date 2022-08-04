const fetch = require("node-fetch");
// const userSearch =

const fetchedData = async () => {
  try {
    const url =
      "https://edamam-recipe-search.p.rapidapi.com/search?q=chicken&to=2";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "eca86d4e2fmsh158280de98a7ef7p14ea91jsn088c0f0e454d",
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);

    const data = await response.json();

    const results = await data.hits;
    const cautionResults = await data.hits[1].recipe.cautions;
    //returns recipe results and the caution for the 2nd recipe
    // console.log(results);
    // console.log(cautionResults);
    return results, cautionResults;
  } catch (err) {
    (err) => console.error("error:" + err);
  }
};

const theData = fetchedData();
console.log(theData);

module.export = fetchedData;
