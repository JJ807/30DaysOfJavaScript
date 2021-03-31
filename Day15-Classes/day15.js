//excercise lvl1 and lvl2

class Animal {
  constructor(name, age, color, legs, className = "Animal") {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.className = className;
  }

  set setName(newName) {
    this.name = newName;
  }

  move() {
    console.log(`${this.className} is moving by:`);
  }

  makeSound() {
    console.log(`${this.className} if interested, makes sound:`);
  }

  introduce() {
    console.log(`I am an object of the ${this.className} class, my name is ${this.name}, i am ${this.age} years old, ${this.color} is a color of mine and I have ${this.legs} legs.
        `);
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, sound) {
    super(name, age, color, legs, "Dog");
    this.sound = sound;
  }

  makeSound() {
    super.makeSound();
    console.log(this.sound);
  }

  move() {
    super.move();
    console.log("running");
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, sound) {
    super(name, age, color, legs, "Cat");
    this.sound = sound;
  }

  makeSound() {
    super.makeSound();
    console.log(this.sound);
  }

  move() {
    super.move();
    console.log("jumping");
  }
}

const animal = new Animal("default", 15, "black", 4, "Animal");
const dog = new Dog("sparky", 5, "brown", 4, "bark");
const cat = new Cat("kitty", 4, "white", 4, "meow");

console.group("Introduce");
animal.introduce();
animal.makeSound();
dog.introduce();
dog.makeSound();
cat.introduce();
cat.makeSound();
console.groupEnd();

console.group("After setting new name for a Dog object");
dog.setName = "reksio";
dog.introduce();
console.groupEnd();

//excercise lvl3

class Statistics {
  ages = [
    31,
    26,
    34,
    37,
    27,
    26,
    32,
    32,
    26,
    27,
    27,
    24,
    32,
    33,
    27,
    25,
    26,
    38,
    37,
    31,
    34,
    24,
    33,
    29,
    26,
  ];
  count() {
    return this.ages.length;
  }

  sum() {
    return this.ages.reduce((acc, curr) => acc + curr, 0);
    // return Math.sum(ages);
  }

  min() {
    return Math.min(...this.ages);
  }

  max() {
    return Math.max(...this.ages);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return Math.round(this.sum() / this.count());
  }

  median() {
    let length = this.count();
    var tempTab = this.ages.sort();
    if (length % 2 == 0) {
      return (tempTab[length / 2 - 1] + tempTab[length / 2]) / 2;
    } else {
      return tempTab[Math.floor(this.count() / 2.0)];
    }
  }

  freq() {
    var arr = [];
    for (const el of this.ages) {
      var obj = new Object();
      if (arr.length === 0) {
        obj["value"] = el;
        obj["nrOfTimes"] = 1;
        arr.push(obj);
      } else {
        let flag = true;
        for (let nr of arr) {
          if (nr.value === el) {
            nr.nrOfTimes += 1;
            flag = false;
            break;
          }
        }
        if (flag) {
          var obj2 = new Object();
          obj2["value"] = el;
          obj2["nrOfTimes"] = 1;
          arr.push(obj2);
        }
      }
    }
    return arr;
  }

  mode() {
    function sortByNrDesc(a, b) {
      if (a.nrOfTimes > b.nrOfTimes) return -1;
      if (a.nrOfTimes < b.nrOfTimes) return 1;
      return 0;
    }
    var arr = this.freq();
    return arr.sort(sortByNrDesc)[0];
  }

  variance() {
    let suma = 0;
    let mean = this.mean();
    for (const el of this.ages) {
      suma += Math.pow(el - mean, 2);
    }
    return (suma / this.count()).toFixed(1);
  }

  std() {
    return Math.sqrt(this.variance()).toFixed(1);
  }

  freqDist() {
    var obj = this.freq();
    obj.sort(function (a, b) {
      if (a.nrOfTimes > b.nrOfTimes) return -1;
      if (a.nrOfTimes < b.nrOfTimes) return 1;
      return 0;
    });
    var str = "[";
    let sum = this.count();
    for (const el of obj) {
      el.nrOfTimes = (el.nrOfTimes / sum) * 100;
      str += "(" + el.nrOfTimes + ", " + el.value + "), ";
    }
    str += "]";
    return str;
  }

   describe(){
    console.log('Count:', this.count()) // 25
    console.log('Sum: ', this.sum()) // 744
    console.log('Min: ', this.min()) // 24
    console.log('Max: ', this.max()) // 38
    console.log('Range: ', this.range()) // 14
    console.log('Mean: ', this.mean()) // 30
    console.log('Median: ',this.median()) // 29
    console.log('Mode: ', this.mode()) // {'mode': 26, 'count': 5}
    console.log('Variance: ', this.variance()) // 17.5
    console.log('Standard Deviation: ', this.std()) // 4.2
    console.log('Frequency Distribution: ', this.freqDist())
  }
}

const stat = new Statistics();
stat.describe();



