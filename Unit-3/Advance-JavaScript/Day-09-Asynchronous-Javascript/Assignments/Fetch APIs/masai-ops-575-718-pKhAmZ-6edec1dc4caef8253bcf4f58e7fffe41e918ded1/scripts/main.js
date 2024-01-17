// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipesURL = `${baseServerURL}/recipes`;
const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;



// ------------------
let getEmployeesButton = document.getElementById("fetch-employees");

getEmployeesButton.addEventListener("click", () => {
  fetch(`${employeeURL}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      // 1 way --->(Industry Uses Approach) What we need - Declarative Approach
      mainSection.innerHTML = `
        <pre class="emp-wrapper">
        <h3>Lists Of Employees</h3>
          <code>
            ${JSON.stringify(data, null, 2)}
          </code>
        </pre>
        `

      // // 2 way ---> What we need - Imperative Approach
      // let dataPre = document.createElement("pre");
      // dataPre.classList.add("emp-wrapper");

      // let dataCode = document.createElement("code");

      // dataCode.innerHTML = JSON.stringify(data, null, 2);
      // dataPre.append(dataCode);
      // mainSection.append(dataPre);
    })
})

let getRecipeButton = document.getElementById("fetch-recipe");
getRecipeButton.addEventListener("click", () => {
  // renderCard()

  // fetch(`${recipeIngredientURL}?_limit=15_page=1`) // limited data
  fetch(`${recipeIngredientURL}`) // all data
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      renderCard(data);
    })
});

function renderCard(cardData) {
  cardData.map((ele) => {
    let card = `
    <div class="card">
      <div class="card_img">
        <img src="${baseServerURL}${ele.image}" />
      </div>
      <div class="card_body">
        <h3>${ele.name}</h3>
        <p>${ele.description}</p>
      </div>
    </div>
    `;

    mainSection.innerHTML += card;
    // console.log(ele.image);
  }).join('');
}
