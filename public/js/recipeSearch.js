 
let userSearch;
let button = document.getElementById("search-button");
let recipeSection = document.getElementById("recipe-section");


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
recipeSection.textContent = json.recipe
console.log(json);

 
}
})