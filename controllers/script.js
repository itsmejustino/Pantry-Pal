const fetch = require('node-fetch');
// const userSearch = 
const url = 'https://edamam-recipe-search.p.rapidapi.com/search?q=chicken&to=2';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.DB_API_KEY,
    'X-RapidAPI-Host': process.env.DB_HOST
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json.hits))
	.catch(err => console.error('error:' + err));