// variables

//var
// var x = 90;
// console.log(x);

// var x = 180;
// console.log(x);

//let
// let y = 90;
// console.log(y);

// cannot be redeclared
// let y = 10;

//can be updated
// y = 20;
// console.log(y);

//const
// const z = 10;
// console.log(z);

//cannot be redeclared
//cannot be updated
// z = 9;        // --- error occurs
// console.log(z);

//Date types in JavaScript
//string
// const output = "Hello World!";
// console.log(typeof output);

//number
// const result = 90;
// console.log(result);
// console.log(typeof result);

//float
// const result =3.67;
// console.log(result);
// console.log(typeof result);

// undefined
// let y;
// console.log(y);
// console.log(typeof y);

// null
// let y = null;
// console.log(y);
// console.log(typeof y);

// boolean
// let y = true;
// console.log(y);
// console.log(typeof y);

//BigInt
// let y = 345346456445n;
// console.log(y);
// console.log(typeof y);

// Symbol
// const y = Symbol("Hi!");
// console.log(y);
// console.log(typeof y);

// let x = 8.68;
// console.log(x);
// console.log(typeof x);

// Manual Type Consversion
// const result = "1233";
// const output = Number(result);

// console.log(result);
// console.log(typeof result);
// console.log(output);
// console.log(typeof output);

///////

// const result = "1233";
// const output = parseInt(result);

// console.log(result);
// console.log(typeof result);
// console.log(output);
// console.log(typeof output);

////////

// const result = "6.78";
// const output = parseFloat(result);

// console.log(result);
// console.log(typeof result);
// console.log(output);
// console.log(typeof output);

////////////
// const result = 678;
// const output = String(result);

// console.log(output);
// console.log(typeof output);

// const result = 678;
// const output = result.toString();

// console.log(output);
// console.log(typeof output);

//////
// const isMarried = false;
// const ans = String(isMarried);

// console.log(ans);
// console.log(typeof ans);

//Variables
//Objects

// const obj={
//     name: "Ashish Thapa",
//     age: 21,
// }
// console.log(typeof obj);

// const arr = [3, 4, 5, 6, 7];
// console.log(typeof arr);

// const date = new Date();
// console.log(date);
// console.log(typeof date);

//String Method

// const result = "Hello World";
// //length
// console.log(result.length);

// //chatAt
// console.log(result.charAt(4));

// //indexOf
// console.log(result.indexOf("o"));

// //lastIndexOf
// console.log(result.lastIndexOf("o"));

// //toLowerCase
// console.log(result.toLowerCase());

// //toUpperCase
// console.log(result.toUpperCase());

// //replace
// console.log(result.replace("World", "everyone"));

// //includes
// console.log(result.includes("World"));

// //slice
// console.log(result.slice(1, 6));

//concat
// console.log(result.concat(" " + "I love JS"));

// //let output = "         B  C  A"
// let output = "    BCA";
// console.log(output.trim())

// //split
// console.log(result.split(" "))

// //concatination
// let x = "Hello World";
// let y = "I love JS!";
// let z = "Because it's fun";
// console.log(x + " " + y + " " + z);

// const a = 80,
//   b = 60;

// const result = a + b;
// // console.log("The sum of two number is:" + result);
// console.log(`The sum of two number is: ${result}`);

// Assignment Operator
// let y = 80;
// y += 10;
// console.log(y);

//
// let a = 10;
// let b = 5;
// let c = "10";
// console.log(a == c);
// console.log(a === c);
// console.log(a != b);
// console.log(a !== c);

// let ageGroup = 18;
// console.log(ageGroup >= 18 ? "You can vote" : "You can't");

//Unary Operators
// let x = "123";
// let y = +x; //positive
// console.log(y);
// console.log(typeof y);

// const obj = {
//   name: "Sita Devi",
//   age: 56,
// };

// delete obj.age;
// console.log(obj);

// ////
// const myOBJ = {
//     name: "Sita Devi",
//     age: 56,
//   };

//   delete myOBJ.age;
//   console.log(obj);

// let email = "ashishthapa@gmail.com";
// let password = "password";

// if (email === "ashishthapa@gmail.com" && password === "password") {
//   console.log("Login Successfull!");
// } else {
//   console.log("Invalid Credentials");
// }

// SEE grade check

// let grade = 98;

// if (grade > 90) {
//   console.log("A+");
// } else if (grade >= 80 && grade <= 90) {
//   console.log("A");
// } else if (grade >= 70 && grade <= 80) {
//   console.log("B+");
// } else if (grade >= 60 && grade <= 70) {
//   console.log("B");
// } else if (grade >= 50 && grade <= 60) {
//   console.log("C+");
// } else if (grade >= 40 && grade <= 50) {
//   console.log("C+");
// } else {
//   console.log("Non Graded");
// }

// let weather = "rainy";

// if (weather === "sunny") {
//   console.log("Today is a sunny day");
// } else if (weather === "winter") {
//   console.log("Today is a cold day");
// } else if (weather === "rainy") {
//   console.log("Today is a rainy day!");
// } else {
//   console.log("Invalid Weather!");
// }

// const d = new Date().getDay();

// switch (d) {
//   case 0:
//     console.log("Today is sunday!");
//     break;

//   case 1:
//     console.log("Today is monday!");
//     break;

//   case 2:
//     console.log("Today is tuesday!");
//     break;

//   case 3:
//     console.log("Today is wednesday!");
//     break;

//   case 4:
//     console.log("Today is thrusday!");
//     break;

//   case 5:
//     console.log("Today is friday!");
//     break;

//   case 6:
//     console.log("Today is saturday!");
//     break;

//   default:
//     console.log("Invalid weather");
// }

// let status = 200;

// switch (status) {
//   case 201:
//     console.log("Created");
//     break;

//   case 400:
//     console.log("Bad Request");
//     break;

//   case 401:
//     console.log("Unauthorized");
//     break;

//   case 403:
//     console.log("Forbidden");
//     break;

//   case 200:
//     console.log("Ok");
//     break;

//   case 500:
//     console.log("Internal server error");
//     break;

//   default:
//     console.log("Error");
// }


// //Array
// let n = [2,3,4,5,6];
// console.log(n);
// console.log(n[3]);

// const arr = [3,4,5,6,7,8,9];



// //splice
// const result = arr.splice(1,3); //removes the arrray elements from 1 to 3. and returns them. main array is affected. i.e arr is affected
// console.log(arr);
// console.log(result);

// const output = arr.slice(1,3); // returns only the 1st and 2nd index elements. main array i.e arr is not affected
// console.log(output); // output = [4,5]
// console.log(arr)

// // lastIndexOf
// let output = arr.lastIndexOf(3);
// console.log(output);

// //indexOf
// let output = arr.indexOf(3)
// console.log(output);

// console.log(arr.length);
// console.log(arr);
//  const str = 'Sandeep';
//  console.log(str.length);

// arr.push(12); // adds element at the last of the array
// console.log(arr);

// arr.unshift(16); // adds element at the first of the array
// console.log(arr);

// arr.shift(); // removes element from the first of the array
// console.log(arr);

// arr.pop(); // removes element from the last of the array
// console.log(arr);

// console.log(arr.includes(5));

// const output = ['A', 'B', 'C', 'D'];
// console.log(output.join(',')); // adds separator for the given array elements
// console.log(arr.join('-'))


// let arr = []
// let sum = 0;

// for (let i = 1; i<= 10; i++){
//   arr.push(i);
// }

// console.log(arr);

// for(let i = 1; i < arr.length; i++){
//   sum += arr[i];
// }

// let result = sum * 2;

// console.log(`The sum of arr is : ${sum}`);
// console.log(  `The multiply of sum is: ${result}`);


//#######################################
// // Object 

// const person = {
//   name: 'Sandeep',
//   age: 20,
//   college: 'kbc',
//   isMarried: false,
//   address: {
//     street: 'Kalanki',
//     city: 'kathmandu',
//     country: 'Nepal',
//   },
//   getAddress: function () {
//     return this.address;
//   },
// }

// const {name, age, college, isMarried, address} = person;
// console.log(name, age, college, isMarried, address);

// console.log(person.name);
// console.log(person['age']);


//#########################  FUNCTIONS 

// function greet(name) {
//   console.log(`Hello ${name}`);
// }
// greet('Sandeep');

// const eat = function (food) {
//   console.log(`I am eating ${food}`);
// }
// eat('Pizza');

// //Arrow function
// const wave = (name) => {
//   console.log(`i'm waving at ${name}`);
// }
// wave('karan');

// function myFunc(radius) {
//   return Math.PI * radius * radius;
// }

// const output = myFunc(5);
// console.log(`The radius of the circle is : ${output}`);

//Calculate Total
function calculateTotal(cartItems, taxRate) {
  let total = 0;
  for (let i = 0; i <= cartItems.length; i++) {
    total += cartItems[i].price * cartItems[i].quantity;
  }

  total += total * taxRate;
  return total;
}


let cart = [
  { name: 'Dr Martin', price: 8000, quantity: 1 },
  { name: 'Dr Sandeep', price: 4000, quantity: 2 },
];

const result = calculateTotal(cart, 0.2);
console.log(`Your full and final payment is : ${result}`);

