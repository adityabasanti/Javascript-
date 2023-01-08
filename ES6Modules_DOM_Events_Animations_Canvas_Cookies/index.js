



// after 4:45:00
//             ********ES6 MODULES*************

/* The idea behind a a module is that it's a file of reusable code
 We can import sections of pre-wriiten codeto use whenever we want
 Great for  any general  utility values and functions
 Helps to make our code reusable and maintainable
 think of modules as separate chapters of a book

 */

//  EX-1
/*
 import{ PI , getCircumference, getArea} from "./math_util.js";

 console.log(PI);

 let circumference = getCircumference(10);
 console.log(circumference);

 let area = getArea(5);
 console.log(area);
 */

// EX-2 :another way to import

/*
 import * as MathUtil from "./math_util.js";

 console.log(MathUtil.PI);

 let circumference = MathUtil.getCircumference(10);
 console.log(circumference);

 let area = MathUtil.getArea(5);
 console.log(area);
 */


// DOM = Document Object Model (API)
//      An interface for changing the content of a page
//      document is the entry point of DOM

/*
console.log(document);
console.dir(document); // This will list all the properties of DOM

console.log(document.title);
console.log(document.URL);
document.title = "Title goes here!";
document.location = "http://www.google.com"
*/

// document.body.style.backgroundColor = "LightGreen";
// document.getElementById("myDiv").innerHTML = "HELLO"

// *****FEW different ways we can select  element in a webpage******

/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "yellow";
*/

/*
let fruits = document.getElementsByName("fruits");
// console.log(fruits[0]);

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
});
*/

/*
let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = 'yellow'
*/

/*
let desserts = document.getElementsByClassName("desserts");
desserts[1].style.backgroundColor = 'yellow'
*/

// Query selecter = we can select an element by an id, classsName, tagname or an attribute.
// it only selects the first element of any group if u need all elements use querySelectorAll

// let element = document.querySelector("#myTitle"); //by id
// let element = document.querySelector(".desserts"); //by class
// let element = document.querySelector("li"); //by tag
// let element = document.querySelector("[for]");

/*
let element = document.querySelectorAll("[for]");
// let elements = document.querySelectorAll("li");

element.forEach(element => {
        element.style.backgroundColor = "black";

});
*/

// ***********DOM traversal techniques********

/*
let element = document.body;
// let child = element.firstElementChild;

let child = element.lastElementChild;
console.log(child);
child.style.backgroundColor = "lightgreen";
*/

/*
let element = document.querySelector("#vegetables");

// let parent = element.parentElement; //parent will be entire body of document

// let sibling = element.nextElementSibling; // if we select our list pg vegetables , next sibling will be dessert

// let sibling = element.previousElementSibling;
// sibling.style.backgroundColor = "lightgreen";
*/

/*
let element = document.querySelector("#fruit");
// let child = element.firstElementChild;
// let child = element.lastElementChild;

// another way to access children of an element: is via index
// let child = element.children[1];
// child.style.backgroundColor = "lightgreen";

// to access all the elements
let children = Array.from(element.children);
children.forEach(child => child.style.backgroundColor = "lightgreen");
*/
//  .firstElementChild
//  .lastElementChild
//  .parentElement
//  .nextElementSibling
//  .previousElementSibling
//  .children[]
// Array.from(.children)

//               ***** add/change HTML elements****
// .innerHTML (vulnerable to XSS attacks)
// .textcontents (more secure)

/*
const nameTag = document.createElement("h1");
// nameTag.innerHTML = window.prompt("Enter your name: ")
nameTag.textContent = window.prompt("Enter your name: ")
document.body.append(nameTag);
*/

/*
// to append an item to list
const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
// myList.append(listItem); // to add item at end
// myList.prepend(listItem); // to add item at first

myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]); // to add item in middle
*/

//            ********how we can change CSS properties*******

/*
const title = document.getElementById("myTitle");

title.style.backgroundColor = "rgb(51, 43, 0)";
title.style.color = "rgb(27, 104, 206)";
title.style.fontFamily = "consolas";
title.style.textAlign = "center";
title.style.border = "2px solid";
title.style.display = "block";
*/

//                 ********** JS Events***********


// const element  = document.getElementById("myButton");
// const element = document.body;
// const element = document.getElementById("myText");
/*
const element = document.getElementById("myDiv")

element.onclick = doSomething
element.onload = doSomething;
element.onchange = doSomething;
element.onmouseover = doSomething;
element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;


function doSomething(){
    // alert("U did something");
    element.style.backgroundColor = "red";
}

function doSomethingElse(){
    // alert("U did something");
    element.style.backgroundColor = "lightblue";
}
*/

//  ******addEventListener(event, function, useCapture)***
// You can add many event handlers to one element
// Even the same event invokes different functions

/*
const innerDiv = document.getElementById("innerDiv");

innerDiv.addEventListener("mouseover", changeRed);
innerDiv.addEventListener("mouseout", changeGreen);
function changeRed(){
    innerDiv.style.backgroundColor = "red";
}

function changeGreen(){
    innerDiv.style.backgroundColor = "lightgreen";
}
*/


/*
const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue,true);

function changeBlue(){
    alert(`You selected ${this.id}`); // which element handles the event first
    this.style.backgroundColor = "lightblue";
}
*/


// **********How we can show and hide HTML elements*********

// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");

/*
myButton.addEventListener("click" , () =>{
   if(myImg.style.display == "none"){
       myImg.style.display = "block";
   }
   else{
       myImg.style.display = "none"
   }
})
*/

// another way to use visibility
/*
myButton.addEventListener("click" , () =>{
    if(myImg.style.visibility == "hidden"){
        myImg.style.visibility = "visible";
    }
    else{
        myImg.style.visibility = "hidden"
    }
});
*/

//            ******** How we can detect KEYPRESSES ***********

/*
const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);
let x =0;
let y = 0;

function move(event){
    switch(event.key){
        case "ArrowDown":
            y+=5;
            myDiv.style.top= y + "px";
            break;
        case "ArrowUp":
            y-=5;
            myDiv.style.top= y + "px";
            break;
        case "ArrowRight":
            x+=5;
            myDiv.style.left= x + "px";
            break;
        case "ArrowLeft":
            x-=5;
            myDiv.style.left= x + "px";
            break;

        default:
            break
    }
}
*/

// Simple ANIMATIONS using javascript

/*
const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin() {
    let timerId = null;
    // let x = 0;
    // let y = 0;
    // let degrees = 0;
    // for scaling:
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame, 5);
    /*
    to move left , top , diagnol
       function frame(){
           if(x>=200 || y>200){
               clearInterval(timerId);
           }
           else{
               x+=1;
               y+=1;
               myAnimation.style.left = x + "px";
               myAnimation.style.top = y + "px";
           }
       }

   */
/*
to rotate
    function frame() {
        if (degrees >= 360) {
            clearInterval(timerId);
        }
        else {
            degrees += 1;
            // myAnimation.style.transform = "rotateX(" + degrees + "deg)";
            myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
        }
    }

*/
/*
to rotate and move diagnol

function frame(){
    if(x>=200 || y>200){
        clearInterval(timerId);
    }
    else{
        degrees += 3;
        x+=1;
        y+=1;
        myAnimation.style.left = x + "px";
        myAnimation.style.top = y + "px";
        myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
    }
 }

*/

/*
to scale the element

 function frame(){
        //    if(scaleX>=2 || scaleY>=2){
           if(scaleX<=0.2 || scaleY<=0.2){// to shrink an element
               clearInterval(timerId);
           }
           else{
            //    scaleY+=0.01;
            //    scaleX+=0.01;
               // to shrink
               scaleY-=0.01;
               scaleX-=0.01;
               myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";

           }

        }
    }
 */

// CANVAS API  = a means for drawing graphics used for animation , games , data visualization
/*
let canvas = document.getElementById("myCanvas");//Imagine it's the picture and frame together
let context = canvas.getContext("2d") //imagine it's a painting within a picture frame
*/

/*
// DRAW LINES
context.strokeStyle = "red"
context.lineWidth = 10;
context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);
context.stroke();
*/

// DRAW TRAINGLE
/*
context.strokeStyle = "violet";
context.fillStyle = "red"
context.lineWidth = "10"
context.beginPath();
context.moveTo(250,0);
context.lineTo(0,250);
context.lineTo(500,250);
context.lineTo(250,0);
context.stroke();
context.fill();
*/

// DRAW RECTANGLE
/*
context.lineWidth = 5;

context.fillStyle = "black";
context.fillRect(0,0,250,250);
context.strokeStyle = "black";
context.strokeRect(0,0,250,250);

context.fillStyle = "red";
context.fillRect(0,250,250,250);
context.strokeStyle = "black";
context.strokeRect(0,250,250,250);

context.fillStyle = "green";
context.fillRect(250,250,250,250);
context.strokeStyle = "black";
context.strokeRect(250,250,250,250);

context.fillStyle = "blue";
context.fillRect(250,0,250,250);
context.strokeStyle = "black";
context.strokeRect(250,0,250,250);
*/

// DRAW CIRCLE
//(x, y, r, sAngle, eAngle, counterclockwise)
/*
context.fillStyle = "blue"
context.strokeStyle = "yellow"
context.lineWidth = 10;
context.beginPath();
context.arc(250,250,200,0,2*Math.PI);
context.stroke();
context.fill();
*/

// DRAW TEXT
/*
context.font = "50px Mv Boli"
context.fillStyle = "grey";
// context.fillText("YOU WIN!!",100, 100);
context.textAlign = "center";
context.fillText("YOU WIN!!",canvas.width/2, canvas.height/2);
*/

// WINDOW  = interface used to talk with web browser. the DOM is a property of the window

// console.dir(window);

// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight);
// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);
//  window.location.href = "https://google.com"// redirect to google
// console.log(window.location.hostname);
// console.log(window.location.pathname);

// const myButton = document.querySelector("#myButton");

// myButton.addEventList12ener("click" , () => window.open());
// myButton.addEventListener("click" , () => window.open("https://google.com"));
// myButton.addEventListener("click" , () => window.close());
// myButton.addEventListener("click" , () => window.print());
// window.alert("hello");
// window.confirm("Press OK to continue!")

/*
let age = window.prompt("Enter your age");
if(age<18){
    window.alert("You must be 18+ to visit this site");
    window.close();
}
*/

//COOKIE = a small text file stored on your computer used to remember information about the user saved in name=value pairs

// console.log(navigator.cookieEnabled); // to check cookie is enabled or not

//TO add a cookie also we can set expiration date, when current time passes the expiration date the cookie will be deleted, if we change the expiration date to a date that is already expired that will delete the cookie.
// You can override cookie
/*
document.cookie = "FirstName=Aditya ; expires= Tue , 3 January 2023 4:00:00 GMT+; path=/";
document.cookie= "LastName=Basanti ; expires= Tue , 3 January 2002 4:00:00 GMT+; path=/";
console.log(document.cookie);
*/

//  a function to create cookies
/*
setCookie("firstName", "adi", 365);
setCookie("lastName", "roy", 365);
console.log(getCookie("firstName"));
console.log(getCookie("lastName"));
*/

// getCookie("firstName");
// to delete cookie
/*
deleteCookie("FirstName");
deleteCookie("laststName");
// deleteCookie("email");
*/
/*
// console.log(document.cookie);
function setCookie(name, value,daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive*24*60*60*1000);
    let expires = "expires="+ date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;   
}

function deleteCookie(name){
    setCookie(name,null,null);
}
// function to get the value of cookie by name
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    // console.log(cArray);
    let result = null;
    //for each element will check to see if there's a match between each of element's name and the name we're looking for i.e in function
    cArray.forEach(element =>{
        if(element.indexOf(name)==0){
            result = element.substring(name.length + 1);
        }
    })
    return result;
}

// get cookies using html
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () =>{
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

cookieBtn.addEventListener("click", () =>{
    firstText.value =  getCookie("firstName");
    lastText.value =  getCookie("lastName");
});
*/

