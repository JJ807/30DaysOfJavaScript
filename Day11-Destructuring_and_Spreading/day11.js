const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//excercise lvl1
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(waterBoilingTemp);

let [fin, est, sw, den, nor] = countries;
console.log(nor);

let { width, height, area, perimeter: per } = rectangle;

console.log(per);

//excercise lvl2

for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

for (const { name, skills } of users) {
  if (skills.length < 2) {
    console.log(
      `Person with less than 2 skills: ${name}, number of skills: ${skills.length}`
    );
  }
}

//excercise lvl3
//1.
console.log("\nExcercise lvl3:\n1:\n");
for (const { name, capital, population, languages } of countries_data) {
  console.log(
    `Country's name: ${name}, capital: ${capital}, population: ${population}, languages: ${languages}`
  );
}

//2.
console.log("\n2:\n");
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
// let [name, skills, jsScore = student[2][2], reactScore = student[2][3] ] = student;
// console.log(name, skills, jsScore, reactScore);

let [name, skills, jsScore, reactScore] = [
  student[0],
  student[1],
  student[2][2],
  student[2][3],
];
console.log(name, skills, jsScore, reactScore);

//3
console.log("\n3:\n");
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(arr) {
  let tempArr = [];
  for (const [el, el2, el3] of arr) {
    // console.log(el, el2, el3)
    tempArr.push({ name: el, skills: el2, scores: el3 });
  }
  return tempArr;
}

console.log(convertArrayToObject(students));

//4
console.log("\n4:\n");
const student2 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

console.log("Stary student: ", student2);
// const newStudent = Object.assign({}, student2); // only for shallow copy
// const newStudent = {...student2}; // only for shallow copy

const newStudent = JSON.parse(JSON.stringify(student2)); //deep copy, finally!!!
newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
newStudent.skills.dataScience.push("SQL");
console.log("Nowy student: ", newStudent);
console.log(student2 === newStudent);
