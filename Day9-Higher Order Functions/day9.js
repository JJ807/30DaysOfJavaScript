// //Excercise lvl1
// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];

// const print = (el) => {
//   console.log(el);
// };

// countries.forEach((el) => print(el));
// names.forEach((el) => print(el));
// numbers.forEach((el) => print(el));

// const upperCountries = countries.map((el) => el.toUpperCase());
// upperCountries.forEach((el) => print(el));

// //7
// const countriesLength = countries.map((el) => el.length);
// countriesLength.forEach((el) => print(el));

// //8
// console.log("\n8:");
// const squareNumbers = numbers.map((el) => Math.pow(el, 2));
// squareNumbers.forEach((el) => print(el));

// const upperNames = names.map((el) => el.toUpperCase());
// upperNames.forEach((el) => print(el));

// const mapped = products.map((obj) => {
//   var objToReturn = {};
//   objToReturn[obj.product] = obj.price;
//   return objToReturn;
// });
// mapped.forEach((el) => print(el));

// //11
// const filtered = countries.filter((el) => el.includes("land"));
// filtered.forEach((el) => print(el));

// //12
// console.log("\n12:");
// const sixChars = countries.filter((el) => el.length == 6);
// sixChars.forEach((el) => print(el));
// //13
// console.log("\n13:");
// const morethansixChars = countries.filter((el) => el.length >= 6);
// morethansixChars.forEach((el) => print(el));

// //14
// console.log("\n14:");
// const starts = countries.filter((el) => el.startsWith("E"));
// starts.forEach((el) => print(el));

// //15
// console.log("\n15:");
// const price = products.filter((obj) => obj.price != "" && obj.price != " ");
// price.forEach((el) => print(el));

// //16 only with string elements
// const getStringLists = (arr) => {
//   const toRet = [];
//   for (const el of arr) {
//     if (typeof el === "string") {
//       toRet.push(el);
//     }
//   }
//   return toRet;
// };

// console.log(getStringLists(countries));
// console.log(getStringLists(numbers));

// //v1
// const sum = numbers.reduce((acc, curr) => {
//   var sum = 0;
//   sum += acc + curr;
//   return sum;
// }, 0);
// //v2
// // const sum = numbers.reduce((acc, curr) => acc + curr, 0)
// console.log(sum);

// const napis = countries.reduce((acc, curr) => {
//   console.log(`acc = ${acc}, curr = ${curr}`);
//   if (curr == "IceLand") {
//     acc += "and " + curr + " are north European countries";
//   } else acc += curr + ", ";
//   return acc;
// }, "");

// console.log(napis);

// console.log(names.some((el) => el.length > 7));

// console.log(countries.every((el) => el.includes("land")));

// console.log(countries.find((el) => el.length === 6));
// console.log(countries.findIndex((el) => el.length === 6));
// console.log(countries.findIndex((el) => el === "Norway")); //3
// console.log(countries.findIndex((el) => el === "Russia")); //-1

// //Excercise lvl2
// console.log("Excercise lvl2");
// const callback = (el) => {
//   if (typeof el.price !== "number") {
//     console.log(el.price);
//     el["price"] = 0;
//     console.log("po zmianie: " + el.price);
//   }
//   return el;
// };

// const tab = products.map(callback);
// console.log(tab);

// //IMPORTANT!!! -> usage of reduce in case of Objects
// //1
// console.log(
//   products.map(callback).reduce((acc, curr) => {
//     console.log(`acc.price = ${acc.price}, curr.price = ${curr.price}`);
//     return { price: acc.price + curr.price };
//   }).price
// );
// //2
// console.log(
//   products.reduce((acc, curr) => {
//     console.log(`acc.price = ${acc.price}, curr.price = ${curr.price}`);
//     return { price: acc.price + curr.price };
//   }).price
// );
// //3

// const newcountries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// var landCountries = newcountries.filter((el) => el.includes("land"));
// console.log(landCountries);
// landCountries = newcountries.filter((el) => el.includes("ia"));
// console.log(landCountries);
// landCountries = newcountries.filter((el) => el.includes("island"));
// console.log(landCountries);
// landCountries = newcountries.filter((el) => el.includes("stan"));
// console.log(landCountries);

// function letAndNr(arr) {
//   var obj = new Object();
//   for (const country of arr) {
//     var temp = country.toLowerCase();
//     let key = temp[0];
//     let reg = new RegExp(key, "gi"); //or only 'g'
//     let value = temp.match(reg).length;
//     console.log(`key = ${key}, value = ${value}`);
//     obj[key] = value;
//   }
//   return obj;
// }
// console.log(letAndNr(newcountries));

// console.log(allCountries.slice(0, 10));
// console.log(allCountries.slice(allCountries.length - 10, allCountries.length));

// function letAndNrOfTimesAsInitial(arr) {
//   var obj = new Object();
//   for (const country of arr) {
//     var temp = country.toLowerCase();
//     let key = temp[0];
//     let nrOfTimes = 1;
//     for (const innerCountry of arr) {
//       if (country === innerCountry) {
//         continue;
//       } else {
//         if (key === innerCountry[0].toLowerCase()) {
//           // console.log(`key = ${key}, innerCountr[0] = ${innerCountry[0]}`);
//           nrOfTimes++;
//         }
//       }
//     }
//     // console.log(`key = ${key}, value = ${nrOfTimes}`);
//     if (!obj.hasOwnProperty(key)) {
//       //if there is no such a key, add it to the obj
//       obj[key] = nrOfTimes;
//     }
//   }
//   return obj;
// }
// console.log(letAndNrOfTimesAsInitial(allCountries));

// const sortByName = (el, el2) => {
//   if (el.name > el2.name) return 1;
//   if (el.name < el2.name) return -1;
//   return 0;
// };

// const sortByCapital = (el, el2) => {
//   let tempEl = el.capital;
//   let tempEl2 = el2.capital;
//   if (tempEl > tempEl2) return 1;
//   if (tempEl < tempEl2) return -1;
//   return 0;
// };

// const sortByPopulation = (el, el2) => {
//   let tempEl = el.population;
//   let tempEl2 = el2.population;
//   if (tempEl > tempEl2) return 1;
//   if (tempEl < tempEl2) return -1;
//   return 0;
// };

// const tab1 = countries_data.map((obj) => obj);
// const tab2 = countries_data.map((obj) => obj);
// const tab3 = countries_data.map((obj) => obj);
// //dunno why but Object.assign does not work properly :C

// console.log(tab1.sort(sortByName));
// console.log(tab2.sort(sortByCapital));
// console.log(tab3.sort(sortByPopulation));

//10 most spoken languages
//second try -> if does not work, use Set
const sortByCountDesc = (el1, el2) => {
  let count1 = el1.count;
  let count2 = el2.count;
  if (count1 > count2) return -1;
  if (count1 < count2) return 1;
  return 0;
};

function mostSpokenLanguages(arr, number) {
  //goal: create table of tuples: [language: number] by counting number of appearances in each table: 'languages' of each obj
  //iterating over countries
  var tempArr = []; //array of tuples
  for (const country of arr) {
    //iterating over languages in each tables
    // console.log(country);
    for (const la of country.languages) {
      // console.log(la);
      var obj = new Object();
      if (tempArr.length === 0) {
        // console.log("array is empty -> add first el");
        obj["country"] = la;
        obj["count"] = 1;
        tempArr.push(obj);
      } else {
        let flag = true;
        for (let el of tempArr) {
          //iterate over tempArr and find if particular language is already there
          if (el.country === la) {
            //if its there increment count and break the loop coz max 1 will be duplicated at a time
            el.count += 1;
            flag = false;
            break;
          }
        }
        //if nothing is duplicated -> add new element
        if (flag) {
          // console.log("adding new element");
          var obj2 = new Object();
          obj2["country"] = la;
          obj2["count"] = 1;
          tempArr.push(obj2);
        }
      }
    }
  }
  console.log(tempArr);
  return tempArr.sort(sortByCountDesc).slice(0, number);
}
console.log(mostSpokenLanguages(countries_data, 10));
console.log(mostSpokenLanguages(countries_data, 3));

// Use countries_data.js file create a function which create the ten most populated countries

const sortByPopulationDesc = (el, el2) => {
  let tempEl = el.population;
  let tempEl2 = el2.population;
  if (tempEl > tempEl2) return -1;
  if (tempEl < tempEl2) return 1;
  return 0;
};

function mostPopulatedCountries(countries, number) {
  const tab = countries.map((obj) => obj);
  tab.sort(sortByPopulationDesc);
  var tempArr = [];
  for (let i = 0; i < number; ++i) {
    var obj = new Object();
    obj["country"] = tab[i].name;
    obj["population"] = tab[i].population;
    tempArr.push(obj);
  }
  return tempArr;
}

console.log(mostPopulatedCountries(countries_data, 10));
console.log(mostPopulatedCountries(countries_data, 3));

const statistics = {
  ages: [
    31,
    26,
    34,
    37,
    27,
    26,
    32,
    32,
    26,
    27,
    27,
    24,
    32,
    33,
    27,
    25,
    26,
    38,
    37,
    31,
    34,
    24,
    33,
    29,
    26,
  ],
  count: function () {
    return this.ages.length;
  },
  sum: function () {
    return this.ages.reduce((acc, curr) => acc + curr, 0);
    // return Math.sum(ages);
  },
  min: function () {
    return Math.min(...this.ages);
  },
  max: function () {
    return Math.max(...this.ages);
  },
  range: function () {
    return this.max() - this.min();
  },
  mean: function () {
    return Math.round(this.sum() / this.count());
  },
  median: function () {
    let length = this.count();
    var tempTab = this.ages.sort();
    if (length % 2 == 0) {
      return (tempTab[length / 2 - 1] + tempTab[length / 2]) / 2;
    } else {
      return tempTab[Math.floor(this.count() / 2.0)];
    }
  },
  freq: function () {
    var arr = [];
    for (const el of this.ages) {
      var obj = new Object();
      if (arr.length === 0) {
        obj["value"] = el;
        obj["nrOfTimes"] = 1;
        arr.push(obj);
      } else {
        let flag = true;
        for (let nr of arr) {
          if (nr.value === el) {
            nr.nrOfTimes += 1;
            flag = false;
            break;
          }
        }
        if (flag) {
          var obj2 = new Object();
          obj2["value"] = el;
          obj2["nrOfTimes"] = 1;
          arr.push(obj2);
        }
      }
    }
    return arr;
  },

  mode: function () {
    function sortByNrDesc(a, b) {
      if (a.nrOfTimes > b.nrOfTimes) return -1;
      if (a.nrOfTimes < b.nrOfTimes) return 1;
      return 0;
    }
    var arr = this.freq();
    return arr.sort(sortByNrDesc)[0];
  },

  var: function () {
    let suma = 0;
    let mean = this.mean();
    for (const el of this.ages) {
      suma += Math.pow(el - mean, 2);
    }
    return (suma / this.count()).toFixed(1);
  },

  std: function () {
    return Math.sqrt(this.var()).toFixed(1);
  },

  freqDist: function () {
    var obj = this.freq();
    obj.sort(function(a, b){
      if(a.nrOfTimes > b.nrOfTimes) return -1;
      if(a.nrOfTimes < b.nrOfTimes) return 1;
      return 0;
    })
    var str = "[";
    let sum = this.count();
    for (const el of obj) {
      el.nrOfTimes = (el.nrOfTimes / sum) * 100;
      str += "(" + el.nrOfTimes + ", " + el.value + "), ";
    }
    str += "]";
    return str;
  },
};

console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.var()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.2
console.log("Variance: ", statistics.var()); // 17.5
console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

console.log(Math.min([1, 2, 3]));
console.log(Math.max([1, 2, 3]));
