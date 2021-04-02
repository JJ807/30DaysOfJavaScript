//excercise 1
function outerFunc() {
  let count = 0;
  function innerFunc() {
    count++;
    return count;
  }
  return innerFunc;
}

const closure = outerFunc();

console.log(closure());
console.log(closure());
console.log(closure());

//excercise 2
function threeInnerFunc() {
  function first() {
    return "First";
  }
  function second() {
    return "Second";
  }
  function third() {
    return "Third";
  }

  return {
    first: first(),
    second: second(),
    third: third(),
  };
}

const funcObj = threeInnerFunc();
console.log(funcObj.first);
console.log(funcObj.second);
console.log(funcObj.third);

//excercise 3
function personAccount() {
  let firstName = "Jay",
    lastName = "Jay",
    incomes = [1, 2, 3, 4],
    expenses = [1, 2, 4, 5],
    totalInc,
    totalExp,
    balance;

  function sumUp(tab) {
    let suma = 0;
    tab.forEach((element) => {
      suma += element;
    });
    // console.log(`Suma: ${suma}`);
    return suma;
  }

  function totalIncome() {
    totalInc = sumUp(incomes);
    return totalInc;
  }

  function totalExpense() {
    totalExp = sumUp(expenses);
    return totalExp;
  }

  function accountBalance() {
    let inc = totalIncome();
    let exp = totalExpense();
    balance = inc - exp
    return balance;
  }

  function addIncome(val) {
    incomes.push(val);
  }

  function addExpense(val) {
    expenses.push(val);
  }

  function accountInfo() {
    return `<Account Info>\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nIncome: ${totalInc}\nExpense: ${totalExp}\nAccount Balance: ${balance}. `;
  }

  return {
    firstName: firstName,
    lastName: lastName,
    incomes: incomes,
    expenses: expenses,
    totalIncome: totalIncome(),
    totalExpense: totalExpense(),
    accountBalance: accountBalance(),
    accountInfo: accountInfo(),
  };
}
const funcObj2 = personAccount();
console.log(funcObj2.accountInfo);

