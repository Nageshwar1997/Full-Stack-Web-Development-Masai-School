const getCategoriesData = async () => {
  // code here
  try {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    let fetchedData = await response.json();

    console.log(fetchedData);
    return fetchedData;
  } catch (error) {
    return "something went wrong";
  }

};

const getIngredientData = async () => {
  // code here
  try {
    let response1 = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
    let data = await response1.json();

    console.log(data);
    return data;
  } catch (error) {
    return "something went wrong";
  }
};

window.onload = function () {
  //  get the buttons here and add click event
  let categoryBtn = document.getElementById("get-category-data");
  let ingredientBtn = document.getElementById("get-ingredient-data");

  categoryBtn.addEventListener("click", getCategoriesData);
  ingredientBtn.addEventListener("click", getIngredientData);
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
