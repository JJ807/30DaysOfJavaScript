const obj = {
    firstName: 'Jay',
    lastName: 'Jay',
    age: 21,
    country: 'Poland',
    city: 'Cracow'
}
//excercise lvl1
localStorage.setItem('info', JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem('info')));

//excercise lvl2

const obj = {
    firstName: 'Jay',
    lastName: 'Jay',
    age: 21,
    skills: ['Core Java', 'JavaScript', 'Linux'],
    country: 'Poland',
    city: 'Cracow'
}

localStorage.setItem('info', JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem('info')));


