const arr = [6];
arr.fill("X");
console.log(arr);
const arrTheSame = Array(6);
arrTheSame.fill(0);
console.log(arrTheSame);
const arr2 = Array(3);
arr2[0] = "pierwszy";
arr2[1] = "drugi";
arr2[2] = "trzeci";
console.log(arr2);
console.log(arr2[0]); //pierwszy
console.log(arr2[Math.floor(arr2.length / 2)]); //srodkowy
console.log(arr2[arr2.length - 1]); //ostatni

var companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
var companiesLower = new Array(companies.length);
for (let i = 0; i < companies.length; ++i) {
  companiesLower[i] = companies[i].toLowerCase();
}
// let search = prompt("Write a company name:");
// console.log(search);
// if (companiesLower.includes(search.toLowerCase())) {
//   console.log("Returning: ", search);
// } else {
//   console.log(search, "is not found");
// }

console.log("Tablica przed zmianami:\n", companiesLower);
var tabLen = companiesLower.length;
console.log("tabLen: ", tabLen);
for (var j = 0; j < tabLen; j++) {
  if (companiesLower[j] != undefined) {
    console.log(companiesLower[j]);
    var tab = companiesLower[j].match(/o/gi);
    console.log(tab);
  }

  if (tab != null && tab.length >= 2) {
    companiesLower.splice(companiesLower.indexOf(companiesLower[j]), 1);
  }
}
console.log("Tablica po zmianach:\n", companiesLower);

console.log(countries[0]);
console.log(webTechs[0]);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text);
const words = text.replace(/[.,]/g, "").split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (shoppingCart[0] != "Meat") shoppingCart.unshift("Meat");
shoppingCart.push("Meat");
shoppingCart.unshift("Sugar");
console.log(shoppingCart);
let allergic = true;
if (allergic) shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

console.log(countries);
let ethiopia = "Ethiopia";
if (countries.includes(ethiopia)) {
  console.log("ETHIOPIA");
} else {
  countries.push(ethiopia);
}
console.log(countries);

console.log(webTechs);
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else webTechs.push("Sass");
console.log(webTechs);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

console.log("\n\nAges:");
const ages = [19, 22, 19, 24, 20, 27, 26, 24, 25, 24, 26];
ages.sort();
console.log(ages);
console.log("Min: ", ages[0], "\nMax: ", ages[ages.length - 1]);
console.log("Median: ");
let agesLen = ages.length;
if (agesLen % 2 == 0) {
  console.log(ages[Math.round((agesLen / 2 - 1 + agesLen / 2 + 1) / 2)]);
} else {
  console.log(ages[Math.round(agesLen / 2)]);
}
let av = average(ages);
console.log("Average: ", av);

function average(arr) {
  let sum = 0;
  let len = arr.length;
  for (let i = 0; i < len; ++i) {
    sum += arr[i];
  }
  return Math.round((sum / len) * 100) / 100;
}

console.log("Range: ", ages[agesLen - 1] - ages[0]);
console.log(Math.abs(ages[0] - av) > Math.abs(ages[agesLen - 1] - av));
console.log(countries);
console.log("First 10 countries: ", countries.slice(0, 10));
// console.log(countries)
console.log(countries[Math.round(countries.length / 2) - 1]);
let countriesLength = countries.length;
if (countriesLength % 2 == 0) {
  var firstHalf = countries.slice(0, countriesLength / 2);
  var secondHalf = countries.slice(countriesLength / 2, countriesLength);
} else {
  var firstHalf = countries.slice(0, Math.round(countriesLength / 2));
  var secondHalf = countries.slice(Math.round(countriesLength / 2));
}
console.log("cala tablica:");
console.log(countries);
console.log("firsthalf: ", firstHalf);
console.log("secondHalf: ", secondHalf);
