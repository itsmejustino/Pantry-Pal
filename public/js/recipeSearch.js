//search bar and past search
let userSearch;
let button = document.getElementById("search-button");
let pastSearch = document.getElementById("last-search-dropdown");
let dropdownUl = document.getElementById("dropdown-ul");

// start card items
let recipeUrlButton = document.getElementById("recipe-url");
let recipeUrlButton2 = document.getElementById("recipe-url2");
let recipeUrlButton3 = document.getElementById("recipe-url3");
let recipeUrlButton4 = document.getElementById("recipe-url4");
let recipeUrlButton5 = document.getElementById("recipe-url5");

let recipeBtn = document.getElementById("recipe-btn");
let recipeBtn2 = document.getElementById("recipe-btn2");
let recipeBtn3 = document.getElementById("recipe-btn3");
let recipeBtn4 = document.getElementById("recipe-btn4");
let recipeBtn5 = document.getElementById("recipe-btn5");

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
// end card items

//adds searched ingredient to db
newIngredient = async (input) => {
  userSearch = document.getElementById("user-input").value;
  const response = await fetch(`api/ingredients`, {
    method: "POST",
    body: JSON.stringify({ ingredient_name: input }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  response.ok
    ? console.log("Added Ingredient to the DB")
    : alert(response.statusText);
};

//=======================================================
//gets the searched ingredient from db for debugging

// getIngredient = async () => {
//   const api_url = `api/ingredients`;
//   const response = await fetch(api_url);
//   const json = await response.json();
//   console.log(json);
// };
//========================================================

//creates list of searched ingredients and adds to drop down list in search bar
createIngredientList = async () => {
  const api_url = `api/ingredients`;
  const response = await fetch(api_url);
  const json = await response.json();

  let recipeArray = json.map((i) => i.ingredient_name);
  console.log(recipeArray);

  for (let i = recipeArray.length - 1; i < recipeArray.length; i++) {
    let newLi= document.createElement('li')
    newLi.textContent = recipeArray[i]
    newLi.classList.add("dropdown-item");
    // let searchedIngredient = recipeArray[i];
    
    console.log(newLi);
    dropdownUl.append(newLi);
  }

};

// createCards more dynamically ----debugging
// createCards= async (input) =>{
//   const api_url = `/api/apiroutes/recipe/${input}`;
//     const response = await fetch(api_url);
//     const json = await response.json();
//   for (let i = 0; i <= 4; i++) {
//     recipeName.textContent = json.hits[i].recipe.label;
//     recipeIngredients.textContent = json.hits[i].recipe.ingredientLines;
//     recipeImage.src = json.hits[i].recipe.image;
//     recipeType.textContent = json.hits[i].recipe.mealType;
//     recipeBtn.href = json.hits[i].recipe.url;
//     recipeUrlButton.textContent = "More Recipe Info Here!";
//   }
//   return;
// }

//takes in user input from handlebars. if there is no input run a default recipe search.
button.addEventListener("click", async () => {
  userSearch = document.getElementById("user-input").value;
  //if there is no user search use default path
  if (!userSearch) {
    const api_url = `/api/apiroutes/recipe/steak`;
    const response = await fetch(api_url);
    const json = await response.json();

    //card 1
    recipeName.textContent = json.hits[0].recipe.label;
    recipeIngredients.textContent = json.hits[0].recipe.ingredientLines;
    recipeImage.src = json.hits[0].recipe.image;
    recipeType.textContent = json.hits[0].recipe.mealType;
    recipeBtn.href = json.hits[0].recipe.url;
    console.log(recipeBtn.href);
    recipeUrlButton.textContent = "More Recipe Info Here!";

    //card 2
    recipeName2.textContent = json.hits[1].recipe.label;
    recipeIngredients2.textContent = json.hits[1].recipe.ingredientLines;
    recipeImage2.src = json.hits[1].recipe.image;
    recipeType2.textContent = json.hits[1].recipe.mealType;
    recipeBtn2.href = json.hits[1].recipe.url;
    console.log(recipeBtn.href);
    recipeUrlButton2.textContent = "More Recipe Info Here!";

    //card 3
    recipeName3.textContent = json.hits[2].recipe.label;
    recipeIngredients3.textContent = json.hits[2].recipe.ingredientLines;
    recipeImage3.src = json.hits[2].recipe.image;
    recipeType3.textContent = json.hits[2].recipe.mealType;
    recipeBtn3.href = json.hits[2].recipe.url;
    console.log(recipeBtn.href);
    recipeUrlButton3.textContent = "More Recipe Info Here!";

    //card 4
    recipeName4.textContent = json.hits[3].recipe.label;
    recipeIngredients4.textContent = json.hits[3].recipe.ingredientLines;
    recipeImage4.src = json.hits[3].recipe.image;
    recipeType4.textContent = json.hits[3].recipe.mealType;
    recipeBtn4.href = json.hits[3].recipe.url;
    console.log(recipeBtn.href);
    recipeUrlButton4.textContent = "More Recipe Info Here!";

    //card 5
    recipeName5.textContent = json.hits[4].recipe.label;
    recipeIngredients5.textContent = json.hits[4].recipe.ingredientLines;
    recipeImage5.src = json.hits[4].recipe.image;
    recipeType5.textContent = json.hits[4].recipe.mealType;
    recipeBtn5.href = json.hits[4].recipe.url;
    console.log(recipeBtn.href);
    recipeUrlButton5.textContent = "More Recipe Info Here!";

  //   console.log(json);
   } else {
    // on click
    console.log(userSearch);
    const api_url = `/api/apiroutes/recipe/${userSearch}`;
    const response = await fetch(api_url);
    const json = await response.json();
    //card 1
    recipeName.textContent = json.hits[0].recipe.label;
    recipeIngredients.textContent = json.hits[0].recipe.ingredientLines;
    recipeImage.src = json.hits[0].recipe.image;
    recipeType.textContent = json.hits[0].recipe.mealType;
    recipeBtn.href = json.hits[0].recipe.url;
    console.log(recipeBtn.href);
    recipeUrlButton.textContent = "More Recipe Info Here!";

    //card 2
    recipeName2.textContent = json.hits[1].recipe.label;
    recipeIngredients2.textContent = json.hits[1].recipe.ingredientLines;
    recipeImage2.src = json.hits[1].recipe.image;
    recipeType2.textContent = json.hits[1].recipe.mealType;
    recipeBtn2.href = json.hits[1].recipe.url;
    console.log(recipeBtn.href);
    recipeUrlButton2.textContent = "More Recipe Info Here!";

    //card 3
    recipeName3.textContent = json.hits[2].recipe.label;
    recipeIngredients3.textContent = json.hits[2].recipe.ingredientLines;
    recipeImage3.src = json.hits[2].recipe.image;
    recipeType3.textContent = json.hits[2].recipe.mealType;
    recipeBtn3.href = json.hits[2].recipe.url;
    console.log(recipeBtn.href);
    recipeUrlButton3.textContent = "More Recipe Info Here!";

    //card 4
    recipeName4.textContent = json.hits[3].recipe.label;
    recipeIngredients4.textContent = json.hits[3].recipe.ingredientLines;
    recipeImage4.src = json.hits[3].recipe.image;
    recipeType4.textContent = json.hits[3].recipe.mealType;
    recipeBtn4.href = json.hits[3].recipe.url;
    console.log(recipeBtn.href);
    recipeUrlButton4.textContent = "More Recipe Info Here!";

    //card 5
    recipeName5.textContent = json.hits[4].recipe.label;
    recipeIngredients5.textContent = json.hits[4].recipe.ingredientLines;
    recipeImage5.src = json.hits[4].recipe.image;
    recipeType5.textContent = json.hits[4].recipe.mealType;
    recipeBtn5.href = json.hits[4].recipe.url;
    console.log(recipeBtn.href);
    recipeUrlButton5.textContent = "More Recipe Info Here!";

    console.log(json);
    // createCards(userSearch);
    newIngredient(userSearch);
    // getIngredient();
    createIngredientList();
  }
});
