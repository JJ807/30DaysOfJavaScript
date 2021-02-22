//Excercises lvl 1
// let number = prompt('Enter number', 'number goes here')
// console.log(number)
let firstName, lastName, country, city, age, isMarried, year;
firstName = "aa";
lastName = "bb";
country = "cc";
city = "dd";
age = 21;
isMarried = true;
year = 2021;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof age,
  typeof isMarried,
  typeof city,
  typeof year
);
console.log(typeof "10" == typeof 10);
console.log(typeof "10" == 10);
console.log(typeof "10" === typeof 10);
console.log(typeof "10" === 10);
console.log(parseInt("10.1") == 10);
//3 truthy values
let truth = new Boolean("string");
let truth2 = new Boolean(3);
let truth3 = true;
console.log(truth2 == truth3, truth == truth3);
//3 falsy values
let false1 = false;
let false2 = 0;
let false3 = 0n;
console.log(false1 == false2, false1 == false3);
//figuring out
//T, T, F, F, T, T, F, F, T, T, F
//actually: T, T, F, F, T, T, F, F, !!! F, T, F
console.log(
  4 > 3,
  4 >= 3,
  4 < 3,
  4 <= 3,
  4 == 4,
  4 === 4,
  4 != 4,
  4 !== 4,
  4 != "4",
  4 == "4",
  4 === "4"
);

console.log("python".length !== "jargon".length);
console.log("python".length != "jargon".length);

//figuring out p2
console.log("figuring out p2");
// T, F, T, T, F, T, T, F, T, T,
// results: OK!
console.log(
  4 > 3 && 10 < 12,
  4 > 3 && 10 > 12,
  4 > 3 || 10 < 12,
  4 > 3 || 10 > 12,
  !(4 > 3),
  !(4 < 3),
  !false,
  !(4 > 3 && 10 < 12),
  !(4 > 3 && 10 > 12),
  !(4 === "4")
);
console.log(!("python".includes("on") && "dragon".includes("on")));

const today = new Date();
console.log("year:", today.getFullYear());
console.log("month:", today.getMonth());
console.log("date:", today.getDate());
console.log("day:", today.getDay());
console.log("hours:", today.getHours());
console.log("minutes:", today.getMinutes());
const later = new Date();
console.log(
  "number of seconds elapsed from January 1, 1970: ",
  Date.now(),
  " or ",
  later.getTime()
);
//Excercises lvl 2
//1
// let base = prompt("Enter base:");
// console.log("Enter base:", base);
// let height = prompt("Enter height:");
// console.log("Enter height:", height);
// console.log("The area of the triangle is: ", 0.5 * base * height);

//2
// let Ta = Number(prompt("Enter side A:"));
// console.log("Enter side A:", Ta);
// let Tb = Number(prompt("Enter side B:"));
// console.log("Enter side B:", Tb);
// let Tc = Number(prompt("Enter side C:"));
// console.log("Enter side C:", Tc);
// console.log("The perimeter of the triangle is: ", Ta + Tb + Tc);

//3, 4, 5 by analogy
//calculating slope
function calculate_slope(x1, y1, x2, y2) {
    var m = (y2-y1)/(x2-x1);
    return m;
}
console.log('First slope: m = 2, second slope: m =', calculate_slope(2,2,6,10))
console.log(2 == calculate_slope(2,2,6,10))

function quadratic_equation(a, b, c){
    let delta = b**2 - 4*a*c;
    if(delta == 0){
        let x0 = -b/(2*a);
        console.log('There is one zero of y=',a,'*x^2 + ',b,'*x + ',c,' and it equals: ',x0)
    }
    else {
        let deltaSqrt = Math.sqrt(delta);
    let x1 = (-b - deltaSqrt)/ 2*a;
    let x2 = (deltaSqrt - b)/2*a;
    console.log('Zeros of y=',a,'*x^2 + ',b,'*x + ',c,' are: ',x1,', ',x2)
    }
}
quadratic_equation(1,6,9);
// if(prompt('Enter your name:').length > 7){
//     console.log('Your name is long')
// }else {
//     console.log('Your name is short')
// }
console.log(new Date().getFullYear())

//Excercise lvl 3
const time = new Date()
let years = time.getFullYear()
let month = time.getMonth() + 1
let day = time.getDate()
let hour = time.getHours()
let minute = time.getMinutes()

// hour = '8'
// minute = '5'

/**
 * Counts number of digits of hours or minutes 
 */
function getLength(number) {
    return number.toString().length;
}

if(getLength(hour) != 2 || getLength(minute) != 2)
{
    if(getLength(minute) != 2 && getLength(hour) != 2)
    {
        console.log('What is the time? -> ', `${years}-${month}-${day} 0${hour}:0${minute}`)
    }
    else if(getLength(minute) != 2) 
    {
        console.log('What is the time? -> ', `${years}-${month}-${day} ${hour}:0${minute}`)
    }
    else if(getLength(hour) != 2)
    {
    console.log('What is the time? -> ', `${years}-${month}-${day} 0${hour}:${minute}`)
    }
}
else console.log('What is the time? -> ', `${years}-${month}-${day} ${hour}:${minute}`)