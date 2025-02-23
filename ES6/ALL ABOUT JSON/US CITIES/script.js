const city = document.getElementById("city");
const state = document.getElementById("state");
const searchBtn = document.getElementById("submitBtn");
const city_form = document.getElementById("city-form");

const result = document.getElementById("result");

var citiesList = [];

fetch("uscities.json")
  .then((res) => {
    return res.json();
  })
  .then((loadedCities) => {
    citiesList = loadedCities.cities;
    // console.log(citiesList);
  });

activateBtn = () => {
  city.addEventListener("keyup", () => {
    searchBtn.disabled = !city.value.trim();
  });
  state.addEventListener("keyup", () => {
    searchBtn.disabled = !state.value.trim();
  });
};
searchFor = (e) => {
  e.preventDefault();

  const cityInput = city.value;
  const stateInput = state.value;

  const requiredCity = citiesList.filter((element) => {
    const cityToLowerCase = cityInput.toLowerCase();
    const elementCityToLowerCase = element.city.toLowerCase();

    const stateToLowerCase = stateInput.toLowerCase();
    const elementStateToLowerCase = element.state.toLowerCase();

    if (cityInput === "" && stateInput != "") {
      return stateToLowerCase == elementStateToLowerCase;
    } else if (stateInput === "" && cityInput != "") {
      return cityToLowerCase == elementCityToLowerCase;
    } else if (cityInput != "" && stateInput != "") {
      return (
        cityToLowerCase == elementCityToLowerCase &&
        stateToLowerCase == elementStateToLowerCase
      );
    }
  });
  requiredCity.sort((a, b) => a.population - b.population);

  city_form.reset();
  if (requiredCity.length === 0) return;

  result.innerText = requiredCity[0].population;
  // console.log(requiredCity);
};
activateBtn();
