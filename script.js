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
let x = "123";
let y = +x; //positive
console.log(y);
console.log(typeof y);

const obj = {
  name: "Sita Devi",
  age: 56,
};

delete obj.age;
console.log(obj);


////
const myOBJ = {
    name: "Sita Devi",
    age: 56,
  };
  
  delete myOBJ.age;
  console.log(obj);