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

//functions
// function greet(name) {
//     console.log('Hello ' + name);
// }
// greet('Anike');

//function with return value
function greet(name, lastName) {
    console.log( 'Hello ' + name + ' ' + lastName);
}

greet('Anike', 'Adeoye');

//function with return value

function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);

//function with return value example2

function square(number) {   
    return number * number;
}

console.log(square(2));

//operators
// arithmetic operators

let x = 10;
let y = 3;

console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // remainder
console.log(x ** y); // exponentiation

//increment and decrement operators
let a = 10;
console.log(a++); // post-increment
console.log(a);
console.log(++a); // pre-increment
console.log(a--); // post-decrement
console.log(a);
console.log(--a); // pre-decrement

//assignment operators
let b = 10; 
b += 5; // b = b + 5

console.log(b); // 15

// comparison operators
let c = 1;
console.log(c>0);
console.log(c<1);
console.log(c>=1);
console.log(c<=1);//relational operators

//comparison equality operators
console.log(c===1); // strict equality
console.log(c==1); // loose equality
console.log(c!==1); // strict inequality
console.log(c!=1); // loose inequality


//ternary or conditional operators
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//example2 of ternary operators
let point = 90;
let types = point > 100 ? 'gold' : 'silver';
console.log(types);

//logical operators
 
//logical AND
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

//logical OR
let hasHighIncome = false;
let hasGoodCreditScore = true;
let eligibleForLoan2 = hasHighIncome || hasGoodCreditScore;
console.log(eligibleForLoan2);

//logical NOT
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);

let userColor = 'undefined'; 
let defaultColor = 'blue';  
let currentColor = userColor || defaultColor;
console.log(currentColor);

//bitwise operators
//1=0000001
//2=0000010
//3=0000011

console.log(1 | 2); // bitwise OR
console.log(1 & 2); // bitwise AND

//read,write,exercise
//00000100
//00000010
//00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermissions = 0;
myPermissions = myPermissions | readPermission | writePermission;
console.log(myPermissions); 

let message = (myPermissions & readPermission) ? 'yes' : 'no';
console.log(message); 

//operators precedence
let x1 = 2 + 3 * 4; // multiplication has higher precedence than addition
console.log(x1); 
let x2 = (2 + 3) * 4; // parentheses change the precedence
console.log(x2);

//swapping variables
let a1 = 'red';
let b1 = 'blue';

console.log('Before swapping:', a1, b1);
let c1 = a1; // using a temporary variable to swap values
a1 = b1; // assign b1 to a1
b1 = c1; // assign the temporary variable to b1
console.log(a1);
console.log(b1);
// Alternatively, you can use array destructuring to swap values

[a1, b1] = [b1, a1]; // using array destructuring to swap values
console.log('After swapping:', a1, b1);
// This is a simple JavaScript program that demonstrates variable declaration, data types, functions, and operators.
// It includes examples of primitive data types, objects, arrays, and functions with return values.

//control flow
//if statement
//hour
//if hour is between 6 and 12, print 'Good morning'
//if hour is between 12 and 18, print 'Good afternoon'
//if hour is greater than 18, print 'Good evening'
let hour = 19;
if (hour >= 6 && hour < 12) 
    console.log('Good morning');
   else if (hour >= 12 && hour < 18) 
    console.log('Good afternoon');
 else 
    console.log('Good evening');

//switch statement
let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    default:
        console.log('Unknown user');
}
//loops
//for loop
// for (let i = 0; i < 5; i++) {
//     console.log('Hello World', i);
// }


// for (let i = 1; i <= 5; i++) {
//         console.log('Hello World', i);
// }

for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0)  console.log(i);
}