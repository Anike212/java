 //This is my first JavaScript
// console.log("Hello World!");

// variable declaration
// let name='Anike';

// console.log(name);

//multiple variable first rule

// let firstName='Anike', lastName='Adeoye';
// console.log(firstName, lastName);

//multiple variable second rule

// let firstName='Anike';
let lastName='Adeoye';

// console.log(firstName, lastName);


//variables values can be changed

let interestRate=0.3;
interestRate=1;
console.log(interestRate);

//constant variables
//variables  cannot be changed
const interest=1
// interest=2; // this will throw an error
console.log(interest);

//primitives

let name = 'Anike'; //string literal
let age = 25; //number literal
let isApproved = false; //boolean literal
let firstName = undefined; //undefined literal
let selectedColor = null; //null literal

console.log(name, age, isApproved, firstName, selectedColor);

//objects
let person = {
    name: 'Anike',
    age: 25
};
console.log(person);

//dot notation

person.name = 'Bolu';
console.log(person.name);

//bracket notation

person['age'] = '30';
console.log(person['age']);

//arrays
// let selectedColors = ['red', 'blue'];
// console.log(selectedColors);

//arrays are objects
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
// console.log(selectedColors.length);