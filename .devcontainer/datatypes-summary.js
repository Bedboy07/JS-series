//  Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 876563563653557n



// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["Superman","Batman","Ironman"];
let myObj = {
    name: "Jatin",
    age : 20,
    
}

const myfunction = function(){
    console.log("hello")
}

console.log(typeof bigNumber);


//++++++++++++++++++++++++++++++++++++++++++++++



// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "jatinkatejadotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "jkateja01@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
