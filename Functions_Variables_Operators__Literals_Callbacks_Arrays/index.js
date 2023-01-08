// FUNCTION = Define code once, and use it many times. To perform some code, call the function name

/* 
startProgram();
function startProgram(){
    let userName ="Aditya"
    let age = 20;

happyBirthday(userName,age);
}

function happyBirthday(a,b){
console.log("Happy birthday to you!");
console.log("Happy birthday to you!");
console.log("Happy birthday dear ", a);
console.log("Happy birthday to you!");
console.log("You are",b, " years old");
}
*/

// RETURN = returns a value back to the place where you invoked a function

/* let area;
let width;
let height;
width = window.prompt("Enter width");
height= window.prompt("Enter height");

area  = getArea(width, height);
console.log("The area is: ",area);
function getArea(width, height){
    // result = width * height;
    // return result;
    //  OR
    return width * height;
}
*/

/* TERNARY OPERATOR =  Shortcut for an 'if/else statement'
                     Take 3 operands
                     1. a condition with ?
                     2. expression if True:
                     3. expression if False
condition ? expIfTrue expIfFalse
*/

// let's create a function to check user's age
/* let adult = checkAge(2);
console.log(adult);
 function checkAge(age){
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
 }
 */

// Another way to check age
//  function checkAge(age){
//    return age>=18? true: false;
//  }

checkWinner(false);
function checkWinner(win) {
    win ? console.log("YOU WON!!") : console.log("YOU LOSE!!!");
}

/* VARIABLE SCOPE = where a variable is accessable 
let = variables are limited to block scope {}
var =  variables are limited to a function(){}

globalvariable = is declared outside the function
(if global, var will CHANGE browser's window properties)
*/

/*
let name = "Aditya" // A global variable
// for(var i=0; i<=3; i+=1){
//     // console.log(i);
// }
// console.log(i);
doSomething();

function doSomething(){
    for(var i=0; i<=3; i+=1){
        // console.log(i);
    }
}
console.log(i);
*/

/* TEMPLATE LITERALS = delimited with(`)
                    instead of double or single quotes
                    allows embedded variables  and expressions
*/

// let userName = "Aditya";
let items = 3;
// let total = 75;

// console.log("Hello", userName);
// console.log("You have", items,"items in your cart");
// console.log("Your total is $",total);

// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is $${total}`);

/* let text = `Hello ${userName}
You have ${items} items in your cart
Your total is $${total}`;
// console.log(text);

document.getElementById("mylabel").innerHTML=text;
*/

//toLocateString() = returns a string with a language sensitive representative of this number

// number.toLocateString(locale,{option});

//'locale' = specify that language (undefined=default set in browser)
//'options' = object with formatting options

let myNum = 100;
// myNum = myNum.toLocaleString("en-US"); //US-English
// myNum = myNum.toLocaleString("hi-IN"); // Hindi
// myNum = myNum.toLocaleString("de-DE");// standard german

// myNum = myNum.toLocaleString("en-US",{style:"currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN",{style:"currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE",{style:"currency", currency: "EUR"});

// 
// myNum = myNum.toLocaleString(undefined, {style:"percent"});
myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });
console.log(myNum);

// Array = think of it as a variable that can store multiple values

// let fruits = ["apple", "orange", "grapes","mango"];
// To add elements into array
// fruits[2] = "mango";
// fruits[3] = "kiwi";
/* 
fruits.push("lemon"); // Add an element
fruits.pop(); // removes last element
fruits.unshift("mango"); //add element to beginning
fruits.shift(); // removes element from beginning
*/

// let length = fruits.length;
//  console.log(length);

// let index = fruits.indexOf("grapes")
// let index = fruits.indexOf("kiwi") // return -1 means not found
//  console.log(index);
// console.log(fruits[2]);
// console.log(fruits[3]); // shows undefined

// How to LOOP through ARRAYS

// let prices = [5,10,15,20,25];
/*
for(let i =0; i<prices.length; i+=1){
   console.log(prices[i]); // to iterate array forwards
}
*/

/*
for(let i =prices.length -1; i>=0; i-=1){
    console.log(prices[i]); // to iterate array backwards
}
for(price of prices){
    console.log(price);
}
*/

//How to sort an ARRAY of strings
/* let fruits = ["apple", "orange", "grapes","mango"];
// fruits = fruits.sort();
fruits = fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}
*/

// 2D ARRAY = An array of arrays
/*
 let fruits =     ["apple", "grapes","mango"];
 let vegetables = ["carrots", "onions", "potatoes"];
 let meats =      ["eggs", "chickens","fish"];

 
 let groceryList = [fruits, vegetables , meats];

 for(let list of groceryList){
    // console.log(list);
    // groceryList[0][0]  ="oranges";
    // groceryList[0][2]  ="bananas";
    groceryList[2][2]  ="beef";
    // for(let food of list){
    //     console.log(food);
    // }
 }
 */

// SPREAD OPERATER = "..." allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected(unpacks the elements)

/*
let username ="Aditya Basanti";
let numbers = [10,1,2,3,4,5,6,7,8,9];
// console.log(...username);
// let maximum = Math.max(numbers); // returns NaN
let maximum = Math.max(...numbers);
console.log(maximum);
*/

/*
let class1 = ["Spongebob", "patrick", "Sandy"];
let class2 = ["Squidward", "Mr.krabs", "Plankton"];
class1.push(...class2);
// console.log(class1);
console.log(...class1);// using spread operator
*/

// REST PARAMETERS = "..." represents an indefinite number of parameters(pack arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

// console.log(sum(a,b));
// to get rid of these function and definite parameters we use rest parameters
/*
function sum(a,b,c,d){
    return a + b +c+d;
}
function sum(a, b, c){
    return a + b + c;
}
function sum(a,b,c,d){
    return a + b + c + d;
}
*/
/*
console.log(sum(a,b,c,d,e));

function sum(x,y, ...numbers){
    let total = 0;
    for(let number of numbers){
        total+=number;
    }
    return total;
}
*/


// CALLBACK =  a function passed as an argument to another function

/* 
Ensure that a function is not going to run before a task is completed.
Helps us to develop asynchronous code. 
(when one function has to wait for another function) that helps us to avoid errors and potential problems.
Ex. Wait for a file to load*/

/*
let total = sum(4,3);
 displayConsole(total);
displayDOM(total);

function sum(x,y){
    let result = x + y;
    return result;
} Get rid of this and use callback function
*/

// sum(4,4, displayConsole);

/*
sum(4,5, displayDOM);
function sum(x,y, callBack){
    let result = x+y;
    callBack(result);
}
function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("mylabel").innerHTML= output;
}

// array.forEach() = executes a provided callback function once for each array element

let students = ['spongebob', 'patrick','squidward'];
students.forEach(capitalize);
// students.forEach(print);

function capitalize(element , index , array){
    array[index] = element[0].toUpperCase() + element.substring(1);

}

function print(element){
    console.log(element);
}
*/
// array.map() = executes a provided callback function once for each array element AND creates a new array 

/*
let numbers = [1,2,3,4,5];
// let squares = numbers.map(square);
let cubes = numbers.map(cube);

// squares.forEach(print);
// cubes.forEach(print);

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

function print(element){
    console.log(element);
}
*/

// array.filter() = creates a new array with all elements that pass the test provided by a function

/*
let ages = [18, 16, 21, 70,22];
let adults = ages.filter(checkAge);

// adults.forEach(print);


function checkAge(element){
    return element>=18;

}
function print(element){
    console.log(element);
}
*/

// array.reduce() = to reduce an array to a single value

/*
let prices = [5, 10 , 15, 20, 30];

let totals = prices.reduce(checkOut);
console.log(`The total is : $${totals}`);

function checkOut(total, element){
    return total + element;
}

let grades = [100,50,90,70,80,60];
// grades = grades.sort(descendingSort);
grades = grades.sort(ascendingSort);
// grades.forEach(print);

function descendingSort(x,y){
    return y-x;
}

function ascendingSort(x,y){
    return x-y;
}

function print(element){
    console.log(element);
}
*/

// function expression  = function without a name(anonymous function) avoid polluting global scope with names. Write it then forget about it

/*
function sayHello(){
    console.log("Hello!")
}
sayHello();
 it is a bit tideous way to write this functions another way is ==>Function expression. */

const greeting = function () {
    console.log("Hello!");
}
greeting();