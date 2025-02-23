// Destructuring of Array AND spread Operator

const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const result4 = document.getElementById("result4");
const result5 = document.getElementById("result5");

var alphabet = ["A", "B", "C", "D", "E"];
var numbers = [1, 2, 3, 4, 5, 6];

const [a, b] = alphabet;
result1.innerText = a + "_" + b;

const [c, , e] = alphabet; // empty followed by coma to skip the d
result2.innerText = c + " " + e;

const [f, g, ...rest] = alphabet;
result3.innerText = rest;

// concatinate the two arrays
// similar way is to use cancat

// const newArray = alphabet.concat(numbers);

const newArray = [...alphabet, ...numbers];
result4.innerText = newArray;

// returns array
let sumAndMultiply = (a, b) => [a + b, a * b, a / b];
const [sum, multiply, division = "none"] = sumAndMultiply(20, 10);
//console.log(output);
result5.innerText =
  "sum: " + sum + " and multiple: " + multiply + " and division: " + division;

// Destructuring of Object AND spread Operator
const resultA = document.getElementById("resultA");
const resultB = document.getElementById("resultB");
const resultC = document.getElementById("resultC");
const resultD = document.getElementById("resultD");

const personone = {
  name: "Anything",
  age: 20,
  favFood: "water",
  address: {
    city: "Somewhere on Earth",
    state: "Here",
  },
};
const persontwo = {
  name: "Something",
  age: 50,
  favFood: "air",
  address: {
    city: "Somewhere on Mars",
    state: "There",
  },
  status: "single",
  gender: "male",
};

const { name: firstName = "nothing", age = 30 } = personone;
resultA.innerText = "Name: " + firstName + " and Age: " + age;

const { name: firstNameAgain, ...others } = persontwo;
console.log(others);
resultB.innerText =
  "Age: " +
  others.age +
  " and favoriteFood: " +
  others.favFood +
  " and city: " +
  others.address.city +
  " and state: " +
  others.address.state;

const {
  name: firstNameOnceAgain,
  address: { city: desh },
} = persontwo;

resultC.innerText = desh;

const personthree = { ...personone, ...persontwo };

console.log(personthree);

let printuser = ({ name, age, favFood = "rice" }) =>
  `Name is: ${name},  Age is ${age}, Favorite food is ${favFood}`;

let output2 = printuser(personthree);
console.log(output2);
resultD.innerText = output2;
