// Dates

let myDate = new Date ()
// console.log(myDate);
// console.log(myDate.toString ()); // more readable and better
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date (2023,0,23)
// let myCreatedDate = new Date (2023,0,23,5,3)
// let myCreatedDate = new Date ("2023-01-13")
let myCreatedDate = new Date ("01-13-2023") //  mostly used in india
// console.log(myCreatedDate.toLocaleString());

//  Time stamps

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is  `

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));



