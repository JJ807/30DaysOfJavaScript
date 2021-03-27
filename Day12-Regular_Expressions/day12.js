//Excercise lvl1
let pattern = /\d+/g;
let string =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let table_of_matches = string.match(pattern);
console.log(
  "Annual salary: ",
  Number(table_of_matches[0] * 12) +
    Number(table_of_matches[1]) +
    Number(table_of_matches[2] * 12)
);

let points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
let tempTab = [...points];
tempTab = tempTab.map((x) => +x);
console.log("Before sort: ", tempTab);

// const desc = (x, x2) => {
//     if(x > x2) return 1;
//     if(x<x2) return -1;
//     else return 0;
// }
console.log(
  "After sort: ",
  tempTab.sort(function (a, b) {
    return a - b;
  })
);

function is_valid_variable(string) {
  let pat = /^[0-9]|\-+/g;
  console.log(!pat.test(string));
}

is_valid_variable("first_name"); //true
is_valid_variable("first-name"); //false
is_valid_variable("1first_name"); //false
is_valid_variable("firstname"); //true

//excercise lvl2
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

const MostFrequentWords = (string, number = 0) => {
  string = string.replace(/\./g, "");
  console.log(string);
  let tab = new Set(string.split(" "));
  let tabOfObjs = [];
  for (const el of tab) {
    let obj = new Object();
    obj.word = el;
    obj.count = string.match(new RegExp(`\\b${el}\\b`, "gi")).length;
    tabOfObjs.push(obj);
  }
  tabOfObjs.sort(function (a, b) {
    return b.count - a.count;
  });
  if (number !== 0) {
    return tabOfObjs.splice(0, number); //number+1
  } else return tabOfObjs;
};

console.log(MostFrequentWords(paragraph));
console.log(MostFrequentWords(paragraph, 10))

//excercise lvl3
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log("Sentence before cleaning: ", sentence);
sentence = sentence.replace(/[^\w\s]/gi, '');   //replaces everything that is one-word character (\w) leaving whitespace characters

console.log("Sentence after cleaning: ", sentence);

//finding 3 most frequent words:
console.log(MostFrequentWords(sentence,3));