 
let userSearch = document.getElementById("user-input").textContent;
let button = document.getElementById("search-button");
let recipeSection = document.getElementById("recipe-section");


//takes in user input from handlebars. if there is no input run a default recipe search.
button.addEventListener("click", () =>{
if(!userSearch){
    const api_url =`/recipes/chicken`
    const response = await fetch(api_url);
    const json = await response.json();
    recipeSection.textContent = json.recipe
    console.log(json);

}else{
// on click


const api_url =`/recipes/${userSearch}`
const response = await fetch(api_url);
const json = await response.json();
recipeSection.textContent = json.recipe
console.log(json);

 
}
})