const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

const set = new Set(a);
const set2 = new Set(b);
const countriesSet = new Set(countries);

const newSet = new Set();
for (let i = 0; i <= 10; ++i) {
  newSet.add(i);
}
console.log(newSet);

//removing element
newSet.delete(4);

console.log(newSet);

//clearing set
newSet.clear();
console.log(newSet);

const arr = ["first", "second", "third", "fourth", "fifth"];
const stringSet = new Set(arr);
console.log(stringSet);

const countriesMap = new Map();
for (let i = 0; i < countries.length; ++i) {
  countriesMap.set(countries[i], i);
}
console.log(countriesMap);

const aunionb = [...a, ...b];
const aunionbSet = new Set(aunionb);
console.log(aunionbSet);

const aSet = new Set(a);
const bSet = new Set(b);
const aintersectionb = a.filter((el) => bSet.has(el));
console.log(aintersectionb);

const aSet2 = new Set(a);
const bSet2 = new Set(b);
const adiffb = a.filter((el) => !bSet2.has(el));
console.log(adiffb);

//Excercise 3
const langSet = new Set();
for (obj of countries_data) {
  for (lang of obj.languages) {
    langSet.add(lang);
  }
}
console.log(langSet);
console.log("Number of languages: " + langSet.size);

const sortByPopularity = (el, el2) => {
  let el1count = el.count;
  let el2count = el2.count;
  if (el1count > el2count) return -1;
  if (el1count < el2count) return 1;
  return 0;
};

const mostSpokenLanguages = (countries, number) => {
  //counting repetition of languages
  const counts = [];
  const langSet = new Set();
  for (obj of countries) {
    for (lang of obj.languages) {
      langSet.add(lang);
    }
  }

  for (el of langSet) {
    var counter = 0;
    for (obj of countries_data) {
      for (lang of obj.languages) {
        if (el === lang) {
          // console.log(el + " === " + lang);
          counter++;
        }
      }
    }
    counts.push({ lang: el, count: counter });
  }
  return counts.sort(sortByPopularity).slice(0, number);

};

console.log(mostSpokenLanguages(countries_data, 10));
console.log(mostSpokenLanguages(countries_data, 3));
