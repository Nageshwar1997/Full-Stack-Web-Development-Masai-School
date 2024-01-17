// Incomplete
    function GetCountryIdByName(countryName, cb) {
      let country = [
        { name: "India", countryId: 1 },
        { name: "USA", countryId: 2 },
        { name: "UK", countryId: 3 },
      ];

      const countryObj = country.find(ele => ele.name === countryName);
      const countryId = countryObj.countryId;

      cb(countryId);
    }

    function GetStateIdByCountryId(countryId, cb) {
      let states = [
        { name: "Maharashtra", countryId: 1 , country:"India", stateId:11},
        { name: "USA State", countryId: 2, country:"USA", stateId:21 },
        { name: "UK State", countryId: 3,country:"UK" ,stateId:31},
      ];

      const stateObj = states.find(ele => ele.countryId === countryId);
      cb(stateObj.id);
}

function GetCityByStateId(stateId, cb) {
  let cities = [
    { name: "Mumbai", stateId: 11, cityId: 111 },
    { name: "New York", stateId: 21, cityId: 211 },
    { name: "London", stateId: 31, cityId: 311 },
  ]

  const cityObj = cities.find(ele => ele.stateId === stateId);
  cb(cityObj);
}

function GetPopulationByCityId(cityId, cb) {
  
  let population = [
    { name: "Mumbai", cityId: 111, population: 1000000 },
    { name: "New York", cityId: 211, population: 2000000 },
    { name: "London", cityId: 311, population: 3000000 },
  ]
  
  const populationObj = population.find(ele => ele.cityId === cityId);
  cb(populationObj.population);
}
GetPopulationByCityId();
// Callback hell
// when you have a dependent functions
// it creates a pattern for nested callbacks
// which lead to an anti pattern known as callback hell (pyramid of doom)


GetCountryIdByName("India", (countryId) => {
  GetStateIdByCountryId(countryId, (stateId) => {
    GetCityByStateId(stateId, (cityId) => {
      GetPopulationByCityId(cityId, (population) => {
        console.log(population);
      })
    })
  })
})