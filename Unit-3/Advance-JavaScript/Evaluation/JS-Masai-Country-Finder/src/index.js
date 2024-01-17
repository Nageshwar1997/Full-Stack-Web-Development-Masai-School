let data = [];
let filterChange = false;
let sortChange = false;
let fecthCountries = async () => {
  // make an API
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    data = await response.json()
    // console.log(data);
    renderData(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

let countryCard = (el) => { // this el means country
  let cardDiv = document.createElement("div");
  // create a div element for each card and append the details
  function addCommaInPopulation(num) {
    let str = num + "";
    let count = 0;
    let bag = "";
    for (let i = str.length - 1; i >= 0; i--) {
      count++;
      bag = str[i] + bag;

      // Check if it's not the last digit and count reaches 3
      if (i !== 0 && count === 3) {
        bag = "," + bag;
        count = 1; // Reset count for the next group of digits
      }
    }
    return bag;
  }
  cardDiv.className = "country";
  cardDiv.innerHTML = `
  <img class="flag" src=${el.flags.png} alt=${`${el.name.common}'s_Flag`}>
  <h2 class="title">${el.name.common}</h2>
  <p class="population"><strong>Population :</strong> ${addCommaInPopulation(el.population)}</p>
  <p class ="region"><strong>Region :</strong> ${el.region}</p>
  <p class="capital"><strong>Capital :</strong> ${el.capital}</p>
  `;

  return cardDiv;
};

let renderData = (data) => {
  let container = document.getElementById("all_countries");

  container.textContent = "";

  // loop through the cards and append to main container

  data.forEach((country) => {
    let cardDiv = countryCard(country);
    container.append(cardDiv);
    // countryCard(country);
  });
  return container;
};

let sortLogic = (order, data) => {
  // handle sort logic here and return sorted data
  // it expectes two arguments type of sort (asc or desc) and data

  if (order == "asc") {
    data.sort((a, b) => a.population - b.population);
  }
  else if (order == "desc") {
    data.sort((a, b) => b.population - a.population);
  }
  renderData(data);
  return data;
};
let filterByRegionLogic = (data, regionName) => {
  // handle filter logic here and return filtered data
  // it expectes two arguments data and region

  if (regionName == "all") {
    renderData(data);
    return data;
  }
  else {
    let filterData = data.filter((country) => country.region === regionName);
    renderData(filterData);
    return filterData;
  }
};


let handleSortAndFilter = async () => {

  try {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();

    if (sortChange) {
      sortLogic(document.getElementById("sort_population").value, data);
    }

    if (filterChange) {
      filterByRegionLogic(data, document.getElementById("filter_region").value)
    }
  } catch (error) {
    console.log(error);
  }

};
window.onload = function () {
  // onload fetch Countries from the `https://restcountries.com/v3.1/all`
  fecthCountries();

  // add change event listeners to sort and filter
  document.getElementById("sort_population").addEventListener("change", () => {
    sortChange = true;
    handleSortAndFilter();
  });

  document.getElementById("filter_region").addEventListener("change", () => {
    filterChange = true;
    handleSortAndFilter();
  });
};

if (typeof exports !== "undefined") {
  module.exports = {
    renderData,
    handleSortAndFilter,
    sortLogic,
    filterByRegionLogic,
    fecthCountries,
  };
}
