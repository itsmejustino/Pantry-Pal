const fetch = require('node-fetch');
// const userSearch = 
const url = 'https://edamam-recipe-search.p.rapidapi.com/search?q=chicken&to=2';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'eca86d4e2fmsh158280de98a7ef7p14ea91jsn088c0f0e454d',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json.hits))
	.catch(err => console.error('error:' + err));