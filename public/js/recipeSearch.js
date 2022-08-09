let userSearch;
let button = document.getElementById("search-button");

let recipeIngredients = document.getElementById("recipe-section");
let recipeName = document.getElementById("recipe-name");
let recipeImage = document.getElementById("recipe-image");
let recipeType = document.getElementById("recipe-type");

let recipeIngredients2 = document.getElementById("recipe-section2");
let recipeName2 = document.getElementById("recipe-name2");
let recipeImage2 = document.getElementById("recipe-image2");
let recipeType2 = document.getElementById("recipe-type2");

let recipeIngredients3 = document.getElementById("recipe-section3");
let recipeName3 = document.getElementById("recipe-name3");
let recipeImage3 = document.getElementById("recipe-image3");
let recipeType3 = document.getElementById("recipe-type3");

let recipeIngredients4 = document.getElementById("recipe-section4");
let recipeName4 = document.getElementById("recipe-name4");
let recipeImage4 = document.getElementById("recipe-image4");
let recipeType4 = document.getElementById("recipe-type4");

let recipeIngredients5 = document.getElementById("recipe-section5");
let recipeName5 = document.getElementById("recipe-name5");
let recipeImage5 = document.getElementById("recipe-image5");
let recipeType5 = document.getElementById("recipe-type5");


//takes in user input from handlebars. if there is no input run a default recipe search.
button.addEventListener("click", async () => {
  userSearch = document.getElementById("user-input").value;
  if (!userSearch) {
    const api_url = `/api/apiroutes/recipe/steak`;
    const response = await fetch(api_url);
    const json = await response.json();
    recipeSection.textContent = json.recipe;
    console.log(json);
  } else {
    // on click

    console.log(userSearch);
    const api_url = `/api/apiroutes/recipe/${userSearch}`;
    const response = await fetch(api_url);
    const json = await response.json();
    recipeName.textContent = json.hits[0].recipe.label;
    recipeIngredients.textContent = json.hits[0].recipe.ingredientLines;
    recipeImage.src = json.hits[0].recipe.image;
    recipeType.textContent = json.hits[0].recipe.mealType;

    recipeName2.textContent = json.hits[1].recipe.label;
    recipeIngredients2.textContent = json.hits[1].recipe.ingredientLines;
    recipeImage2.src = json.hits[1].recipe.image;
    recipeType2.textContent = json.hits[1].recipe.mealType;

    recipeName3.textContent = json.hits[2].recipe.label;
    recipeIngredients3.textContent = json.hits[2].recipe.ingredientLines;
    recipeImage3.src = json.hits[2].recipe.image;
    recipeType3.textContent = json.hits[2].recipe.mealType;

    recipeName4.textContent = json.hits[3].recipe.label;
    recipeIngredients4.textContent = json.hits[3].recipe.ingredientLines;
    recipeImage4.src = json.hits[3].recipe.image;
    recipeType4.textContent = json.hits[3].recipe.mealType;

    recipeName5.textContent = json.hits[4].recipe.label;
    recipeIngredients5.textContent = json.hits[4].recipe.ingredientLines;
    recipeImage5.src = json.hits[4].recipe.image;
    recipeType5.textContent = json.hits[4].recipe.mealType;
    
    console.log(json);
    console.log;
  }
});
