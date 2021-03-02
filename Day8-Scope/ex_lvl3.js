//Excercise lvl3
console.log("\nExcercise lvl3:\n");
const personAccount = {
  firstName: "",
  lastName: "",
  incomes: "",
  expenses: "",
  totalIncome: function () {},
  addInfo: function () {},
  addExpense: function () {},
  accountBalance: function () {},
};

//random character ID of specific length
function makeid(length = 6) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const makeNewDate = () => {
  var obj = new Date();
  let hours = obj.getHours();
  let date = `${obj.getDay()}/${
    obj.getMonth() + 1
  }/${obj.getFullYear()} ${obj.getHours()}:${obj.getMinutes()}`;
  if (hours > 12) {
    date += " PM";
  } else {
    date += " AM";
  }
  return date;
};

function signUp() {
  console.log("wchodze do funkcji signUp");
  //iterating over objects in an array users
  let uname = document.getElementById("uname").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let flag = false; //lack of such a username
  console.log("Sprawdzam w petli czy takie imiona istnieja.");
  for (const el of users2) {
    console.log("el.username: ", el.username, ", uname: ", uname);
    if (el.username === uname) {
      console.log("Wchodze do ifa w petli.");
      console.log("el.username: ", el.username, ", uname: ", uname);
      flag = true;
    }
  }
  if (flag) {
    console.log("Flaga ustawiona -> alert!");
    alert("Such user already exists!");
    return false;
  } else {
    console.log("Flaga nieustawiona -> dodanie uzytkownika.");
    const newUser = {
      _id: makeid(),
      username: uname,
      email: email,
      password: pass,
      createdAt: makeNewDate(),
      isLoggedIn: false,
    };
    users2.push(newUser);
    console.log(users2);
    return false;
  }
}

let tempUser = function signIn() {
  console.log("wchodze do funkcji signIn");
  //iterating over objects in an array users
  let uname = document.getElementById("uname").value;
  let pass = document.getElementById("pass").value;
  console.log("Sprawdzam w petli czy taka nazwa i haslo istnieja.");
  for (const el of users2) {
    if (el.username === uname && el.password === pass) {
      flag = true;
      tempUser = el;
    } else {
      flag = false;
    }
  }
  if (flag) {
    alert("User logged in.");
  } else {
    alert("Wrong name or pass.");
  }
};

function rateProduct(products) {
  let randrate = Math.floor(Math.random() * 6);
  products[1].ratings.push({ userId: tempUser._id, rate: randrate });
}

function averageRating(products) {
  let sum = 0;
  let num = 0;
  for (const obj of products) {
    for (let i = 0; i < obj.ratings.length; ++i) {
      if (obj.ratings[i].rate != null) {
        console.log(obj.ratings[i].rate);
        sum += obj.ratings[i].rate;
        num += 1;
      }
    }
  }
  console.log("sum: ", sum);
  console.log("num:", num);
  return (sum / num).toFixed(2);
}
rateProduct(products);
console.log("average: ", averageRating(products));

function countLikes(products) {
  let sumOfLikes = 0;
  for (const obj of products) {
    sumOfLikes += obj.likes.length;
  }

  return sumOfLikes;
}

//not exactly what it was meant to do but works
//all that is to change is to specify which product should be liked
function likeAllProducts(products) {
  console.log("before:\n", products);
  console.log("sum of likes: ", countLikes(products), ",number of products: 3")
  for (const obj of products) {
    if (obj.likes.length === 0) {
      console.log("zero likes -> give a like");
      obj.likes.push("someonesID");
    } else {
      obj.likes = obj.likes.splice(0, obj.likes.length - 1);
    }
  }
  console.log("after:\n", products);
  console.log("sum of likes: ", countLikes(products), ",number of products: 3")
}

likeAllProducts(products);
