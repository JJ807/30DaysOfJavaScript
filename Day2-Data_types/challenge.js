//Excercise 1
console.log("Excercise 1")
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log('length: ',challenge.length )
console.log('toUpperCase: ', challenge.toUpperCase())
console.log('toLowerCase: ', challenge.toLowerCase())
console.log('substr: ', challenge.substr(0,2))
console.log('substring: ', challenge.substring(0,3))
console.log('Days: ', challenge.substr(challenge.indexOf('Days'), 4))
let indexOfDays = challenge.indexOf('Days')
console.log('Days: ', challenge.substring(indexOfDays, indexOfDays + 4))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
let arr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',')
console.log(arr)
console.log(arr[0])
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.indexOf('J')))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let newSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(newSentence.indexOf('because'))
//18
console.log(newSentence.lastIndexOf('because'))
console.log(newSentence.search('because'))
let trimSen = ' 30 Days Of JavaScript '
console.log(trimSen.trim())
console.log(challenge.startsWith('3'))
console.log(challenge.endsWith('t'))
console.log(challenge.match(/a/gi))
let temp = ""
console.log(temp.concat( '30 Days of', 'JavaScript'))
console.log(challenge.repeat(2))

//Excercise 2
console.log("\nExcercise 2")
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
console.log(typeof '10' === 10 ) //false
console.log(typeof '10' === typeof String(10)) //true
console.log(parseFloat('9.8') == 10) //false
console.log(Math.round(parseFloat('9.8')) == 10) //true
console.log('python'.includes('on'))
console.log('jargon'.includes('on'))
let senToFindIn = 'I hope this course is not full of jargon'
console.log(senToFindIn.includes('jargon'))
console.log(Math.round(Math.random() * 100))
console.log(Math.round(50 + Math.random()*50))
do {
    var nr = Math.round(Math.random()*255)
}
while(nr != 0)
console.log("Wylosowalem: ", nr, " Wreeeszcie")
console.log(Math.round(Math.random()*255))
let javaScript = 'JavaScript'
console.log("Random number access w napisie: ",javaScript," -> ",  javaScript.charAt(Math.round(Math.random()*javaScript.length)))
let pattern = `1 1 1 1 1 \n\
2 1 2 4 8 \n\
3 1 3 9 27 \ 
4 1 4 16 64 \n\
5 1 5 25 125 `
console.log(pattern)
console.log(newSentence.substr(newSentence.search('because'),23))
console.log(newSentence.replaceAll(' because','')) //extra
//Excercise 3
console.log('\nExcercise 3')
console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.length)
console.log(newSentence.match(/because/gi).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log("Cleaning:")
let sentence2 = sentence.replace(/%|\$|#|&|;|@/gi, '')
console.log(sentence2)
console.log("Counting...")
let arrayOfWords = sentence2.split(' ')
console.log(arrayOfWords)
let arrLength = arrayOfWords.length
let count = [arrLength]

for(let i=0; i<arrLength; ++i){
    count[i] = 1
    for(let j=0; j<arrLength; ++j){
        if(i!=j && arrayOfWords[i] == arrayOfWords[j]){
            count[i] = count[i] + 1
        }
    }
    console.log('Word: ', arrayOfWords[i], count[i])
}
console.log(count)
let txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
var arr2 = txt.match(/\d+/g)
console.log(arr2)
let annualSalary = parseInt(arr2[0])*12 + parseInt(arr2[1]) + parseInt(arr2[2])*12
console.log("Annual income: " , arr2[0], "*12 + ", arr2[1], "+ ", arr2[2], "*12 = ", annualSalary )