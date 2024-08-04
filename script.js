
// Variable


// var x =90;
// console.log(x);

// var x=100;
// console.log(x);

//let
// let y =600;
// console.log(y);


// // let y=800;  Because y is already declared
// y=9;
// console.log(y);


//const
// const result=900;
// console.log(result);


//Gives Error
// result=8;
// console.log(result);



//Data Types in JavaScript
// const output="Sachin";
// console.log(typeof(output));


// let a;
// console.log(typeof(a)); //undefined

// let b=null;
// console.log(typeof(b));//object


// let c=90;
// console.log(typeof(c)) //number

// let d=9.8;
// console.log("9.8 "+typeof(d))



// const isTrue=true;
// console.log(typeof(isTrue))


// //Bigint
// const num =255558585n;
// console.log(typeof(num))


// //symbol
// const out= Symbol("Hello world")
// console.log(out)
// console.log(typeof(out))



// //Type conversion

// let x =10;
// console.log(typeof(String(x)))


// let y ="46"
// console.log(typeof(parseInt(y)));


// let obj ={
//     names : "sachin",
//     add :"gaushala"
// }


// console.log(typeof(obj))

// console.log("object's name"+obj.names)



// //Array
// const arr =[1,2,3,4,5];
// console.log(typeof(arr))


// const date = new Date();
// console.log(date.getFullYear())


// let s ="hello world";
// console.log(s.length)

// console.log(s.charAt(4))


// console.log(s.indexOf("l"))
// console.log(s.lastIndexOf("o"))

// console.log(s.replace("hello","sachin"))



// let g ="                       ddd";
// console.log(g)
// console.log(g.trim())



// let h ="hello world";
// console.log(h.split(" "))



//logical operator
// let e ="email";
// let p ="123"
// if(e==="email" && p === "1234"){
//     console.log("correct");
// }else{
//     console.log("incorrect");
// }

// let weather ="monsoon";
// if(weather === "sunny"){
//     console.log("ooommmaaagooo sunny");

// }else if (weather === "rainy"){
//     console.log("rainy")
// }else{
//     console.log("What the heck")
// }



//swich case
// let day ="saturday";
// switch(day){
//     case "sunday":
//         console.log("sunday");
//         break;
//     case  "monday":
//         console.log("monday");
//         break;
//     default:
//         console.log("Day except sunday or monday");
// }


// let date  = new Date();
// console.log(date)
// console.log(date.getDate())


// switch(date.getDay()){
//     case  0:
//         console.log("sunday");
//         break;  
//     case 1:            
//         console.log("monday");
//         break;                          
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:       
//         console.log("wednesday");
//         break;
//     case 4:          
//         console.log("thursday");
//         break;
//     case 5:                                     
//         console.log("friday");
//         break;              
   
//     default:        
//         console.log("Saturday");
        
// }


//status
// let status  = 200;
// switch(status){     

//     case 200:
//         console.log("ok");
//         break;
//     case 201:           
//         console.log("created");
//         break;
    
//     case 401:           
//         console.log("Unauthorized");
//         break;
//     case 403:           
//         console.log("Forbidden");
//         break;
//      case 404:           
//         console.log("Not Found");
//         break;
//     case 500:
//         console.log("internal server error");
//         break;
//     default:
//         console.log("status code not found");
// }



//loop
// for (let i = 0; i < 10; i++) {
    
//     console.log("I Love Javascript");
// }

// let k=1;
// while(k<10){
//     console.log("I Love Javascript");
//     k++;
// }

// let j=1;
// do{
//     console.log("I Love Javascript");
//     j++;
// }while(j<10);


// for (let a =1;a<=10;a++){
//     console.log(`2 * ${a} = ${2*a}`);
// }

// for (let b=1;b<20;b++){
//     if(b%2 != 0){
//         console.log(b);
//     }
// }




//Array


// const arr =[1,4,5,6,8,2];
// let sum=0;
// for (let i=0;i<arr.length;i++){
//     sum+= arr[i];
// }
// console.log(sum);

// const a =["apple","orange",4];
// console.log(a);
// console.log(a.length);

// a.unshift("sachin");
// console.log(a);





// const b =[2,3,4,8,9];
// b.includes(2);
//Check whether the element exists in the array
// console.log(b.includes(2))



// const ab = ["A","B","C"];
// console.log(ab.join("      "));



//slice and splice
// const abc =[5,4,8,8,5,1];
// //it doesnot include the ending index
// console.log(abc);
// console.log(abc.slice(1,3));
// console.log(abc);

//splice includes the ending index as well

//it affect the original array
//it removes the value from the  original array
// console.log(abc.splice(1,3));
// console.log(abc);
// console.log(abc.indexOf(5));
// console.log(abc.lastIndexOf(5));



// let arrr =[];
// let sums=0;
// for(let i=1;i<=10;i++){
//     arrr.push(i);
    
// }
// for(let j=1;j<arrr.length;j++){
//     sums+=arrr[j];
    
// }


// console.log(arrr);
// console.log(arrr.length);
// console.log(sums);


// objects

// const person={
//     name:"sachin",
//     address:"Bharatpur",
//     status:"married",
//     detail:function(){
//         console.log(`Name is ${this.name}`);
//     }
// }
// console.log(person.name);

// console.log(person['name']);
// delete person.status;
// console.log(person);

// person.detail();


// // Nested Object
// const person={
//     name:"sachin",
//     address:"Bharatpur",
//     status:"married",
//     detail:function(){
//         console.log(`Name is ${this.name}`);
//     },
//     //Nested object
//     address:{
//         street:"gaushala",
//         city:"bharatpur"

//     }
// }
// console.log(person.name);

// console.log(person['name']);
// delete person.status;
// console.log(person);

// person.detail();

// console.log(person.address.street);

// //destructuring
// const {name,address,address:{street}} = person;
// // console.log(address);
// console.log(street);
// console.log(address)



//Function
// function greet(name){
//     console.log("Hello",name);
// }


// greet("sachin");


// function area(radius){
//     let res = Math.PI*radius*radius;
//     console.log(`The area of circle is ${res}`);
// }


// area(5);



// //calculate  interest
// function calculateInterest(p,t,r){
//     console.log((p*t*r)/100);
// }
// calculateInterest(1000,1,5);


// //calculate the totalcart item price
// function calculateTotal(cartItems,taxRate){
//     let total=0;
//     for (let i=0;i<cartItems.length;i++){
//         total += cartItems[i].price * cartItems[i].quantity;
//     }
//     total = total +total*taxRate;
//     return total;
// }

// let cart=[

//     {
//         name:"sachin",
//         price:6000,
//         quantity:1
//     },
// {
//     name:"singh",
//     price:300,
//     quantity:20
// }
// ]

// const result=calculateTotal(cart,0.02);
// console.log(result);


//scoping



// function myfunc()
// {
//     if(true){
// var x = 90;
// let y =70;
// const z=30;
// }
// console.log(x);
// console.log(y);
// console.log(z);
    
// }


// myfunc();

//dom
// console.log(document.body);
// console.log(document.body);
// let rs= document.getElementById("tag");
// console.log(rs);


// rs.style.background="green";

// rs.innerHTML="changed";

// rs.style.color="red";


// // let output = document.getElementsByClassName("kasko")[0];
// let output = document.getElementsByClassName("kasko");

// output[1].innerHTML="second bala";
// // output.innerHTML="yo brahmanda";

// // output.style.textAlign="center";\




// //Tag
// let out = document.getElementsByTagName("span")[0];
// out.innerHTML="hhhhhheeeeehhhhheeehehheeh";


// let out2 = document.getElementsByTagName("span")[1];
// out2.innerHTML="sennnnnndddddd";


// let out3 = document.getElementsByTagName("span")[2];
// out3.innerHTML="sarkar chor xa";


// // to access input
// let input1 = document.getElementsByName("email");
// console.log(input1);



// //query selector
// let btn  = document.querySelector("#btnAdd");
// btn.style.background="green";
// btn.style.cursor="pointer";
// btn.style.padding="50px";
// console.log(btn);


// let btn2 = document.querySelector(".delete");
// btn2.style.background="red";

// btn2.setAttribute("class","meroclass");

// console.log(btn2.getAttribute("class"));


// //create element


// function addTask(){
// let newe=document.createElement("h1")
// newe.innerHTML="Task Added";
// newe.classList.add("new");
// document.body.prepend(newe);

// }

// function DeleteTask(){
//     let newe=document.querySelectorAll(".new");
    
//     newe[0].remove();
    
//     }
// // btn.onclick=addTask;
// btn.addEventListener('click',addTask);

// btn2.onclick = DeleteTask;



//query selector all

// let btns = document.querySelectorAll("button");
// btns[0].style.cursor="pointer";
// btns[0].style.backgroundColor="red";
// btns[0].style.border="none";
// console.log(btns);

// btns[1].style.cursor="pointer";
// btns[1].innerHTML="<b>Sachin</b>"
// btns[1].style.backgroundColor="green";
// btns[1].style.border="none";
// console.log(btns);


//Which one to use
//Select one of your ease


// function myFunc(name){
// console.log("My name : "+name);
// }
// myFunc("sachin");


// // const newmyFunc = function(name){
// //     console.log("My name : "+name);
// // }

// const newmyFunc = (name)=>{
//     console.log("My name : "+name);
// }
// newmyFunc("singh");


//Advance Array Method
// let arr = [4,5,6,7,8,9,10];

// const myFunc=(value,index)=>{
//     return value > 6;
// }
// let output = arr.find(myFunc);
// console.log(output);



//find 

// let output = arr.find((value,index)=>{
//     return value>6;
// })
// console.log(output);

// shorter
// let output = arr.find((value,index)=> value>6);
// console.log(output);



const products =[{id:1,name:"sachin",price:8000,instock:true},
  {id:2,name:"ashish",price:9000,instock:true},
  {id:1,name:"surya",price:7000,instock:false}
];

//it returns element
// let ans=products.find((value,index)=>value.instock);
// console.log(ans);


// //it returns in array form
// let ans2 = products.filter((value,index)=>!value.instock);
// console.log(ans2);

// //if anyone value matches it return true
// let ans3 = products.some((value,index)=>!value.instock);
// console.log(ans3);

// //Every value must be same
// let ans4 = products.every((value,index)=>!value.instock);
// console.log(ans4);




//foreach map reduce


//for each doesnot have power to change the array
// let arr = [4,5,6,7,8,9,10];
// // let out = arr.forEach((value,index)=>value>6);
// // console.log(out);

//map le naya array with new values
// let out = arr.map((value,index)=>value>6);
// console.log(out);

// let display = document.createElement("h2");
// display.innerText=out;

// document.body.prepend(display);



//Reduce method- array bhitra ko sum haru nikalnu xa vane
//it takes accumulator
// it returns single value

//accumulator  vaneko previous value

// let arr = [4,5,6,7,8,9,10];

// let out = arr.reduce((acc,cur)=>acc+cur);
// console.log("first "+ out);

// let display = document.createElement("h2");
// display.innerText=out;

// document.body.prepend(display);


// const product =[{id:1,name:"sandeep",price:8000,instock:true},
//     {id:2,name:"ashish",price:9000,instock:true},
//     {id:1,name:"surya",price:7000,instock:false}
// ];
// let out2 = product.reduce((total,cur)=>total+cur.price,0);
// console.log(out2);


//Accessing elements
// let heading= document.getElementById("heading");
// let box1= document.getElementById("box1");
// let btn= document.getElementById("btnClick");



// btn.addEventListener('click',()=>{
//   heading.style.backgroundColor="red";
//   document.body.style.backgroundColor="rgb(204, 255, 153)";

// })
// btn.addEventListener("mouseover",()=>{
//   btn.style.transform="scale(1.2)";
//   btn.style.backgroundColor="red";

// })

// // it doesnot  let the menu to appear on button
// btn.addEventListener('contextmenu',(e)=>{
//   btn.style.backgroundColor="green";

//   e.preventDefault();
//   // window.alert("ehhhh");
// })


// //doesnot let to open the inspect menu list
// window.addEventListener("contextmenu",(e)=>{

//   e.preventDefault();
// })

//it shows the coordinate of x and y of mouse clicked
// window.addEventListener('click',(e)=>{
//   console.log(e.clientX);
//   console.log(e.clientY);
// })


// let input =  document.querySelector("input");
// input.addEventListener('change',(e)=>{
//   console.log(e.target.value);
//   console.log("changing");
//   console.log(input.value);
// })


// console.log(Math.floor(4.9));
// console.log(Math.ceil(6.1));

// console.log(Math.round(6.2))


// let randomint =Math.floor((Math.random()*(100-0))+0);
// console.log(randomint)


// console.log(Math.sqrt(8));


// console.log(Math.pow(2,2));



// console.log(Math.abs(-8));


// console.log(Math.min(2,3,4,5,6,7,8,9,10));
// console.log(Math.max(2,3,4,5,6,7,8,9,10));

// console.log(Math.floor(Math.random()*(999999)+100000));



let now  = new Date();


console.log(now);
console.log(now.getDate());
console.log(now.getFullYear());



var input = document.getElementById("myInput");
var add = document.getElementById("btnAdd");
var remove = document.getElementById("btnRemove");

// const myFunc = ()=>{
//     localStorage.setItem("name",input.value);
  
// }

// add.addEventListener('click',myFunc);

// if(localStorage.getItem("name")){
//     alert(localStorage.getItem("name"));
// }

// remove.addEventListener('click',()=>{
//     localStorage.removeItem("name");
//     localstroage.clear();
// })
const myFunc = ()=>{
  localStorage.setItem("name",JSON.stringify({
      name:"sachin",
      age:58
  }));
  
}

add.addEventListener('click',myFunc);

if(localStorage.getItem("name")){
  // alert(localStorage.getItem("name"));
  console.log(JSON.parse(localStorage.getItem("name")));
}

remove.addEventListener('click',()=>{
  localStorage.removeItem("name");
  localstroage.clear();
})
