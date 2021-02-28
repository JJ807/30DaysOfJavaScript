for(let i=1; i<8; ++i){
  console.log('#'.repeat(i))
}

for(let i=0; i<11; ++i){
  console.log(`${i} * ${i} = ${i*i}`)
}

console.log("\Only prime numbers:")
//we are starting from 2 due to the def of prime number
function isPrime(n)
{
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
    return true;
}
for(let i=2; i<101; ++i){
  if(isPrime(i)){
    console.log(i)
  }
}

const arrRandom = []
for(let i=0; i<5; ++i){
  let rand = Math.random()
  arrRandom.push(rand)
  console.log(rand)
}

//random character ID of specific length
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log(makeid(6));

async function changeBGColor(id, color){
  document.getElementById(id).style.backgroundColor = color;
  await new Promise(r => setTimeout(r, 2000));
}

//hexadecimal number
var randomColor = Math.floor(Math.random()*16777215).toString(16);
console.log('#' + randomColor)
changeBGColor('btn', '#' + randomColor);


//rgb color number
var randRGB = 'rgb('
for(let i=0; i<3; ++i){
  if(i==2){
    randRGB += Math.round(Math.random()*256) + ')'
  }
  else {
    randRGB += Math.round(Math.random()*256) + ','
  }
  
}
console.log(randRGB)
changeBGColor('btn', randRGB);



//Excercise 3

//1 copying array
const arrCountries = []
for(let i=0; i<countries.length; ++i){
  arrCountries.push(countries[i])
  // console.log(arrCountries[i])
}
arrCountries[0] = "sth else"
console.log(arrCountries[0] + " vs " + countries[0])
arrCountries[0] = "Afghanistan"

//2 sorting array without changing OG
arrCountries.sort()
for(const country of arrCountries){
  console.log(country)
}
//3 dull
//4 extract all countries containing word 'land'
console.log("\n\n4:")
const tempArr = []
for(const con of arrCountries){
  if(con.includes('land')){
    tempArr.push(con)
    console.log(con)
  }
}
console.log(tempArr)

//5 Find the country containing the hightest number of characters in the countries array
console.log("\n\n5:")
let max = 0
let index = 0
for(let i=0; i<countries.length; ++i){
  if(max < countries[i].length){
    max = countries[i].length
    index = i
  }
}
console.log(`Number of chars: ${max} for country: ${countries[index]}`)
//6 Extract all the countries contain the word 'land' from the countries array and print it as array
//already done in 4.
//7 Extract all the countries containing only four characters from the countries array and print it as array
console.log("\n\n7:")
const arr7 = []
for(const con of arrCountries){
  if(con.length===4){
    arr7.push(con)
    // console.log(con)
  }
}
console.log(arr7)
//8 Extract all the countries containing two or more words from the countries array and print it as array
console.log("\n\n8:")
const arr8 = []
for(const con of arrCountries){
  if(con.includes(" ")){
    arr8.push(con)
    // console.log(con)
  }
}
console.log(arr8)
//9 Reverse the countries array and capitalize each country and stored it as an array
const arr9 = []
countries.reverse()
for(const con of countries){
  arr9.push(con.toUpperCase())
}
console.log(arr9)