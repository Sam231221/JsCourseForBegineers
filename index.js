// let x = 5;
// console.log(x++); //prints 5 then increments
// console.log(x--); // prints 6 then decrements
// console.log(++x); // increments then prints 6
// console.log(--x); // decrements then prints 5

//Function Scope and Closures
// Global Scope
// let x = 5;
// function globalScope() {
//   console.log(x);
// }
// globalScope();
// //Local Scope
// function localScope() {
//   let x = 10;
//   console.log(x);
// }
// localScope();

// //Block Scope
// // defined using let and const only
// function blockScope() {
//   let x = 15;
//   const age = 23;
//   if (true) {
//     let x = 20;
//     console.log(x);
//     console.log(age);
//   }
//   console.log(age);
//   console.log(x);
// }
// blockScope();

// function functionScope() {
//   var x = 15;
//   var age = 23;
//   if (true) {
//     var x = 20;
//     console.log(x);
//     console.log(age);
//   }
//   console.log(age);
//   console.log(x);
// }2
// functionScope();

// function scopeExample() {
//   let name = "Sameer";
//   console.log(name);
// }

// console.log(name);

//Closure
// function outerFunction(outerVariable) {
//   return function innerFunction() {
//     console.log("Hello from inner function " + outerVariable);
//   };
// }

// const newFunction = outerFunction("outside");
// newFunction("inside");
//Counter example

// function counter() {
//   let count = 0;

//   //closure
//   return function () {
//     count++;
//     return count;
//   };
// }

// const increment = counter();
// console.log(increment());

// //Number methods
// //IsFinite
// //IsNaN
// //parseInt
// //parseFloat
// //toFixed
// console.log(Number.isFinite("23"));
// console.log(Number.isFinite(23));

// console.log(Number.isNaN(223));
// console.log(Number.isNaN("23"));

// console.log(Number.parseInt("23.23"));
// console.log(Number.parseFloat(34.223));

// let num1 = 345.45445345;
// console.log(num1.toFixed(2));
// console.log(num1.toFixed(3));

// const age = 23;
// console.log(typeof age.toString());

//String Methods
//charAt
//charCodeAt
//concat
//includes
//indexOf

// let str = "Hello World";
// console.log(str.charAt(0));

// console.log(str.charCodeAt(0));

// console.log(str.concat(" Sameer" + " " + "Khan"));
// console.log(str.includes("Ha"));
// console.log(str.indexOf("l"));
// console.log(str.endsWith("fsfssfs"));
// console.log(str.startsWith("Hello"));
// console.log(str.replace("Helo", "Amazing"));
// console.log(str.slice(0, 5));
// console.log(str.split(" "));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//Array Methods
//adding/remove elements
//splice
//push
//pop
//shift
//unshift

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.push(10));
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.unshift(0));

//Accesing and iterating items in array.
//For each

let phones_List = ["iphone", "samsung", "sony", "Nokia", "OnePlus", "Xiaomi"];

// phones_List.forEach((phone, index) => {
//   console.log(phone);
// });
// //map
// let newPhonesList = phones_List.map((phone) => {
//   console.log(phone.toUpperCase());
// });

//filter
// let filteredPhones = phones_List.filter((phone) => {
//   return phone.startsWith("s");
// });
// console.log(filteredPhones);

// //find
// let findPhone = phones_List.find(function (phone) {
//   return phone.startsWith("s");
// });
// console.log(findPhone);

// //findIndex
// let numbers = [2, 3, 4, , 55];
// let findIndex = numbers.findIndex((num) => num % 2 === 0);
// console.log(findIndex);

// //includes
// let includes = numbers.includes(2);
// console.log(includes);

//transforming arrays
//reduce
//slice
//splice

// let arry1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.splice(2, 3));

// //reduce(acc, curr)
// console.log(arry1.reduce((acc, curr) => acc + curr, 0));
// //concat

// let arry2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arry1.concat(arry2));

// //Slice
// let arry3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // from 2 to 5
// let divideArray = arry3.slice(2, 5);
// console.log(divideArray);

// //join
// let array2 = ["Hello", "world"];
// let str = array2.join(" ");
// console.log(str);

//Searching and sorting
//indexOf
//lastIndexOf
//sort((a,b) => a-b)

//Object methods
let object1 = {
  fullname: "Sameer",
  age: 23,
  display() {
    console.log("My nanme is " + this.fullname);
  },
};
// console.log(Object.keys(object1));
// console.log(Object.values(object1));

// console.log(Object.entries(object1));
// console.log(Object.assign(object1, {}));
// console.log(Object.create(object1));
// console.log(object1.display());

//Math  object
//Constants
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.LN2);

//Methods
//Basic
// console.log(Math.abs(-23));
// console.log(Math.max(2, 3, 56, 55));
// console.log(Math.min(2, 3, 56, 55));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(4));

// //Rounding
// console.log(Math.ceil(23.1));
// console.log(Math.floor(23.9));
// console.log(Math.round(23.5));
// console.log(Math.trunc(23.9));
// //
// console.log(Math.random());

// //trignomertric
// console.log(Math.sin(0));
// console.log(Math.cos(0));

//Date object and its method

let date = new Date();
console.log(date);

//Methods
//getting date,day, years...
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());

//setting date,day, years...
console.log(date.setDate(23));

//formatting
// console.log(date.toDateString(new Date().toDateString()));

// console.log(date.toTimeString(new Date().toTimeString()));
// console.log(date.toLocaleDateString(new Date().toLocaleDateString()));

//parsing dates
console.log(Date.parse("2021-09-23"));
console.log(new Date(Date.UTC(2024, 11, 28)));
