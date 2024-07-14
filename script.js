
//Variables
//var
// var x = 90;
// console.log(x);
// var x = 100;
// console.log(x);

//let
// let y = 600;
// console.log(y);

// y = 4500;
// console.log(y);

//const
// const result = 90;
// console.log(result);

// result = 67;
// console.log(result);

//Data Types in JavaScript
//String
// const output = "Ram Thapa";
// console.log(output);
// console.log(typeof output);

//Number
// const result = 90;
// console.log(result);
// console.log(typeof result);

//float
// const x = 3.56;
// console.log(x);
// console.log(typeof x);

//undefined
// let y;
// console.log(y);
// console.log(typeof y);

//null
// const x = null;
// console.log(x);
// console.log(typeof x);

//Boolean
// const isTrue = true;
// console.log(isTrue);
// console.log(typeof isTrue);

//BigInt
// const result = 34663778965n;
// console.log(result);
// console.log(typeof result);

//Symbol
// const output = Symbol("Hello World");
// console.log(output);
// console.log(typeof output);

// let x = 8.68;
// console.log(x);
// console.log(typeof x);

//Type ConverSion
// const result = "123";
// const output = Number(result);
// console.log(output);
// console.log(typeof output);

// const result = "673";
// const output = parseInt(result);
// console.log(output);
// console.log(typeof output);

// const result = "6.56";
// const output = parseFloat(result);
// console.log(output);
// console.log(typeof output);

// const result = 678;
// const output = String(result)
// console.log(output);
// console.log(typeof output);

// const result = 678;
// const output = result.toString();
// console.log(output);
// console.log(typeof output);

// const isMarried = false;
// const ans = String(isMarried);
// console.log(ans);
// console.log(typeof ans);

//Object Types

// const obj = {
//   name: "Ram Thapa",
//   age: 34,
//   isMarried: false,
//   occupation: "Agriculture",
// };

// console.log(obj);
// console.log(typeof obj);

// const arr = [3, 4, 5, 6, 7];
// console.log(arr);
// console.log(typeof arr);

// const date = new Date();
// console.log(date);
// console.log(typeof date);

// const result = 1+"1"
// console.log(result)
// console.log(typeof result);

// const result = 4 - "2";
// console.log(result);
// console.log(typeof result);

//String Method

// const result = "Hello World";
// //length
// console.log(result.length);
// //charAt
// console.log(result.charAt(2));
// //indexof
// console.log(result.indexOf("o"));
// //lastIndexOf
// console.log(result.lastIndexOf("o"));
// //lowerCase
// console.log(result.toLowerCase());
// //upperCase
// console.log(result.toUpperCase());
// //replace
// console.log(result.replace("World", "everyone"));
// //includes
// console.log(result.includes("World"));
// //slice
// console.log(result.slice(1, 6));
// //concat
// console.log(result.concat("I Love JavaScript"));

// let output = "        Hello Students";
// console.log(output.trim());

// //split
// console.log(result.split(" "));

//concatination
// let x = "Hello World";
// let y = "I Love JavaScript!";
// let z = "Kinaki I love FrontEnd!";

// console.log(x + " " + y + " " + z);

// const a = 90;
// const b = 80;
// const result = a + b;
// console.log("The Sum of two number is:" + result);
// console.log(`The Sum of Two number is: ${result}`);

// "http://localhost:5000/api/user"+id

// `http://localhost:5000/api/user${id}`

// let y = 90;
// y = y+10;
// console.log(y)

// let x = 70;
// x += 50;
// console.log(x)

// let a = 10;
// let b = 5;
// let c = "10"

// console.log(a == c)
// console.log(a === c);
// console.log(a !=b);
// console.log(a !=c);
// console.log(a>b)
// console.log(a < b);

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

//od number

// let email = "ramthapa@gmail.com";
// let password = "999999999";

// if (email === "ramthapa@gmail.com" && password === "999999999") {
//   console.log("Login SuccessFully!");
// } else {
//   console.log("Invalid Credentials!");
// }

//See Grade Check
// let grade = 85;
// if (grade >= 90) {
//   console.log("Grade:A+");
// } else if (grade >= 80) {
//   console.log("Grade:A");
// } else if (grade >= 70) {
//   console.log("Grade:B+");
// } else if (grade >= 60) {
//   console.log("Grade:B");
// } else if (grade >= 50) {
//   console.log("Grade:c");
// } else if (grade >= 40) {
//   console.log("Grade:D");
// } else {
//   console.log("Failed");
// }

//weather
// let weather = "rainy";
// if (weather === "sunny") {
//   console.log("Today is a sunny Day");
// } else if (weather === "winter") {
//   console.log("k Yo mahina jado ko hota");
// } else if (weather === "cloudy") {
//   console.log("Aja Badal Lagekochata");
// } else if (weather === "rainy") {
//   console.log("Little bit rain");
// } else {
//   console.log("Invalid weather");
// }

//switch

// let role = "super admin";
// switch (role) {
//   case "buyer":
//     console.log("You can only buy product");
//     break;

//   case "seller":
//     console.log("You can sell your product");
//     break;

//   case "admin":
//     console.log("You can add your product");
//     break;

//   case "super admin":
//     console.log("You can access everything");
//     break;

//   default:
//     console.log("Invalid Role");
// }

// let date = new Date().getDay();
// switch (date) {
//   case 0:
//     console.log("Today is a Sunday");
//     break;
//   case 1:
//     console.log("Today is a Monday");
//     break;
//   case 2:
//     console.log("Today is a Tuesday");
//     break;
//   case 3:
//     console.log("Today is a Wednesday");
//     break;
//   case 4:
//     console.log("Today is a Thursday");
//     break;

//   case 5:
//     console.log("Today is a Friday");
//     break;

//   case 6:
//     console.log("Today is a Saturday");
//     break;

//   default:
//     console.log("Invalid day");
// }

//status
// let status = 200;

// switch (status) {
//   case 201:
//     console.log("Created");
//     break;
//   case 400:
//     console.log("Bad Request");
//     break;

//   case 401:
//     console.log("UnAuthorized");
//     break;

//   case 403:
//     console.log("ForBidden");
//     break;

//   case 500:
//     console.log("Internal server Error");
//     break;

//   case 200:
//     console.log("Ok");
//     break;

//   default:
//     console.log("Invalid status");
//     break;
// }

//loop
// for loop

// for (let i = 0; i <= 10; i++) {
//   console.log("I Love Javascript" + i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`2*${i} = ${2 * i}`);
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`The even Number are:${i}`);
//   }
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(`The Odd Number are:${i}`);
//   }
// }

// const arr = [3, 4, 5, 6, 7];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(`The SUm of Array is :${sum}`);

//While Loop
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//do while
// let i = 0;
// do {
//   console.log("I Love JavaScript" + i);
//   i++;
// } while (i <= 10);

// const arr = [4, 3, 5, 6, 7, 8];
// arr.push("Apple", "Banana");
// console.log(arr);

//pop
// const arr = [4, 3, 5, 6, 7, 8];
// const result = arr.pop();
// console.log(arr);

//shift
// const arr = [4, 3, 5, 6, 7, 8];
// const result = arr.shift();
// console.log(arr);

//unshift
// const arr = [4, 3, 5, 6, 7, 8];
// const result = arr.unshift(9);
// console.log(arr);

//splice
// const arr = [3, 4, 5, 6, 7, 8, 9];
// arr.splice(1, 4, "Apple");
// console.log(arr);

//slice
// const arr = [9, 12, 6, 3, 4, 7, 2];
// arr.splice(1, 3);

// console.log(arr);

//reverse

// const arr = [9, 12, 6, 3, 4, 7, 2];
// arr.reverse();
// console.log(arr);

//indexOf
// const arr = [9, 12, 6, 3, 4, 7, 2, 9];
// const result = arr.indexOf(9);
// console.log(result);

// const arr = [8, 9, 7, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// let result = sum * 2;

// console.log(`The Sum of array is:${sum}`);
// console.log(`The total of sum which is multiply by 2 is:${result}`);

// function myFunc(name) {
//   console.log(`Hello everyone my name is:${name}`);
// }

//Array
// let ans = [3, 4, 5, 6, 7, 8, "Apple", "Banana"]; //data structure
// console.log(ans[3]);

// let arr = [3, 6, 8, 9, 2, 3, 1];

//indexOf
// let output = arr.indexOf(3);
// console.log(output);

//lastIndexOf
// let output = arr.lastIndexOf(3);
// console.log(output);

//splice
// arr.splice(1, 3);
// console.log(arr);

//slice

//length
// console.log(arr.length);
//push
// let result = arr.push(12);
// console.log(arr);

//pop
// arr.pop();
// console.log(arr);

//shift
// arr.shift()
// console.log(arr)

//unshift
// arr.unshift(14)
// console.log(arr)

//includes
// let result = arr.includes(4);
// console.log(result);

// const output = ["Hello", "World", "JavaScript", "is", "Fun"];
// console.log(output.join(" "));

// let arr = [];
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }

// console.log(arr);

// for (let i = 1; i < arr.length; i++) {
//   sum += arr[i];
// }

// let result = sum * 2;

// console.log(`The Sum of arr is:${sum}`);
// console.log(`The multiply of sum is:${result}`);

//Object
// const person = {
//   name: "John Doe",
//   age: 24,
//   occupation: "agriculture",
//   education: "Bsc hons",
//   isMarried: false,
//   address: {
//     street: "Dillibazar",
//     city: "kathmandu",
//     country: "Nepal",
//   },

//   greet: function () {
//     console.log(`Hello My name is:${this.name}.And I am ${this.age} years old`);
//   },
// };

// const {
//   name,
//   age,
//   education,
//   occupation,
//   isMarried,
//   address: { street, city, country },
// } = person;
// console.log(name, age, education, occupation, isMarried, street, city, country);
// person.greet();

//function

// function myFunc(radius) {
//   return Math.PI * radius * radius;
// }

// let ans = myFunc(5);
// console.log(`The Area of circle is:${ans}`);

// //CalculateTotal
// function CalculateTotal(cartItems, taxRate) {
//   let total = 0;
//   for (let i = 0; i < cartItems.length; i++) {
//     total += cartItems[i].price * cartItems[i].quantity;
//   }
//   total += total * taxRate;
//   return total;
// }
// let cart = [
//   { name: "Dr Martin", price: 8000, quantity: 1 },
//   { name: "SB Dunk", price: 4000, quantity: 2 },
// ];
// const result = CalculateTotal(cart, 0.02);
// console.log(`Your full and final payment is:${result}`);

// const arr = [4, 3, 5, 6, 7, 8, 9, 1, 2];
// arr.forEach((value)=>{
//       value +=20
//       console.log(value)
// })

// console.log(arr)

// let output = arr.every((value) => value > 2);
// console.log(output);

// const ans = arr.forEach((value) => value * 5);
// console.log(ans);

//find
// let result = arr.find((value, index) => value > 2);

// console.log(result);

//filter
// let result = arr.filter((value, index) => value > 6);

// console.log(result);

// const products = [
//   { name: "Laptop", price: 120000, inStock: true },
//   { name: "Phone", price: 120000, inStock: false },
//   { name: "Tab", price: 120000, inStock: true },
// ];

// let show = products.filter((value, index) => value.inStock === false);
// console.log(show);

// const products = [
//   { name: "Laptop", price: 120000, inStock: true },
//   { name: "Phone", price: 30000, inStock: false },
//   { name: "Tab", price: 40000, inStock: true },
// ];

// let show = products.reduce((total, value) => total + value.price, 0);

// console.log(show);

// function myFunc() {
//   let a = prompt("Enter first Number?");
//   let b = prompt("Enter second Number?");
//   let result = Number(a) + Number(b);
//   if (result) {
//     alert(`The Sum of Two number is: ${result}`);
//   }
// }

// myFunc();

//Scoping
// function myFunc() {
//   if (true) {
//     var x = 90;
//     let y = 70;
//     const z = 30;
//     console.log(y);
//     console.log(z);
//   }
//   console.log(x);
// }

// myFunc();

//DOM

//
// let result = document.getElementById("hello");
// result.innerText = "I have many Proof";
// result.style.backgroundColor = "red";
// result.style.color = "white";
// result.style.textAlign = "center";

// let output = document.getElementsByClassName("myClass")[0];

// output.innerText = "Yo bramandama hami ago ko jhilko";
// output.style.backgroundColor = "blue";
// output.style.color = "white";
// output.style.textAlign = "center";

// let ans = document.getElementsByClassName("myClass");

// ans[1].innerText = "It's gone a better";
// ans[1].style.backgroundColor = "yellow";
// ans[1].style.color = "black";
// ans[1].style.textAlign = "center";

// let show = document.getElementsByTagName("span");

// show[0].innerText = "Haina k ho yesto yo,Chhaka parchu";
// show[0].style.backgroundColor = "gray";
// show[0].style.color = "white";
// show[0].style.textAlign = "center";

// let x = document.getElementsByTagName("span");

// x[1].innerText = "Kinanki Nepal ma oppurtunities yekdamai kam cha";
// x[1].style.backgroundColor = "pink";
// x[1].style.color = "white";
// x[1].style.textAlign = "center";

// let y = document.querySelector("#btnAdd");
// y.style.backgroundColor = "blue";
// y.style.color = "white";
// y.style.padding = "2vmax 4vmax";
// y.style.cursor = "pointer";
// y.style.border = "none";

// y.setAttribute("class", "meroClass");
// console.log(y.getAttribute("class"));

// let v = document.querySelector(".btnDelete");
// v.style.backgroundColor = "red";
// v.style.color = "white";
// v.style.padding = "2vmax 4vmax";
// v.style.cursor = "pointer";
// v.style.border = "none";

// function addTask() {
//   let display = document.createElement("h1");
//   display.innerText = "Task 1";
//   document.body.prepend(display);
// }

// function deleteTask() {
//   let h1 = document.querySelector("h1");
//   h1.remove();
// }

// y.onclick = addTask;
// v.onclick = deleteTask;

// let result = document.querySelectorAll("button");
// result[0].style.backgroundColor = "red";
// result[0].style.color = "white";
// result[0].style.padding = "2vmax 4vmax";
// result[0].style.border = "none";

// let output = document.querySelectorAll("button");
// output[1].style.backgroundColor = "blue";
// output[1].style.color = "white";
// output[1].style.padding = "2vmax 4vmax";
// output[1].style.border = "none";

// function myFunc(name, age) {
//   console.log(`Hello My name is:${name}.And I am ${age}years old!`);
// }

// myFunc("Ram Thapa", 23);

//Advance Array Method;

const arr = [3, 6, 7, 8, 9, 4, 2, 1];
//find

// let output = arr.find((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Martin", price: 8000, inStock: true },
//   { id: 2, name: "TimberLand", price: 10000, inStock: true },
//   { id: 3, name: "SB Dunk", price: 8000, inStock: false },
//   { id: 4, name: "Air force 1", price: 7000, inStock: true },
// ];

// let result = products.find((value, index) => value.inStock);
// console.log(result);

//filter
// let output = arr.filter((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Martin", price: 8000, inStock: true },
//   { id: 2, name: "TimberLand", price: 10000, inStock: true },
//   { id: 3, name: "SB Dunk", price: 8000, inStock: false },
//   { id: 4, name: "Air force 1", price: 7000, inStock: true },
// ];

// let result = products.filter((value, index) => !value.inStock);
// console.log(result);

//some
// let output = arr.some((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Martin", price: 8000, inStock: true },
//   { id: 2, name: "TimberLand", price: 10000, inStock: true },
//   { id: 3, name: "SB Dunk", price: 8000, inStock: false },
//   { id: 4, name: "Air force 1", price: 7000, inStock: true },
// ];

// let result = products.some((value, index) => !value.inStock);
// console.log(result);

// let output = arr.every((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Martin", price: 8000, inStock: true },
//   { id: 2, name: "TimberLand", price: 10000, inStock: true },
//   { id: 3, name: "SB Dunk", price: 8000, inStock: false },
//   { id: 4, name: "Air force 1", price: 7000, inStock: true },
// ];

// let result = products.every((value, index) => !value.inStock);
// console.log(result);

//forEach
// arr.forEach((value, index) => console.log(value + 2));

// const products = [
//   { id: 1, name: "Martin", price: 8000, inStock: true },
//   { id: 2, name: "TimberLand", price: 10000, inStock: true },
//   { id: 3, name: "SB Dunk", price: 8000, inStock: false },
//   { id: 4, name: "Air force 1", price: 7000, inStock: true },
// ];
// products.forEach((value, index) => console.log(value.name));

// let result = arr.map((value, index) => value * 4);
// console.log(result);

//
// let btn = document.querySelectorAll("button");
// btn[0].innerText = "HeyBtn";
// btn[0].style.backgroundColor = "blue";
// btn[0].style.color = "white";
// btn[0].style.padding = "2vmax 4vmax";
// btn[0].style.border = "none";

// let output = document.querySelectorAll("button");
// output[1].innerText = "clickME";
// output[1].style.backgroundColor = "red";
// output[1].style.color = "white";
// output[1].style.padding = "2vmax 4vmax";
// output[1].style.border = "none";

// function myFunc(name, age) {
//   console.log(`Hello My name is: ${name}. And i am ${age} years old`);
// }

// myFunc("Ram Thapa", 23);

// const meroFunc = (name, age) => {
//   console.log(`Hello My name is: ${name}. And i am ${age} years old`);
// };

// meroFunc("Sita Devi", 24);

//Advance Array Method
let newArr = [4, 5, 6, 7, 8, 9, 3, 1, 2];
// //find

// let output = newArr.find((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "SB Dunk", price: 9000, inStock: false },
//   { id: 3, name: "Air Force 1", price: 6000, inStock: true },
//   { id: 4, name: "Travis Cott", price: 7000, inStock: true },
// ];

// let ans = products.find((value,index)=>value.inStock)
// console.log(ans)

//filter

// let output = newArr.filter((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "SB Dunk", price: 9000, inStock: false },
//   { id: 3, name: "Air Force 1", price: 6000, inStock: true },
//   { id: 4, name: "Travis Cott", price: 7000, inStock: true },
// ];

// let ans = products.filter((value, index) => value.inStock);
// console.log(ans);

//some
// let output = newArr.some((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "SB Dunk", price: 9000, inStock: false },
//   { id: 3, name: "Air Force 1", price: 6000, inStock: true },
//   { id: 4, name: "Travis Cott", price: 7000, inStock: true },
// ];

// let ans = products.some((value, index) => value.inStock);
// console.log(ans);

//every
// let output = newArr.every((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "SB Dunk", price: 9000, inStock: false },
//   { id: 3, name: "Air Force 1", price: 6000, inStock: true },
//   { id: 4, name: "Travis Cott", price: 7000, inStock: true },
// ];

// let ans = products.every((value, index) => value.inStock);
// console.log(ans);

//forEach
// let output = newArr.forEach((value, index) => value * 2);
// console.log(output);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "SB Dunk", price: 9000, inStock: false },
//   { id: 3, name: "Air Force 1", price: 6000, inStock: true },
//   { id: 4, name: "Travis Cott", price: 7000, inStock: true },
// ];

// let ans = products.forEach((value, index) => value.name);
// console.log(ans);

//map
// let output = newArr.map((value, index) => value * 2);
// console.log(output);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "SB Dunk", price: 9000, inStock: false },
//   { id: 3, name: "Air Force 1", price: 6000, inStock: true },
//   { id: 4, name: "Travis Cott", price: 7000, inStock: true },
// ];

// let ans = products.map((value, index) => value.name);
// let display = document.createElement("h2");
// display.innerText = ans;
// document.body.prepend(display);

//reduce
// let output = newArr.reduce((accum, curValue) => accum + curValue);
// console.log(output); //single return element

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "SB Dunk", price: 9000, inStock: false },
//   { id: 3, name: "Air Force 1", price: 6000, inStock: true },
//   { id: 4, name: "Travis Cott", price: 7000, inStock: true },
// ];

// let ans = products.reduce((total, curValue) => total + curValue.price, 0);
// console.log(ans);

// let heading = document.getElementById("heading");
// let box = document.getElementById("box1");
// let btnClick = document.getElementById("btnClick");
// let input = document.querySelector("input");

// btnClick.style.backgroundColor = "blue";
// btnClick.style.color = "white";
// btnClick.style.padding = "20px";
// btnClick.style.border = "none";
// btnClick.style.cursor = "pointer";

// btnClick.addEventListener("click", () => {
//   box.classList.add("classBox");
// });

// btnClick.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   btnClick.style.backgroundColor = "gray";
// });

// btnClick.addEventListener("dblclick", () => {
//   document.body.style.backgroundColor = "black";
// });
// btnClick.addEventListener("click", () => {
//   document.body.style.backgroundColor = "";
// });

// window.addEventListener("click", (e) => {
//   console.log(e.clientX);
//   console.log(e.clientY);
// });

// // window.addEventListener("contextmenu", (e) => {
// //   e.preventDefault();
// // });

// box.addEventListener("mouseover", () => {
//   btnClick.style.transform = "scale(1.1)";
//   heading.innerText = "Sirkar KP Oli kai hota";
//   heading.style.backgroundColor = "purple";
//   heading.style.color = "red";
// });

// box.addEventListener("mouseout", () => {
//   btnClick.style.transform = "";
//   heading.innerText = "";
//   heading.style.backgroundColor = "";
//   heading.style.color = "";
// });

// input.addEventListener("change", (e) => {
//   console.log(e.target.value);
//   console.log("changing");
// });

//Math Object
// let num = 4.7;
// let ans = Math.round(num);
// console.log(ans);

// let output = Math.random();
// console.log(output);

// let num = 9;
// let result = Math.sqrt(num);
// console.log(result);

// let num = 4.9;
// let result = Math.floor(num);
// console.log(result);

// let num = 4.2;
// let result = Math.ceil(num);
// console.log(result);

// let base = 2;
// let extonent = 3;
// let output = Math.pow(base, extonent);
// console.log(output);

// function Subtract(a, b) {
//   let result = a - b;
//   return Math.abs(result);
// }

// let output = Subtract(2, 5);
// console.log(output);

// function GenerateOTP() {
//   let otp = Math.floor(100000 + Math.random() * 900000);
//   return otp;
// }

// let ans = GenerateOTP();
// console.log(ans);

// let num = Math.max(1,3,4,5,6,7,8)
// console.log(num)

// let result = Math.min(1, 3, 4, 5, 6, 7, 8);
// console.log(result);

// let now = new Date().getFullYear();
// console.log(now);

let now = new Date().getMonth();
console.log(now);
