/*//scope.js
a = 'JavaScript' // is a window scope this found anywhere
b = 10 // this is a window scope variable
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible */

console.log("Local scope:");
//scope.js
let a = "JavaScript"; // is a global scope it will be found anywhere in this file
let b = 10; // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  let c = 30;
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a = "Python";
    let b = 20;
    let d = 40;
    console.log(a, b, c); // Python 20 30
  }
  console.log(a, b, c); // JavaScript 10 30
  //tutaj mozemy dostac sie do c bo jest wciaz wewnatrz tego samego bloku {}
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accessible

// var ma zasieg funkcji, let i const tylko wewnatrz bloku czyli {}
for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3

const myFunc = (arg) => {
  var arg = "cos do wypisania";
  // console.log(arg) // oczywiste
};
// console.log(arg) //arg is not defined!

let zm;
var zm2;
console.log(zm, zm2); //undefined undefined

//Excercise lvl1
console.log("\nExcercise lvl1:\n");
const dog = {};
console.log(dog); //{}
dog.name = "Sparky";
dog.age = "5";
dog.legs = "4";
dog.bark = function () {
  console.log("woof woof");
};
console.log(Object.values(dog)); //(4) ["Sparky", "5", "4", ƒ]
dog.breed = "cocker spaniel";
dog.getDogInfo = function () {
  console.log(Object.entries(dog));
};
dog.bark();
dog.getDogInfo();
//Excercise lvl2
console.log("\nExcercise lvl2:\n");

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

function findPersonWithManySkills(users) {
  let arr = [];
  let names = Object.keys(users);
  for (const key of names) {
    let arrOfLanguages = users[key].skills;
    console.log(arrOfLanguages + " ,length: " + arrOfLanguages.length);
    if (arrOfLanguages.length >= 2) {
      arr.push(key);
    }
  }
  return arr;
}

(function (users) {
  const find = findPersonWithManySkills(users);
  if (find.length === Object.keys(users).length) {
    console.log("All users have many skills. (Good for them)");
  }
})(users);
//number of logged in users and users having greater than euqal to 50 points
(function (users) {
  let loggedInUsers = 0;
  let usersWithMoreThan50Pts = 0;
  for (const key of Object.keys(users)) {
    if (users[key].isLoggedIn) {
      loggedInUsers++;
    }
    if (users[key].points >= 50) {
      usersWithMoreThan50Pts++;
    }
  }
  console.log(
    `Number of logged in users: ${loggedInUsers}\nNumber of user having more than 50pts: ${usersWithMoreThan50Pts}`
  );
})(users);

//Find people who are MERN stack developer from the users object
(function (users) {
  console.log("\nPeople who are MERN stack developers:");
  for (const key of Object.keys(users)) {
    let temp = users[key].skills; //array of languages
    if (
      temp.includes("MongoDB") &&
      temp.includes("Express") &&
      temp.includes("React") &&
      temp.includes("Node")
    ) {
      console.log(key);
    }
  }
})(users);

const myObj = Object.assign(users);
myObj.Jakub = {
  email: "somemail",
  etc: "other values..",
};
console.log(myObj);
console.log(myObj.hasOwnProperty("Jakub"));
console.log(myObj.Jakub);

