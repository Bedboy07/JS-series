const user = {
    username : "jatin",
    price : 999,

    welcomeMessage: function () {
        console.log(`${this.username},Welcome to website` );
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "jatin"
//     console.log(this.username)
// }

// chai()

// 2nd way to declare functions

// const chai = function ( ){
//     let username = " jatin "
//     console.log(this.username);
// }
// chai()

// new way to declare functions by arrow functions 

const chai = () => {
    let username = "Jatin"
    console.log(this);
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// Implicit Return
// const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1,num2) =>(num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


