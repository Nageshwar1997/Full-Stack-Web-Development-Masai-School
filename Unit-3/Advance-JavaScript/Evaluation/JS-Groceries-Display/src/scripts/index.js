// The items should be stored in local storage with key :- “items”

let data = [];

let cartCount = 0;
let navbar = document.getElementById("navbar");
navbar.innerHTML += `
<div><a  id="go_to_cart" href="./cart.html" target="_blank">${"cart"}</a></div>
<div id="item_count">${cartCount}</div>
`;

let itemsDiv = document.getElementById("items");

const itemsApiURL = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries";


function fetchItems() {
    let promise = fetch(itemsApiURL);

    promise.then((resp) => {
        let response = resp.json();
        // console.log(response);
        return response;
    }).then((newResp) => {
        data = newResp.data;
        // console.log(data);
        data.map((ele) => {
            createCard(ele)
        })
    })
}
function createCard(el) {
    let myBtn = document.createElement("h5")
    myBtn.innerHTML = `<button>Add to Cart</button>`


    itemsDiv.innerHTML += `
    <div class="item">
        <div>
            <img src="${el.image}" alt="${el.name} Image Not Found">
        </div>
        <div>
            <h4 class="name">${el.name}</h4>
            <p class="price">${el.price}</p>
            ${myBtn.innerHTML}
        </div>
    </div>
    `;
    // return itemsDiv;
}
fetchItems();


