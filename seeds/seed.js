// const sequelize = require('../config/connection');
// const fs = require('fs');
// const { Recipe } = require('../models');
// const searchByIngredient = require('./api/route')
const searchByIngredient = require('../controllers/api/apiRoute');


const seedDatabase = async () => {
await console.log(searchByIngredient('apple'))
};

seedDatabase();
