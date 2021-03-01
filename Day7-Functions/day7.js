(function (n) {
  console.log(n);
})(5);

const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};
anonymousFun();

//Excercise lvl1
//15
function findMax(arg1, arg2, arg3) {
  if (arg1 > arg2 && arg1 > arg3) {
    return arg1;
  } else if (arg2 > arg1 && arg2 > arg3) {
    return arg2;
  } else return arg3;
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

//Excercise lvl2
function solveQuadratic(a = 0, b = 0, c = 0) {
  let delta = Math.pow(b, 2) - 4 * a * c;
  if (delta === 0) {
    if (a !== 0) {
      return `{${-b / (2 * a)}}`;
    } else return `{0}`;
  } else if (delta > 0) {
    let x1 = ((-b - Math.sqrt(delta)) / 2) * a;
    let x2 = ((-b + Math.sqrt(delta)) / 2) * a;
    return `{${x1} , ${x2}}`;
  } else {
    console.log("Delta < 0 -> lack of real zero points");
  }
}

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

const showDateTime = () => {
  var obj = new Date();
  console.log(
    `${obj.getDay()}/${
      obj.getMonth() + 1
    }/${obj.getFullYear()} ${obj.getHours()}:${obj.getMinutes()}`
  );
};
showDateTime();

const swapValues = (x, y) => {
  let temp = x;
  x = y;
  y = temp;
  console.log("x =", x, ", y =", y);
};

swapValues(3, 4); // x => 4, y=>3
swapValues(4, 5); // x = 5, y = 4

//6 reverseArray
const reverseArray = (arr) => {
  // return arr.reverse(); //too simple
  var reversedArr = [];
  for (let i = arr.length - 1; i >= 0; --i) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]

//14
const sum = (...args) => {
  let sum = 0;
  for (const el of args) {
    sum += el;
  }
  console.log(sum);
};
sum();
sum(1, 2, 3); // -> 6
sum(1, 2, 3, 4); // -> 10

const randomUserIp = () => {
  var ip =
    Math.floor(Math.random() * 255) +
    1 +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255);
  console.log(ip);
};

randomUserIp();

const randomMacAddress = () => {
  var scheme = "XX:XX:XX:XX:XX:XX";
  scheme = scheme.replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
  return scheme;
};

console.log(randomMacAddress());

function randomHexaNumberGenerator() {
  //hexadecimal number
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   console.log("#" + randomColor);
  return "#" + randomColor;
}

console.log(randomHexaNumberGenerator());

//random character ID of specific length
function makeid(length = 7) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log(makeid());

//Excercise lvl3
//random charactenumber of IDs of specific length
function makeIdNew(length = 7, numberOfIds = 5) {
  var arr = "";
  for (let j = 0; j < numberOfIds; ++j) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    arr = arr.concat(result + "\n");
  }
  console.log(arr);
}

makeIdNew();

//2
console.log("random rgb generator:");
function randomRGBGenerator() {
  //rgb color number
  var randRGB = "rgb(";
  for (let i = 0; i < 3; ++i) {
    if (i == 2) {
      randRGB += Math.round(Math.random() * 256) + ")";
    } else {
      randRGB += Math.round(Math.random() * 256) + ",";
    }
  }
  return randRGB;
}
console.log(randomRGBGenerator());

function convertHexaToRGB(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function convertRGBToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function generateColors(name = "rgb", number = 1) {
  var arr = [];
  if (name === "rgb") {
    for (let i = 0; i < number; ++i) {
      arr.push(randomRGBGenerator());
    }
  } else {
    for (let i = 0; i < number; ++i) {
      arr.push(randomHexaNumberGenerator());
    }
  }
  return arr;
}

console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'

//Shuffles array in place.
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, null];
console.log(shuffle(array));

//checking if prime
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) if (n % i == 0) return false;
  return true;
}

//checking unique values
//v1
function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}
console.log("hasDuplicates v1: ", hasDuplicates(array));
//v2
function hasDuplicates(array) {
  let flag = false; //proper result of checking
  let flag2 = false; //only for outer loop
  for (let i = 0; i < array.length; ++i) {
    if (flag2) {
      break;
    }
    for (let j = 0; j < array.length; ++j) {
      if (array[i] === array[j]) {
        flag = true;
        flag2 = true; //break outer loop
        break;
      }
    }
  }
  return flag;
}
console.log("hasDuplicates v2: ", hasDuplicates(array));

function hasSameDataType(array) {
  let flag = true; //proper result of checking
  let flag2 = true; //only for outer loop
  for (let i = 0; i < array.length; ++i) {
    if (!flag2) {
      break;
    }
    for (let j = 0; j < array.length; ++j) {
      if (typeof array[i] !== typeof array[j]) {
        flag = false;
        flag2 = false; //break outer loop
        break;
      }
    }
  }
  return flag;
}
console.log("hasSameDataType: ", hasSameDataType(array));

function isValidVariable(varName) {
  if (varName.match(/^\d+/) || varName.match(/[.*+?^{}()|[\]\\]/g)) {
    // console.log("Not a valid variable name.")
    return false;
  } else {
    // console.log("Valid variable name")
    return true;
  }
}

console.log(isValidVariable("1234aab")); //false
console.log(isValidVariable("1aab")); //false
console.log(isValidVariable("$ok")); //true
console.log(isValidVariable("_ok")); //true
console.log(isValidVariable("abc")); //true
