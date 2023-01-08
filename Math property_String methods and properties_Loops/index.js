// MATH PROPERTY, STRING METHODS AND PROPERTIES , LOOPS

// *** JS MATH ***

let x;
let y = 6;
let z = 9;

let maximum;
let minimum;
// x = Math.round(x)
// x = Math.floor(x)
// x = Math.ceil(x)
// x = Math.pow(x,3)
// x = Math.sqrt(x)
// x = Math.abs(x)  // absolute value is the distance away from zero

// maximum = Math.max(x,y,z);
// minimum = Math.min(x,y,z);
// console.log(maximum);
// console.log(minimum);

// x= Math.PI;
// console.log(x);

/* Practice program to find hypotenuse of a right angled traingle */
/*
let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log("Side C: ", c); 
*/

// Advanced version of this using HTML textboxes

/*
document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("clabel").innerHTML = "Side C is "+ c;   

}
*/

// Useful STRING METHODS AND PROPERTIES 

// let userName = "Aditya Basanti";
let phone = "123-456-7890"

// console.log(userName.length);
// console.log( userName.charAt(0));
// console.log(userName.indexOf("B"));
// console.log(userName.lastIndexOf("B"));

// userName = userName.trim();
// userName = userName.toLowerCase();
// userName = userName.toUpperCase();
// phone  = phone.replaceAll("-"," ")
// console.log(phone);

// slice() extracts a section of the string and returns  a new string, without modifying the original string

let fullName = "Aditya Basanti"
let firstName;
let lastName;

// firstName = fullName.slice(0,6);
// lastName  = fullName.slice(7);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);


/*
WHILE LOOP = Repeat some code
                while some conddition is true
                potentially infinite */

// let userName = "";
// while(userName== "" || userName== null){
//    userName= window.prompt("Enter your name: ");
// }
// console.log("Hello", userName);

// while(1==1){
//     console.log("HELP! I'M STUCK IN AN INFINITE LOOP");
// }

/* DO WHILE LOOP = Do something
                then check the condition
                repeat if condition is true
*/

// let userName;
// do{
//     userName= window.prompt("Enter your name: ");
// }
// while(userName== "" )

// console.log("Hello", userName);

/* FOR LOOPS =  repeat some code a certain amount of time */

// for(let i=50; i>0; i-=2){
//     console.log(i)
// }
// console.log("HAPPY NEW YEAR!!")

/* BREAK = breaks out of a loop entirely
 continuous = skip an iteration of a loop
 */

// for(let i=1; i<20; i+=1) {
//     if(i==13){
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// NESTED LOOP = a loop inside an another loop
/*
for(let i=1; i<=2; i+=1){
    for(let j=1; j<=3; j+=1){
        console.log(j);
    }
}
*/
// Use nested loops to draw a rectangle

/* let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

for(let i=1; i<=rows; i+=1){
    for(let j=1; j<=columns; j+=1){
        document.getElementById("myRectangle").innerHTML +=symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}

*/