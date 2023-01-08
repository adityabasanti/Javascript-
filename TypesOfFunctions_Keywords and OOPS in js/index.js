
// Arrow Function = compact alternativeto a traditional function expression
//        =>

//ex-1

/* const greeting = function(userName){
    console.log(`hello ${userName}`);
}
we could convert this into an arrow function

*/

//NOTE: We do need curly braces {} if our function uses more then 1 statement and we can remove parenthesis if we are using only one argument

const greeting = userName => console.log(`hello ${userName}`);
greeting("Aditya");

//ex-2

// const percent = function(x,y){
//     return x/y*100;
// }
const percent = (x, y) => x / y * 100;

// console.log(`${percent(85,90)}%`)

//ex-3

let grades = [100, 50, 80, 40, 90];
grades.sort((x, y) => y - x);
// grades.forEach( (element)=> console.log(element));

// how we can shuffle the elements of an array

/* 
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);
// console.log(cards[1]);
// cards.forEach(card => console.log(card))
function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex!=0){
        let randomIndex = Math.floor(Math.random() * array.length)
        currentIndex-=1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temp;

    }
    return array;

}
*/

// NESTED FUNCTION = Functions inside other function. 
//                   Outer functions have access to inner function
//                   Inner functions are "hidden" from outiside the outer function
//                   It also adds data security
//                    used in closures(later topic)

let userName = "Aditya";
let userInbox = 0;

// login();

function login() {
    displayUserName();
    displayUserInbox();

    function displayUserName() {
        console.log(`Welcome ${userName}`);

    }

    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages`);

    }
}

//MAP = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

let shoppingCart = 0;
shoppingCart += store.get("t-shirt");
shoppingCart += store.get("socks");

// store.set("hat",40);
// store.delete("hat");
// console.log(store.has("hat")); //has returns a boolean value
console.log(store.has("t-shirt"));
console.log(store.size); // return the amount of pairs inside store
// console.log(shoppingCart)

// store.forEach((value,key)  => console.log(`${key} $${value}`));

//          ***************OOPS**************

/* OBJECT = A group of properties and methods
            properties = what an object has
            methods = what an object can do
            use . to access properties/methods
*/
/*

const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive: function(){
        console.log("You drive the red car");
    },

    brake: function(){
        console.log("You step on the brakes");
    }
}

const car2 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive: function(){
        console.log("You drive the blue car");
    },

    brake: function(){
        console.log("You step on the brakes");
    }
}
*/

// console.log(car.model);
// console.log(car.color);
/*
console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();
*/

// THIS =  reference to a particular object the object depends on the immediate context
const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function () {
        console.log(`You drive the ${this.model}`);
    }

}

const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive: function () {
        console.log(`You drive the ${this.model}`);
    }
}

car1.drive();
car2.drive();

this.name = "myCoolwindow"
console.log(this.name);

/*CLASS = a blueprint for craeting objects 
        define  what properties and methods they have use a constructor for unique   properties.
*/

class Player {
    score = 0;

    pause() {
        console.log("You paused the game");
    }
    exit() {
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;
console.log(player1.score);
console.log(player2.score);
player1.pause();
player2.exit();

// CONSTRUCTOR = a special method of class, accept arguments and assign properties

class Student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study() {
        console.log(`${this.name} is studying`);
    }

}
const student1 = new Student("spongebob", 30, 4.7);
const student2 = new Student("patric", 20, 9.6);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

/*STATIC = anything which is static belongs to the class , not the objects
           properties: useful for caches , fixed-configuration
           methods: useful for utility functions 
*/

/*
class Car{
     static NumberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.NumberOfCars +=1;
    }

    static startRace(){
        console.log("3..2..1.. GO!");
    }
}

*/

// const car3 = new Car("Mustang");
// const car4 = new Car("Mclaren");
// const car5= new Car("Porsche");
// const car6= new Car("Ferari");
// Car.startRace();

// console.log(Car.NumberOfCars);

/*
INHERITANCE = A child class can inherit all the
              methods and properties from another class
*/

/*
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }

}
class Rabbit extends Animal{
    name= "rabbit"
    run(){
        console.log(`This ${this.name} is Hopping`);
    }
}

class Fish extends Animal{   
    name= "fish"
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name= "hawk"   
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

*/
/*
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
*/

// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();

// SUPER = refers to the parent class. 
//         Commonly used to invoke the constructor of a parent class

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 70);
const hawk = new Hawk("hawk", 3, 80);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

/* get = binds an object property to a function
      when that property is accessed
      it adds data security
      this property is read only not write able
*/

/* set =  binds an object property to a function
        when that property is assigned a value
*/
class Car {
    constructor(power) {
        this._gas = 40;
        this._power = power;
    }

    get power() {
        return `${this._power}hp`
    }

    get gas() {
        return `${this._gas}L ${this._gas / 50 * 100}%`
    }
    //i would engage ppl to change gases so they would be able to change their gas levels

    set gas(value) {
        if (value > 50) {
            value = 50;
        }
        else if (value < 0) {
            value = 0;
        }
        this._gas = value;

    }
}

let car = new Car(400);
car.gas = 1000000000000000;

// car._power = 10000000;
console.log(car.power);
console.log(car.gas);

// *****how we can pass objects to a function as an argument*****

/*

class Bike{
    constructor(model, year, color){
        this.model = model;
        this.year= year;
        this.color = color;
    }
}

const bike1 = new Bike("Honda",2023,"red");
const bike2 = new Bike("Hero",2022,"blue");
const bike3 = new Bike("Pulsar",2020,"black");

displayInfo(bike1);
changeColor(bike3, "gold")
displayInfo(bike3);

function displayInfo(bike){
    console.log(bike.model);
    console.log(bike.color);
    console.log(bike.year);

}

function changeColor(bike, color){
    bike.color = color
}

*/

// how we can create an ARRAY of OBJECTS

class Bike {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        console.log(`You drive the ${this.model}`)
    }
}

const bik1 = new Bike("Honda", 2023, "red");
const bik2 = new Bike("discover", 2022, "blue");
const bik3 = new Bike("Pulsar", 2020, "black");
const bik4 = new Bike("suzuki", 2017, "yellow");

const bikes = [bik1, bik2, bik3, bik4];
// console.log(bikes[0]);
// console.log(bikes[0].model);
// console.log(bikes[1].model);
// console.log(bikes[2].model);

// bikes[0].drive();
// bikes[1].drive();
// bikes[2].drive();

// startRace(bikes);
function startRace(bikes) {
    for (const bike of bikes) {
        bike.drive()
    }

}

/* ANONYMOUS  objects = Objects without a name
                        Not directly referenced
                        Less syntax, No need of unique names 
*/

/*

class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
}


let cards = [ new Card("A", "Hearts") , 
              new Card("A", "Spades"), 
              new Card("A", "Diamonds"), 
              new Card("2", "Clubs"), 
              new Card("2", "Hearts"), 
              new Card("2", "Spades"), 
              new Card("2", "Diamonds"), 
              new Card("2", "Clubs")];
// console.log(card1.value + card1.suit); //we are accessing object directly by name
console.log(cards[7].value + cards[7].suit); // we are accessing object indirectly via array index

cards.forEach(card => console.log(`${card.value} ${card.suit}`));

*/

/* Error handling
error = objects with a description 
        of something went wrong 

throw = executes a user-defined error
                   ***** reasons for error****
                   can't opena a file
                   lose connection
                   User types incorrect input
                   TypeError                  
                   
*/

/*

try{
    let x = window.prompt("Enter a #");
    x = Number(x);
    if(isNaN(x)) throw "that wasn't a number";
    if(x =="") throw "That was empty!"


    console.log(`${x} is a number`);


}
catch(error){
    console.log(error);

}

finally{
    console.log("this always executes")
}

*/