 
let userSearch;
let button = document.getElementById("search-button");
let recipeIngredients = document.getElementById("recipe-section");
let recipeName = document.getElementById("recipe-name");



//takes in user input from handlebars. if there is no input run a default recipe search.
button.addEventListener("click", async () =>{
    userSearch = document.getElementById("user-input").value
if(!userSearch){
   
    const api_url =`/api/apiroutes/recipe/steak`
    const response = await fetch(api_url);
    const json = await response.json();
    recipeSection.textContent = json.recipe
    console.log(json);

}else{
// on click

console.log(userSearch);
const api_url =`/api/apiroutes/recipe/${userSearch}`
const response = await fetch(api_url);
const json = await response.json();
recipeName.textContent = json.hits[0].recipe.label
recipeIngredients.textContent = json.hits[0].recipe.ingredientLines

console.log(json);
console.log

 
}
})