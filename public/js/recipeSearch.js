 
let userSearch = document.getElementById("user-input").textContent;
let button = document.getElementById("search-button");
let recipeSection = document.getElementById("recipe-section");

if(!userSearch){
    const api_url =`/recipes/chicken`
    const response = await fetch(api_url);
    const json = await response.json();
    recipeSection.textContent = json.recipe
    console.log(json);

}else{

button.addEventListener("click", () =>{

const api_url =`/recipes/${userSearch}`
const response = await fetch(api_url);
const json = await response.json();
recipeSection.textContent = json.recipe
console.log(json);

 })
}
