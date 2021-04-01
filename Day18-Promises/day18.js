//first method
const url = "https://restcountries.eu/rest/v2/all";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

//second method
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.log(err);
  }
};
console.log("===== async and await");
fetchData();

const countriesAPI = "https://restcountries.eu/rest/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

//excercise lvl1
const fetchCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    data.forEach((element) => {
      console.log(
        "Name: ",
        element.name,
        "\n",
        "Capital: ",
        element.capital,
        "\n",
        "Languages: ",
        element.languages,
        "\n",
        "Population: ",
        element.population,
        "\n",
        "Area: ",
        element.area
      );
    });
  } catch (err) {
    console.log(err);
  }
};

fetchCountriesData();

//excercise lvl2

const fetchCatData = async (url) => {
  try {
    let arr = [];
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((el) => arr.push(el.name));
    return arr;
  } catch (err) {
    console.log(err);
  }
};

console.log(fetchCatData(catsAPI));

//excercise lvl3
const fetchCatDataWeight = async () => {
  try {
    let avg = new Number(0);
    let index = new Number(1);
    const response = await fetch(catsAPI);
    const data = await response.json();
    data.forEach((el) => {
      const pattern = /\d+/g;
      //metric e.g. "2 - 5"
      let arrOfWeights = el.weight.metric.match(pattern);
      avg += (arrOfWeights[1] - arrOfWeights[0]) / 2.0;
      index++;
    });
    return avg / index;
  } catch (err) {
    console.log(err);
  }
};

console.log(fetchCatDataWeight());

const fetchCountriesDataPart2 = async () => {
  try {
    const response = await fetch(countriesAPI);
    let data = await response.json();
    data.sort(function (a, b) {
      if (a.population > b.population) return -1;
      if (a.population < b.population) return 1;
      return 0;
    });
    let arrToRet = [];
    let arr = data.splice(0,10);
    arr.forEach(el => {
        let obj = new Object();
        obj.name = el.name;
        obj.population = el.population;
        arrToRet.push(obj);
    })
    return arrToRet;
  } catch (err) {
    console.log(err);
  }
};

console.log(fetchCountriesDataPart2());

const fetchCountriesDataPart3 = async () => {
    try {
      const response = await fetch(countriesAPI);
      let data = await response.json();
      let set = new Set();
      data.forEach(el => {
            set.add(el.languages);
      })
      return set.size;
    } catch (err) {
      console.log(err);
    }
  };

  console.log(fetchCountriesDataPart3());
