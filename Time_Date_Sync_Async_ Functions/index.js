// setTimeout() = invokes a function after a number of milliseconds
//                 asynchronus function(doesn't pause execution)


/*
let item = "cryptocurrency";
let price = 570.8;
let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);
function firstMessage(item,price){
    alert(`Buy this ${item} for ${price}`);
}

function secondMessage(){
    alert(`This is not a SCAM!`);
}

function thirdMessage(){
    alert(`DO ITTT`);
}

document.getElementById("myButton").onclick = function(){
    clearTimeout( timer1 );
    clearTimeout( timer2 );
    clearTimeout( timer3 );
    alert("Thanks for buying <3")
}

*/

// setInterval() = invokes a function repeatedly after a number of milliseconds.....
//                 asynchronous function(doesn't pause execution)

/*
let count = 0;
let max = window.prompt("Count up to what #");
max  = Number(max);

const myTimer = setInterval(countUp , 1000);

function countUp(){
    count+=1;
    console.log(count);
    if(count>=max){
        clearInterval(myTimer);
}
}
*/

// The Date object are used to work with dates and times

let date = new Date();
// let date = new Date(0);
// let date = new Date(2024,0,1,2,3,4,5);
// (year,month,day,hour,minutes,seconds,milisec)
// let date = new Date("january 1, 2023 00:00:00");
/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let millisecond = date.getMilliseconds();
*/
/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(26);
date.setHours(23);
date.setSeconds(30);
date.setMilliseconds(0);
*/

// we will create our own custom function to format date and time
/*

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrpm = hours>=12 ? "pm" : "am"

    hours = (hours % 12) || 12; // this will convert your hrs from 24hr format to 12hr format.

    return `${hours}:${minutes}:${seconds} ${amOrpm}`;
}
*/


// date = date.toLocaleString();
// document.getElementById("myLabel").innerHTML = date;
// document.getElementById("myLabel").innerHTML = formatDate(date);
// document.getElementById("myLabel").innerHTML = formatTime(date);
// document.getElementById("myLabel").innerHTML = dayOfWeek;
// document.getElementById("myLabel").innerHTML = month;
// document.getElementById("myLabel").innerHTML = hour;
// document.getElementById("myLabel").innerHTML = minute;
// document.getElementById("myLabel").innerHTML = millisecond;

/*
Synchronus code = In an ordered sequence.
                   Step by step linear instructions
                 (start now, Finish now)
*/

/*
 Asynchronus code = Out of sequence.
                    Ex. Access a database
                        Fetch a file
                        Tasks that take time
                    (start now , finish sometime later);
 */

/*
console.log("START") ;
// console.log("This step is synchronus");
setTimeout(() => console.log("this is asynchronus"), 5000);
console.log("END");

*/

// console.time() = Starts a timer you can use to
//                  track how long an operation takes
//                   Give each timer a unique name.

/*
//start
console.time("Responds time");

// alert("CLICK THE OK BUTTON");
setTimeout(() => console.log("HELLO!"),3000);

//end
console.timeEnd("Responds time");
*/

/*PROMISE = object that encapsulates the result of an asynchronous operation
            let asynchronous methods return values like synchronous methods
            "I promise to return something in the future"

            the STATE is 'pending' then: 'fulfilled' or 'rejected'
            the RESULT is what can be returned
            2 parts producing & consuming
*/

//            *****EX-1*****

/*
// This one is the producing code
const promise = new Promise((resolve,reject)=> {
    // let fileLoaded = true;
    let fileLoaded = false;
    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});

// if the promise is resolved we will handle that using consuming code
// promise.then(value => console.log(value));
//if we couldn't locate a file it will be false we will have uncaught execption cuz we invoke reject callback , to catch exceptions will use' catch'.

promise.then(value => console.log(value))
       .catch(error => console.log(error));

*/


//                 *****Ex-2****
/*
const promise = new Promise(resolve =>{
    setTimeout(resolve , 5000);
});

promise.then(() => console.log("Thanks for waiting"))
*/

//To pass an argument to a promise
/*

const wait =  time => new Promise(resolve =>{
    setTimeout(resolve , time);
});

wait(3000).then(() => console.log("Thanks for waiting!!"));

*/

// async keyword = makes a function return a promise

/*
async function loadfile(){

    let fileLoaded = false;
    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded"; // if process not successfull , use throw keyword
    }
}


loadfile().then(value => console.log(value))
       .catch(error => console.log(error));
*/

// without async keyword but with more syntax

/*
function loadfile(){

    let fileLoaded = false;
    if(fileLoaded){
        return Promise.resolve("File loaded");
    }
    else{
        return Promise.reject("File NOT loaded"); // if process not successfull , use throw keyword
    }
}


loadfile().then(value => console.log(value))
// when we invoke this function loadfile() we are returning a promiseback to spot in which we invoke the function
       .catch(error => console.log(error));
*/

// await = makes an async function wait for Promise

/*
async function loadfile(){

    let fileLoaded = false;
    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded"; // if process not successfull , use throw keyword
    }
}

async function startProcess(){
    try{
        let message = await loadfile();
        console.log(message);

    }
    catch(error){
        console.log(error);
    }
}
startProcess();
*/


