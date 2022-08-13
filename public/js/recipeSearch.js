//search bar and past search
let userSearch;
let button = document.getElementById("search-button");
let pastSearch = document.getElementById("last-search-dropdown");
let dropdownUl = document.getElementById("dropdown-ul");
let listListener = document.querySelector(".test-list-container");
let surpriseBtn = document.getElementById("surprise-me-button");

// start card items
let recipeUrlButton = document.getElementById("recipe-url");

let recipeBtn = document.getElementById("recipe-btn");

let recipeIngredients = document.getElementById("recipe-section");

let recipeCardSection = document.getElementById("recipe-card");
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

//creates list of searched ingredients and adds to drop down list in search bar
createIngredientList = async () => {
  const api_url = `api/ingredients`;
  const response = await fetch(api_url);
  const json = await response.json();

  let recipeArray = json.map((i) => i.ingredient_name);
  // .filter(recipeArray);
  // console.log(recipeArray);
  // let filtedArray = recipeArray.filter(recipe)

  for (let i = recipeArray.length - 1; i < recipeArray.length; i++) {
    var newBtn = document.createElement("button");
    newBtn.textContent = recipeArray[i];
    newBtn.classList.add("dropdown-item");
    newBtn.setAttribute("id", "list-item");
    newBtn.setAttribute("type", "button");
    newBtn.setAttribute("value", i);
    localStorage.setItem("key", recipeArray[i]);

    // let searchedIngredient = recipeArray[i];

    newBtn.addEventListener("click", () => {
      searchWithLastIngredient(newBtn.textContent);
    });
    console.log(localStorage.getItem("key"));
    dropdownUl.append(newBtn);
  }
};

//takes in user input from handlebars. if there is no input run a default recipe search.
button.addEventListener("click", async () => {
  document.getElementById("recipe-card").innerHTML = "";

  userSearch = document.getElementById("user-input").value;
  //if there is no user search use default path
  if (!userSearch) {
    let randomIngredientArray = [
      "chicken",
      "fish",
      "vegetarian",
      "cheese",
      "tomato",
      "potatoes",
      "vegetables",
      "fruits",
      "bread",
      "flour",
      "coffee",
      "naan",
      "curry",
      "beans",
      "eggs",
    ];
    let randomNumber = Math.floor(Math.random() * randomIngredientArray.length);
    console.log(randomIngredientArray[randomNumber]);

    const api_url = `/api/apiroutes/recipe/${randomIngredientArray[randomNumber]}`;
    const response = await fetch(api_url);
    const json = await response.json();
    //card 1
    for (let i = 0; i < 5; i++) {
      let card = document.createElement("div");
      let recipeName = document.createElement("h1");
      let recipeImageDiv = document.createElement("div");
      let recipeImage = document.createElement("img");
      let recipeType = document.createElement("p");
      let recipeIngredients = document.createElement("p");
      let recipeLink = document.createElement("a");
      let recipeBtn = document.createElement("button");

      recipeName.id = "recipeTitle";
      let cardClass = "text-center recipe-box";
      let cardStyle = "width: 300px";
      let imageClass =
        "d-flex justify-content-center img-fluid rounded mx-auto d-block";
      let buttonClass = "recipe-btn btn btn-info";
      card.id = "recipeCard";
      card.setAttribute("class", cardClass);
      card.setAttribute("style", cardStyle);
      recipeImage.setAttribute("class", imageClass);
      recipeType.setAttribute("class", "text-center");
      recipeIngredients.id = "recipeIngredients";
      recipeIngredients.setAttribute("class", "flex-wrap");
      recipeIngredients.setAttribute("class", "text-center");
      recipeBtn.setAttribute("type", "button");
      recipeBtn.setAttribute("class", buttonClass);
      recipeLink.setAttribute("target", "_blank");

      console.log(card);
      console.log(recipeCardSection);

      card.appendChild(recipeName);
      card.append(recipeImageDiv);
      recipeImageDiv.appendChild(recipeImage);
      recipeImageDiv.appendChild(recipeLink);
      recipeLink.appendChild(recipeBtn);
      card.appendChild(recipeType);
      card.appendChild(recipeIngredients);
      recipeCardSection.append(card);

      recipeName.textContent = json.hits[i].recipe.label;
      recipeIngredients.textContent = json.hits[i].recipe.ingredientLines;
      recipeImage.src = json.hits[i].recipe.image;
      recipeType.textContent = json.hits[i].recipe.mealType;
      recipeLink.href = json.hits[i].recipe.url;
      recipeBtn.textContent = "More Recipe Info Here!";
    }
  } else {
    // on click

    document.getElementById("recipe-card").innerHTML = "";

    console.log(userSearch);
    const api_url = `/api/apiroutes/recipe/${userSearch}`;
    const response = await fetch(api_url);
    const json = await response.json();
    console.log(json.more);
    if (json.more === false) return modalError();
    for (let i = 0; i < 5; i++) {
      let card = document.createElement("div");
      let recipeName = document.createElement("h1");
      let recipeImageDiv = document.createElement("div");
      let recipeImage = document.createElement("img");
      let recipeType = document.createElement("p");
      let recipeIngredients = document.createElement("p");
      let recipeLink = document.createElement("a");
      let recipeBtn = document.createElement("button");

      recipeName.id = "recipeTitle";

      let cardClass = "text-center recipe-box";
      let cardStyle = "width: 300px";
      let imageClass =
        "d-flex justify-content-center img-fluid rounded mx-auto d-block";
      let buttonClass = "recipe-btn btn btn-info";

      card.id = "recipeCard";
      card.setAttribute("class", cardClass);
      card.setAttribute("style", cardStyle);
      recipeImage.setAttribute("class", imageClass);
      recipeType.setAttribute("class", "text-center");
      recipeIngredients.id = "recipeIngredients";

      recipeIngredients.setAttribute("class", "flex-wrap");
      recipeIngredients.setAttribute("class", "text-center");
      recipeBtn.setAttribute("type", "button");
      recipeBtn.setAttribute("class", buttonClass);
      recipeLink.setAttribute("target", "_blank");

      console.log(card);
      console.log(recipeCardSection);

      card.appendChild(recipeName);
      card.append(recipeImageDiv);
      recipeImageDiv.appendChild(recipeImage);
      recipeImageDiv.appendChild(recipeLink);
      recipeLink.appendChild(recipeBtn);
      card.appendChild(recipeType);
      card.appendChild(recipeIngredients);
      recipeCardSection.append(card);

      recipeName.textContent = json.hits[i].recipe.label;
      recipeIngredients.textContent = json.hits[i].recipe.ingredientLines;
      recipeImage.src = json.hits[i].recipe.image;
      recipeType.textContent = json.hits[i].recipe.mealType;
      recipeLink.href = json.hits[i].recipe.url;
      recipeBtn.textContent = "More Recipe Info Here!";
    }

    createIngredientList();
    newIngredient(userSearch);
  }
});

surpriseBtn.addEventListener("click", async () => {
  document.getElementById("recipe-card").innerHTML = "";

  let randomIngredientArray = [
    "chicken",
    "fish",
    "vegetarian",
    "cheese",
    "tomato",
    "potatoes",
    "vegetables",
    "fruits",
    "bread",
    "flour",
    "coffee",
    "naan",
    "curry",
  ];
  let randomNumber = Math.floor(Math.random() * randomIngredientArray.length);
  console.log(randomIngredientArray[randomNumber]);

  const api_url = `/api/apiroutes/recipe/${randomIngredientArray[randomNumber]}`;
  const response = await fetch(api_url);
  const json = await response.json();
  for (let i = 0; i < 5; i++) {
    let card = document.createElement("div");
    let recipeName = document.createElement("h1");
    let recipeImageDiv = document.createElement("div");
    let recipeImage = document.createElement("img");
    let recipeType = document.createElement("p");
    let recipeIngredients = document.createElement("p");
    let recipeLink = document.createElement("a");
    let recipeBtn = document.createElement("button");

    let cardClass = "text-center recipe-box";
    let cardStyle = "width: 300px";
    let imageClass =
      "d-flex justify-content-center img-fluid rounded mx-auto d-block";
    let buttonClass = "recipe-btn btn btn-info";
    recipeName.id = "recipeTitle";

    card.id = "recipeCard";
    card.setAttribute("class", cardClass);
    card.setAttribute("style", cardStyle);
    recipeImage.setAttribute("class", imageClass);
    recipeType.setAttribute("class", "text-center");
    recipeIngredients.id = "recipeIngredients";

    recipeIngredients.setAttribute("class", "flex-wrap");
    recipeIngredients.setAttribute("class", "text-center");
    recipeBtn.setAttribute("type", "button");
    recipeBtn.setAttribute("class", buttonClass);
    recipeLink.setAttribute("target", "_blank");

    console.log(card);
    console.log(recipeCardSection);

    card.appendChild(recipeName);
    card.append(recipeImageDiv);
    recipeImageDiv.appendChild(recipeImage);
    recipeImageDiv.appendChild(recipeLink);
    recipeLink.appendChild(recipeBtn);
    card.appendChild(recipeType);
    card.appendChild(recipeIngredients);
    recipeCardSection.append(card);

    recipeName.textContent = json.hits[i].recipe.label;
    recipeIngredients.textContent = json.hits[i].recipe.ingredientLines;
    recipeImage.src = json.hits[i].recipe.image;
    recipeType.textContent = json.hits[i].recipe.mealType;
    recipeLink.href = json.hits[i].recipe.url;
    recipeBtn.textContent = "More Recipe Info Here!";
  }
});

const searchWithLastIngredient = async (input) => {
  document.getElementById("recipe-card").innerHTML = "";
  const search_api_url = `/api/apiroutes/recipe/${input}`;
  const searchResponse = await fetch(search_api_url);
  const json = await searchResponse.json();
  //card 1
  for (let i = 0; i < 5; i++) {
    let card = document.createElement("div");
    let recipeName = document.createElement("h1");
    let recipeImageDiv = document.createElement("div");
    let recipeImage = document.createElement("img");
    let recipeType = document.createElement("p");
    let recipeIngredients = document.createElement("p");
    let recipeLink = document.createElement("a");
    let recipeBtn = document.createElement("button");

    let cardClass = "text-center recipe-box";
    let cardStyle = "width: 300px";
    let imageClass =
      "d-flex justify-content-center img-fluid rounded mx-auto d-block";
    let buttonClass = "recipe-btn btn btn-info";

    card.id = "recipeCard";
    card.setAttribute("class", cardClass);
    card.setAttribute("style", cardStyle);
    recipeImage.setAttribute("class", imageClass);
    recipeType.setAttribute("class", "text-center");
    recipeIngredients.setAttribute("class", "flex-wrap");
    recipeIngredients.setAttribute("class", "text-center");
    recipeBtn.setAttribute("type", "button");
    recipeBtn.setAttribute("class", buttonClass);
    recipeLink.setAttribute("target", "_blank");

    console.log(card);
    console.log(recipeCardSection);

    card.appendChild(recipeName);
    card.append(recipeImageDiv);
    recipeImageDiv.appendChild(recipeImage);
    recipeImageDiv.appendChild(recipeLink);
    recipeLink.appendChild(recipeBtn);
    card.appendChild(recipeType);
    card.appendChild(recipeIngredients);
    recipeCardSection.append(card);

    recipeName.textContent = json.hits[i].recipe.label;
    recipeIngredients.textContent = json.hits[i].recipe.ingredientLines;
    recipeImage.src = json.hits[i].recipe.image;
    recipeType.textContent = json.hits[i].recipe.mealType;
    recipeLink.href = json.hits[i].recipe.url;
    recipeBtn.textContent = "More Recipe Info Here!";
  }
};

const modalError = () => {
  var myDiv = document.createElement("div");

  //Set its unique ID.
  myDiv.id = "div_id";

  //Add your content to the DIV
  myDiv.innerHTML = `<div class="alert alert-secondary" role="alert" style="width: 350px; display:flex; justify-content: center; text-align: center;">
 <h4>Could not search with that ingredient. Try a different search!</h4>
</div>`;

  //Finally, append the element to the HTML body
  document.getElementById("modal-container").appendChild(myDiv);

  setTimeout(
    () => (document.getElementById("div_id").style.visibility = "visible")
  );
  setTimeout(() => document.getElementById("div_id").remove(), 5000);
};
