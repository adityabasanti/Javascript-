
//  VARIABLES , TYPE-CONVERSIONS , USER INPUTS , ARITHMETIC OPERATIONS
console.log("i hate pizza");
console.log("Its really good");

window.alert("I really hate pizza");
// This is comment
/* This 
   is
   Multiline s
   comment
*/

/* variable is a container for storing data
A variable behaves as if it was the value that it contains
2-steps:
1. Declaration(var, let, const)
2. Assignment(= assignment operator)
*/

let firstname = "bro";// strings
let age = 45; // numbers
// let age = "25"
let student = true;// booleans
// age = age + 1;

// console.log("hello",firstname);
// console.log("You are",age,"years old");
// console.log("You enrolled  ",student);

// document.getElementById("p1").innerHTML = "Hello "+firstname;
// document.getElementById("p2").innerHTML = "You are "+age+ " years old";
// document.getElementById("p3").innerHTML = "Enrolled: "+student;

/*
arithmetic operations is a combination of... 
operands(values, variables, etc)
operators(+ - * / %)
that can be evaluated to a value
ex. y = x + 5;
*/

let students = 21;
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 5;

// Augmented assignment operator
// students +=1 ;
// students *=2 ;
// students -=1 ;
// students /=3;


// let extraStudents  = students % 3;
console.log(students);

/*
    Operator precedence
    1.Parenthesis
    2.exponents
    3.multiplication and division
    4.addition and substraction 
*/

// let result = 1 +2* (3+4);
let result = (1 + 2) * (3 + 4);
console.log(result);

// How to accept  USER INPUTS

// EASY WAY with a window promptAditya
// let username = window.prompt("what's your name");
// console.log(username)

// DIFFICULT WAY HTML textbox
// document.getElementById("myButton").onclick = function(){
//    username = document.getElementById("myText").value;
//    console.log(username);
//    document.getElementById("myLabel").innerHTML = "hello " + username;
// }

/* TYPE-CONVERSIONS  =Change the data type of a value to another(strings, numbers, booleans)*/

//  let Age = window.prompt("How old are you?");
//  console.log(typeof Age);
//  Age = Number(Age); 
//  console.log(typeof Age);
//   Age += 1;
// console.log("Happy Birthday! You are ", Age, " years old");

// let x;
// let y;
// let z;
// x = Number("3.14");
// y = String("3.14");
// z = Boolean("pizza");
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

/*const = a variable that can't be changed */
const PI = 3.14;
let radius;
let circumference;
//  radius = window.prompt("Enter the radius of circle");
radius = Number(radius);
//  PI = 342.8

circumference = 2 * PI * radius;
//  console.log("The circumference of circle is: ",circumference);

//**********************************************************************************

// Method chaining: calling one method after another in one continuous line of code

let username = "aditya";

let letter = username.charAt(0).toUpperCase().trim();
// letter = letter.toUpperCase(); //Upper one is more elegant way
// console.log(letter);

/* if statement : a basic form of decision making 
                  if a condition is true , then do something
                   if not, then don't do it */

/*let age  =  100;
 if(age >=65){
   console.log("You are a senior citizen");
 }

  else if(age>=18){
    console.log("You are an adult");
 }   
 
 else if(age < 0){
    console.log("YOU HAVEN'T BEEN BORN YET");
 }
 
 else{
    console.log("You are a child");
 }

 let online  = false;
 
 if(online){
    console.log("You are online")
 }
 else{
    console.log("You are offline");
 }

 */

// the checked property of checkboxes ad radioboxes

/* document.getElementById("myButton").onclick = function(){
    const myCheckBox = document.getElementById("myCheckbox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const upiBtn = document.getElementById("upiBtn");
    if(myCheckBox.checked){
        console.log("You are subscribed!!");
    }
    else{
        console.log("You are NOT subscribed")
    }

    if(visaBtn.checked){
        console.log("You are paying via Visa")
    }

    else if(mastercardBtn.checked){
        console.log("You are paying via Mastercard")
    }
    else if(upiBtn.checked){
        console.log("You are paying via UPI")
    }

    else{
        console.log("You must select a payment type!")
    }
}
*/

// Switch = statement that examines a value for a match against many case clauses. More effecient than many "else if" statments
let grade = "87";

switch (true) {
    case grade >= 90:
        console.log("You did great!");
        break;
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 60:
        console.log("You passed...barely!!");
        break;
    case grade < 60:
        console.log("You FAILED!");
        break;

    default:
        console.log(grade, "is not a letter grade!");
}

/*Gives us the ability to check more than 1 condition concurrently
&& AND (Both consition are true)
|| OR (Either condition can be true) 

! NOT logical operator : Typically used to reverse a condition's boolean value
true->false  false->true*/

// let temp = -15;
let sunny = false;
/*if(temp<=0 || temp<30 && sunny==true){
    console.log("The weather is good!");
}
else{
    console.log("The weather is bad!");
}

if(!(temp>0)){
    console.log("It's cold outside")
}
else{
    console.log("It's warm outside")
}
if(!sunny){
    console.log("It's cloudy outside");
}
else{
    console.log("It's sunny outside")
}
*/
